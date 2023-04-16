import React from "react";
import { useParams } from 'react-router';
import Footer from "../Footer";
import { Link } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import getAxios from "../Axios";
import { BikeType, UserType } from "../Types";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import { Oval } from  'react-loader-spinner'

export default function Booking() {
  const { id } = useParams();

  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [authUser, setAuthUser] = React.useState<UserType>();
  const [bike, setBike] = React.useState<BikeType>();
  const [forTime, setForTime] = React.useState<number>(12);
  const [errors, setErrors] = React.useState<string>();

  function getAuthUser() {
    getAxios().get('/backend/interface/login.php')
      .then(function (response) {
        setIsLoggedIn(response.data.isAuthenticated);
        setAuthUser(response.data.authUser);
      })
      .catch(function (error) {
        console.log(error)
        window.open('/login', '_self');
      });
  }

  function getBike() {
    getAxios().get(`/backend/interface/bike.php?bike-id=${id}`)
    .then(function (response) {
      setBike(response.data.bike);
    })
    .catch(function (error) {
      console.log(error)
      window.open('/login', '_self');
    });
  }

  React.useEffect(() => {
    getAuthUser();
    getBike();
  }, []);

  function onSubmit(e: any) {
    e.preventDefault();
    getAxios().post('/backend/interface/booking.php', {
        bikeId: bike!!.id!!,
        for: forTime
      })
      .then(function (response) {
        console.log(response)
        if(!response.data.error) {
          window.open('/dashboard', '_self');
        } else {
          setErrors(response.data.errorMsg);
        }
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
      <Typography textAlign='center' variant="h4">Ihre Buchungsdetails</Typography>
    </Stack>
    <div className="container-xxl py-5">
      <div className="container">
        {!isLoggedIn ? (
          <Stack style={{ alignItems: 'center' }}>  
            <Oval
              height={80}
              width={80}
              color="#4fa94d"
              wrapperStyle={{}}
              wrapperClass=""
              visible={true}
              ariaLabel='oval-loading'
              secondaryColor="#4fa94d"
              strokeWidth={2}
              strokeWidthSecondary={2} 
            />
          </Stack>
        ) : (
          bike === undefined ? (
            <Oval
              height={80}
              width={80}
              color="#4fa94d"
              wrapperStyle={{}}
              wrapperClass=""
              visible={true}
              ariaLabel='oval-loading'
              secondaryColor="#4fa94d"
              strokeWidth={2}
              strokeWidthSecondary={2} 
            />
          ) : (
            <form onSubmit={onSubmit}>
              {errors && <Typography variant='h5' textAlign='center' style={{ color: 'red', marginBottom: '25px' }}>{errors}</Typography>}
              <TableContainer component={Paper} style={{ marginBottom: '25px' }}>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>ID</TableCell>
                      <TableCell >Fahrradart</TableCell>
                      <TableCell >Beschreibung</TableCell>
                      <TableCell align="right">Preis in € pro Monat</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow key={bike!!.id}>
                      <TableCell component="th" scope="row">
                        {bike!!.id}
                      </TableCell>
                      <TableCell >{bike!!.type}</TableCell>
                      <TableCell >{bike!!.description}</TableCell>
                      <TableCell align="right">{bike!!.price} €</TableCell>
                    </TableRow>
                  </TableBody>
                  </Table>
                </TableContainer>
              <Grid container direction='column' alignContent='center' spacing={5}>
                <Grid item>
                  <FormControl>
                    <FormLabel id="forTime">Dauer der Buchung</FormLabel>
                    <RadioGroup
                      defaultValue={12}
                      name="forTime"
                      onChange={(e: any) => setForTime(e.target.value)}
                    >
                      <FormControlLabel value={3} control={<Radio />} label="3 Monate" />
                      <FormControlLabel value={6} control={<Radio />} label="6 Monate" />
                      <FormControlLabel value={9} control={<Radio />} label="9 Monate" />
                      <FormControlLabel value={12} control={<Radio />} label="12 Monate" />
                    </RadioGroup>
                  </FormControl>
                </Grid>
                <Grid item>
                  <FormControl>
                    <FormLabel id="forTime">Bezahlmethode</FormLabel>
                    <RadioGroup
                      defaultValue='paypal'
                    >
                      <FormControlLabel value='paypal' control={<Radio />} label="Paypal" />
                    </RadioGroup>
                  </FormControl>
                </Grid>
                <Grid item >
                  <Button type="submit" variant="contained">Jetzt Buchen!</Button>
                </Grid>
              </Grid>
            </form>
          )
        )}
      </div>
    </div>

    <Footer />
    <Link to="/" className="btn btn-lg btn-primary btn-lg-square rounded-circle nachOben"><i className="bi bi-arrow-up"></i></Link>
  </>
  );
}
