import dagger from '/img/bonuses/dagger.png'
import scimitar from '/img/bonuses/scimitar.png'
import warhammer from '/img/bonuses/warhammer.png'
import magic from '/img/bonuses/magic.png'
import ranged from '/img/bonuses/ranged.png'

import { EquipmentBonuses } from '@/lib/Equipment'
import { useStore } from '@/lib/State'
import { observer } from 'mobx-react-lite'
import { AttributeInput } from '@components/ui/AttributeInput'
import { Stack } from '@mui/material'

export const OffensiveBonuses: React.FC<{ computedStats?: EquipmentBonuses }> =
  observer(({ computedStats }) => {
    const store = useStore()
    const { prefs, player } = store

    return (
      <Stack>
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
    )
  })
