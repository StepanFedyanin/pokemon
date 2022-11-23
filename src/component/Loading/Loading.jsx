import React from 'react'
import './Loading.scss'
import LoadingGif from '../../resurc/LoadingGif.gif'
function Loading() {
  return (
    <div className='Loading'>
        <img src={LoadingGif} alt="" />
    </div>
  )
}

export default Loading