import logo from './logo.png';
import btn from './assets/btn.png';
import btnOn from './assets/btn-on-click.png';
import loyKrathongSong from './assets/loy-krathong-song-2.mp3';
import falling from './assets/falling.wav';
import './App.css';
import MainPage from './views/MainPage';
import FooterComponent from './components/FooterComponent';
import soundOn from './assets/valume_up.png';
import soundOff from './assets/valume_down.png';

function App() {
  return (
    <view>
      <MainPage logo={logo} btn={btn} btnOn={btnOn} falling={falling} />
      <FooterComponent soundOn={soundOn} soundOff={soundOff} loyKrathongSong={loyKrathongSong} />
    </view>
  );
}

export default App;
