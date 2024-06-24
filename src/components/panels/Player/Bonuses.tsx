import { Card, CardContent, Divider, Typography } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'
import { Stack } from '@mui/system'
import { OffensiveBonuses } from './bonuses/Offensive'
import { DefensiveBonuses } from './bonuses/Defensive'
import { MiscBonuses } from './bonuses/Misc'

export const BonusesCard = () => {
  return (
    <Card elevation={0}>
      <CardContent>
        <Typography variant="h5">Bonuses</Typography>
        <Divider />
        <Stack spacing={1} marginTop={1}>
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
      </CardContent>
    </Card>
  )
}
