import { DeleteOutline } from "@mui/icons-material"
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Divider, IconButton, Stack, Typography } from "@mui/material"
import Grid from '@mui/material/Unstable_Grid2'
import { EquipmentGrid } from "../Player/equipment/Grid"
import EquipmentSelect from "../Player/equipment/Select"
import { useStore } from "@/lib/state"
import { useState } from "react"

export const EquipmentPanel = () => {
  const store = useStore()

  const currentLoadout = store.selectedLoadout

  const [open, setOpen] = useState(false)

  const handleClick = () => {
    store.deleteLoadout(currentLoadout)
    setOpen(false)
  }

  return (
    <Stack spacing={1} sx={{ paddingX: 2, paddingTop: 1 }}>
      <Grid container>
        <Grid xs="auto">
          <Typography variant="subtitle1" color="GrayText">Level 126</Typography>
          <Typography variant="h5">Loadout Name</Typography>
        </Grid>
        <Grid xs={1} margin="auto" marginRight={1}>
          <IconButton onClick={() => setOpen(true)}>
            <DeleteOutline sx={{ opacity: 0.2 }} />
          </IconButton>
          <Dialog
            open={open}
          >
            <DialogTitle>
              Delete current loadout data?
            </DialogTitle>
            <DialogContent>
              <DialogContentText>
                Would you like to erase all of the active loadout's configuration? This will set it to the default 'empty' state.
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={() => setOpen(false)} autoFocus>Cancel</Button>
              <Button color="error" variant="contained" onClick={handleClick}>Delete</Button>
            </DialogActions>
          </Dialog>
        </Grid>
      </Grid>
      <Divider variant="middle" />
      <EquipmentGrid />
      <EquipmentSelect />
    </Stack >
  )
}
