import React from 'react'
import homepgimg from "../assets/imgs/homepglogo.png"
import Start from "../components/start"


const Home = (props) => {

    let isgamestarted  = false;

    function fun(){
        props.toggle();
    }

    return (
    <div>

    <section className=' w-[100%] h-screen flex md:flex-row flex-col justify-center items-center md:pl-[30px] '>
        <div className='md:h-auto md:w-[60%] md:max-w-[600px] max-w-[390px]'>
            <img src={homepgimg} alt="cricket png img" />
        </div>
        <div className=' text-red-500 md:ml-8 ml-0 flex flex-col justify-center items-center'>
            <h1 className='md:text-4xl text-md font-semibold'>Lets play <b className='font-bold md:text-8xl text-[52px]'>CRICKET</b></h1>
            <button className='text-white bg-red-500 hover:text-red-500 hover:bg-white m-4 hover:border-2 hover:border-red-500 p-[10px] font-bold text-[20px] ' onClick={fun} >Start match</button>

        </div>
    </section>
    
    </div>
  )
}

export default Home