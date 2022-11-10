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

export const Login = () => {
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
            Sign In
          </Typography>
        </Grid>
        <TextField label="Username" variant="standard" fullWidth required />
        <TextField
          type="password"
          label="Password"
          variant="standard"
          fullWidth
          required
        />
        {/* ラベルとチェックボックス */}
        <FormControlLabel
          labelPlacement="end"
          label="パスワードを忘れました"
          control={<Checkbox name="checkboxA" size="small" color="primary" />}
        />
        <Box mt={3}>
          <Button type="submit" color="primary" variant="contained" fullWidth>
            サインイン
          </Button>

          <Typography variant="caption">
            <Link href="#">パスワードを忘れましたか？</Link>
          </Typography>
          <Typography variant="caption" display="block">
            アカウントを持っていますか？
            <Link href="#">アカウントを作成</Link>
          </Typography>
        </Box>
      </Paper>
    </Grid>
  );
};