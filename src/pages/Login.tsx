import React from "react";
import Footer from "../Footer";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import { Link } from 'react-router-dom';
import getAxios from "../Axios";

export default function Login() {

  const [email, setEmail] = React.useState<string>();
  const [password, setPassword] = React.useState<string>();
  const [errors, setErrors] = React.useState<string>();

  function onSubmit(e: any) {
    e.preventDefault();
    getAxios().post('/backend/interface/login.php', {
        email: email,
        password: password
      })
      .then(function (_) {
        window.open('/', '_self');
      })
      .catch(function (error) {
        console.log(error)
        if (error.response.data.errorMsg != undefined) {
          setErrors(error.response.data.errorMsg);
        } else {
          setErrors(error.message);
        }
      });
  }

  return (
    <>
      <Stack style={{ marginTop: 20 }}>
        <Typography textAlign='center' variant="h4">Loginseite</Typography>
      </Stack>
      <div className="container-xxl py-5">
        <div className="container">
          <form onSubmit={onSubmit}>
            {errors && <Typography variant='h5' textAlign='center' style={{ color: 'red', marginBottom: '25px' }}>{errors}</Typography>}
            <Grid container direction='column' alignItems='center' alignContent='center' spacing={2}>
              <Grid item>
                <TextField required label="Email" onChange={(e: any) => setEmail(e.target.value)} />
              </Grid>
              <Grid item>
                <TextField required label="Passwort" type="password" onChange={(e: any) => setPassword(e.target.value)} />
              </Grid>
              <Grid item >
                <Button type="submit" variant="contained">Login</Button>
              </Grid>
              <Grid item>
                <Link to="/register"><Button variant="text">Neu hier? Hier klicken zum Registrieren</Button></Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </div>

      <Footer />
      <Link to="/" className="btn btn-lg btn-primary btn-lg-square rounded-circle nachOben"><i className="bi bi-arrow-up"></i></Link>
    </>
  );
}
