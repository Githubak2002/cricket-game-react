import React from 'react'
// import Home from "./home"

const Out = (props) => (
  <div className=' max-w-[640px] mx-auto text-center h-screen pt-[60px] sm:pt-[10%] relative'>
    <h1 className='py-2 font-bold text-6xl text-red-500'>OUT!</h1>
    <h6 className=' border-black border-b-2 pb-6'>You tried to score the same run as computer bolled for.</h6>

    <h4 className='mb-2 mt-6'>Total Runs Scored </h4>


    <h1 className='font-bold text-8xl '>{props.totalRuns}</h1>
    <p className='absolute bottom-4 px-4 right-4'>Refresh the page for New Game.</p>

  </div>
)


export default Out