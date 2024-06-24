import { Typography, Card, Button, Stack } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

export interface IMonster {
  name: string;
  variant?: string;
  icon: string;
  link: string;
}

export const MonsterPanelHeader = ({
  name,
  variant,
  icon,
  link,
}: {
  name: string;
  variant: string;
  icon: string;
  link: string;
}) => {
  return (
    <Button variant="text" href={link} sx={{ p: 1 }}>
      <Grid container spacing={2} columns={4} marginRight="auto">
        <Grid>
          <Card variant="outlined" sx={{ padding: "8px" }}>
            <img src={icon} width="auto" style={{ display: "block" }} />
          </Card>
        </Grid>
        <Stack margin="auto">
          <Typography variant="subtitle2" color="GrayText">
            {variant}
          </Typography>
          <Typography variant="h5">{name}</Typography>
        </Stack>
      </Grid>
    </Button>
  );
};
