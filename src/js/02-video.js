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




  player
    .setCurrentTime(localStorage.getItem('videoplayer-current-time') ||0 )
   

player.on('timeupdate', getTime);


// setCurrentTime()
