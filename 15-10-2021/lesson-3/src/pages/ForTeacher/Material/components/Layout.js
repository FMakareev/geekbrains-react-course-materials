import { Box } from "@material-ui/core";
import { Header } from "./Header";

export const Layout = ({ children }) => {
  return (
    <Box
      sx={{
        bgcolor: "background.default"
      }}
    >
      <Header />
      <Box component="main">{children}</Box>
    </Box>
  );
};
