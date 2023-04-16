import React from "react";
import Footer from "../Footer";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import { Link } from 'react-router-dom';
import getAxios from "../Axios";

export default function Register() {

  const [firstname, setFirstname] = React.useState<string>();
  const [lastname, setLastname] = React.useState<string>();
  const [address, setAddress] = React.useState<string>();
  const [email, setEmail] = React.useState<string>();
  const [password, setPassword] = React.useState<string>();
  const [errors, setErrors] = React.useState<string>();

  function onSubmit(e: any) {
    e.preventDefault();
    getAxios().post('/backend/interface/register.php', {
        firstname: firstname,
        lastname: lastname,
        address: address,
        email: email,
        password: password
      })
      .then(function (_) {
        window.open('/login', '_self');
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
        <Typography textAlign='center' variant="h4">Registrierungsseite</Typography>
      </Stack>
      <div className="container-xxl py-5">
        <div className="container">
          <form onSubmit={onSubmit}>
            {errors && <Typography variant='h5' textAlign='center' style={{ color: 'red', marginBottom: '25px' }}>{errors}</Typography>}
            <Grid container direction='column' alignItems='center' alignContent='center' spacing={2}>
              <Grid item>
                <TextField required label="Vorname" onChange={(e: any) => setFirstname(e.target.value)} />
              </Grid>
              <Grid item>
                <TextField required label="Nachname" onChange={(e: any) => setLastname(e.target.value)} />
              </Grid>
              <Grid item>
                <TextField required label="Adresse" onChange={(e: any) => setAddress(e.target.value)} />
              </Grid>
              <Grid item>
                <TextField required type="Email" label="email" onChange={(e: any) => setEmail(e.target.value)} />
              </Grid>
              <Grid item>
                <TextField required label="Passwort" type="password" onChange={(e: any) => setPassword(e.target.value)} />
              </Grid>
              <Grid item >
                <Button type="submit" variant="contained">Registrieren</Button>
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
