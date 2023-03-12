import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme: any) => ({
  root: {
    backgroundColor: "#262626",
    color: "#fff",
    padding: "2rem 0 2rem 0",
  },
  title: {
    fontSize: "2.5rem",
    fontWeight: 900,
    marginBottom: "1rem",
    "@media (max-width: 600px)": {
      fontSize: "2.5rem",
    },
  },
  marginTop: {
    marginTop: "20px",
  },
}));

export default useStyles;
