import { createFileRoute } from '@tanstack/react-router'
import { Card, CardContent, Divider, Typography } from '@mui/material'
import EquipmentSelect from '@components/panels/Player/equipment/Select'
import { EquipmentGrid } from '@components/panels/Player/equipment/Grid'
import { BonusesCard } from '@components/panels/Player/Bonuses'
import Grid from '@mui/material/Unstable_Grid2'

export const Route = createFileRoute('/dps/equipment')({
  component: () => {
    return (
      <Card elevation={0} sx={{ overflow: 'visible' }}>
        <CardContent>
          <Typography variant="h5">Equipment</Typography>
          <Divider />
          <Grid container spacing={2}>
            <Grid xs={4}>
              <EquipmentSelect />
            </Grid>
            <Grid xs={4}>
              <EquipmentGrid />
            </Grid>
            <Grid xs={4}>
              <BonusesCard />
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    )
  },
})
