import Grid from '@mui/material/Unstable_Grid2'
import { OffensiveBonuses, DefensiveBonuses, MiscBonuses } from './bonuses'
import { Typography } from '@mui/material'

export const BonusesCard = () => {
  return (
    <Grid container columns={2}>
      <Grid xs={1}>
        <Typography variant='subtitle1' gutterBottom>Offense</Typography>
        <OffensiveBonuses />
      </Grid>
      <Grid xs={1}>
        <Typography variant='subtitle1' gutterBottom>Defense</Typography>
        <DefensiveBonuses />
      </Grid>
      <Grid xs={2}>
        <Typography variant='subtitle1' gutterBottom>Other</Typography>
        <MiscBonuses />
      </Grid>
    </Grid>
  )
}
