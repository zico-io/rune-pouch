import { Box, Card, CardContent, Divider, Typography } from '@mui/material'
import { createFileRoute } from '@tanstack/react-router'
import { SettingsPanel } from '../../components/panels/Settings'

export const Route = createFileRoute('/dps/settings')({
  component: () => {
    return (
      <Card elevation={0} sx={{ height: 360 }}>
        <CardContent>
          <Typography variant="h5">Settings</Typography>
          <Divider />
          <Box padding={1}>
            <SettingsPanel />
          </Box>
        </CardContent>
      </Card>
    )
  },
})
