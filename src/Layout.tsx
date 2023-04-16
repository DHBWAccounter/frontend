import React from "react";
import { Outlet, Link } from "react-router-dom";
import StatusBar from "./StatusBar";
import getAxios from "./Axios";
import { UserType } from "./Types";
import Impressum from "./pages/Impressum";

export default function Layout() {

  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [authUser, setAuthUser] = React.useState<UserType>();

  function getAuthUser() {
    getAxios().get('/backend/interface/login.php')
      .then(function (response) {
        setIsLoggedIn(response.data.isAuthenticated);
        setAuthUser(response.data.authUser);
      });
  }

  React.useEffect(() => {
    getAuthUser();
  }, []);

  function logout() {
    getAxios().post('/backend/interface/logout.php')
    .then(function (_) {
      window.open('/', '_self');
    });
  }

  return (
    <>
      <StatusBar />
      <nav className="navbar navbar-expand-lg navbar-light sticky-top py-0 pe-4">
        <Link to="/" className="navbar-brand ps-5">
          <h1 className="text-white ">Blitzschnelle Räder</h1>
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Navigation umschalten">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <div className="navbar-nav ms-auto p-4 p-lg-0">

            {isLoggedIn &&
              <li className="nav-item dropdown">
                  <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">{ authUser!!.firstname }</a>
                  <ul className="dropdown-menu">
                  <li><Link to="dashboard" className="dropdown-item">Profil</Link></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" href="#" onClick={logout}>Logout</a></li>
                  </ul>
              </li>
            }
            <Link to="impressum" className="nav-item nav-link">Impressum</Link>
            <Link to="/" className="nav-item nav-link active">Home</Link>

            {!isLoggedIn && <Link to="login" className="nav-item nav-link">Login</Link> }
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
}
