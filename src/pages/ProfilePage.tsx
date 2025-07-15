import { useState } from "react";
import NavbarLoggedInUser from "../components/NavbarLoggedInUser";
import FooterLoggedInUser from "../components/FooterLoggedInUser";
import { toast, ToastContainer } from "react-toastify";
import {
  Box,
  Button,
  Container,
  Divider,
  TextField,
  Typography,
} from "@mui/material";

function ProfilePage() {
  const initialUser = {
    firstName: "Brian",
    lastName: "Mwangi",
    username: "codebrian",
    email: "brian@example.com",
  };

  const [firstName, setFirstName] = useState(initialUser.firstName);
  const [lastName, setLastName] = useState(initialUser.lastName);
  const [username, setUsername] = useState(initialUser.username);
  const [email, setEmail] = useState(initialUser.email);

  const handleUpdate = (e: React.FormEvent) => {
    e.preventDefault();

    if (!firstName || !lastName || !username || !email) {
      toast.error("All fields are required.");
      return;
    }
  };

  return (
    <>
      <NavbarLoggedInUser />
      <Container maxWidth="sm" sx={{ mt: { xs: 15, sm: 10, md: 10 } }}>
        <Typography
          variant="h4"
          fontWeight="bold"
          textAlign="center"
          gutterBottom
        >
          My Profile
        </Typography>
        <Divider sx={{ mb: 4 }} />

        <Box
          component="form"
          onSubmit={handleUpdate}
          sx={{ display: "flex", flexDirection: "column", gap: 3 }}
        >
          <TextField
            label="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            fullWidth
          />
          <TextField
            label="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            fullWidth
          />
          <TextField
            label="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            fullWidth
          />
          <TextField
            label="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            fullWidth
          />
          <Button type="submit" variant="contained" color="primary">
            Update Info
          </Button>
        </Box>

        <ToastContainer position="top-center" />
      </Container>

      <FooterLoggedInUser />
    </>
  );
}

export default ProfilePage;
