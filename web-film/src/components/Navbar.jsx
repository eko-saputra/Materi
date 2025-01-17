function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-warning fixed-top">
        <div className="container">
          <a className="navbar-brand" href="#">
            <h1>WebFILM</h1>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  <b>TRENDING</b>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <b>SUPERHERO</b>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
