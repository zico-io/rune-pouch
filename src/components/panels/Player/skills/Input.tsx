import { observer } from 'mobx-react-lite'
import { PlayerSkills } from '@/types/Player'
import { useStore } from '@/lib/state'
import { useId } from 'react'
import LazyImage from '@components/ui/LazyImage'
import { Box, Paper, TextField, Typography } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'

interface SkillInputProps {
  name: string
  field: keyof PlayerSkills
  image: string
}

export const PlayerSkillsInput: React.FC<SkillInputProps> = observer(
  (props) => {
    const store = useStore()
    const { player } = store
    const { name, field, image } = props
    const id = useId()

    return (
      <Grid xs={1}>
        <Paper sx={{ padding: 1 }}>
          <Grid container columns={3}>
            <Grid xs={1}>
              <Box width={24} height={24}>
                <LazyImage src={image} alt={name} />
              </Box>
            </Grid>
            <Grid xs={1} marginY="auto">
              {field === 'hp' ? (
                <div style={{ display: 'flex' }}>
                  <TextField
                    className="form-control"
                    id={id}
                    required
                    size="small"
                    variant="standard"
                    title={`Your current ${name} level`}
                    value={player.skills[field] + player.boosts[field]}
                    onChange={(v) => {
                      store.updatePlayer({
                        boosts: { [field]: v - player.skills[field] },
                      })
                    }}
                  />
                  /
                </div>
              ) : (
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                  <Typography
                    variant="body1"
                    title={`Your current${name} level`}
                  >
                    {player.skills[field] + player.boosts[field]}
                  </Typography>
                  /
                </div>
              )}
            </Grid>
            <Grid xs={1} marginY="auto">
              <TextField
                className="form-control"
                id={id}
                required
                size="small"
                variant="standard"
                title={`Your current ${name} level`}
                value={player.skills[field] + player.boosts[field]}
                onChange={(v) => {
                  store.updatePlayer({
                    skills: { [field]: v },
                  })
                }}
              />
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    )
  },
)
