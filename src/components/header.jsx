const Header = ({ data }) => {

  return (
    <header id="header">
      <div className="banner">
        <img src="/img/banner.png" alt="banner" />
        <div className="title">
          <p className="headingTitle">WELCOME TO </p>
          <div className="centerTitle">
            <p>THE WANKA</p>
            <p> SHIBA</p>
          </div>
          <div className="bottomTitle">
            <p>The Wanka Shiba is decentralized exchange,</p>
            <p>
              integrating <b>Enhanced Privacy</b> and <b>new Features</b>
            </p>
            <p>
              to come to the <b>DEFI generation</b>
            </p>
          </div>
          <div className="navbutton">
            <button className="app">
              <b>Go To App</b>
            </button>
            <button className="doc">
              <b>Go To Doc</b>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header