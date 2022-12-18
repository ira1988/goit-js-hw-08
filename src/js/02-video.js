import Player from '@vimeo/player';
import { throttle } from 'throttle-debounce';
const iframe = document.querySelector('#vimeo-player');
const options = {
  autoplay: true,

  transparent: false,
};

const player = new Player(iframe, options);

player.on('timeupdate', throttle(1000, getTime));

// function getTime(event) {
//   console.log(event.seconds);

//   localStorage.setItem(
//     'videoplayer-current-time',
//     JSON.stringify(event.seconds)
//   );
// }
// player.setCurrentTime(localStorage.getItem('videoplayer-current-time') || 0);

function getTime(event) {
  let currentTimeValue = event.seconds;
  const timeSet = {
    currentTime: currentTimeValue,
  };

  localStorage.setItem('videoplayer-current-time', JSON.stringify(timeSet));
}

const savedSettings = localStorage.getItem('videoplayer-current-time');

const parsedSettings = JSON.parse(savedSettings);

player.setCurrentTime(parsedSettings.currentTime || 0);