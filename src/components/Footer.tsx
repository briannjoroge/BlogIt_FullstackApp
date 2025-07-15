import { Box, Grid, Link, Typography } from "@mui/material";

function Footer() {
  return (
    <>
      <Box sx={{ bgcolor: "grey.900", color: "white", p: 4 }}>
        <Grid container spacing={4}>
          <Grid size={{ xs: 12, sm: 4 }}>
            <Typography variant="h6">BlogIt</Typography>
            <Typography variant="body2">Build Your Blog, Your Way</Typography>
          </Grid>
          <Grid size={{ xs: 6, sm: 2 }}>
            <Typography variant="subtitle1">Explore</Typography>
            <Link href="/">Home</Link>
            <br />
            <Link href="/blogs">Blogs</Link>
            <br />
            <Link href="/profile">Profile</Link>
          </Grid>
          <Grid size={{ xs: 6, sm: 2 }}>
            <Typography variant="subtitle1">Account</Typography>
            <Link href="/login">Login</Link>
            <br />
            <Link href="/register">Register</Link>
          </Grid>
          <Grid size={{ xs: 12, sm: 4 }}>
            <Typography variant="subtitle1">Contact</Typography>
            <Typography variant="body2">support@blogit.dev</Typography>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default Footer;
