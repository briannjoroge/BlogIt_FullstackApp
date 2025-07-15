import {
  Box,
  Button,
  Container,
  Divider,
  TextField,
  Typography,
} from "@mui/material";
import NavbarLoggedInUser from "../components/NavbarLoggedInUser";
import FooterLoggedInUser from "../components/FooterLoggedInUser";
import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";

function UpdateBlog() {
  const blog = {
    title: "Mastering basic maths",
    synopsis: "Func to add 2 numbers without a calculator.",
    content: `## Introduction  
You need a calculator fisrt. switch it off and find a pen and paper.You are now ready to solve the problem.`,
  };

  const [title, setTitle] = useState(blog.title);
  const [synopsis, setSynopsis] = useState(blog.synopsis);
  const [content, setContent] = useState(blog.content);

  const handleUpdate = (e: React.FormEvent) => {
    e.preventDefault();

    if (!title || !synopsis || !content) {
      toast.error("Please fill in all fields before pressing Update!");
      return;
    }

    toast.success("Blog updated successfuly!");
  };

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
          Edit Blog
        </Typography>
        <Divider sx={{ mb: 5 }} />

        <Box
          component="form"
          onSubmit={handleUpdate}
          sx={{ display: "flex", flexDirection: "column", gap: 3 }}
        >
          <TextField
            label="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            defaultValue={blog.title}
            fullWidth
            variant="outlined"
            required
          />
          <TextField
            label="Synopsis"
            value={synopsis}
            onChange={(e) => setSynopsis(e.target.value)}
            defaultValue={blog.synopsis}
            fullWidth
            multiline
            rows={3}
            variant="outlined"
            required
          />
          <TextField
            label="Content (Markdown)"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            defaultValue={blog.content}
            fullWidth
            multiline
            rows={8}
            variant="outlined"
            required
          />

          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Button type="submit" variant="contained" color="primary">
              Update Blog
            </Button>
          </Box>
        </Box>

        <ToastContainer position="top-center" />
      </Container>
      <FooterLoggedInUser />
    </>
  );
}

export default UpdateBlog;
