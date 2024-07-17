import { Card, CardContent, Stack } from '@mui/material'
import { PlayerPanelNavigation } from './Navigation'

export const PlayerPanel = ({ children }: { children: React.ReactNode }) => {
  return (
    <Stack direction="row" spacing={1}>
      <PlayerPanelNavigation />
      <Card>
        <CardContent>
          {children}
        </CardContent>
      </Card>
    </Stack>
  )
}
