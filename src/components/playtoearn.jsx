const PlayToEarn = () => {
  return (
    <div className="PlayToEarn">
      <div className="playtoearn_title">
        <p className="playtoearn_primaryTitle">PLAY TO EARN</p>
        <p className="playtoearn_description">
            We have been bringing the best gaming experiences to every pocket & beyond!
        </p>
      </div>
      <div className="playtoearn_image">
          <div className="flappy_shiba">
            <img src="img/flappy_shiba.png"/>
            <p className="flappy_shiba_title playtoeanr_title"><b>FLAPY-SHIBA</b></p>
            <p className="flappy_shiba_subtitle playtoeanr_subtitle">ACTION/ADVENTURE, SINGLE-PLAYER</p>            
          </div>
          <div className="shiba_hunter">
            <img src="img/shiba_hunter.png"/>
            <p className="shiba_hunter_title playtoeanr_title"><b>SHIBA HUNTER</b></p>
            <p className="shiba_hunter_subtitle playtoeanr_subtitle">ACTION/ADVENTURE, SINGLE-PLAYER</p>
          </div>
          <div className="shiba_run">
            <img src="img/shiba_run.png"/>
            <p className="shiba_run_title playtoeanr_title"><b>SHIBA RUN</b></p>
            <p className="shiba_run_subtitle playtoeanr_subtitle"> ENDLESS RUNNER, SINGLE-PLAYER</p>
          </div>
      </div>
    </div>
  );
};

export default PlayToEarn;
