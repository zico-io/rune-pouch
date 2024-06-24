import { Add } from "@mui/icons-material";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  IconButton,
} from "@mui/material";
import { Stack } from "@mui/system";
import { useState } from "react";

export const LoadoutMenu = () => {
  const [loadout, setLoadout] = useState("");
  return (
    <Stack direction="row" spacing={1}>
      <FormControl size="small" fullWidth>
        <InputLabel id="loadout-label">Loadout</InputLabel>
        <Select
          labelId="loadout-label"
          id="loadout"
          value={loadout}
          label="Loadout"
        >
          <MenuItem value="Loadout1">Loadout 1</MenuItem>
        </Select>
      </FormControl>
      <IconButton sx={{ borderRadius: 1 }}>
        <Add />
      </IconButton>
    </Stack>
  );
};
