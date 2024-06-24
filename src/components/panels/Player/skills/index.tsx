import attack from '@public/img/bonuses/attack.png'
import strength from '@public/img/bonuses/strength.png'
import defence from '@public/img/bonuses/defence.png'
import ranged from '@public/img/bonuses/ranged.png'
import magic from '@public/img/bonuses/magic.png'
import hitpoints from '@public/img/bonuses/hitpoints.png'
import prayer from '@public/img/tabs/prayer.png'
import mining from '@public/img/bonuses/mining.png'

import { observer } from 'mobx-react-lite'
import { useStore } from '../../../../lib/state'
import {
  Box,
  FormControl,
  InputLabel,
  OutlinedInput,
  Select,
} from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'
import { Stack } from '@mui/material'
import { PlayerSkillsInput } from './Input'
import { PotionMap } from '../../../../lib/utils'
import { BuffItem } from '../buffs/Item'
import Potion from '../../../../enums/Potion'
import { UsernameLookup } from './Lookup'

const ITEM_HEIGHT = 48
const ITEM_PADDING_TOP = 8
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
    },
  },
}

export const PlayerSkillsPanel: React.FC = observer(() => {
  const store = useStore()
  const { player } = store

  return (
    <Stack spacing={2} marginTop={1}>
      <Box alignItems="center">
        <UsernameLookup />
      </Box>
      <Box>
        <Grid container spacing={1} columns={2}>
          <PlayerSkillsInput name="Attack" field="atk" image={attack} />
          <PlayerSkillsInput name="Strength" field="str" image={strength} />
          <PlayerSkillsInput name="Defence" field="def" image={defence} />
          <PlayerSkillsInput name="Hitpoints" field="hp" image={hitpoints} />
          <PlayerSkillsInput name="Ranged" field="ranged" image={ranged} />
          <PlayerSkillsInput name="Magic" field="magic" image={magic} />
          <PlayerSkillsInput name="Prayer" field="prayer" image={prayer} />
          <PlayerSkillsInput name="Mining" field="mining" image={mining} />
        </Grid>
      </Box>
      <FormControl size="small">
        <InputLabel>Boosts</InputLabel>
        <Select
          multiple
          value={player.buffs.potions}
          input={<OutlinedInput label="Boosts" />}
          renderValue={(value) => {
            const count = Object.keys(value).length

            if (count > 1) return `${count} active boosts`
            else if (count === 1)
              return PotionMap[value as keyof typeof PotionMap].name
          }}
          MenuProps={MenuProps}
        >
          {Object.entries(PotionMap)
            .sort((a, b) => a[1].order - b[1].order)
            .map(([k, v]) => {
              const potion: Potion = parseInt(k)
              const isActive = player.buffs.potions.includes(potion)

              return (
                <BuffItem
                  key={k}
                  potion={potion}
                  name={v.name}
                  image={v.image}
                  active={isActive}
                  setActive={store.togglePlayerPotion}
                />
              )
            })}
        </Select>
      </FormControl>
    </Stack>
  )
})
