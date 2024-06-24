import { Card, TextField } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

export const StatBox = ({ label, icon }: { label: string; icon: string }) => {
  return (
    <Card elevation={0}>
      <Grid container spacing={2} columns={2} alignItems="center" padding={1}>
        <Grid xs={1}>
          <img
            src={icon}
            height="24"
            style={{ display: "block", margin: "auto" }}
          />
        </Grid>
        <Grid xs={1}>
          <TextField id={label} variant="standard" size="small" />
        </Grid>
      </Grid>
    </Card>
  );
};
