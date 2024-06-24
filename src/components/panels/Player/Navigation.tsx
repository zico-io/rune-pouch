import { IconButton } from '@mui/material'
import { Stack } from '@mui/system'
import { Link } from '@tanstack/react-router'

export const PlayerPanelNavigation = () => {
  return (
    <Stack direction="row" spacing={1} justifyContent="center">
      <NavButton href="/dps/combat" icon="Combat_icon" />
      <NavButton href="/dps/skills" icon="Skills_icon" />
      <NavButton href="/dps/equipment" icon="Worn_equipment" />
      <NavButton href="/dps/prayers" icon="Prayer_icon" />
      <NavButton href="/dps/settings" icon="Settings" />
    </Stack>
  )
}

const NavButton = ({ href, icon }: { href: string; icon: string }) => {
  const link = `https://oldschool.runescape.wiki/images/${icon}.png`
  return (
    <Link to={href}>
      <IconButton
        sx={{
          width: 40,
          height: 40,
          borderRadius: 1,
          backgroundColor: '#393939',
        }}
      >
        <img src={link} />
      </IconButton>
    </Link>
  )
}
