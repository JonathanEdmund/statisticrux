import { Link } from "react-router-dom";

import oxygen from "./Assets/Daily Supply/5508-removebg-preview.png";
import egg from "./Assets/Daily Supply/40454-removebg-preview.png";
import water from "./Assets/Daily Supply/24994-removebg-preview.png";
import banana from "./Assets/Daily Supply/10173996_8660-removebg-preview.png";
import bigmac from "./Assets/Daily Supply/6024359-removebg-preview.png";
import dragonfruit from "./Assets/Daily Supply/11053248_18965839-removebg-preview.png";
import tofu from "./Assets/Daily Supply/30576717_7686076-removebg-preview (1).png";
import shortplate from "./Assets/Daily Supply/10613431_10137-removebg-preview.png";
import potato from "./Assets/Daily Supply/23716588_f56g_hveg_140611-removebg-preview.png";
import longbao from "./Assets/Daily Supply/6870867_29329-removebg-preview.png";
import milk from "./Assets/Daily Supply/4382706_26265-removebg-preview.png";

const DailySupply = () => {
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
            <svg className="w-[60%] hover:stroke-black duration-300 ease-out" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
            </svg>
          </div>
        </Link>
        <Link to="/dailysupply" id="dailysupply" className="border-b-8 border-button self-end row-start-11">
          <div className="text-center">
            <svg className="w-[60%] hover:stroke-black duration-300 ease-out stroke-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
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
        <div className="font-bold text-white text-[55px]">Daily Supply</div>
        <div className='w-[375px] min-h-[26px] relative bottom-[34px] left-[0px] bg-button mr-auto -z-10'></div>
        <div className="text-white text-[30px] mt-[-20px] mb-[36px]">What would you like to claim today?</div>
      </div>

      <div className="bg-button min-h-[5px] w-[95.9%] mb-[52px]"></div>

      <div className="font-bold text-white text-[40px] ml-[140px] mb-[38px]">RECOMMENDATION</div>
      <div className="grid grid-cols-4 ml-[140px] gap-x-[45px] pr-[100px]">
        <div className="max-w-[319px] min-h-[279px] hover:bg-button duration-300 ease-out bg-hmm rounded-[60px] flex flex-col items-center">
          <div className="m-auto">
            <img src={oxygen} alt="oxygen" className="max-h-[165px]"></img>
          </div>
          <div className="font-bold text-[33px] text-center">Oxygen</div>
          <div className="flex text-[18px] mb-[23px]">2 liter</div>
        </div>

        <div className="max-w-[319px] min-h-[279px] hover:bg-button duration-300 ease-out bg-hmm rounded-[60px] flex flex-col items-center">
          <div className="m-auto">
            <img src={egg} alt="egg" className="max-h-[165px]"></img>
          </div>
          <div className="font-bold text-[33px] text-center">Egg</div>
          <div className="flex text-[18px] mb-[23px]">Cow egg</div>
        </div>

        <div className="max-w-[319px] min-h-[279px] hover:bg-button duration-300 ease-out bg-hmm rounded-[60px] flex flex-col items-center">
          <div className="m-auto">
            <img src={water} alt="water" className="max-h-[165px]"></img>
          </div>
          <div className="font-bold text-[33px] text-center">Water</div>
          <div className="flex text-[18px] mb-[23px]">Sparkling Water</div>
        </div>

        <div className="max-w-[319px] min-h-[279px] hover:bg-button duration-300 ease-out bg-hmm rounded-[60px] flex flex-col items-center">
          <div className="m-auto">
            <img src={banana} alt="banana" className="max-h-[165px]"></img>
          </div>
          <div className="font-bold text-[33px] text-center">Banana</div>
          <div className="flex text-[18px] mb-[23px]">Fresh from earth</div>
        </div>
      </div>

      <div className="font-bold text-white text-[40px] ml-[140px] mt-[79px] mb-[53px]">AVAILABLE SUPPLY</div>
      <div className="max-w-[85%] max-h-[441px] bg-button rounded-[20px] ml-[140px] mb-[100px] mr-[100px]">
      <div className="flex overflow-x-auto scroll scroll-smooth scrollbar-hide py-[36px] px-[49px]">
        <div className="min-w-[250px] h-[370px] bg-hmm rounded-[60px] mx-[11px] flex flex-col items-center">
          <div className="my-auto">
            <img src={bigmac} alt="bigmac" className="max-h-[265px]"></img>
          </div>
          <div className="font-bold text-[33px] text-center">Big Mac</div>
          <div className="flex text-[18px] mb-[31px]">Hamburger</div>
        </div>

        <div className="min-w-[250px] h-[370px] bg-hmm rounded-[60px] mx-[11px] flex flex-col items-center">
          <div className="my-auto">
            <img src={dragonfruit} alt="dragonfruit" className="max-h-[219px]"></img>
          </div>
          <div className="font-bold text-[33px] text-center">Dragon fruit</div>
          <div className="flex text-[18px] mb-[31px]">Fruit</div>
        </div>

        <div className="min-w-[250px] h-[370px] bg-hmm rounded-[60px] mx-[11px] flex flex-col items-center">
          <div className="my-auto">
            <img src={tofu} alt="tofu" className="max-h-[225px]"></img>
          </div>
          <div className="font-bold text-[33px] text-center">Tofu</div>
          <div className="flex text-[18px] mb-[31px]">Snack</div>
        </div>

        <div className="min-w-[250px] h-[370px] bg-hmm rounded-[60px] mx-[11px] flex flex-col items-center">
          <div className="my-auto">
            <img src={shortplate} alt="shortplate" className="max-h-[107px]"></img>
          </div>
          <div className="font-bold text-[33px] text-center">Shortplate</div>
          <div className="flex text-[18px] mb-[31px]">250 gram</div>
        </div>

        <div className="min-w-[250px] h-[370px] bg-hmm rounded-[60px] mx-[11px] flex flex-col items-center">
          <div className="my-auto">
            <img src={potato} alt="potsto" className="max-h-[101px]"></img>
          </div>
          <div className="font-bold text-[33px] text-center">Potato</div>
          <div className="flex text-[18px] mb-[31px]">100 gram</div>
        </div>

        <div className="min-w-[250px] h-[370px] bg-hmm rounded-[60px] mx-[11px] flex flex-col items-center">
          <div className="my-auto">
            <img src={longbao} alt="longbao" className="max-h-[168px]"></img>
          </div>
          <div className="font-bold text-[33px] text-center">Xiao LongBao</div>
          <div className="flex text-[18px] mb-[31px]">Dimsum</div>
        </div>

        <div className="min-w-[250px] h-[370px] bg-hmm rounded-[60px] mx-[11px] flex flex-col items-center">
          <div className="my-auto">
            <img src={milk} alt="milk" className="max-h-[220px]"></img>
          </div>
          <div className="font-bold text-[33px] text-center">Milk</div>
          <div className="flex text-[18px] mb-[31px]">Ulpramilk</div>
        </div>
      </div>
      </div>
    </div>
   );
}
 
export default DailySupply;