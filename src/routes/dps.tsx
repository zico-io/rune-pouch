import { createFileRoute, Outlet, useLocation, useNavigate } from '@tanstack/react-router'
import { Box, Card, CardContent, Stack, Typography } from '@mui/material'
import { MonsterPanel } from '@/components/panels/Monster'
import { NavButton } from '@/components/ui/NavButton'
import { CalculationsPanel } from '@/components/panels/Calculations'

export const Route = createFileRoute('/dps')({
  component: () => {
    const navigate = useNavigate({ from: "/dps" })
    const location = useLocation()
    if (location.pathname === "/dps") navigate({ to: "/dps/equipment" })

    return (
      <Stack display="flex" justifyContent="center" alignItems="center">
        <Stack direction="row" spacing={1} marginX="auto" marginY={2}>
          <NavButton href="/dps/combat" icon="Combat_icon" />
          <NavButton href="/dps/skills" icon="Skills_icon" />
          <NavButton href="/dps/equipment" icon="Worn_equipment" />
          <NavButton href="/dps/prayers" icon="Prayer_icon" />
          <NavButton href="/dps/settings" icon="Settings" />
        </Stack >
        <Stack direction="row" spacing={1}>
          <Stack spacing={1}>
            <Card>
              <Outlet />
            </Card>
            <CalculationsPanel />
          </Stack>
          <Box sx={{ display: { xs: 'none', lg: 'block' }, width: 360 }}>
            <Stack>
              <Card>
                <CardContent>
                  <MonsterPanel />
                </CardContent>
              </Card>
              <Typography variant="body2" sx={{ opacity: 0.2 }} marginLeft="auto" p={1}>zico-io</Typography>
            </Stack>
          </Box>
        </Stack>
      </Stack>
    )
  },
})
