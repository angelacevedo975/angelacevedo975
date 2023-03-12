import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme: any) => ({
  title: {
    fontSize: "2.5rem",
    fontWeight: 700,
    marginBottom: "1rem",
    color: "#fff",
    "& span": {
      color: "rgb(255, 165, 0)",
    },
  },
  skillsContainer: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    flexWrap: "wrap",
  },
  skill: {
    color: "#262626",
    fontSize: "1.2rem",
    lineHeight: "1.5rem",
    padding: "0.5rem",
    margin: "0.5rem",
    borderRadius: "5px",
    backgroundColor: "rgb(255, 165, 0)",
  },
}));

export default useStyles;
