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
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { createBlog } from "../api/blog";

declare global {
  interface Window {
    cloudinary: {
      openUploadWidget: (
        options: object,
        callback: (
          error: unknown,
          result: { event: string; info?: { secure_url: string } },
        ) => void,
      ) => void;
    };
  }
}

function NewBlog() {
  const [title, setTitle] = useState("");
  const [synopsis, setSynopsis] = useState("");
  const [image, setImage] = useState("");
  const [content, setContent] = useState("");

  const handleUpload = () => {
    if (!window.cloudinary) {
      toast.error("Cloudinary widget failed to load.");
      return;
    }

    window.cloudinary.openUploadWidget(
      {
        cloudName: "dt47m5eoa",
        uploadPreset: "q2epy34o",
        sources: ["local", "url", "camera"],
        multiple: false,
        folder: "blogit-uploads",
        cropping: false,
        resourceType: "image",
      },
      (
        error: unknown,
        result: { event: string; info?: { secure_url: string } },
      ) => {
        if (!error && result.event === "success" && result.info?.secure_url) {
          setImage(result.info.secure_url);
          toast.success("Image uploaded successfully!");
        }
      },
    );
  };

  const navigate = useNavigate();

  const { mutate: publishBlog, isPending } = useMutation({
    mutationFn: async () =>
      await createBlog({
        title,
        synopsis,
        content,
        featuredImage: image,
      }),
    onSuccess: () => {
      toast.success("Blog published successfully!");
      navigate("/blogs");
    },
    onError: () => {
      toast.error("Failed to publish blog");
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!title || !synopsis || !image || !content) {
      toast.error("Please fill in all fields before publishing.");
      return;
    }
    publishBlog();
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
          Create New Blog
        </Typography>
        <Divider sx={{ mb: 5 }} />

        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{ display: "flex", flexDirection: "column", gap: 3 }}
        >
          <TextField
            label="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            fullWidth
            variant="outlined"
            required
          />
          <TextField
            label="Synopsis"
            value={synopsis}
            onChange={(e) => setSynopsis(e.target.value)}
            fullWidth
            variant="outlined"
            multiline
            rows={2}
            required
          />
          {image && (
            <Box sx={{ mt: 2 }}>
              <Typography variant="caption">Image Preview:</Typography>
              <Box
                component="img"
                src={image}
                alt="Featured"
                sx={{ width: "100%", maxHeight: 300, borderRadius: 2 }}
              />
            </Box>
          )}
          <Button variant="outlined" color="secondary" onClick={handleUpload}>
            Upload Featured Image
          </Button>
          <TextField
            label="Content (Markdown)"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            fullWidth
            variant="outlined"
            multiline
            rows={10}
            required
          />

          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              disabled={isPending}
            >
              Publish Blog
            </Button>
          </Box>
        </Box>
        <ToastContainer position="top-center" />
      </Container>
      <FooterLoggedInUser />
    </>
  );
}

export default NewBlog;
