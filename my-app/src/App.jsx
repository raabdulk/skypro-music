import AudioPlayer from "./components/AudioPlayer";
import NavMenu from "./components/NavMenu";
import PlayList from "./components/PlayList";
// import Track from "./components/Track";
import TrackList from "./components/TrackList";

function Index() {
  return (
    <div className="wrapper">
      <div className="container">
        <main className="main">
          <NavMenu />
          <TrackList />

          <div className="main__sidebar sidebar">
            <div className="sidebar__personal">
              <p className="sidebar__personal-name">Sergey.Ivanov</p>
              <div className="sidebar__icon">
                <svg alt="logout">
                  <use xlinkHref="img/icon/sprite.svg#logout"></use>
                </svg>
              </div>
            </div>
            <div className="sidebar__block">
              <div className="sidebar__list">
                <PlayList />
                <div className="sidebar__item">
                  <a className="sidebar__link" xlinkHref="#">
                    <img
                      className="sidebar__img"
                      src="img/playlist02.png"
                      alt="day's playlist"
                    />
                  </a>
                </div>
                <div className="sidebar__item">
                  <a className="sidebar__link" xlinkHref="#">
                    <img
                      className="sidebar__img"
                      src="img/playlist03.png"
                      alt="day's playlist"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </main>
        <AudioPlayer />
        <footer className="footer"></footer>
      </div>
    </div>
  );
}

export default Index;
