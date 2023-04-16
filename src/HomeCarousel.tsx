export default function HomeCarousel() {
  return (
    <div className="container-fluid px-0 mb-5">
      <div id="header-carousel" className="carousel slide carousel-fade" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img className="w-100" src="img/Bike.png" alt="Image" />
            <div className="carousel-caption">
              <div className="container">
                <div className="row justify-content-start">
                  <div className="col-lg-7 text-start">
                    <p className="fs-4 text-white animated slideInRight">Von der Nummer 
                        <strong> Eins</strong>
                    </p>
                    <h1 className="display-1 text-white mb-4 animated slideInRight">Qualitätsfahrräder</h1>
                    <a href="test.html" target="_blank" className="btn btn-primary rounded-pill py-3 px-5 animated slideInLeft">
                        Erfahren Sie mehr
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <img className="w-100" src="img/Bike.png" alt="Image" />
            <div className="carousel-caption">
              <div className="container">
                <div className="row justify-content-end">
                  <div className="col-lg-7 text-end">
                    <p className="fs-4 text-white animated slideInLeft">Die Webseite mit der 
                      <strong> Besten</strong>
                    </p>
                    <h1 className="display-1 text-white mb-5 animated slideInLeft">Preis-Leistung</h1>
                    <a href="test.html" target="_blank" className="btn btn-primary rounded-pill py-3 px-5 animated slideInLeft">Erfahren Sie mehr</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#header-carousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Zurück</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#header-carousel" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Weiter</span>
        </button>
      </div>
    </div>
  );
}
