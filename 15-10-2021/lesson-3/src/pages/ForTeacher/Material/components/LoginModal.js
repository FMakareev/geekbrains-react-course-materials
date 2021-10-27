import {
  Modal,
  Box,
  Typography,
  TextField,
  FormControlLabel,
  Checkbox,
  Button,
  Paper
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useClasses = makeStyles({
  paper: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)"
  },
  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  }
});

export const LoginModal = ({ open, onClose }) => {
  const classes = useClasses();

  return (
    <Modal open={open}>
      <Paper className={classes.paper} elevation={3}>
        <Typography component="h6" variant="h6" p={4}>
          Login
        </Typography>

        <Box p={4} className={classes.form}>
          <TextField id="standard-basic" label="Standard" />
          <TextField id="standard-basic" label="Standard" />
          <FormControlLabel
            control={<Checkbox name="checkedA" />}
            label="Rember me"
          />
          <Button onClick={onClose}>Send</Button>
        </Box>
      </Paper>
    </Modal>
  );
};
