import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme: any) => ({
  title: {
    fontSize: "2.5rem",
    fontWeight: 700,
    marginBottom: "1rem",
    color: "#fff",
  },
  text: {
    fontSize: "1.2rem",
    lineHeight: "1.5rem",
    textAlign: "justify",
    color: "#fff",
    "& span": {
      color: "rgb(255, 165, 0)",
    },
  },
}));

export default useStyles;
