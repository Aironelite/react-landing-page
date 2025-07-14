const Navbal = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand text-light" href="#">Navbar</a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active text-white-50 fw-semibold" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white-50 fw-semibold" href="#">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white-50 fw-semibold" href="#">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    // <nav className="navbar navbar-expand-lg bg-dark">
    // <div className="container-fluid">
    // <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
    // <span className="navbar-toggler-icon"></span>
    //</button>
    //<div className="d-flex " id="navbarTogglerDemo01">
    //<a className="navbar-brand text-light fw-semibold" href="#">Start Boostrap</a>
    //</div>
    // <div className="collapse navbar-collapse">
    // <ul className="navbar-nav me-auto mb-2 mb-lg-0">
    // <li className="nav-item">
    //  <a className="nav-link active text-white-50 fw-semibold" aria-current="page" href="#">Home</a>
    // </li>
    // <li className="nav-item">
    //  >
    // </li>
    // <li className="nav-item">
    //  <a className="nav-link text-white-50 fw-semibold" href="#" >Service</a>
    // </li>
    // 
    //  
    // </li>
    //  </ul>

    // </div>
    // </div>
    // </nav>
  );
};

export default Navbal; 