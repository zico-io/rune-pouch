import { Card, CardContent, Stack } from '@mui/material'
import { PlayerPanelNavigation } from './Navigation'

export const PlayerPanel = ({ children }: { children: React.ReactNode }) => {
  return (
    <Stack spacing={1}>
      <Card>
        <CardContent>
          {children}
        </CardContent>
      </Card>
      <PlayerPanelNavigation />
    </Stack>
  )
}
