import Grid from '@mui/material/Unstable_Grid2'
import { createFileRoute, Outlet } from '@tanstack/react-router'
import { MonsterPanel } from '@components/panels/Monster'
import PlayerPanel from '@components/panels/Player'

export const Route = createFileRoute('/dps')({
  component: () => {
    return (
      <Grid container spacing={2}>
        <Grid xs={8}>
          <PlayerPanel>
            <Outlet />
          </PlayerPanel>
        </Grid>
        <Grid xs={4}>
          <MonsterPanel />
        </Grid>
      </Grid>
    )
  },
})
