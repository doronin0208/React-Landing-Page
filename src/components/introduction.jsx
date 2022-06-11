const Introduction = () => {
  return (
    <div className="introduction">
      <div className="primarytitle">
        <p>INTRODUCTION</p>
      </div>
      <div className="bodycontent">
        <div className="leftContent">
          <div className="leftContentTop">
            <p className="secondarytitle">OVERVIEW</p>
            <p className="secondary_subtitle">
              The Wanka Shiba Is A Multi-Chain Automatic Market Maker(AMM),
              Connecting Blockchains Such As ETH, BSC, Polygon,...,Overcoming
              The Situation Of Processing Speed Per Transaction Of Ethereum. The
              Wnka Shiba (TWS) Is Proud To Be The DEX That Will Attract
              Community Throuh Activities And Rewards That TWS Launches In The
              Future
            </p>
            <button className="learnmore">
              {" "}
              <b>Learn More</b>
            </button>
          </div>
          <img
            className="leftImage"
            src="/img/Introduction_left.png"
            alt="introduction_left"
          />
        </div>
        <div className="rightContent">
          <div className="firstrightContent">
            <img src="/img/solana-sol-logo 1.png" alt="solana"/>
            <p>Solana</p>
          </div>
          <div className="secondrightContent">
            <div className="ETH_Content">
              <img className="binance" src="/img/binance-coin-bnb-logo 1.png" alt="binance"/>
              <p>ETH</p>
            </div>
            <div>
              <img src="/img/introduction_right.png" alt="intro"/>
            </div>
            <div  className="BSC_Content">
              <img src="/img/toppng 1.png" alt="binance"/>
              <p>BSC</p>
            </div>
          </div>
          <div className="thirdrightContent">
            <img src="/img/solana-sol-logo 1.png" alt="solana"/>
            <p>Polygon</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
