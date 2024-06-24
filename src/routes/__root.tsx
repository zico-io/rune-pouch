import { Container } from '@mui/material'
import { createRootRoute, Outlet } from '@tanstack/react-router'

export const Route = createRootRoute({
  component: () => (
    <Container>
      <h1>RUNE POUCH</h1>
      <Outlet />
    </Container>
  ),
})
