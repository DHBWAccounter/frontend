export default function StatusBar() {
  return (
    <div className="container-fluid bg-dark">
      <div className="d-none d-lg-flex">
        <div className="col-lg-7 px-4">
          <div className="h-100 d-inline-flex align-items-center me-4">
            <small className="fa fa-map-marker-alt text-primary me-2"></small>
            <small>Coblitzallee 1-9, 68163 Mannheim</small>
          </div>
          <div className="d-inline-flex align-items-center">
            <small className="far fa-clock text-primary me-2"></small>
            <small>Kundensupport Mo. - Fr. 7 bis 19 Uhr erreichbar</small>
          </div>
        </div>
        <div className="col-lg-5 px-5 text-end">
          <div className="d-inline-flex align-items-center me-4">
            <small className="fa fa-phone-alt text-primary me-2"></small>
            <small>0621 41050</small>
          </div>
          <div className="d-inline-flex align-items-center mx-n2">
            <a className="btn btn-square btn-link rounded-0 border-0 border-end border-secondary" href=""><i className="fab fa-linkedin-in"></i></a>
            <a className="btn btn-square btn-link rounded-0 border-0 border-end border-secondary" href=""><i className="fab fa-facebook-f"></i></a>
            <a className="btn btn-square btn-link rounded-0 border-0 border-end border-secondary" href=""><i className="fab fa-instagram"></i></a>
            <a className="btn btn-square btn-link rounded-0" href=""><i className="fab fa-twitter"></i></a>
          </div>
        </div>
      </div>
    </div>
  );
}
