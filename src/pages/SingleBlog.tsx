import { Avatar, Box, Button, Container, Typography } from "@mui/material";
import NavbarLoggedInUser from "../components/NavbarLoggedInUser";
import FooterLoggedInUser from "../components/FooterLoggedInUser";
import ReactMarkdown from "react-markdown";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

function SingleBlog() {
  const blog = {
    id: 1,
    title: "Mastering basic maths",
    synopsis: "Func to add 2 numbers without a calculator.",
    content: `## Introduction  
You need a calculator fisrt. switch it off and find a pen and paper.
You are now ready to solve the problem.`,
    image: "/login-img.png",
    authorFirstName: "John",
    authorLastName: "Mutua",
    date: "January 13, 2025",
  };

  return (
    <>
      <NavbarLoggedInUser />
      <Container maxWidth="md" sx={{ mt: { xs: 15, sm: 10, md: 10 } }}>
        <Box
          component="img"
          src={blog.image}
          alt="Featured"
          sx={{
            width: "100%",
            height: "300px",
            objectFit: "cover",
            borderRadius: 2,
            mb: 4,
          }}
        />

        <Typography variant="h4" fontWeight="bold" gutterBottom>
          {blog.title}
        </Typography>
        <Typography variant="subtitle1" color="text.secondary" gutterBottom>
          {blog.synopsis}
        </Typography>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            mt: 3,
            mb: 4,
            flexWrap: "wrap",
          }}
        >
          <Avatar sx={{ mr: 2, backgroundColor: "hsla(241, 88%, 41%, 0.85)" }}>
            {blog.authorFirstName.charAt(0)}
            {blog.authorLastName.charAt(0)}
          </Avatar>
          <Box>
            <Typography variant="body2" fontWeight="medium">
              {blog.authorFirstName}.{blog.authorLastName.charAt(0)}
            </Typography>
            <Typography variant="caption" color="text.secondary">
              Published on, {blog.date}
            </Typography>
          </Box>

          <Box sx={{ mt: 4, width: "100%" }}>
            <ReactMarkdown>{blog.content}</ReactMarkdown>
          </Box>

          <Box sx={{ mt: 4, display: "flex", gap: 2 }}>
            <Button
              variant="outlined"
              color="primary"
              size="small"
              component={Link}
              to={`/blogs/${blog.id}/update`}
            >
              Update
            </Button>
            <Button
              variant="outlined"
              color="error"
              size="small"
              onClick={() => toast.success("Blog successfully deleted!")}
            >
              Delete
            </Button>
          </Box>
        </Box>

        <ToastContainer position="top-center" />
      </Container>
      <FooterLoggedInUser />
    </>
  );
}

export default SingleBlog;
