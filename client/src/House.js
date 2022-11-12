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