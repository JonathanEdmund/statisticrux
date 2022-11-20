import { Link } from "react-router-dom";

import rumah1 from "./Assets/House/164cbd802c40585f5293baff4d040e1f-removebg-preview.png";
import rumah2 from "./Assets/House/2825993d78c97e5bde44e156b14d0be4-removebg-preview.png";
import rumah3 from "./Assets/House/dddf443f9a8add0ac8fb65d31a6415ec-removebg-preview.png";
import rumah4 from "./Assets/House/village_small_house_3d_model_c4d_max_obj_fbx_ma_lwo_3ds_3dm_stl_3908605_o-removebg-preview.png";
import peta from "./Assets/House/image 1.png";

const House = () => {
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
            <svg className="w-[60%] hover:stroke-black duration-300 ease-out" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
            </svg>
          </div>
        </Link>
        <Link to="/house" id="house" className="border-b-8 border-button self-end row-start-13">
          <div className="text-center">
            <svg className="w-[60%] hover:stroke-black duration-300 ease-out stroke-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
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
      <div className="py-[100px] text-center">
        <h1 className="font-bold text-button text-[120px]">HOUSES</h1>
        <p className="text-[55px]">Back to <Link to="/" className="border-b-8 border-button">Home</Link></p>
      </div>

      <div className="ml-[140px] ">
        <div className="font-bold text-white text-[55px]">House</div>
        <div className='w-[200px] h-[26px] relative bottom-[40px] left-[0px] bg-button mr-auto -z-10'></div>
        <div className="text-white text-[30px] -mt-[32px] mb-[36px]">Choose your house wisely!</div>
      </div>

      <div className="bg-button h-[5px] w-[100%] mb-[80px]"></div>

      <div className="grid grid-cols-4 ml-[140px]">
      <div className="w-[298px] h-[350px] bg-hmm rounded-[60px] flex flex-col items-center">
          <div className="-mt-[45px]">
            <img src={rumah1} alt="rumah1" className="h-[276px]"></img>
          </div>

          <div className="font-bold text-[30px] mt-[30px]">ABC WISS</div>
          <div className="flex text-[14px]">Zeta street AA-01</div>
        </div>

        <div className="w-[298px] h-[350px] bg-hmm rounded-[60px] flex flex-col items-center">
          <div className="-mt-[45px]">
            <img src={rumah2} alt="rumah2" className="h-[306px]"></img>
          </div>
          <div className="font-bold text-[30px]">Super Mega</div>
          <div className="flex text-[14px]">Road Map 00E2</div>
        </div>

        <div className="w-[298px] h-[350px] bg-hmm rounded-[60px] flex flex-col items-center">
          <div className="-mt-[45px]">
            <img src={rumah3} alt="rumah3" className="h-[275px]"></img>
          </div>
          <div className="font-bold text-[30px] mt-[30px]">AZDAY 67</div>
          <div className="flex text-[14px]">CC-RUX 4562.65</div>
        </div>

        <div className="w-[298px] h-[350px] bg-hmm rounded-[60px] flex flex-col items-center">
          <div className="-mt-[45px] scale-125 ">
            <img src={rumah4} alt="rumah4" className=" w-[346px]"></img>
          </div>
          <div className="font-bold text-[30px]">WILLHOUSE</div>
          <div className="flex text-[14px]">IO-08112022</div>
        </div>
      </div>

      <div className="ml-[140px] w-[1323px] bg-hmm rounded-2xl mt-[96px] px-[58px] pt-[38px] pb-[65px]">
        <div className="font-bold text-[45px] -left-[18px] mb-[49px]">
          Maps
        </div>
        <div className="">
          <img src={peta} alt="peta" className=" w-[100%] object-contain"></img>
        </div>
      </div>

    </div>

   );
}
 
export default House;