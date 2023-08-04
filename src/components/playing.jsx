import React, { useState } from 'react'

const Playing = (props) => {



  const array = [1, 2, 3, 4, 5, 6];
  
  const [uScore, SetuScore] = useState(0);

  const [userNo, SetUserNo] = useState(0);

  const [compNo, compSetNo] = useState(0);

  function btnfun(val){

    console.log(`user selected ${val}`);

    SetUserNo(val)

    const randomNo = Math.random();
    const selectedNo = Math.floor(randomNo * 6) + 1;
    compSetNo(selectedNo);

    if (val !== selectedNo) {
      SetuScore(uScore + val)
    }
    else
    {
      console.log("OUT")
      props.fun(uScore);
    }
  }

  // ======== RETURN ========

  return (
    <main className='px-2 text-center mt-[10vh] max-w-[1240px] mx-auto'>

      <div className='my-8'>
        <h4 className='text-xl text-purple-500'>User selects a no </h4>
        <div className=' justify-center flex'>
          {
            array.map((value, i) => (
              <button
                onClick={() => btnfun(value)} key={i} className=' hover:bg-red-500 hover:text-white hover:border-none border-[1.4px] border-black cursor-pointer px-[12px] sm:text-4xl sm:py-4 sm:px-6 py-2 sm:m-4 my-2 mx-[6px] text-red-500'>
                {value} 
              </button>
            ))}
        </div>
        <h4>User tried for {userNo} runs.</h4>
      </div>


      <h4>Computer bolled for </h4>
      <h2 className='text-4xl'> {compNo} </h2>

      <div className='my-8 py-4 '>
        <h2>Score bord</h2>
        <div className='border-black border-2 mx-auto max-w-[420px] p-4 mt-6'>
        <h1 className=' text-red-500 text-8xl'>{uScore}</h1>
        <h3>Total RUNS</h3></div>
      </div>

    </main>
  )
}

export default Playing
