import {h} from 'hyperapp';

import bgmusic from '../../static/music/Falls_Down.mp3';

export const Music = ({playing, musicCtrl}) =>
  <div class={playing ? 'playing music-box' : 'music-box'} onclick={e => {
      const music = e.target.children[0];
     if(music.paused){
      musicCtrl(true);
      music.play()
     } else {
      musicCtrl(false);
      music.pause()
     }
    }}>
    <Audio playing={playing} musicCtrl={musicCtrl}/>
  </div>

const Audio = ({playing, musicCtrl}) =>
  <audio loop preload
  oncreate={element => {
    wx.ready(()=>{
      element.addEventListener('playing',e =>{
        musicCtrl(true);
      },true);
    })
    // 
  }} src={bgmusic}/>