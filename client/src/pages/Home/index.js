import { Grid, Box, Paper } from "@mui/material";
import { styled } from "@mui/material/styles";

const SelectedMovies = styled(Paper)(({ theme }) => ({
  backgroundColor: "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  color: theme.palette.text.secondary,
  position: "sticky",
  height: "calc(100vh - 140px)",
  top: 0,
}));

const Home = () => {
  return (
    <Box sx={{ flexGrow: 1, marginTop: 2 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Paper elevation={3}>Filters</Paper>
        </Grid>
        <Grid item xs={12} md={8}>
          <Paper elevation={3}>Movies list</Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <SelectedMovies elevation={3}>Current movie</SelectedMovies>
        </Grid>
      </Grid>
    </Box>
  );
};
export default Home;
