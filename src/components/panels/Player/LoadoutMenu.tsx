import {
  FormControl,
  Select,
  MenuItem,
} from "@mui/material";
import { Stack } from "@mui/system";
import { useState } from "react";

export const LoadoutMenu = () => {
  const [loadout, setLoadout] = useState("");
  return (
    <Stack direction="row" spacing={1}>
      <FormControl size="small" fullWidth>
        <Select
          labelId="loadout-label"
          id="loadout"
          value={loadout}
          displayEmpty
        >
          <MenuItem value="">Loadout</MenuItem>
        </Select>
      </FormControl>
    </Stack >
  );
};
