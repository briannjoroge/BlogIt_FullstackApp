import { useState } from "react";
import NavbarLoggedInUser from "../components/NavbarLoggedInUser";
import FooterLoggedInUser from "../components/FooterLoggedInUser";
import { toast, ToastContainer } from "react-toastify";
import { Box, Button, Container, Divider, Typography } from "@mui/material";
import TogglePasswordVisibility from "../components/TogglePasswordVisibility";

function UpdatePassword() {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const handlePasswordUpdate = (e: React.FormEvent) => {
    e.preventDefault();

    if (!currentPassword || !newPassword) {
      toast.error("Both fields are required.");
      return;
    }
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
          Update Password
        </Typography>
        <Divider sx={{ mb: 5 }} />

        <Box
          component="form"
          onSubmit={handlePasswordUpdate}
          sx={{ display: "flex", flexDirection: "column", gap: 3 }}
        >
          <TogglePasswordVisibility
            label="Current Password"
            password={currentPassword}
            handlePassword={(e) => setCurrentPassword(e.target.value)}
          />
          <TogglePasswordVisibility
            label="New Password"
            password={newPassword}
            handlePassword={(e) => setNewPassword(e.target.value)}
          />

          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Button type="submit" variant="contained" color="primary">
              Update Password
            </Button>
          </Box>
        </Box>

        <ToastContainer position="top-center" />
      </Container>
      <FooterLoggedInUser />
    </>
  );
}

export default UpdatePassword;
