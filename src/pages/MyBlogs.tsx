import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Container,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import NavbarLoggedInUser from "../components/NavbarLoggedInUser";
import FooterLoggedInUser from "../components/FooterLoggedInUser";
import { Link } from "react-router-dom";

const dummyBlogs = [
  {
    id: 1,
    title: "Mastering basic maths",
    synopsis: "Func to add 2 numbers without a calculator.",
    image: "/login-img.png",
    authorFirstName: "John",
    authorLastName: "Mutua",
    date: "January 13, 2025",
  },
  {
    id: 2,
    title: "Mastering basic maths",
    synopsis: "Func to add 2 numbers without a calculator.",
    image: "/login-img.png",
    authorFirstName: "John",
    authorLastName: "Mutua",
    date: "January 13, 2025",
  },
  {
    id: 3,
    title: "Mastering basic maths",
    synopsis: "Func to add 2 numbers without a calculator.",
    image: "/login-img.png",
    authorFirstName: "John",
    authorLastName: "Mutua",
    date: "January 13, 2025",
  },
  {
    id: 4,
    title: "Mastering basic maths",
    synopsis: "Func to add 2 numbers without a calculator.",
    image: "/login-img.png",
    authorFirstName: "John",
    authorLastName: "Mutua",
    date: "January 13, 2025",
  },
  {
    id: 5,
    title: "Mastering basic maths",
    synopsis: "Func to add 2 numbers without a calculator.",
    image: "/login-img.png",
    authorFirstName: "John",
    authorLastName: "Mutua",
    date: "January 13, 2025",
  },
];

function MyBlogs() {
  return (
    <>
      <NavbarLoggedInUser />
      <Container maxWidth="lg" sx={{ mt: { xs: 15, sm: 10, md: 10 } }}>
        <Typography
          variant="h4"
          fontWeight="bold"
          textAlign="center"
          gutterBottom
        >
          My Blogs
        </Typography>
        <Divider sx={{ mb: 5 }} />

        <Grid container spacing={4}>
          {dummyBlogs.map((blog) => (
            <Grid key={blog.id} size={{ xs: 12, sm: 6, md: 4 }}>
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <CardMedia
                  component="img"
                  height="160"
                  image={blog.image}
                  alt={blog.title}
                />

                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography variant="h6" gutterBottom>
                    {blog.title}
                  </Typography>
                  <Typography
                    variant="body1"
                    color="text.secondary"
                    gutterBottom
                  >
                    {blog.synopsis}
                  </Typography>

                  <Box sx={{ display: "flex", alignItems: "center", mt: 2 }}>
                    <Avatar
                      sx={{
                        mr: 1,
                        backgroundColor: "hsla(241, 88%, 41%, 0.85)",
                      }}
                    >
                      {blog.authorFirstName.charAt(0)}
                      {blog.authorLastName.charAt(0)}
                    </Avatar>

                    <Box>
                      <Typography variant="caption">
                        {blog.authorFirstName}.{blog.authorLastName.charAt(0)}
                      </Typography>
                      <Typography
                        variant="caption"
                        color="text.secondary"
                        sx={{ display: "block" }}
                      >
                        Published on, {blog.date}
                      </Typography>
                    </Box>
                  </Box>

                  <Button
                    component={Link}
                    to={`/blogs/${blog.id}`}
                    variant="outlined"
                    size="small"
                    sx={{ mt: 2, textTransform: "none" }}
                  >
                    Read More
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
      <FooterLoggedInUser />
    </>
  );
}

export default MyBlogs;
