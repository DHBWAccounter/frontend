import React from "react";
import { BookingState, UserBookings, UserType } from "../Types";
import getAxios from "../Axios";
import Grid from '@mui/material/Grid';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { Link } from 'react-router-dom';
import Footer from "../Footer";
import { Oval } from  'react-loader-spinner'

export default function Dashboard() {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [authUser, setAuthUser] = React.useState<UserType>();
  const [userBookings, setUserBookings] = React.useState<UserBookings[]>();

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

  function getUserBookings() {
    getAxios().get('/backend/interface/booking.php')
      .then(function (response) {
        setUserBookings(response.data.bookings);
      })
      .catch(function (error) {
        console.log(error)
        window.open('/login', '_self');
      });
  }

  React.useEffect(() => {
    getAuthUser();
    getUserBookings();
  }, []);

  return (
    <>
      <Stack style={{ marginTop: 20 }}>
        <Typography textAlign='center' variant="h4">Übersichtsseite</Typography>
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
            <Grid container spacing={4} style={{ padding: 20 }} direction='column'>
              <Grid item xs={12}>
                <Grid container direction='column' spacing={2}>
                  <Grid item>
                    <Stack direction='row' spacing={1}>
                      <Avatar>
                        {authUser?.firstname[0]}{authUser?.lastname[0]}
                      </Avatar>
                      <Typography variant="h4">
                        {authUser?.firstname} {authUser?.lastname}
                      </Typography>
                    </Stack>
                  </Grid>
                  <Grid item>
                    <Typography variant="h6">
                      {authUser?.email}
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography variant="body2">
                      {authUser?.address}
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item>
                <Typography variant="h3">
                  Buchungen
                </Typography>
              </Grid>
              <Grid item>
                {userBookings != undefined && 
                  <TableContainer component={Paper}>
                    <Table>
                      <TableHead>
                        <TableRow>
                          <TableCell>ID</TableCell>
                          <TableCell align="right">Buchdatum</TableCell>
                          <TableCell align="right">Ablaufdatum</TableCell>
                          <TableCell align="right">Preis</TableCell>
                          <TableCell align="right">Status</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {userBookings.map((booking) => (
                          <TableRow key={booking.id}>
                            <TableCell component="th" scope="row">
                              {booking.id}
                            </TableCell>
                            <TableCell align="right">{booking.date}</TableCell>
                            <TableCell align="right">{booking.expiration}</TableCell>
                            <TableCell align="right">{booking.price} €</TableCell>
                            <TableCell align="right" style={{ color: booking.state == BookingState.BOOKED ? 'red' : 'grey' }}>
                              {booking.state}
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                }
              </Grid>
            </Grid>
          )}
        </div>
      </div>
      
      <Footer />
      <Link to="/" className="btn btn-lg btn-primary btn-lg-square rounded-circle nachOben"><i className="bi bi-arrow-up"></i></Link>
    </>
  );
}
