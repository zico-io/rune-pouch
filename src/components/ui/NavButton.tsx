import { IconButton, Paper } from "@mui/material";
import { Link } from "@tanstack/react-router";

export const NavButton = ({ href, icon }: { href: string; icon: string }) => {
  const link = `https://oldschool.runescape.wiki/images/${icon}.png`
  return (
    <Link to={href}>
      <Paper elevation={2}>
        <IconButton
          sx={{
            width: 48,
            height: 48,
            borderRadius: 1,
          }}
        >
          <img src={link} />
        </IconButton>
      </Paper>
    </Link>
  )
}
