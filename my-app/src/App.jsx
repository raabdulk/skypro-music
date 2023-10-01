import AudioPlayer from "./components/AudioPlayer";
import NavMenu from "./components/NavMenu";
import PlayList from "./components/PlayList";

function Index() {
  return (
    <div className="wrapper">
      <div className="container">
        <main className="main">
          <NavMenu />
          <div className="main__centerblock centerblock">
            <div className="centerblock__search search">
              <svg className="search__svg">
                <use xlinkHref="img/icon/sprite.svg#icon-search"></use>
              </svg>
              <input
                className="search__text"
                type="search"
                placeholder="Поиск"
                name="search"
              />
            </div>
            <h2 className="centerblock__h2">Треки</h2>
            <div className="centerblock__filter filter">
              <div className="filter__title">Искать по:</div>
              <div className="filter__button button-author _btn-text">
                исполнителю
              </div>
              <div className="filter__button button-year _btn-text">
                году выпуска
              </div>
              <div className="filter__button button-genre _btn-text">жанру</div>
            </div>
            <div className="centerblock__content">
              <div className="content__title playlist-title">
                <div className="playlist-title__col col01">Трек</div>
                <div className="playlist-title__col col02">ИСПОЛНИТЕЛЬ</div>
                <div className="playlist-title__col col03">АЛЬБОМ</div>
                <div className="playlist-title__col col04">
                  <svg className="playlist-title__svg" alt="time">
                    <use xlinkHref="img/icon/sprite.svg#icon-watch"></use>
                  </svg>
                </div>
              </div>
              <div className="content__playlist playlist">
                <div className="playlist__item">
                  <div className="playlist__track track">
                    <div className="track__title">
                      <div className="track__title-image">
                        <svg className="track__title-svg" alt="music">
                          <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                        </svg>
                      </div>
                      <div className="track__title-text">
                        <a className="track__title-link" xlinkHref="http://">
                          Guilt <span className="track__title-span"></span>
                        </a>
                      </div>
                    </div>
                    <div className="track__author">
                      <a className="track__author-link" xlinkHref="http://">
                        Nero
                      </a>
                    </div>
                    <div className="track__album">
                      <a className="track__album-link" xlinkHref="http://">
                        Welcome Reality
                      </a>
                    </div>
                    <div className="track__time">
                      <svg className="track__time-svg" alt="time">
                        <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                      </svg>
                      <span className="track__time-text">4:44</span>
                    </div>
                  </div>
                </div>

                <div className="playlist__item">
                  <div className="playlist__track track">
                    <div className="track__title">
                      <div className="track__title-image">
                        <svg className="track__title-svg" alt="music">
                          <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                        </svg>
                      </div>
                      <div className="track__title-text">
                        <a className="track__title-link" xlinkHref="http://">
                          Elektro <span className="track__title-span"></span>
                        </a>
                      </div>
                    </div>
                    <div className="track__author">
                      <a className="track__author-link" xlinkHref="http://">
                        Dynoro, Outwork, Mr. Gee
                      </a>
                    </div>
                    <div className="track__album">
                      <a className="track__album-link" xlinkHref="http://">
                        Elektro
                      </a>
                    </div>
                    <div className="track__time">
                      <svg className="track__time-svg" alt="time">
                        <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                      </svg>
                      <span className="track__time-text">2:22</span>
                    </div>
                  </div>
                </div>

                <div className="playlist__item">
                  <div className="playlist__track track">
                    <div className="track__title">
                      <div className="track__title-image">
                        <svg className="track__title-svg" alt="music">
                          <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                        </svg>
                      </div>
                      <div className="track__title-text">
                        <a className="track__title-link" xlinkHref="http://">
                          I’m Fire <span className="track__title-span"></span>
                        </a>
                      </div>
                    </div>
                    <div className="track__author">
                      <a className="track__author-link" xlinkHref="http://">
                        Ali Bakgor
                      </a>
                    </div>
                    <div className="track__album">
                      <a className="track__album-link" xlinkHref="http://">
                        I’m Fire
                      </a>
                    </div>
                    <div className="track__time">
                      <svg className="track__time-svg" alt="time">
                        <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                      </svg>
                      <span className="track__time-text">2:22</span>
                    </div>
                  </div>
                </div>

                <div className="playlist__item">
                  <div className="playlist__track track">
                    <div className="track__title">
                      <div className="track__title-image">
                        <svg className="track__title-svg" alt="music">
                          <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                        </svg>
                      </div>
                      <div className="track__title-text">
                        <a className="track__title-link" xlinkHref="http://">
                          Non Stop
                          <span className="track__title-span">(Remix)</span>
                        </a>
                      </div>
                    </div>
                    <div className="track__author">
                      <a className="track__author-link" xlinkHref="http://">
                        Стоункат, Psychopath
                      </a>
                    </div>
                    <div className="track__album">
                      <a className="track__album-link" xlinkHref="http://">
                        Non Stop
                      </a>
                    </div>
                    <div className="track__time">
                      <svg className="track__time-svg" alt="time">
                        <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                      </svg>
                      <span className="track__time-text">4:12</span>
                    </div>
                  </div>
                </div>

                <div className="playlist__item">
                  <div className="playlist__track track">
                    <div className="track__title">
                      <div className="track__title-image">
                        <svg className="track__title-svg" alt="music">
                          <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                        </svg>
                      </div>
                      <div className="track__title-text">
                        <a className="track__title-link" xlinkHref="http://">
                          Run Run
                          <span className="track__title-span">
                            (feat. AR/CO)
                          </span>
                        </a>
                      </div>
                    </div>
                    <div className="track__author">
                      <a className="track__author-link" xlinkHref="http://">
                        Jaded, Will Clarke, AR/CO
                      </a>
                    </div>
                    <div className="track__album">
                      <a className="track__album-link" xlinkHref="http://">
                        Run Run
                      </a>
                    </div>
                    <div className="track__time">
                      <svg className="track__time-svg" alt="time">
                        <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                      </svg>
                      <span className="track__time-text">2:54</span>
                    </div>
                  </div>
                </div>

                <div className="playlist__item">
                  <div className="playlist__track track">
                    <div className="track__title">
                      <div className="track__title-image">
                        <svg className="track__title-svg" alt="music">
                          <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                        </svg>
                      </div>
                      <div className="track__title-text">
                        <a className="track__title-link" xlinkHref="http://">
                          Eyes on Fire
                          <span className="track__title-span">
                            (Zeds Dead Remix)
                          </span>
                        </a>
                      </div>
                    </div>
                    <div className="track__author">
                      <a className="track__author-link" xlinkHref="http://">
                        Blue Foundation, Zeds Dead
                      </a>
                    </div>
                    <div className="track__album">
                      <a className="track__album-link" xlinkHref="http://">
                        Eyes on Fire
                      </a>
                    </div>
                    <div className="track__time">
                      <svg className="track__time-svg" alt="time">
                        <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                      </svg>
                      <span className="track__time-text">5:20</span>
                    </div>
                  </div>
                </div>

                <div className="playlist__item">
                  <div className="playlist__track track">
                    <div className="track__title">
                      <div className="track__title-image">
                        <svg className="track__title-svg" alt="music">
                          <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                        </svg>
                      </div>
                      <div className="track__title-text">
                        <a className="track__title-link" xlinkHref="http://">
                          Mucho Bien
                          <span className="track__title-span">
                            (Hi Profile Remix)
                          </span>
                        </a>
                      </div>
                    </div>
                    <div className="track__author">
                      <a className="track__author-link" xlinkHref="http://">
                        HYBIT, Mr. Black, Offer Nissim, Hi Profile
                      </a>
                    </div>
                    <div className="track__album">
                      <a className="track__album-link" xlinkHref="http://">
                        Mucho Bien
                      </a>
                    </div>
                    <div className="track__time">
                      <svg className="track__time-svg" alt="time">
                        <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                      </svg>
                      <span className="track__time-text">3:41</span>
                    </div>
                  </div>
                </div>

                <div className="playlist__item">
                  <div className="playlist__track track">
                    <div className="track__title">
                      <div className="track__title-image">
                        <svg className="track__title-svg" alt="music">
                          <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                        </svg>
                      </div>
                      <div className="track__title-text">
                        <a className="track__title-link" xlinkHref="http://">
                          Knives n Cherries
                          <span className="track__title-span"></span>
                        </a>
                      </div>
                    </div>
                    <div className="track__author">
                      <a className="track__author-link" xlinkHref="http://">
                        minthaze
                      </a>
                    </div>
                    <div className="track__album">
                      <a className="track__album-link" xlinkHref="http://">
                        Captivating
                      </a>
                    </div>
                    <div className="track__time">
                      <svg className="track__time-svg" alt="time">
                        <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                      </svg>
                      <span className="track__time-text">1:48</span>
                    </div>
                  </div>
                </div>

                <div className="playlist__item">
                  <div className="playlist__track track">
                    <div className="track__title">
                      <div className="track__title-image">
                        <svg className="track__title-svg" alt="music">
                          <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                        </svg>
                      </div>
                      <div className="track__title-text">
                        <a className="track__title-link" xlinkHref="http://">
                          Knives n Cherries
                          <span className="track__title-span"></span>
                        </a>
                      </div>
                    </div>
                    <div className="track__author">
                      <a className="track__author-link" xlinkHref="http://">
                        minthaze
                      </a>
                    </div>
                    <div className="track__album">
                      <a className="track__album-link" xlinkHref="http://">
                        Captivating
                      </a>
                    </div>
                    <div className="track__time">
                      <svg className="track__time-svg" alt="time">
                        <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                      </svg>
                      <span className="track__time-text">1:48</span>
                    </div>
                  </div>
                </div>
                <div className="playlist__item">
                  <div className="playlist__track track">
                    <div className="track__title">
                      <div className="track__title-image">
                        <svg className="track__title-svg" alt="music">
                          <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                        </svg>
                      </div>
                      <div className="track__title-text">
                        <a className="track__title-link" xlinkHref="http://">
                          Knives n Cherries
                          <span className="track__title-span"></span>
                        </a>
                      </div>
                    </div>
                    <div className="track__author">
                      <a className="track__author-link" xlinkHref="http://">
                        minthaze
                      </a>
                    </div>
                    <div className="track__album">
                      <a className="track__album-link" xlinkHref="http://">
                        Captivating
                      </a>
                    </div>
                    <div className="track__time">
                      <svg className="track__time-svg" alt="time">
                        <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                      </svg>
                      <span className="track__time-text">1:48</span>
                    </div>
                  </div>
                </div>
                <div className="playlist__item">
                  <div className="playlist__track track">
                    <div className="track__title">
                      <div className="track__title-image">
                        <svg className="track__title-svg" alt="music">
                          <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                        </svg>
                      </div>
                      <div className="track__title-text">
                        <a className="track__title-link" xlinkHref="http://">
                          Knives n Cherries
                          <span className="track__title-span"></span>
                        </a>
                      </div>
                    </div>
                    <div className="track__author">
                      <a className="track__author-link" xlinkHref="http://">
                        minthaze
                      </a>
                    </div>
                    <div className="track__album">
                      <a className="track__album-link" xlinkHref="http://">
                        Captivating
                      </a>
                    </div>
                    <div className="track__time">
                      <svg className="track__time-svg" alt="time">
                        <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                      </svg>
                      <span className="track__time-text">1:48</span>
                    </div>
                  </div>
                </div>
                <div className="playlist__item">
                  <div className="playlist__track track">
                    <div className="track__title">
                      <div className="track__title-image">
                        <svg className="track__title-svg" alt="music">
                          <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                        </svg>
                      </div>
                      <div className="track__title-text">
                        <a className="track__title-link" xlinkHref="http://">
                          Knives n Cherries
                          <span className="track__title-span"></span>
                        </a>
                      </div>
                    </div>
                    <div className="track__author">
                      <a className="track__author-link" xlinkHref="http://">
                        minthaze
                      </a>
                    </div>
                    <div className="track__album">
                      <a className="track__album-link" xlinkHref="http://">
                        Captivating
                      </a>
                    </div>
                    <div className="track__time">
                      <svg className="track__time-svg" alt="time">
                        <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                      </svg>
                      <span className="track__time-text">1:48</span>
                    </div>
                  </div>
                </div>
                <div className="playlist__item">
                  <div className="playlist__track track">
                    <div className="track__title">
                      <div className="track__title-image">
                        <svg className="track__title-svg" alt="music">
                          <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                        </svg>
                      </div>
                      <div className="track__title-text">
                        <a className="track__title-link" xlinkHref="http://">
                          Knives n Cherries
                          <span className="track__title-span"></span>
                        </a>
                      </div>
                    </div>
                    <div className="track__author">
                      <a className="track__author-link" xlinkHref="http://">
                        minthaze
                      </a>
                    </div>
                    <div className="track__album">
                      <a className="track__album-link" xlinkHref="http://">
                        Captivating
                      </a>
                    </div>
                    <div className="track__time">
                      <svg className="track__time-svg" alt="time">
                        <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                      </svg>
                      <span className="track__time-text">1:48</span>
                    </div>
                  </div>
                </div>
                <div className="playlist__item">
                  <div className="playlist__track track">
                    <div className="track__title">
                      <div className="track__title-image">
                        <svg className="track__title-svg" alt="music">
                          <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                        </svg>
                      </div>
                      <div className="track__title-text">
                        <a className="track__title-link" xlinkHref="http://">
                          Knives n Cherries
                          <span className="track__title-span"></span>
                        </a>
                      </div>
                    </div>
                    <div className="track__author">
                      <a className="track__author-link" xlinkHref="http://">
                        minthaze
                      </a>
                    </div>
                    <div className="track__album">
                      <a className="track__album-link" xlinkHref="http://">
                        Captivating
                      </a>
                    </div>
                    <div className="track__time">
                      <svg className="track__time-svg" alt="time">
                        <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                      </svg>
                      <span className="track__time-text">1:48</span>
                    </div>
                  </div>
                </div>

                <div className="playlist__item">
                  <div className="playlist__track track">
                    <div className="track__title">
                      <div className="track__title-image">
                        <svg className="track__title-svg" alt="music">
                          <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                        </svg>
                      </div>
                      <div className="track__title-text">
                        <a className="track__title-link" xlinkHref="http://">
                          How Deep Is Your Love
                          <span className="track__title-span"></span>
                        </a>
                      </div>
                    </div>
                    <div className="track__author">
                      <a className="track__author-link" xlinkHref="http://">
                        Calvin Harris, Disciples
                      </a>
                    </div>
                    <div className="track__album">
                      <a className="track__album-link" xlinkHref="http://">
                        How Deep Is Your Love
                      </a>
                    </div>
                    <div className="track__time">
                      <svg className="track__time-svg" alt="time">
                        <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                      </svg>
                      <span className="track__time-text">3:32</span>
                    </div>
                  </div>
                </div>

                <div className="playlist__item">
                  <div className="playlist__track track">
                    <div className="track__title">
                      <div className="track__title-image">
                        <svg className="track__title-svg" alt="music">
                          <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                        </svg>
                      </div>
                      <div className="track__title-text">
                        <a className="track__title-link" xlinkHref="http://">
                          Morena <span className="track__title-span"></span>
                        </a>
                      </div>
                    </div>
                    <div className="track__author">
                      <a className="track__author-link" xlinkHref="http://">
                        Tom Boxer
                      </a>
                    </div>
                    <div className="track__album">
                      <a className="track__album-link" xlinkHref="http://">
                        Soundz Made in Romania
                      </a>
                    </div>
                    <div className="track__time">
                      <svg className="track__time-svg" alt="time">
                        <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                      </svg>
                      <span className="track__time-text">3:36</span>
                    </div>
                  </div>
                </div>

                <div className="playlist__item">
                  <div className="playlist__track track">
                    <div className="track__title">
                      <div className="track__title-image">
                        <svg className="track__title-svg" alt="music">
                          <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                        </svg>
                      </div>
                      <div className="track__title-text">
                        <a className="track__title-link" xlinkHref="http://">
                          <span className="track__title-span"></span>
                        </a>
                      </div>
                    </div>
                    <div className="track__author">
                      <a className="track__author-link" xlinkHref="http://"></a>
                    </div>
                    <div className="track__album">
                      <a className="track__album-link" xlinkHref="http://"></a>
                    </div>
                    <div className="track__time">
                      <svg className="track__time-svg" alt="time">
                        <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                      </svg>
                      <span className="track__time-text"></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
