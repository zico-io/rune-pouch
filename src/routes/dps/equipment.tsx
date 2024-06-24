import { createFileRoute } from '@tanstack/react-router'
import { Card, CardContent, Divider, Stack, Typography } from '@mui/material'
import EquipmentSelect from '../../components/panels/Player/equipment/Select'
import { EquipmentGrid } from '../../components/panels/Player/equipment/Grid'

export const Route = createFileRoute('/dps/equipment')({
  component: () => {
    return (
      <Card elevation={0} sx={{ height: 360, overflow: 'visible' }}>
        <CardContent>
          <Typography variant="h5">Worn Equipment</Typography>
          <Divider />
          <Stack spacing={2} marginTop={1}>
            <EquipmentGrid />
            <EquipmentSelect />
          </Stack>
        </CardContent>
      </Card>
    )
  },
})
