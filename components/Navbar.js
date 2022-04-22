export default function Navbar({ children }) {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-dark bg-dark container-fluid"
        id="navbar"
      >
        <a className="navbar-brand" href="./">
          <img
            className="img-fluid rounded float-start"
            id="main-logo"
            src="./logo.svg"
            alt="logo"
            style={{ height: "50px" }}
            onError="this.onerror=null;this.src='./assets/img/logo.svg';"
          />
        </a>
        <a className="navbar-brand" href="./">
          guidotorresmx
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" href="./blog/">
                Blog
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="./eleventy-website/about.html">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="./business-plan/">
                Business Plan
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="./react-website/">
                Small demo
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="./ephemeral-films/">
                Movies demo
              </a>
            </li>
          </ul>
          <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </nav>
    </>
  );
}
