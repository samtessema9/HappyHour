import {useState, useContext, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import { PrimaryContext } from '../context/primaryContext';
import axios from 'axios';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        HappyHour
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

const SignIn = () => {
  const navigate = useNavigate()
  const [error, setError] = useState('')

  const {setLoggedInUser, isLoggedIn, setIsLoggedIn} = useContext(PrimaryContext)

  const [formData, setFormData] = useState({
    userName: '',
    password: ''
  })

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await axios({
        url: 'http://localhost:3001/users/login',
        method: 'POST',
        data: formData
    })
    
    if (response.data.error) {
        console.log('error')
        setError('Invalid Credentials!')
    } else {
        console.log(response.data.user)
        setLoggedInUser(response.data.user)
        setIsLoggedIn(true)
        localStorage.setItem('token', response.data.token)
        setError('')
        setFormData({
          userName: '',
          password: ''
        })
        navigate('/')
    }
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="userName"
              label="Username"
              name="userName"
              autoComplete="Username"
              autoFocus
              value={formData.userName}
              onChange={(e) => setFormData({
                ...formData,
                [e.target.name]: e.target.value
              })}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={formData.password}
              onChange={(e) => setFormData({
                ...formData,
                [e.target.name]: e.target.value
              })}
            />
            {error.length > 0 && <span className="signInError">{error}</span>}
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href='/signUp' variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}

export default SignIn