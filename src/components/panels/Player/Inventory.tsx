import {
  Card,
  CardContent,
  Divider,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import { SearchBar } from "@components/ui/SearchBar";

export const PlayerInventory = () => {
  return (
    <Card elevation={0}>
      <CardContent>
        <Typography variant="h5">Worn Equipment</Typography>
        <Divider />
        <Stack spacing={2} marginTop={1}>
          <Stack>
            <Stack direction="row" justifyContent="center">
              <IconButton sx={{ width: 48, height: 48, borderRadius: 1 }}>
                <img src="https://oldschool.runescape.wiki/images/Head_slot.png?b0c39" />
              </IconButton>
            </Stack>
            <Stack direction="row" justifyContent="center">
              <IconButton sx={{ width: 48, height: 48, borderRadius: 1 }}>
                <img src="https://oldschool.runescape.wiki/images/Cape_slot.png?b0c39" />
              </IconButton>
              <IconButton sx={{ width: 48, height: 48, borderRadius: 1 }}>
                <img src="https://oldschool.runescape.wiki/images/Neck_slot.png?b0c39" />
              </IconButton>
              <IconButton sx={{ width: 48, height: 48, borderRadius: 1 }}>
                <img src="https://oldschool.runescape.wiki/images/Ammo_slot.png?b0c39" />
              </IconButton>
            </Stack>
            <Stack direction="row" justifyContent="center" spacing={2}>
              <IconButton sx={{ width: 48, height: 48, borderRadius: 1 }}>
                <img src="https://oldschool.runescape.wiki/images/Weapon_slot.png?b0c39" />
              </IconButton>
              <IconButton sx={{ width: 48, height: 48, borderRadius: 1 }}>
                <img src="https://oldschool.runescape.wiki/images/Body_slot.png?b0c39" />
              </IconButton>
              <IconButton sx={{ width: 48, height: 48, borderRadius: 1 }}>
                <img src="https://oldschool.runescape.wiki/images/Shield_slot.png?b0c39" />
              </IconButton>
            </Stack>
            <Stack direction="row" justifyContent="center">
              <IconButton sx={{ width: 48, height: 48, borderRadius: 1 }}>
                <img src="https://oldschool.runescape.wiki/images/Legs_slot.png?b0c39" />
              </IconButton>
            </Stack>
            <Stack direction="row" justifyContent="center" spacing={2}>
              <IconButton sx={{ width: 48, height: 48, borderRadius: 1 }}>
                <img src="https://oldschool.runescape.wiki/images/Hands_slot.png?b0c39" />
              </IconButton>
              <IconButton sx={{ width: 48, height: 48, borderRadius: 1 }}>
                <img src="https://oldschool.runescape.wiki/images/Feet_slot.png?b0c39" />
              </IconButton>
              <IconButton sx={{ width: 48, height: 48, borderRadius: 1 }}>
                <img src="https://oldschool.runescape.wiki/images/Ring_slot.png?b0c39" />
              </IconButton>
            </Stack>
          </Stack>
          <SearchBar label="Search for equipment..." />
        </Stack>
      </CardContent>
    </Card>
  );
};
