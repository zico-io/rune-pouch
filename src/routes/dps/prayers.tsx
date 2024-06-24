import { Box, Card, CardContent, Divider, Typography } from '@mui/material'
import { createFileRoute } from '@tanstack/react-router'
import { PrayersPanel } from '../../components/panels/Prayer'

export const Route = createFileRoute('/dps/prayers')({
  component: () => {
    return (
      <Card elevation={0} sx={{ height: 360 }}>
        <CardContent>
          <Typography variant="h5">Prayers</Typography>
          <Divider />
          <Box padding={1}>
            <PrayersPanel />
          </Box>
        </CardContent>
      </Card>
    )
  },
})
