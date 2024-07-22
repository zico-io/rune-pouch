import { createFileRoute } from '@tanstack/react-router'
import { Container, Stack } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'
import { CalculationsPanel } from '@/components/panels/Calculations'
import PlayerPanel from '@/components/panels/Player'
import { MonsterPanel } from '@/components/panels/Monster'

export const Route = createFileRoute('/dps')({
  component: () => {
    return (
      <Container fixed sx={{ overflow: 'hidden' }}>
        <Grid container spacing={1}>
          <Grid xs={4} sx={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <PlayerPanel />
          </Grid>
          <Grid xs={8} sx={{ height: '100vh', overflowY: 'scroll', scrollbarWidth: 'none', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
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
