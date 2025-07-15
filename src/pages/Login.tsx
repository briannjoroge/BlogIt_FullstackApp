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
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import TogglePasswordVisibility from "../components/TogglePasswordVisibility";
import { toast, ToastContainer } from "react-toastify";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { loginUser } from "../api/auth";
import { useMutation } from "@tanstack/react-query";

function Login() {
  const [loginCredentials, setLoginCredentials] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");

  const navigate = useNavigate();

  const { mutate: login, isPending } = useMutation({
    mutationFn: async () => await loginUser({ loginCredentials, password }),
    onSuccess: (data) => {
      toast.success("Login successful!");
      localStorage.setItem("token", data.token);
      navigate("/dashboard");
    },
    onError: () => {
      setLoginError("Invalid credentials");
      toast.error("Login failed");
    },
  });

  return (
    <>
      <Navbar />
      <Container
        maxWidth="md"
        sx={{
          minHeight: "80vh",
          backgroundImage: "url(/login-3-img.png)",
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
            <Typography variant="h4" gutterBottom>
              Welcome Back,
            </Typography>
            {loginError && (
              <Typography color="error" variant="h5" sx={{ mb: 2 }}>
                {loginError}
              </Typography>
            )}
            <TextField
              fullWidth
              label="Email or Username*"
              margin="normal"
              variant="outlined"
              required
              value={loginCredentials}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setLoginCredentials(e.target.value);
                setLoginError("");
              }}
            />
            <TogglePasswordVisibility
              required
              password={password}
              handlePassword={(e: React.ChangeEvent<HTMLInputElement>) => {
                setPassword(e.target.value);
                setLoginError("");
              }}
            />
            <FormControlLabel
              control={<Checkbox />}
              label="Remember me"
              sx={{ mt: 1 }}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              onClick={() => login()}
              disabled={isPending}
              sx={{ mt: 2 }}
            >
              Sign In
            </Button>
            <Typography marginTop={3}>
              Don't have an account yet?{" "}
              <Button variant="text" component={Link} to="/">
                {isPending ? "Signing In..." : "Sign In"}
              </Button>
            </Typography>
          </Box>
        </Grid>
      </Container>
      <ToastContainer position="top-center" />
      <Footer />
    </>
  );
}

export default Login;
