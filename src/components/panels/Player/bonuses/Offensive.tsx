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

export const OffensiveBonuses: React.FC<{ computedStats?: EquipmentBonuses }> =
  observer(({ computedStats }) => {
    const store = useStore()
    const { prefs, player } = store

    return (
      <Stack spacing={1}>
        <Typography variant="h6">Offensive</Typography>
        <Stack spacing={1}>
          <AttributeInput
            disabled={!prefs.manualMode}
            name="Stab"
            image={dagger}
            value={player.offensive.stab}
            onChange={(v) => store.updatePlayer({ offensive: { stab: v } })}
            sx={{
              backgroundColor:
                player.offensive.stab !== computedStats?.offensive.stab
                  ? 'warn'
                  : 'Background',
            }}
          />
          <AttributeInput
            disabled={!prefs.manualMode}
            name="Slash"
            image={scimitar}
            value={player.offensive.slash}
            onChange={(v) => store.updatePlayer({ offensive: { slash: v } })}
            sx={{
              backgroundColor:
                player.offensive.slash !== computedStats?.offensive.slash
                  ? 'warn'
                  : 'Background',
            }}
          />
          <AttributeInput
            disabled={!prefs.manualMode}
            name="Crush"
            image={warhammer}
            value={player.offensive.crush}
            onChange={(v) => store.updatePlayer({ offensive: { crush: v } })}
            sx={{
              backgroundColor:
                player.offensive.crush !== computedStats?.offensive.crush
                  ? 'warn'
                  : 'Background',
            }}
          />
          <AttributeInput
            disabled={!prefs.manualMode}
            name="Magic"
            image={magic}
            value={player.offensive.magic}
            onChange={(v) => store.updatePlayer({ offensive: { magic: v } })}
            sx={{
              backgroundColor:
                player.offensive.magic !== computedStats?.offensive.magic
                  ? 'warn'
                  : 'Background',
            }}
          />
          <AttributeInput
            disabled={!prefs.manualMode}
            name="Ranged"
            image={ranged}
            value={player.offensive.ranged}
            onChange={(v) => store.updatePlayer({ offensive: { ranged: v } })}
            sx={{
              backgroundColor:
                player.offensive.ranged !== computedStats?.offensive.ranged
                  ? 'warn'
                  : 'Background',
            }}
          />
        </Stack>
      </Stack>
    )
  })
