import React from "react";
import { BikeType } from "./Types";
import { BACKEND_BASE_URL } from "./Axios";
import { Link } from 'react-router-dom';

type Props = {
  bike: BikeType;
}

export default function Bike({bike}: Props) {
  const [imageLink, setImageLink] = React.useState<string>();

  React.useEffect(() => {
    setImageLink(`${BACKEND_BASE_URL}/backend/public/${bike.id}/img.png`);
  }, []);

  return (
    <div className="fahrraeder-kachel mb-5" key={bike.id}>
      <div className="position-relative">
        <img 
          className="img-fluid" 
          src={imageLink}
          onError={({ currentTarget }) => {
            currentTarget.onerror = null; // prevents looping
            setImageLink(`${BACKEND_BASE_URL}/backend/public/404.jpg`);
            currentTarget.src=`${BACKEND_BASE_URL}/backend/public/404.jpg`;
          }}
        />
        <div className="project-overlay">
          <a 
            className="btn btn-lg-square btn-light rounded-circle m-1" 
            href={imageLink} 
            data-lightbox="project">
              <i className="fa fa-eye"></i>
          </a>
          <Link className="btn btn-lg-square btn-light rounded-circle m-1" to={`booking/${bike.id}`}><i className="fa fa-link"></i></Link>
        </div>
      </div>
      <div className="p-4">
        <a className="d-block h5" href="">{bike.type}</a>
        <span>{bike.description}</span>
      </div>
    </div>
  );
}