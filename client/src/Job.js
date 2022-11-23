import { Link } from "react-router-dom";
import Navbar from "./Navbar";



const Job = () => {
  return ( 
    <div>
      <Navbar />
      <div className="py-[100px] text-center">
        <h1 className="font-bold text-button text-[120px]">JOB</h1>
        <p className="text-[55px]">Back to <Link to="/" className="border-b-8 border-button">Home</Link></p>
      </div>
      <div className="ml-[140px] ">
        <div className="font-bold text-white text-[55px]">Job</div>
        <div className='w-[120px] h-[26px] relative bottom-[40px] left-[0px] bg-button mr-auto -z-10'></div>
        <div className="text-white text-[30px] -mt-[32px] mb-[36px]">Choose it based on your interest</div>
      </div>
      <div className="bg-button h-[5px] w-[95.9%] mb-[44px] "></div>
      <div className=" grid grid-rows-6 grid-cols-7 gap-6 bg-button pl-[20px] max-w-[1580px] h-[59px] ml-[200px]  rounded-[20px] pt-[44px] mb-[44px]">
        <div className=" cols-start-1 relative bottom-[35px] bg-slate-900  max-w-[200px] h-[41px]  mb-[44px] rounded-[20px]"><p className="relative text-left text-gray-600 font-bold italic pt-[10px] pl-[10px]">Technician</p></div>      
        <div className=" cols-start-2 relative bottom-[35px] bg-slate-900  max-w-[100px] h-[41px]  mb-[44px] rounded-[20px] "><p className="relative text-left text-gray-600 font-bold italic pt-[10px] pl-[10px]">IT</p></div> 
      </div>
      <div className="">
      <div className="bg-button ml-[200px] mr-[70px] rounded-[20px]">
        <div className="flex overflow-x-auto scroll scroll-smooth scrollbar-hide pb-[40px] pt-[40px] px-[60px]">
                <div className="min-w-[40%] bg-hmm bg-opacity-80 rounded-[50px] py-[50px] px-[50px] ml-[10px] mr-[10px]">
                  <p className="font-bold text-[55px] text-center">Doctor</p>
                  <p className="font-bold text-[25px] text-center">Full time</p>
                  <div className="mt-[61px]">
                  </div>
                  <p className="text-button font-bold text-[140px] text-center leading-[165px]"></p>
                </div>
                <div className="min-w-[40%] bg-hmm bg-opacity-80 rounded-[50px] py-[50px] px-[50px] ml-[10px] mr-[10px]">
                  <p className="font-bold text-[55px] text-center ">Farmer</p>
                  <p className="font-bold text-[25px] text-center ">Full time</p>
                  <div className="mt-[61px]">
                  </div>
                  <p className="text-button font-bold text-[57px] text-center leading-[165px]"></p>
                </div>
                <div className="min-w-[40%] bg-hmm bg-opacity-80 rounded-[50px] py-[50px] px-[50px] ml-[10px] mr-[10px]">
                  <p className="font-bold text-[55px] text-center ">Teacher</p>
                  <p className="font-bold text-[25px] text-center ">Full time</p>
                  <p className="text-button font-bold text-[100px] text-center leading-[165px]"></p>
                </div>
                <div className="min-w-[40%] bg-hmm bg-opacity-80 rounded-[50px] py-[50px] px-[50px] ml-[10px] mr-[10px]">
                  <p className="font-bold text-[55px] text-center">Architect</p>
                  <p className="font-bold text-[25px] text-center ">Full time</p>
                  <p className="text-button font-bold text-[140px] text-center leading-[165px]"></p>
                </div>
                <div className="min-w-[40%] bg-hmm bg-opacity-80 rounded-[50px] py-[50px] px-[50px] ml-[10px] mr-[10px] ">
                  <p className="font-bold text-[55px] text-center">Journalist</p>
                  <p className="font-bold text-[25px] text-center">Full time</p>
                  <p className="text-button font-bold text-[140px] text-center leading-[165px]"></p>
                </div>
              </div>
            </div>
            </div>
        <p className="font-bold text-[40px] ml-[200px] pt-[38px]">AVAILABLE JOBS</p>
        <div className="grid grid-rows-4 grid-cols-2 gap-4 ml-[200px] mt-[39px] gap-x-[30px]">
        <div className="row-start-1 col-start-2 max-w-[70%] bg-hmm rounded-[20px] row-span-3 ">
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
        <div className="row-start-1 bg-hmm rounded-[20px]">
              <p className="font-bold text-[35px] text-center ">Programmer</p>
              <p className="text-button font-bold text-[20px] text-center ">Full time</p>
              <p className="text-button font-bold text-[25px] text-center ">$ 190,000/day</p>
        </div>
        <div className="row-start-2 bg-hmm rounded-[20px] ">
              <p className="font-bold text-[35px] text-center">IT Security Specialist</p>
              <p className="text-button font-bold text-[20px] text-center ">Full time</p>
              <p className="text-button font-bold text-[25px] text-center ">$ 1,000/hour</p>
        </div>
        <div className="row-start-3 bg-hmm rounded-[20px] ">
              <p className="font-bold text-[35px] text-center">Network Engineer</p>
              <p className="text-button font-bold text-[20px] text-center ">Full time</p>
              <p className="text-button font-bold text-[25px] text-center ">$ 120,000/day</p>
        </div>
        <div className="row-start-4 bg-hmm rounded-[20px] py">
              <p className="font-bold text-[35px] text-center">Web Developer</p>
              <p className="text-button font-bold text-[20px] text-center ">Freelance</p>
              <p className="text-button font-bold text-[25px] text-center ">$ 90,000</p>
        </div>
        </div>
      </div>    
   );
}
 
export default Job;
