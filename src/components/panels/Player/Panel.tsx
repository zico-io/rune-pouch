import { Card, CardContent, Divider, Paper, Stack } from '@mui/material'
import { PlayerPanelHeader } from './Header'
import Grid from '@mui/material/Unstable_Grid2'
import { LoadoutMenu } from './LoadoutMenu'
import { PlayerPanelNavigation } from './Navigation'
import { BonusesCard } from './Bonuses'

export const PlayerPanel = ({ children }: { children: React.ReactNode }) => {
  return (
    <Card>
      <CardContent>
        <Stack spacing={1}>
          <PlayerPanelHeader />
          <Divider />
          <Stack>
            <Grid container columns={2} spacing={1} marginTop={1}>
              <Grid xs={1}>
                <Stack spacing={1}>
                  <BonusesCard />
                </Stack>
              </Grid>
              <Grid xs={1}>
                <Stack spacing={1}>
                  {children}
                  <PlayerPanelNavigation />
                </Stack>
              </Grid>
            </Grid>
          </Stack>
          <LoadoutMenu />
        </Stack>
      </CardContent>
    </Card>
  )
}
