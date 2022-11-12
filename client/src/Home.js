import { Link } from 'react-router-dom'
import planet from "./Assets/Homepage/f37b5273252024d60d9bb5c73bccd627-removebg-preview.png";
import ufo from "./Assets/Homepage/5ba661e1bede2105e7aaeef5.png";
import orangOrang from "./Assets/Homepage/🦆 emoji _people holding hands_ light skin tone, medium-light skin tone_.png";

const Home = () => {
  return ( 
    <div>
      <div className="rounded-[38px] bg-hmm flex items-center py-[12px] px-[26px] opacity-80 shadow-md">
        <p className="text-[26px] text-white font-bold opacity-100">STATISTICRUX</p>
        <div className="bg-button hover:bg-white hover:text-button duration-300 ease-out py-[7px] px-[20px] rounded-[20px] h-[55px] ml-auto pb-[7px] opacity-100"><Link to="/login" className="font-bold text-[24px] relative top-[3px]">LOGIN</Link></div>
      </div>
      
      <img src={planet} alt="planet" className='absolute w-[3000px] top-[-550px] left-[-900px] -z-10'></img>

      <div className='border-hmm border-[3px] rounded-[20px] mt-[20px] mx-[20px] pt-[110px]'>
        <div className='flex justify-end'>
          <div className='text-right font-bold text-[110px] mt-[300px] mr-[40px]'>
            <p>WELCOME TO<br></br><span className='text-[170px] relative bottom-[70px]'>CRUX</span><br></br></p>
            <div className='w-[520px] h-[50px] relative bottom-[160px] left-[10px] bg-button ml-auto -z-10'></div>
            <div className='hover:bg-white hover:text-black duration-300 ease-out text-[28px] font-bold text-center w-[400px] border-4 border-button ml-auto rounded-[18px] relative left-[10px] bottom-[130px] py-[10px]'><Link to="/register">START THE JOURNEY</Link></div>
          </div>
        </div>

        {/* carousel */}
        <div className='mx-[60px]'>
          {/* carousel components */}
          <div className="overflow-x-scroll scroll scroll-smooth pb-[20px] mb-[40px] flex scrollbar">
            <div className="mx-[40px] min-w-[100%] hover:scale-105 ease-in-out duration-300">
              <h1 className='font-bold text-button text-[55px]'>About StatistiCrux</h1>
              <div className='w-[60%] border-2 border-hmm'></div>
              <p className='w-[60%] mt-[20px] text-[20px]'>The purpose of this website is to make it easier for the people who live on the planet Crux to learn its population data. Residents can access their needs, including those related to their homes, places of employment, and the government's supply of free daily supplies, with the use of Website. Since the population needs to be able to adapt to the surrounding environment in order to establish a colony, the government has actively encouraged this. Therefore, it is expected that each person will find comfort from this support.</p>
            </div>
            <div className="mx-[40px] min-w-[45%] hover:scale-105 ease-in-out duration-300">
              <h1 className='font-bold text-button text-[55px]'>Our Mission</h1>
              <div className='border-2 border-hmm'></div>
              <p className='mt-[20px] text-[20px]'>We can develop a civilization on a better world than Earth thanks to the new life on the planet Crux. Not only that, but we will be able to live a modern life that will evolve over time. As a result, it is hoped that all residents will be eager to contribute to the development of planet Crux.</p>
            </div>
            <div className="mx-[40px] min-w-[45%] hover:scale-105 ease-in-out duration-300">
              <h1 className='font-bold text-button text-[55px]'> The Distance</h1>
              <div className='border-2 border-hmm'></div>
              <p className='mt-[20px] text-[20px]'>From Earth to our newest home, Crux: 320 Light Years</p>
            </div>
          </div>
        </div>

        <div className='flex relative bottom-[30px]'>
          <img src={ufo} alt="ufo" className='ml-auto w-[80%]'></img>
        </div>

        <div className="mx-auto max-w-[1230px]">
          <div className="bg-button w-[100%] h-[80px] rounded-[16px] flex items-center px-[30px]">
            <div className='bg-live h-[25px] w-[25px] ml-auto rounded-full'></div>
            <p className="font-bold text-[26px] ml-[40px]">REAL TIME REPORT</p>
          </div>
          
          {/* carousel */}
          <div className='mt-[130px]'>
            {/* carousel components */}
            <div className="flex overflow-x-auto scroll scroll-smooth scrollbar pb-[40px] mb-[40px]">
              <div className="min-w-[50%] bg-hmm rounded-[50px] py-[50px] mr-[100px]">
                <img src={orangOrang} alt="orang-orang" className='w-[60%] mx-auto'></img>
                <p className="font-bold text-[55px] text-center">POPULATION</p>
                <p className="text-button font-bold text-[140px] text-center leading-[165px]">11,103</p>
              </div>
              <div className="min-w-[40%] bg-hmm rounded-[50px] py-[50px] px-[50px] mr-[100px]">
                <p className="font-bold text-[55px] text-left leading-[65px]">OXYGEN LEVEL</p>
                <p className="text-button font-bold text-[140px] text-center leading-[165px]">25%</p>
              </div>
              <div className="min-w-[40%] bg-hmm rounded-[50px] py-[50px] px-[50px] mr-[100px]">
                <p className="font-bold text-[55px] text-center leading-[65px]">SURFACE AREA</p>
                <p className="text-button font-bold text-[100px] text-center leading-[165px]">144.8 million km2</p>
              </div>
              <div className="min-w-[65%] bg-hmm rounded-[50px] py-[50px] px-[50px] mr-[100px]">
                <p className="font-bold text-[55px] text-center">POPULATION PYRAMID</p>
                <p className="text-button font-bold text-[140px] text-center leading-[165px]">11,103</p>
              </div>
              <div className="min-w-[60%] bg-hmm rounded-[50px] py-[50px] px-[50px] mr-[100px]">
                <p className="font-bold text-[55px] text-center">MALE VS FEMALE POPULATION</p>
                <p className="text-button font-bold text-[140px] text-center leading-[165px]">11,103</p>
              </div>
            </div>
          </div>
        </div>
        
      </div>

      <footer className='font-semibold bg-black flex justify-between min-w-[101.2%] px-[30px] py-[30px] rounded-t-[15px] relative right-[20px] top-[60px]'>
        <p className='text-hmm'>@ZETA.Inc</p>
        <p className='text-hmm'>INBOUND 2022</p>
      </footer>
    </div>
   );
}
 
export default Home;