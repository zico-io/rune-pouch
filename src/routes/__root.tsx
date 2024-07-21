import { Container } from '@mui/material'
import { createRootRoute, Outlet } from '@tanstack/react-router'

export const Route = createRootRoute({
  component: () => (
    <Container fixed sx={{ height: '100vh', overflowY: 'scroll', overflowX: 'hidden', scrollbarWidth: 'none' }}>
      <Outlet />
    </Container>
  ),
})
