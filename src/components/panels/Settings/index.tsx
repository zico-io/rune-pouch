import { observer } from 'mobx-react-lite'
import { useStore } from '@/lib/state'
import Grid from '@mui/material/Unstable_Grid2'
import { FormControlLabel, FormGroup, Switch, Typography } from '@mui/material'
import { NumberInput } from '@components/ui/NumberInput'

export const SettingsPanel = observer(() => {
  const store = useStore()
  const { player } = store

  return (
    <FormGroup>
      <FormControlLabel
        control={
          <Switch
            checked={player.buffs.onSlayerTask}
            onChange={(e) =>
              store.updatePlayer({ buffs: { onSlayerTask: e.target.checked } })
            }
          />
        }
        label={<Typography variant="h6">On Slayer task</Typography>}
      />
      <FormControlLabel
        control={
          <Switch
            checked={player.buffs.inWilderness}
            onChange={(e) =>
              store.updatePlayer({ buffs: { inWilderness: e.target.checked } })
            }
          />
        }
        label={<Typography variant="h6">In the Wilderness</Typography>}
      />
      <FormControlLabel
        control={
          <Switch
            checked={player.buffs.forinthrySurge}
            onChange={(e) =>
              store.updatePlayer({
                buffs: { forinthrySurge: e.target.checked },
              })
            }
          />
        }
        label={<Typography variant="h6">Forinthry Surge</Typography>}
      />
      <FormControlLabel
        control={
          <Switch
            checked={player.buffs.kandarinDiary}
            onChange={(e) =>
              store.updatePlayer({ buffs: { kandarinDiary: e.target.checked } })
            }
          />
        }
        label={<Typography variant="h6">Kandarin Hard Diary</Typography>}
      />
      <Grid container spacing={1}>
        <Grid xs="auto" marginY="auto">
          <Typography variant="h6">Soul stacks</Typography>
        </Grid>
        <Grid xs={2} margin="auto" marginRight={2}>
          <NumberInput
            className="form-control"
            required
            min={0}
            max={5}
            value={player.buffs.soulreaperStacks}
            onChange={(v) =>
              store.updatePlayer({
                buffs: { soulreaperStacks: v },
              })
            }
          />
        </Grid>
      </Grid>
    </FormGroup>
  )
})
