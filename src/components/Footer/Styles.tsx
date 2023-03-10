import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme: any) => ({
  footer: {
    backgroundColor: "#262626",
    color: "#fff",
    padding: "1rem",
    height: "5rem",
  },
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    width: "100%",
  },
  text: {
    fontSize: "1rem",
  },
}));

export default useStyles;
