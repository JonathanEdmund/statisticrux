import { Link } from "react-router-dom";
import Navbar from "./Navbar";

import rumah1 from "./Assets/House/164cbd802c40585f5293baff4d040e1f-removebg-preview.png";
import rumah2 from "./Assets/House/2825993d78c97e5bde44e156b14d0be4-removebg-preview.png";
import rumah3 from "./Assets/House/dddf443f9a8add0ac8fb65d31a6415ec-removebg-preview.png";
import rumah4 from "./Assets/House/village_small_house_3d_model_c4d_max_obj_fbx_ma_lwo_3ds_3dm_stl_3908605_o-removebg-preview.png";
import peta from "./Assets/House/image 1.png";

const House = () => {
  return ( 
    <div>
      <Navbar />
      <div className="py-[100px] text-center">
        <h1 className="font-bold text-button text-[120px]">HOUSES</h1>
        <p className="text-[55px]">Back to <Link to="/" className="border-b-8 border-button">Home</Link></p>
      </div>

      <div className="ml-[206px] ">
        <div className="font-bold text-white text-[55px]">House</div>
        <div className='w-[200px] h-[26px] relative bottom-[40px] left-[0px] bg-button mr-auto -z-10'></div>
        <div className="text-white text-[30px] -mt-[32px] mb-[36px]">Choose your house wisely!</div>
      </div>

      <div className="bg-button h-[5px] w-[100%] mb-[80px]"></div>

      <div className="grid grid-cols-4 gap-[32px] ml-[206px]">
        <div className="w-[318px] h-[370px] bg-hmm rounded-[60px] grid grid-rows-2 gap-[19px] justify-center p-3 pb-6 hover:cursor-pointer hover:opacity-90 active:bg-button">
          <img src={rumah1} alt="rumah1" className="object-contain h-[282px] w-[271px] row-span-3 -mt-[30px] scale-110"></img>
          <div className="flex justify-items justify-center flex-col">
            <div className="font-bold flex justify-center text-[36px]">ABC WISS</div>
            <div className="flex justify-center text-[20px]">Zeta street AA-01</div>
          </div>
        </div>

        <div className="w-[318px] h-[370px] bg-hmm rounded-[60px] grid grid-rows-2 gap-[19px] justify-center p-3 pb-6 hover:cursor-pointer hover:opacity-90 active:bg-button">
          <img src={rumah2} alt="rumah1" className="object-contain h-[306px] w-[252px] row-span-3 -mt-[60px] scale-110"></img>
          <div className="flex justify-items justify-center flex-col">
            <div className="font-bold flex justify-center text-[36px]">Super Mega</div>
            <div className="flex justify-center text-[20px]">Road Map 00E2</div>
          </div>
        </div>

        <div className="w-[318px] h-[370px] bg-hmm rounded-[60px] grid grid-rows-2 gap-[19px] justify-center p-3 pb-6 hover:cursor-pointer hover:opacity-90 active:bg-button">
          <img src={rumah3} alt="rumah1" className="object-contain h-[282px] w-[229px] row-span-3 -mt-[40px] scale-125"></img>
          <div className="flex justify-items justify-center flex-col">
            <div className="font-bold flex justify-center text-[36px]">AZDAY 67</div>
            <div className="flex justify-center text-[20px]">CC-RUX 4562.65</div>
          </div>
        </div>

        <div className="w-[318px] h-[370px] bg-hmm rounded-[60px] grid grid-rows-2 gap-[19px] justify-center p-3 pb-6 hover:cursor-pointer hover:opacity-90 active:bg-button">
          <img src={rumah4} alt="rumah1" className="object-contain h-[341px] w-[275px] row-span-3 -mt-[40px] scale-125"></img>
          <div className="flex justify-items justify-center flex-col">
            <div className="font-bold flex justify-center text-[36px]">WILLHOUSE</div>
            <div className="flex justify-center text-[20px]">IO-08112022</div>
          </div>
        </div>
      </div>

      <div className="ml-[206px] h-[1131px] w-[1403px] bg-hmm rounded-2xl mt-[96px] px-[58px] pt-[38px] pb-[65px]">
        <div className="font-bold text-[45px] -left-[18px] mb-[49px]">
          Maps
        </div>
        <div className="">
          <img src={peta} alt="peta" className=" w-[1287px] h-[924px] object-contain"></img>
        </div>
      </div>

    </div>

   );
}
 
export default House;