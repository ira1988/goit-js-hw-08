import Player from '@vimeo/player';
const iframe = document.querySelector('#vimeo-player');
const options = {
  autoplay: true,
  t: 5,
  transparent: false,
};

const player = new Player(iframe, options);

const getTime = function (event) {
  const playTime = event.seconds;
    console.log(playTime)
    localStorage.setItem("videoplayer-current-time", event.seconds)

};

function updateTime(event) {
    event.seconds = localStorage.getItem("videoplayer-current-time") || "";
  }

player.on('timeupdate', getTime);
player.on('play', updateTime);




// setCurrentTime()
