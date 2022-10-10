import React from 'react';
import './Footer.css';
import ShuffleIcon from '@material-ui/icons/Shuffle';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import RepeatIcon from '@material-ui/icons/Repeat';
import { Grid, Slider } from '@material-ui/core';
import PlaylistPlayIcon from '@material-ui/icons/PlaylistPlay';
import VolumeDownIcon from '@material-ui/icons/VolumeDown';


function Footer() {
  return (
    <div className='footer'>
      <div className='footer_left'>
        <img 
          className='footer_albumImage'
          src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.skillsuccess.com%2Fwp-content%2Fuploads%2F2020%2F09%2Fcompose-ambient-music-2.jpg&f=1&nofb=1&ipt=901736111f8c782b7e1d675d5dca5003b34d9caed15ce3363c7c0b0ecba82aa1&ipo=images' 
          alt='Album' 
        />
        <div className='footer_songInfo'>
          <h4>Lost Without You</h4>
          <p>Kygo, Dean Lewis</p>
        </div>
      </div>

      <div className='footer_center'>
        <ShuffleIcon className='footer_green'/>
        <SkipPreviousIcon className='footer_icon' />
        <PlayCircleOutlineIcon fontSize='large' className='footer_icon'/>
        <SkipNextIcon className='footer_icon' />
        <RepeatIcon className='footer_green' />
      </div>

      <div className='footer_right'>
        <Grid container spacing={2}>
          <Grid item>
            <PlaylistPlayIcon />
          </Grid>
          <Grid item>
            <VolumeDownIcon />
          </Grid>
          <Grid item xs>
            <Slider />
          </Grid>
        </Grid>
      </div>
    </div>
  )
}

export default Footer