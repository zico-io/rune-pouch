import { observer } from 'mobx-react-lite'
import { PlayerSkills } from '@/types/Player'
import { useStore } from '@/lib/State'
import { useId } from 'react'
import { Image } from 'mui-image'
import { Box, Paper, Stack, TextField, Typography } from '@mui/material'
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
        <Paper variant="outlined" sx={{ margin: 0.5 }}>
          <Grid container columns={2} padding={1}>
            <Grid xs={1} marginY="auto">
              <Box sx={{ width: 24, height: 24 }}>
                <Image src={image} alt={name} duration={600} fit="scale-down" />
              </Box>
            </Grid>
            <Grid xs={1} marginY="auto" paddingRight={1}>
              <Stack direction="row">
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
              </Stack>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    )
  },
)
