import { TextField } from "@mui/material";

export const SearchBar = ({ label }: { label: string }) => (
  <form>
    <TextField
      id="search-bar"
      className="text"
      placeholder={label}
      variant="outlined"
      color="primary"
      size="small"
      fullWidth
    />
  </form>
);
