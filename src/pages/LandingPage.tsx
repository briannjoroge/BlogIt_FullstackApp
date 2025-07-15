import { Box, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function LandingPage() {
  return (
    <>
      <Navbar />
      <Box
        sx={{
          minHeight: "90vh",
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('/login-2-img.PNG')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
          px: { xs: 2, md: 8 },
          py: 4,
          color: "white",
        }}
      >
        <Box sx={{ maxWidth: 500 }}>
          <Typography variant="h3" gutterBottom>
            BlogIt
          </Typography>
          <Typography variant="h6" gutterBottom>
            - Your Personal Blogging Hub
          </Typography>
          <Typography variant="body1" sx={{ mb: 4 }}>
            One word at a time. Write your mind, as you document your stories
            with BlogIt. Join a community of writers.
          </Typography>
          <Button
            variant="contained"
            color="primary"
            component={Link}
            to="/register"
            sx={{ mr: 2 }}
          >
            Get Started
          </Button>
          <Button
            variant="outlined"
            color="inherit"
            component={Link}
            to="/login"
          >
            Sign In
          </Button>
        </Box>
      </Box>
      <Footer />
    </>
  );
}

export default LandingPage;
