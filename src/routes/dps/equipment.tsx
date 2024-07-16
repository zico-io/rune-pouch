import { createFileRoute } from '@tanstack/react-router'
import { Card, CardContent, Divider, Stack, Typography } from '@mui/material'
import EquipmentSelect from '@components/panels/Player/equipment/Select'
import { EquipmentGrid } from '@components/panels/Player/equipment/Grid'
import { BonusesCard } from '@components/panels/Player/Bonuses'

export const Route = createFileRoute('/dps/equipment')({
  component: () => {
    return (
      <Card elevation={0} sx={{ overflow: 'visible' }}>
        <CardContent>
          <Typography variant="h5">Equipment</Typography>
          <Divider />
          <Stack direction="row" spacing={2}>
            <Stack spacing={2} marginTop={1}>
              <EquipmentGrid />
              <EquipmentSelect />
            </Stack>
            <BonusesCard />
          </Stack>
        </CardContent>
      </Card>
    )
  },
})
