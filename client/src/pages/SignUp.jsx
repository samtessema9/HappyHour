import {useState} from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
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
                Your Website
                </Link>{' '}
                {new Date().getFullYear()}
                {'.'}
            </Typography>
        );
    }

    // TODO remove, this demo shouldn't need to reset the theme.

    const defaultTheme = createTheme();

export default function SignUp() {
    const navigate = useNavigate()

    const [formData, setFormData] = useState({
        name: '',
        userName: '',
        password: '',
        confirmPassword: ''
    })

    const [errors, setErrors] = useState({})

    const validateForm = (form) => {
        let errors = {}

        if (form.name.trim().length < 2) {
            errors.name = "Name is too short"
        }

        if (form.userName.trim().length < 2) {
            errors.userName = "Username is too short"
        }

        if (form.password.length < 6) {
            errors.password = "Password is too short"
        }

        if (form.password !== form.confirmPassword) {
            errors.confirmPassword = "Passwords do not match"
        }

        return errors
    }

    const handleChange = (event) => {
        const {name, value} = event.target
        setFormData({
            ...formData,
            [name]: value
        })
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        const invalidForm = validateForm(formData)
        console.log(formData)
        console.log(invalidForm)

        if (!Object.keys(invalidForm).length > 0) {
            try {
                delete formData.confirmPassword

                const response = await axios({
                    url: 'http://localhost:3001/users/register',
                    method: 'POST',
                    data: formData
                })
                console.log(response.data)

                navigate('/')
                
                setFormData({
                    name: '',
                    userName: '',
                    password: '',
                    confirmPassword: ''
                })
                setErrors({})
            } catch (err) {
                
            }

        } else {
            console.log('error')
            setErrors(invalidForm)
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
                Sign up
                </Typography>
                <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                    <TextField
                        autoComplete="name"
                        name="name"
                        required
                        fullWidth
                        id="name"
                        label="Name"
                        autoFocus
                        onChange={handleChange}
                        // {...(errors.name) ? error: null}
                    />
                    {errors.name && <span class="error">{errors.name}</span>}
                    </Grid>
                    <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        fullWidth
                        id="username"
                        label="Username"
                        name="userName"
                        autoComplete="Username"
                        onChange={handleChange}
                    />
                    {errors.userName && <span class="error">{errors.userName}</span>}
                    </Grid>
                    <Grid item xs={12}>
                    <TextField
                        required
                        fullWidth
                        id="password"
                        label="Password"
                        name="password"
                        autoComplete="password"
                        type="password"
                        onChange={handleChange}
                    />
                    {errors.password && <span class="error">{errors.password}</span>}
                    </Grid>
                    <Grid item xs={12}>
                    <TextField
                        required
                        fullWidth
                        name="confirmPassword"
                        label="Confirm-Password"
                        type="password"
                        id="confirm-password"
                        autoComplete="confirm-password"
                        onChange={handleChange}
                    />
                    {errors.confirmPassword && <span class="error">{errors.confirmPassword}</span>}
                    </Grid>
                    {/* <Grid item xs={12}>
                    <FormControlLabel
                        control={<Checkbox value="allowExtraEmails" color="primary" />}
                        label="I want to receive inspiration, marketing promotions and updates via email."
                    />
                    </Grid> */}
                </Grid>
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                    onClick={handleSubmit}
                >
                    Sign Up
                </Button>
                <Grid container justifyContent="center">
                    <Grid item>
                    <Link href="/signIn" variant="body2">
                        Already have an account? Sign in
                    </Link>
                    </Grid>
                </Grid>
                </Box>
            </Box>
            <Copyright sx={{ mt: 5 }} />
            </Container>
        </ThemeProvider>
    );
}