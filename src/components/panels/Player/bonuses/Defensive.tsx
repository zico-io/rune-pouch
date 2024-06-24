import dagger from '@public/img/bonuses/dagger.png'
import scimitar from '@public/img/bonuses/scimitar.png'
import warhammer from '@public/img/bonuses/warhammer.png'
import magic from '@public/img/bonuses/magic.png'
import ranged from '@public/img/bonuses/ranged.png'

import { Stack } from '@mui/system'
import { EquipmentBonuses } from '../../../../lib/Equipment'
import { useStore } from '../../../../lib/state'
import { Typography } from '@mui/material'
import { observer } from 'mobx-react-lite'
import { AttributeInput } from '../../../ui/AttributeInput'

export const DefensiveBonuses: React.FC<{ computedStats?: EquipmentBonuses }> =
  observer(({ computedStats }) => {
    const store = useStore()
    const { prefs, player } = store

    return (
      <Stack spacing={1}>
        <Typography variant="h6">Defensive</Typography>
        <Stack spacing={1}>
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
      </Stack>
    )
  })
