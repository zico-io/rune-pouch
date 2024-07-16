import Grid from '@mui/material/Unstable_Grid2'
import { Stack } from '@mui/system'
import { OffensiveBonuses } from './bonuses/Offensive'
import { DefensiveBonuses } from './bonuses/Defensive'
import { MiscBonuses } from './bonuses/Misc'

export const BonusesCard = () => {
  return (
    <Stack>
      <Grid container spacing={1} columns={2}>
        <Grid xs={1}>
          <OffensiveBonuses />
        </Grid>
        <Grid xs={1}>
          <DefensiveBonuses />
        </Grid>
      </Grid>
      <MiscBonuses />
    </Stack>
  )
}
