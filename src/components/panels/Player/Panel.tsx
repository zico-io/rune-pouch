import { Card, CardContent, Stack } from '@mui/material'
import { LoadoutMenu } from './LoadoutMenu'
import { PlayerPanelNavigation } from './Navigation'

export const PlayerPanel = ({ children }: { children: React.ReactNode }) => {
  return (
    <Card>
      <CardContent>
        <Stack spacing={1}>
          <LoadoutMenu />
          {children}
          <PlayerPanelNavigation />
        </Stack>
      </CardContent>
    </Card>
  )
}
