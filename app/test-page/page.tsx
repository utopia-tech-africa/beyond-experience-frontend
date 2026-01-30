import React from 'react'
import SplashScreen from '../components/splashScreen'
import SecondSplashScreen from '../components/secondSplashScreen'

const page = () => {
  return (
    <div className='flex flex-col items-center justify-center h-full'>
        <SplashScreen/>
        <SecondSplashScreen/>
    </div>
  )
}

export default page
