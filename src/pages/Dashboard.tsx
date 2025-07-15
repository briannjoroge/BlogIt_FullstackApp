import { Link } from "react-router-dom";
import NavbarLoggedInUser from "../components/NavbarLoggedInUser";
import { Avatar, Box, Button, Container, Typography } from "@mui/material";
import FooterLoggedInUser from "../components/FooterLoggedInUser";

const topBlogs = [
  {
    title: "Mastering basic maths",
    date: "January 13, 2025",
    image: "/login-img.png",
  },
  {
    title: "Mastering basic maths",
    date: "January 13, 2025",
    image: "/login-img.png",
  },
  {
    title: "Mastering basic maths",
    date: "January 13, 2025",
    image: "/login-img.png",
  },
  {
    title: "Mastering basic maths",
    date: "January 13, 2025",
    image: "/login-img.png",
  },
  {
    title: "Mastering basic maths",
    date: "January 13, 2025",
    image: "/login-img.png",
  },
];

function Dashboard() {
  return (
    <>
      <NavbarLoggedInUser />
      <Container maxWidth="md" sx={{ mt: { xs: 15, sm: 10, md: 10 } }}>
        <Box
          sx={{
            backgroundColor: "hsla(207, 54%, 81%, 0.80)",
            borderRadius: 2,
            p: 4,
          }}
        >
          <Typography variant="h4" fontWeight="bold" gutterBottom>
            Hello, Sarah!
          </Typography>
          <Typography variant="h6" gutterBottom>
            Welcome back to BlogIt. Let us brighten up your day with a new blog.
          </Typography>
          <Button
            variant="contained"
            color="primary"
            component={Link}
            to="/new-blog"
            sx={{ mt: 2 }}
          >
            Write new blog
          </Button>
        </Box>

        <Box sx={{ mt: 6 }}>
          <Typography variant="h5" fontWeight="bold" gutterBottom>
            Top Blogs
          </Typography>
          {topBlogs.map((blog, index) => (
            <Box
              key={index}
              sx={{
                display: "flex",
                alignItems: "center",
                mb: 2,
                p: 2,
                borderRadius: 2,
              }}
            >
              <Avatar
                src={blog.image}
                alt="Blog Icon"
                sx={{ width: 48, height: 48, mr: 2 }}
              />
              <Box>
                <Typography variant="body1" fontWeight="medium">
                  {blog.title}
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  {blog.date}
                </Typography>
                <Button
                  component={Link}
                  to={`/blogs/${index}`}
                  variant="text"
                  size="small"
                  sx={{ mt: 1, display: "block", textTransform: "none" }}
                >
                  Read More
                </Button>
              </Box>
            </Box>
          ))}
        </Box>
      </Container>
      <FooterLoggedInUser />
    </>
  );
}

export default Dashboard;
