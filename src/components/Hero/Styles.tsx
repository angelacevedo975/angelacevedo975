import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme: any) => ({
  root: {
    height: "100vh",
    width: "100%",
    backgroundColor: "#262626",
    margin: "0 0 0 0",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
  },
  container: {
    display: "flex !important",
    justifyContent: "space-around",
    alignItems: "center",
    color: "white",
    flexWrap: "wrap",
  },
  left: {},
  right: {
    padding: "20px 0 20px 0",
    width: "100%",
    flexGrow: 1,
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  title: {
    fontSize: "3.5rem",
    fontWeight: 900,
    "@media (max-width: 600px)": {
      fontSize: "2.5rem",
    },
  },
  subtitle: {
    fontSize: "1.5rem",
    fontWeight: 400,
    "@media (max-width: 600px)": {
      fontSize: "1.2rem",
      margin: "20px 0 20px 0",
    },
  },
}));

export default useStyles;
