import React from 'react'
import loading from '../../assets/image/Loader.gif'
import './LoadingPage.css'

function LoadingPage() {
  return (
    <div className="loadingPageContainer">
      <img className="loadingImg" src={loading} alt="" />
    </div>
  );
}

export default LoadingPage