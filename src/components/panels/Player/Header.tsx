import { DeleteOutline } from '@mui/icons-material'
import { Typography, IconButton } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'

export const PlayerPanelHeader = () => {
  return (
    <Grid container>
      <Grid xs={11}>
        <Typography variant="h5">Loadout 1</Typography>
        <Typography variant="subtitle1" color="GrayText">
          Level 126
        </Typography>
      </Grid>
      <Grid>
        <IconButton>
          <DeleteOutline />
        </IconButton>
      </Grid>
    </Grid>
  )
}
