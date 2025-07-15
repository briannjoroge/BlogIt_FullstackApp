import axios from "axios";

export const createBlog = async (blogData: {
  title: string;
  synopsis: string;
  content: string;
  featuredImage: string;
}) => {
  const token = localStorage.getItem("blogit-token");
  if (!token) throw new Error("No authentication token found");

  const response = await axios.post(
    "http://localhost:3000/api/blogs",
    blogData,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );

  return response.data;
};
