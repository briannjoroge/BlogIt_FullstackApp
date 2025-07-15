import {
  Box,
  Button,
  Checkbox,
  Container,
  FormControlLabel,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import TogglePasswordVisibility from "../components/TogglePasswordVisibility";
import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { registerUser } from "../api/auth";
import { useMutation } from "@tanstack/react-query";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";

function Register() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordMismatchError, setPasswordMismatchError] = useState("");
  const [isMatch, setIsMatch] = useState(false);

  function handleConfirmPassword(e: React.ChangeEvent<HTMLInputElement>) {
    const confirmPassword = e.target.value;
    setConfirmPassword(confirmPassword);

    if (confirmPassword !== password) {
      setPasswordMismatchError("Passwords do not match");
      setIsMatch(false);
    } else {
      setPasswordMismatchError("");
      setIsMatch(true);
    }
  }

  const navigate = useNavigate();

  const { mutate: register, isPending } = useMutation({
    mutationFn: async () =>
      await registerUser({
        firstName,
        lastName,
        username: userName,
        email,
        password,
      }),
    onSuccess: () => {
      toast.success("Registration successful!");
      navigate("/login");
    },
    onError: (error) => {
      toast.error(error.message || "Registration failed");
    },
  });

  return (
    <>
      <Navbar />
      <Container
        maxWidth="lg"
        sx={{
          minHeight: "80vh",
          background:
            "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(/login-3-img.png) no-repeat center center",
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
        }}
      >
        <Grid
          size={{ xs: 12, md: 6 }}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            p: 4,
          }}
        >
          <Box sx={{ width: "100%", maxWidth: 400 }}>
            <Typography
              variant="h4"
              fontWeight={600}
              textAlign="center"
              gutterBottom
            >
              Register Account
            </Typography>
            <TextField
              fullWidth
              label="Firstname"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              margin="normal"
              variant="outlined"
              required
            />
            <TextField
              fullWidth
              label="Lastname"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              margin="normal"
              variant="outlined"
              required
            />
            <TextField
              fullWidth
              label="Username"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              margin="normal"
              variant="outlined"
              required
            />
            <TextField
              fullWidth
              label="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              margin="normal"
              variant="outlined"
              required
            />
            <TogglePasswordVisibility
              password={password}
              handlePassword={(e: React.ChangeEvent<HTMLInputElement>) => {
                setPassword(e.target.value);
                setIsMatch(e.target.value === confirmPassword);
              }}
            />
            <TogglePasswordVisibility
              password={confirmPassword}
              handlePassword={handleConfirmPassword}
              label="Confirm Password"
            />
            {passwordMismatchError && !isMatch && (
              <Typography color="error" variant="body2" sx={{ mt: 1 }}>
                {passwordMismatchError}
              </Typography>
            )}
            <FormControlLabel
              control={<Checkbox />}
              label="By signing up, you agree to our Terms, Data and Conditionss."
              sx={{ mt: 1 }}
            />
            <Button
              type="submit"
              onClick={() => register()}
              fullWidth
              variant="contained"
              color="primary"
              disabled={!isMatch || isPending}
              sx={{
                mt: 2,
                "&.Mui-disabled": {
                  opacity: 0.7,
                  cursor: "not-allowed",
                  color: "white",
                  backgroundColor: "primary.main",
                  pointerEvents: "all !important",
                },
              }}
            >
              {isPending ? "Registering..." : "Get Started"}
            </Button>
          </Box>
        </Grid>

        <ToastContainer position="top-center" />
      </Container>
      <Footer />
    </>
  );
}

export default Register;
