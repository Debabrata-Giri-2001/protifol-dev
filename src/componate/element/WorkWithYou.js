import React from 'react'
import myBitPic from './bitEmojiPic.png'
import './workWithMeStyle.css'

function WorkWithYou() {

  return (
    <div>
      <div className='workWithMeDivOne'>
        <div className="imageBit">
          <img className='bitPic' src={myBitPic} alt="" />
        </div>
        <div className="mailWork">
          <a href="mailto:debabratagiri5525@gmail.com">✉️DEBABRATAGIRI5525@GMAIL.com</a>
        </div>
        <div className="socialIconWorkWithMe">
          <a href="https://www.facebook.com/ddebabrata.giri/"><i class="fa-brands fa-facebook fa-3x"></i></a>
          <a href="https://www.instagram.com/_debabrata._giri._/"><i class="fa-brands fa-instagram fa-3x"></i></a>
          <a href="https://www.linkedin.com/in/debabrata-giri-587b6b233/"><i class="fa-brands fa-linkedin fa-3x"></i></a>
        </div>
      </div>
    </div>
  )
}

export default WorkWithYou;
