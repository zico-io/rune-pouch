import { createFileRoute } from '@tanstack/react-router'
import { Container, Stack } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'
import { CalculationsPanel } from '@/components/panels/Calculations'
import { PlayerPanel } from '@/components/panels/Player'
import { MonsterPanel } from '@/components/panels/Monster'

export const Route = createFileRoute('/dps')({
  component: () => {
    return (
      <Container fixed sx={{ overflow: 'hidden' }}>
        <Grid container spacing={1} sx={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Grid xs={4}>
            <PlayerPanel />
          </Grid>
          <Grid xs={8}>
            <Stack spacing={1}>
              <MonsterPanel />
              <CalculationsPanel />
            </Stack>
          </Grid>
        </Grid>
      </Container >
    )
  },
})
