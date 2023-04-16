import React from "react";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import getAxios, { BACKEND_BASE_URL } from "./Axios";
import { BikeType } from "./Types";
import { Oval } from  'react-loader-spinner'
import { Link } from 'react-router-dom';
import Bike from "./Bike";

export default function BikesCarousel() {

  const [bikes, setBikes] = React.useState<BikeType[]>();

  function getBikes() {
    getAxios().get('/backend/interface/bike.php')
      .then(function (response) {
        setBikes(response.data.bikes);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  React.useEffect(() => {
    getBikes();
  }, []);
  
  return (
    <div className="container-xxl pt-5">
      <div className="container">
        <div className="text-center text-md-start pb-5 pb-md-0 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: '500px' }}>
          <p className="fs-5  text-primary">Fahrradübersicht</p>
          <h1 className="display-5 mb-5">Genießen Sie eines unserer Fahrräder persönlich</h1>
        </div>
        {bikes === undefined ? (
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
          <OwlCarousel className="fahrrad-carousel wow fadeInUp" margin={10} nav data-wow-delay="0.1s">
            {bikes!!.map((bike) => 
              <Bike key={bike.id} bike={bike} />
            )}
          </OwlCarousel>
        )}
      </div>
    </div>
  );
}
