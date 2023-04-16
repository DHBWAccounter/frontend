export default function TeamCarousel() {
  return (
    <div className="container-xxl py-5">
  <div className="container">
    <div className="text-center mx-auto wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: '500px' }}>
      <p className="fs-5  text-primary">Über uns</p>
      <h1 className="display-5 mb-5">Das Team hinter Blitzschnelle Räder</h1>
    </div>
    <div className="row g-4">
      <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
        <div className="unserTeam rounded overflow-hidden pb-4" style={{ paddingTop: '2rem' }}>
          <i className="fas fa-user-tie img-fluid mb-4" style={{ fontSize: '6rem' }}></i>
          <h5>Max Mustermann</h5>
          <span className="text-primary">Gründer und Geschäftsführer</span>
          <ul className="team-social">
            <li><a className="btn btn-square" href=""><i className="fab fa-linkedin-in"></i></a></li>
          </ul>
        </div>
      </div>
      <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
        <div className="unserTeam rounded overflow-hidden pb-4" style={{ paddingTop: '2rem' }}>
          <i className="fas fa-user-astronaut img-fluid mb-4" style={{ fontSize: '6rem' }}></i>
          <h5>Maxina Musterfrau</h5>
          <span className="text-primary">Gründer und Geschäftsführer</span>
          <ul className="team-social">
            <li><a className="btn btn-square" href=""><i className="fab fa-linkedin-in"></i></a></li>
          </ul>
        </div>
      </div>
      <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
        <div className="unserTeam rounded overflow-hidden pb-4" style={{ paddingTop: '2rem' }}>
          <i className="fas fa-user-secret img-fluid mb-4" style={{ fontSize: '6rem' }}></i>
          <h5>Tom Toastbrot</h5>
          <span className="text-primary">Finanzvorstand</span>
          <ul className="team-social">
            <li><a className="btn btn-square" href=""><i className="fab fa-linkedin-in"></i></a></li>
          </ul>
        </div>
      </div>
      <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.7s">
        <div className="unserTeam rounded overflow-hidden pb-4" style={{ paddingTop: '2rem' }}>
        <i className="fas fa-user-nurse img-fluid mb-4" style={{ fontSize: '6rem' }}></i>
          <h5>Thea Tentakel</h5>
          <span className="text-primary">Marketingsvorstand</span>
          <ul className="team-social">
            <li><a className="btn btn-square" href=""><i className="fab fa-linkedin-in"></i></a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</div>


  );
}
