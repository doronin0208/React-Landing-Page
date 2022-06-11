const Navigation = () => {
  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <span className="navbar-logo" href="#page-top">
            <img src="/img/logo.png" alt="logo" width="110" height="110" />
          </span>
        </div>
        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <a className="page-scroll">
            INTRODUCTION
          </a>
          <a className="page-scroll">
            WANKABUSIB
          </a>
          <a className="page-scroll">
            LAUNCHPAD
          </a>
          <a className="page-scroll">
            TOKENOMICS
          </a>
          <a className="page-scroll">
            OUR PARTNERS
          </a>
          <a className="page-scroll">
            ROAD MAP
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;