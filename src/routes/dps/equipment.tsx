import { createFileRoute } from '@tanstack/react-router'
import EquipmentSelect from '@components/panels/Player/equipment/Select'
import { EquipmentGrid } from '@components/panels/Player/equipment/Grid'
import Grid from '@mui/material/Unstable_Grid2'
import { DefensiveBonuses, MiscBonuses, OffensiveBonuses } from '@/components/panels/Player/bonuses'
import { Box, Stack, Typography } from '@mui/material'
import { LoadoutMenu } from '@/components/panels/Player/LoadoutMenu'

export const Route = createFileRoute('/dps/equipment')({
  component: () => {
    return (
      <Stack>
        <Typography variant="h5">Loadout Name</Typography>
        <Typography variant="subtitle1" color="GrayText">Level 126</Typography>
        <Grid container>
          <Grid xs={6}>
            <Box component="section" sx={{ p: 2 }}>
              <EquipmentGrid />
            </Box>
          </Grid>
          <Grid xs={6}>
            <Grid container columns={3} textAlign='center'>
              <Grid xs={1}>
                <Typography variant='subtitle1'>Offense</Typography>
                <OffensiveBonuses />
              </Grid>
              <Grid xs={1}>
                <Typography variant='subtitle1'>Defense</Typography>
                <DefensiveBonuses />
              </Grid>
              <Grid xs={1}>
                <Typography variant='subtitle1'>Other</Typography>
                <MiscBonuses />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid container columns={12} spacing={1}>
          <Grid xs={7}>
            <EquipmentSelect />
          </Grid>
          <Grid xs={5} marginLeft='auto'>
            <LoadoutMenu />
          </Grid>
        </Grid>
      </Stack>
    )
  },
})
