import NavbarLoggedInUser from "../components/NavbarLoggedInUser";
import {
  Card,
  CardContent,
  CardMedia,
  Chip,
  Container,
  Divider,
  Typography,
} from "@mui/material";
import FooterLoggedInUser from "../components/FooterLoggedInUser";

function DeletedBlogs() {
  const deletedBlogs = [
    {
      id: 1,
      title: "Mastering basic maths",
      synopsis: "Func to add 2 numbers without a calculator.",
      image: "/login-img.png",
    },
    {
      id: 2,
      title: "Mastering basic maths",
      synopsis: "Func to add 2 numbers without a calculator.",
      image: "/login-img.png",
    },
  ];

  return (
    <>
      <NavbarLoggedInUser />
      <Container maxWidth="md" sx={{ mt: { xs: 15, sm: 10, md: 10 } }}>
        <Typography
          variant="h4"
          fontWeight="bold"
          textAlign="center"
          gutterBottom
        >
          Deleted Blogs
        </Typography>
        <Divider sx={{ mb: 5 }} />

        {deletedBlogs.length === 0 ? (
          <Typography textAlign="center" color="text.secondary">
            You have no deleted blogs.
          </Typography>
        ) : (
          deletedBlogs.map((blog) => (
            <Card key={blog.id} sx={{ mb: 4, opacity: 0.6 }}>
              <CardMedia
                component="img"
                height="200"
                image={blog.image}
                alt="Deleted blog"
              />
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  {blog.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {blog.synopsis}
                </Typography>
                <Chip
                  label="Deleted!"
                  color="error"
                  variant="outlined"
                  sx={{ mt: 2 }}
                />
              </CardContent>
            </Card>
          ))
        )}
      </Container>
      <FooterLoggedInUser />
    </>
  );
}

export default DeletedBlogs;
