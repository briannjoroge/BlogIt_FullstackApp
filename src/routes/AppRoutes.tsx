import { Route, Routes } from "react-router-dom";
import Register from "../pages/Register";
import Login from "../pages/Login";
import LandingPage from "../pages/LandingPage";
import Dashboard from "../pages/Dashboard";
import NewBlog from "../pages/NewBlog";
import MyBlogs from "../pages/MyBlogs";
import SingleBlog from "../pages/SingleBlog";
import UpdateBlog from "../pages/UpdateBlog";
import DeletedBlogs from "../pages/DeletedBlogs";
import ProfilePage from "../pages/ProfilePage";
import UpdatePassword from "../pages/UpdatePassword";
// import PrivateRoute from "../components/privateRoute";
function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/blogs" element={<MyBlogs />} />
      <Route path="/blogs/:blogId" element={<SingleBlog />} />
      <Route path="/new-blog" element={<NewBlog />} />
      <Route path="/blogs/:blogId/update" element={<UpdateBlog />} />
      <Route path="/deleted-blogs" element={<DeletedBlogs />} />
      <Route path="/user" element={<ProfilePage />} />
      <Route path="/update-password" element={<UpdatePassword />} />
    </Routes>
  );
}

export default AppRoutes;
