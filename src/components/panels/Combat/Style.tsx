import { toJS } from 'mobx'
import isEqual from 'lodash.isequal'
import { PlayerCombatStyle } from '@/types/PlayerCombatStyle'
import { observer } from 'mobx-react-lite'
import { useEffect, useState } from 'react'
import { useStore } from '@/lib/State'
import { EquipmentCategory } from '@/enums/EquipmentCategory'
import { CombatStyleMap } from '@/lib/utils'
import { Box, Button, Stack, Typography } from '@mui/material'
import Image from 'mui-image'
import { CheckCircle, CheckCircleOutline } from '@mui/icons-material'

interface CombatStyleProps {
  style: PlayerCombatStyle
}

export const CombatStyle: React.FC<CombatStyleProps> = observer((props) => {
  const store = useStore()
  const { player } = store
  const { style } = props

  const [hover, setHover] = useState(false)
  const [styleImage, setStyleImage] = useState<string | null>(null)
  const active = isEqual(toJS(player.style), style)

  useEffect(() => {
    const getStyleImage = async () => {
      let path =
        CombatStyleMap[
        store.equipmentData.weapon?.category || EquipmentCategory.NONE
        ][style.name]

      if (style.type === 'magic' && style.stance === 'Defensive Autocast')
        path = { image: 'styles/760' }
      else if (
        style.type === 'magic' &&
        ['Autocast', 'Manual Cast'].includes(style.stance || '')
      )
        path = { image: 'tabs/spells' }
      else if (path !== undefined) path = { image: `styles/${path.image}` }

      if (path === undefined) {
        setStyleImage('')
        return
      }

      setStyleImage(path.image)
    }
    getStyleImage()
  }, [style, store.equipmentData.weapon?.category])

  return (
    <Button
      variant="text"
      type="button"
      sx={{ justifyContent: 'space-between' }}
      onClick={() => store.updatePlayer({ style })}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      fullWidth
    >
      <Stack direction="row" alignItems="center" spacing={1.5}>
        <Box height={15} width={15}>
          {styleImage && (
            <Image src={`../../../../../public/img/${styleImage}.png`} />
          )}
        </Box>
        <Stack>
          <Typography variant="h6" align="left">
            {style.name}
          </Typography>
          <Typography
            variant="subtitle1"
            color="GrayText"
            align="left"
            sx={{ textTransform: 'capitalize' }}
          >
            {style.type || 'None'}, {style.stance || 'None'}
          </Typography>
        </Stack>
      </Stack>
      {(hover || active) && (
        <Box height={18}>
          {active ? <CheckCircle /> : <CheckCircleOutline />}
        </Box>
      )}
    </Button>
  )
})
