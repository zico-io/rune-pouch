import { Box, Card, CardContent, Divider, Typography } from '@mui/material'
import { createFileRoute } from '@tanstack/react-router'
import { PlayerSkillsPanel } from '../../components/panels/Player/skills'

export const Route = createFileRoute('/dps/skills')({
  component: () => {
    return (
      <Card elevation={0} sx={{ height: 360 }}>
        <CardContent>
          <Typography variant="h5">Skills</Typography>
          <Divider />
          <Box sx={{ flexGrow: 1, display: 'flex', overflow: 'hidden' }}>
            <PlayerSkillsPanel />
          </Box>
        </CardContent>
      </Card>
    )
  },
})
