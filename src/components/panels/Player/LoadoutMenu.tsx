import {
  FormControl,
  Select,
  MenuItem,
} from "@mui/material";
import { Stack } from "@mui/system";

export const LoadoutMenu = () => (
  <Stack direction="row" spacing={1}>
    <FormControl size="small" fullWidth>
      <Select
        labelId="loadout-label"
        id="loadout"
        value=""
        displayEmpty
      >
        <MenuItem value="">Loadout</MenuItem>
      </Select>
    </FormControl>
  </Stack >
);
