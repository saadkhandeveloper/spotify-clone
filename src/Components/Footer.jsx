import React from 'react'
import './Footer.css'
import PlayCircleFilledWhiteOutlinedIcon from '@mui/icons-material/PlayCircleFilledWhiteOutlined';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import ShuffleIcon from '@mui/icons-material/Shuffle';
import RepeatIcon from '@mui/icons-material/Repeat';
import ListIcon from '@mui/icons-material/List';
import VolumeDownIcon from '@mui/icons-material/VolumeDown';
import { Grid, Slider } from '@mui/material';



function Footer() {
  return (
    <div className='footer'>
 
 <div className="footer__left">
<img className='footer__albumLogo' src="" alt="" />
<div className="footer__songInfo">
  <h3>No song is playing</h3>
</div>
 
 </div>

<div className="footer__center">
<ShuffleIcon className='footer__green'/>
<SkipPreviousIcon className='footer__icon'/>
<PlayCircleFilledWhiteOutlinedIcon fontSize='large' className='footer__icon'/>
<SkipNextIcon className='footer__icon'/>
<RepeatIcon className='footer__green'/>


</div>
<div className="footer__right">
<Grid container spacing={2}>
<Grid item>
  <ListIcon />
</Grid>
<Grid item >
  <VolumeDownIcon/>
</Grid>
<Grid item xs>
  <Slider/> 
</Grid>
</Grid>

</div>

    </div>
  )
}

export default Footer;
