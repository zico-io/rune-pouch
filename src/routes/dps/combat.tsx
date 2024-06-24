import { Card, CardContent, Divider, Typography } from '@mui/material'
import { createFileRoute } from '@tanstack/react-router'
import { CombatPanel } from '../../components/panels/Player/combat'

export const Route = createFileRoute('/dps/combat')({
  component: () => {
    return (
      <Card elevation={0} sx={{ height: 360 }}>
        <CardContent>
          <Typography variant="h5">Combat Styles</Typography>
          <Divider />
          <CombatPanel />
        </CardContent>
      </Card>
    )
  },
})
