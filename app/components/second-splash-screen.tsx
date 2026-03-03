import React from 'react'

const SecondSplashScreen = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
        <video
            muted
            loop
            autoPlay
            playsInline
            src="/videos/hero-video.mp4"
            className="mix-blend-screen w-full h-auto max-h-37.5 object-contain"
          />
    </div>
  )
}

export default SecondSplashScreen