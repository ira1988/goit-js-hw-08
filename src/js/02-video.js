import Player from '@vimeo/player';
const iframe = document.querySelector('#vimeo-player');
const options = {
  autoplay: true,

  transparent: false,
};

const player = new Player(iframe, options);

const getTime = function (event) {
  const playTime = event.seconds;
  console.log(playTime);
  localStorage.setItem('videoplayer-current-time', event.seconds);
};

function updateTime(event) {
  let time = event.seconds;
  time = localStorage.getItem('videoplayer-current-time') || '';

  player
    .setCurrentTime()
    .then(function (time) {
      // seconds = the actual time that the player seeked to
    })
    .catch(function (error) {
      switch (error.name) {
        case 'RangeError':
          break;

        default:
          break;
      }
    });
}

player.on('timeupdate', getTime);
player.on('play', updateTime);

// setCurrentTime()
