import AudioPlayer from "./components/AudioPlayer";
import NavMenu from "./components/NavMenu";
// import PlayList from "./components/PlayList";
import SideBar from "./components/SideBar";
// import Track from "./components/Track";
import TrackList from "./components/TrackList";

function Index() {
  return (
    <div className="wrapper">
      <div className="container">
        <main className="main">
          <NavMenu />
          <TrackList />
          <SideBar />
        </main>
        <AudioPlayer />
        <footer className="footer"></footer>
      </div>
    </div>
  );
}

export default Index;
