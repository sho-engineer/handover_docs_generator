import React from 'react'
import {
  Avatar,
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  Link,
  Paper,
  Stack,
  TextField,
  Typography
} from "@mui/material";
import { teal } from "@mui/material/colors";
import Redirect from "react-router-dom";
import axios from 'axios';
import {baseUrl} from '../../App';

const executeSignUp = async(password, username, email, passwordConfirm) => {
  console.log(isPasswordPasswordConfirmSame(password,passwordConfirm));
  await axios.post(`${baseUrl}/api/users/`, {
    password: password,
    username: username,
    last_login: new Date(),
    email: email,
    is_authed: true,
    is_loggedin: true
  })
  .then(() => {
    window.location = "/";
  })
}

export const SignUp = () => {
  // ユーザー名とパスワードとEmailを定義
  const [username, setUsername] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [passwordConfirm, setPasswordConfirm] = React.useState('');

  let handleUsername = e => setUsername(e.target.value);
  let handlePassword = e => setPassword(e.target.value);
  let handleEmail = e => setEmail(e.target.value);
  let handlePasswordConfirm = e => setPasswordConfirm(e.target.value);

  return (
    <Grid>
      <Paper
        elevation={3}
        sx={{
          p: 4,
          height: "70vh",
          width: "280px",
          m: "20px auto"
        }}
      >
        <Grid
          container
          direction="column"
          justifyContent="flex-start" 
          alignItems="center"
        >
          <Avatar sx={{ bgcolor: teal[400] }}>
          </Avatar>
          <Typography variant={"h5"} sx={{ m: "30px" }}>
            Sign Up
          </Typography>
        </Grid>
        <TextField label="Username" variant="standard" onChange={handleUsername} fullWidth required />
        <TextField type="email" label="Email" variant="standard" onChange={handleEmail} fullWidth required />
        <TextField
          type="password"
          label="Password"
          variant="standard"
          fullWidth
          onChange = {handlePassword}
          required
        />
        <TextField
          type="password"
          label="Password Confirm"
          variant="standard"
          fullWidth
          onChange = {handlePasswordConfirm}
          required
        />
        {/* ラベルとチェックボックス */}
        <Box mt={3}>
          <Button type="submit" color="primary" variant="contained" onClick={executeSignUp(password, username, email, passwordConfirm)} fullWidth>
            登録
          </Button>
          <Typography variant="caption" display="block">
            アカウントを持っていますか？
            <Link href="/">Sign Inページ</Link>
          </Typography>
        </Box>
      </Paper>
    </Grid>
  );
};