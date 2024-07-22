import dagger from '/img/bonuses/dagger.png'
import scimitar from '/img/bonuses/scimitar.png'
import warhammer from '/img/bonuses/warhammer.png'
import magic from '/img/bonuses/magic.png'
import ranged from '/img/bonuses/ranged.png'

import { EquipmentBonuses } from '@/lib/Equipment'
import { useStore } from '@/lib/state'
import { observer } from 'mobx-react-lite'
import { AttributeInput } from '@components/ui/AttributeInput'
import { Stack } from '@mui/material'

export const DefensiveBonuses: React.FC<{ computedStats?: EquipmentBonuses }> =
  observer(({ computedStats }) => {
    const store = useStore()
    const { prefs, player } = store

    return (
      <Stack>
        <AttributeInput
          disabled={!prefs.manualMode}
          name="Stab"
          image={dagger}
          value={player.defensive.stab}
          onChange={(v) => store.updatePlayer({ defensive: { stab: v } })}
          sx={{
            backgroundColor:
              player.defensive.stab !== computedStats?.defensive.stab
                ? 'warn'
                : 'Background',
          }}
        />
        <AttributeInput
          disabled={!prefs.manualMode}
          name="Slash"
          image={scimitar}
          value={player.defensive.slash}
          onChange={(v) => store.updatePlayer({ defensive: { slash: v } })}
          sx={{
            backgroundColor:
              player.defensive.slash !== computedStats?.defensive.slash
                ? 'warn'
                : 'Background',
          }}
        />
        <AttributeInput
          disabled={!prefs.manualMode}
          name="Crush"
          image={warhammer}
          value={player.defensive.crush}
          onChange={(v) => store.updatePlayer({ defensive: { crush: v } })}
          sx={{
            backgroundColor:
              player.defensive.crush !== computedStats?.defensive.crush
                ? 'warn'
                : 'Background',
          }}
        />
        <AttributeInput
          disabled={!prefs.manualMode}
          name="Magic"
          image={magic}
          value={player.defensive.magic}
          onChange={(v) => store.updatePlayer({ defensive: { magic: v } })}
          sx={{
            backgroundColor:
              player.defensive.magic !== computedStats?.defensive.magic
                ? 'warn'
                : 'Background',
          }}
        />
        <AttributeInput
          disabled={!prefs.manualMode}
          name="Ranged"
          image={ranged}
          value={player.defensive.ranged}
          onChange={(v) => store.updatePlayer({ defensive: { ranged: v } })}
          sx={{
            backgroundColor:
              player.defensive.ranged !== computedStats?.defensive.ranged
                ? 'warn'
                : 'Background',
          }}
        />
      </Stack>
    )
  })
