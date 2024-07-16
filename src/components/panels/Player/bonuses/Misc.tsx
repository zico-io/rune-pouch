import strength from '/img/bonuses/strength.png'
import rangedStrength from '/img/bonuses/ranged_strength.png'
import magicStrength from '/img/bonuses/magic_strength.png'
import prayer from '/img/tabs/prayer.png'

import { Stack } from '@mui/system'
import Grid from '@mui/material/Unstable_Grid2'
import { EquipmentBonuses } from '@/lib/Equipment'
import { useStore } from '@/lib/state'
import { Typography } from '@mui/material'
import { observer } from 'mobx-react-lite'
import { AttributeInput } from '@components/ui/AttributeInput'

export const MiscBonuses: React.FC<{ computedStats?: EquipmentBonuses }> =
  observer(({ computedStats }) => {
    const store = useStore()
    const { prefs, player } = store

    return (
      <Stack spacing={1}>
        <Typography variant="h6">Other</Typography>
        <Grid container columns={2}>
          <Grid xs={1}>
            <Stack spacing={0.5}>
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
            </Stack>
          </Grid>
          <Grid xs={1}>
            <Stack spacing={0.5}>
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
          </Grid>
        </Grid>
      </Stack>
    )
  })
