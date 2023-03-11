import Button from "@mui/material/Button";
import { hover } from "@testing-library/user-event/dist/hover";
export const ButtonOutline = ({ btnText }) => {
  return (
    <Button
      variant="outlined"
      sx={{
        border: "1px solid #C5A880",
        color: "white",
        ":hover": {
          backgroundColor: "#3C2A21",
          border: "1px solid #3C2A21",
        },
      }}
    >
      {btnText}
    </Button>
  );
};
export const ButtonText = ({ btnText }) => {
  return (
    <Button
      variant="text"
      sx={{
        color: "white",
      }}
    >
      {btnText}
    </Button>
  );
};
export const ButtonSolid = ({ btnText }) => {
  return (
    <Button
      variant="contained"
      sx={{
        backgroundColor: "#C5A880",
        color: "white",
        ":hover": {
          backgroundColor: "#3C2A21",
        },
      }}
    >
      {btnText}
    </Button>
  );
};
