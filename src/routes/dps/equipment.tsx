import { createFileRoute } from '@tanstack/react-router'
import EquipmentSelect from '@components/panels/Player/equipment/Select'
import Grid from '@mui/material/Unstable_Grid2'
import { EquipmentGrid } from '@components/panels/Player/equipment/Grid'
import { DefensiveBonuses, MiscBonuses, OffensiveBonuses } from '@/components/panels/Player/bonuses'
import { CardContent, Divider, IconButton, Stack, Typography } from '@mui/material'
import { DeleteOutline } from '@mui/icons-material'

export const Route = createFileRoute('/dps/equipment')({
  component: () => {
    return (
      <CardContent>
        <Stack spacing={1}>
          <Grid container>
            <Grid xs="auto">
              <Typography variant="subtitle1" color="GrayText">Level 126</Typography>
              <Typography variant="h5">Loadout Name</Typography>
            </Grid>
            <Grid xs={1} margin="auto" marginRight={0}>
              <IconButton>
                <DeleteOutline sx={{ opacity: 0.2 }} />
              </IconButton>
            </Grid>
          </Grid>
          <Divider variant="middle" sx={{ marginBottom: 2 }} />
          <Stack direction="row" marginY="auto" spacing={2} >
            <Stack spacing={1}>
              <Stack direction="row" textAlign="center" justifyContent="center">
                <Stack>
                  <Typography variant='subtitle1'>Offense</Typography>
                  <OffensiveBonuses />
                </Stack>
                <Stack>
                  <Typography variant='subtitle1'>Defense</Typography>
                  <DefensiveBonuses />
                </Stack>
                <Stack>
                  <Typography variant='subtitle1'>Other</Typography>
                  <MiscBonuses />
                </Stack>
              </Stack>
            </Stack >
            <Stack spacing={1}>
              <EquipmentGrid />
            </Stack>
          </Stack>
          <EquipmentSelect />
        </Stack >
      </CardContent >
    )
  },
})
