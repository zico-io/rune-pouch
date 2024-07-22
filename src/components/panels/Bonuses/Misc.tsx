import strength from '/img/bonuses/strength.png'
import rangedStrength from '/img/bonuses/ranged_strength.png'
import magicStrength from '/img/bonuses/magic_strength.png'
import prayer from '/img/tabs/prayer.png'

import { EquipmentBonuses } from '@/lib/Equipment'
import { useStore } from '@/lib/state'
import { observer } from 'mobx-react-lite'
import { AttributeInput } from '@components/ui/AttributeInput'
import { Stack } from '@mui/material'

export const MiscBonuses: React.FC<{ computedStats?: EquipmentBonuses }> =
  observer(({ computedStats }) => {
    const store = useStore()
    const { prefs, player } = store

    return (
      <Stack>
        <AttributeInput
          disabled={!prefs.manualMode}
          name="Strength"
          image={strength}
          value={player.bonuses.str}
          onChange={(v) => store.updatePlayer({ bonuses: { str: v } })}
          sx={{
            backgroundColor:
              player.bonuses.str !== computedStats?.bonuses.str
                ? 'warn'
                : 'Background',
          }}
        />
        <AttributeInput
          disabled={!prefs.manualMode}
          name="Ranged Strength"
          image={rangedStrength}
          value={player.bonuses.ranged_str}
          onChange={(v) =>
            store.updatePlayer({ bonuses: { ranged_str: v } })
          }
          sx={{
            backgroundColor:
              player.bonuses.ranged_str !==
                computedStats?.bonuses.ranged_str
                ? 'warn'
                : 'Background',
          }}
        />
        <AttributeInput
          disabled={!prefs.manualMode}
          name="Magic Strength"
          image={magicStrength}
          value={player.bonuses.magic_str}
          onChange={(v) =>
            store.updatePlayer({ bonuses: { magic_str: v } })
          }
          sx={{
            backgroundColor:
              player.bonuses.magic_str !==
                computedStats?.bonuses.magic_str
                ? 'warn'
                : 'Background',
          }}
        />
        <AttributeInput
          disabled={!prefs.manualMode}
          name="Prayer"
          image={prayer}
          value={player.bonuses.prayer}
          onChange={(v) => store.updatePlayer({ bonuses: { prayer: v } })}
          sx={{
            backgroundColor:
              player.bonuses.prayer !== computedStats?.bonuses.prayer
                ? 'warn'
                : 'Background',
          }}
        />
      </Stack>
    )
  })
