import { Link } from "react-router-dom";
import architect from './Assets/Job/Architect-rafiki.png'
import farmer from './Assets/Job/Farmer-amico.png'
import doctor from './Assets/Job/Doctor-pana.png'
import teacher from './Assets/Job/Formula-pana.png'
import journalist from './Assets/Job/Journalist-pana.png'




const Job = () => {
  return ( 
    <div>
      <div className="grid grid-rows-16 fixed h-[100vh] top-0 w-[100px] bg-button rounded-r-[40px] self-center">
        <Link to="/" id="home" className="border-b-8 border-button self-end row-start-7">
          <div className="text-center">
            <svg className="w-[60%] hover:stroke-black duration-300 ease-out" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
            </svg>
          </div>
        </Link>
        <Link to="/job" id="job" className="border-b-8 border-button self-end row-start-9">
          <div className="text-center">
            <svg className="w-[60%] hover:stroke-black duration-300 ease-out stroke-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
            </svg>
          </div>
        </Link>
        <Link to="/dailysupply" id="dailysupply" className="border-b-8 border-button self-end row-start-11">
          <div className="text-center">
            <svg className="w-[60%] hover:stroke-black duration-300 ease-out" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
            </svg>
          </div>
        </Link>
        <Link to="/house" id="house" className="border-b-8 border-button self-end row-start-13">
          <div className="text-center">
            <svg className="w-[60%] hover:stroke-black duration-300 ease-out" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
            </svg>
          </div>
        </Link>
        <Link to="/dashboard" id="dashboard" className="border-b-8 border-button self-end row-start-15">
          <div className="text-center">
            <svg className="w-[60%] hover:stroke-black duration-300 ease-out" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </div>
        </Link>
      </div>
      <div className="ml-[140px] mt-[40px]">
        <div className="font-bold text-white text-[55px]">Job</div>
        <div className='w-[120px] h-[26px] relative bottom-[40px] left-[0px] bg-button mr-auto -z-10'></div>
        <div className="text-white text-[30px] -mt-[32px] mb-[36px]">Choose it based on your interest</div>
      </div>
      <div className="bg-button h-[5px] w-[95.9%] mb-[44px] "></div>
      <div className=" grid grid-rows-6 grid-cols-7 gap-6 bg-button pl-[20px] max-w-[1580px] h-[59px] ml-[150px] mr-[70px] rounded-[20px] pt-[44px] mb-[44px]">
        <div className=" cols-start-1 relative bottom-[35px] bg-slate-900  max-w-[200px] h-[41px]  mb-[44px] rounded-[20px]"><p className="relative text-left text-gray-600 font-bold italic pt-[10px] pl-[10px]">Technician</p></div>      
        <div className=" cols-start-2 relative bottom-[35px] bg-slate-900  max-w-[100px] h-[41px]  mb-[44px] rounded-[20px] "><p className="relative text-left text-gray-600 font-bold italic pt-[10px] pl-[10px]">IT</p></div> 
      </div>
      <div className="">
      <div className="bg-button ml-[150px] mr-[70px] rounded-[20px]">
        <div className="flex overflow-x-auto scroll scroll-smooth scrollbar-hide">
                <div className="min-w-[40%] bg-hmm bg-opacity-80 rounded-[50px] py-[50px] px-[50px] scale-75">
                  <p className="font-bold text-[55px] text-center">Doctor</p>
                  <img src={doctor} alt='doctor'></img>
                  <p className="font-bold text-[25px] text-center">Full time</p>
                  <div className="mt-[61px]">
                  </div>
                  <p className="text-button font-bold text-[140px] text-center leading-[165px]"></p>
                </div>
                <div className="min-w-[40%] bg-hmm bg-opacity-80 rounded-[50px] py-[50px] px-[50px] scale-75">
                  <p className="font-bold text-[55px] text-center ">Farmer</p>
                  <img src={farmer} alt='doctor'></img>
                  <p className="font-bold text-[25px] text-center ">Full time</p>
                  <div className="mt-[61px]">
                  </div>
                  <p className="text-button font-bold text-[57px] text-center leading-[165px]"></p>
                </div>
                <div className="min-w-[40%] bg-hmm bg-opacity-80 rounded-[50px] py-[50px] px-[50px] scale-75">
                  <p className="font-bold text-[55px] text-center ">Teacher</p>
                  <img src={teacher} alt='doctor'></img>
                  <p className="font-bold text-[25px] text-center ">Full time</p>
                  <p className="text-button font-bold text-[100px] text-center leading-[165px]"></p>
                </div>
                <div className="min-w-[40%] bg-hmm bg-opacity-80 rounded-[50px] py-[50px] px-[50px] scale-75">
                  <p className="font-bold text-[55px] text-center">Architect</p>
                  <img src={architect} alt='doctor'></img>
                  <p className="font-bold text-[25px] text-center ">Full time</p>
                  <p className="text-button font-bold text-[140px] text-center leading-[165px]"></p>
                </div>
                <div className="min-w-[40%] bg-hmm bg-opacity-80 rounded-[50px] py-[50px] px-[50px] scale-75 ">
                  <p className="font-bold text-[55px] text-center">Journalist</p>
                  <img src={journalist} alt='doctor'></img>
                  <p className="font-bold text-[25px] text-center">Full time</p>
                  <p className="text-button font-bold text-[140px] text-center leading-[165px]"></p>
                </div>
              </div>
            </div>
            </div>
        <p className="font-bold text-[40px] ml-[200px] pt-[38px]">AVAILABLE JOBS</p>
        <div className="grid grid-rows-4 grid-cols-2 gap-4 ml-[200px] mt-[39px] gap-x-[30px]">
        <div className="row-start-1 col-start-2 max-w-[70%] bg-hmm rounded-[20px] row-span-3 py-[40px]">
              <p className="font-bold text-[35px] text-left pl-[37px] ">Profession</p>
              <p className="font-normal text-[25px] text-left pl-[37px]">Architect</p>
              <p className="font-normal text-[25px] text-left pl-[37px]">Artist</p>
              <p className="font-normal text-[25px] text-left pl-[37px]">Chef</p>
              <p className="font-normal text-[25px] text-left pl-[37px]">Dector</p>
              <p className="font-normal text-[25px] text-left pl-[37px]">Designer</p>
              <p className="text-button font-normal text-[25px] text-left pl-[37px]">+ and another profession</p>
              <p className="font-bold text-[35px] text-left pl-[37px] ">Employement Status</p>
              <p className="font-normal text-[25px] text-left pl-[37px]">Full time</p>
              <p className="font-normal text-[25px] text-left pl-[37px]">Part time</p>
              <p className="font-normal text-[25px] text-left pl-[37px]">Freelance</p>
              <p className="font-normal text-[25px] text-left pl-[37px]">Internship</p>
        </div>
        <div className="row-start-1 pt-[30px] bg-hmm rounded-[20px]">
              <p className="font-bold text-[35px] text-center ">Programmer</p>
              <p className="text-button font-bold text-[20px] text-center ">Full time</p>
              <p className="text-button font-bold text-[25px] text-center ">$ 190,000/day</p>
        </div>
        <div className="row-start-2 pt-[30px] bg-hmm rounded-[20px] ">
              <p className="font-bold text-[35px] text-center">IT Security Specialist</p>
              <p className="text-button font-bold text-[20px] text-center ">Full time</p>
              <p className="text-button font-bold text-[25px] text-center ">$ 1,000/hour</p>
        </div>
        <div className="row-start-3 pt-[30px] bg-hmm rounded-[20px] ">
              <p className="font-bold text-[35px] text-center">Network Engineer</p>
              <p className="text-button font-bold text-[20px] text-center ">Full time</p>
              <p className="text-button font-bold text-[25px] text-center ">$ 120,000/day</p>
        </div>
        <div className="row-start-4 pt-[30px] bg-hmm rounded-[20px] py">
              <p className="font-bold text-[35px] text-center">Web Developer</p>
              <p className="text-button font-bold text-[20px] text-center ">Freelance</p>
              <p className="text-button font-bold text-[25px] text-center ">$ 90,000</p>
        </div>
        </div>
      </div>    
   );
}
 
export default Job;
