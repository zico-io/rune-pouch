import { Button } from '@mui/material'
import { MonsterAttribute } from '@/enums/MonsterAttribute'
import { useStore } from '@/lib/state'
import { observer } from 'mobx-react-lite'

interface PresetAttributeButtonProps {
  attr: MonsterAttribute
}

export const PresetAttributeButton: React.FC<PresetAttributeButtonProps> =
  observer((props) => {
    const store = useStore()
    const { monster } = store
    const { attr } = props

    const isSelected = monster.attributes.includes(attr)

    return (
      <Button
        type="button"
        onClick={() => store.toggleMonsterAttribute(attr)}
        variant={isSelected ? 'contained' : 'outlined'}
        color="secondary"
        fullWidth
      >
        {attr}
      </Button>
    )
  })
