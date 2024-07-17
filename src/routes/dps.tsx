import { createFileRoute, Outlet } from '@tanstack/react-router'
import { Stack } from '@mui/material'

export const Route = createFileRoute('/dps')({
  component: () => {
    return (
      <Stack direction="row">
        <Outlet />
      </Stack>
    )
  },
})
