import { createFileRoute } from '@tanstack/react-router'
import EquipmentSelect from '@components/panels/Player/equipment/Select'
import { EquipmentGrid } from '@components/panels/Player/equipment/Grid'
import Grid from '@mui/material/Unstable_Grid2'
import { DefensiveBonuses, MiscBonuses, OffensiveBonuses } from '@/components/panels/Player/bonuses'
import { Box, Card, CardContent, Stack, Typography } from '@mui/material'
import { LoadoutMenu } from '@/components/panels/Player/LoadoutMenu'

export const Route = createFileRoute('/dps/equipment')({
  component: () => {
    return (
      <Card>
        <CardContent>
          <Stack>
            <Typography variant="h5">Loadout Name</Typography>
            <Typography variant="subtitle1" color="GrayText">Level 126</Typography>
            <Stack direction="row">
              <Box component="section" sx={{ p: 2 }}>
                <EquipmentGrid />
              </Box>
              <Stack direction="row" textAlign="center">
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
            </Stack>
            <Grid container columns={12} spacing={1}>
              <Grid xs={7}>
                <EquipmentSelect />
              </Grid>
              <Grid xs={5} marginLeft='auto'>
                <LoadoutMenu />
              </Grid>
            </Grid>
          </Stack>
        </CardContent>
      </Card>
    )
  },
})
