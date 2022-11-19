import { Link } from "react-router-dom";
import Navbar from "./Navbar";

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
      <Navbar />
      <div className="py-[100px] text-center">
        <h1 className="font-bold text-button text-[120px]">DAILY SUPPLIES</h1>
        <p className="text-[55px]">Back to <Link to="/" className="border-b-8 border-button">Home</Link></p>
      </div>

      <div className="ml-[140px]">
        <div className="font-bold text-white text-[55px]">Daily Supply</div>
        <div className='w-[375px] min-h-[26px] relative bottom-[34px] left-[0px] bg-button mr-auto -z-10'></div>
        <div className="text-white text-[30px] mt-[-20px] mb-[36px]">What would you like to claim today?</div>
      </div>

      <div className="bg-button min-h-[5px] w-[95.9%] mb-[52px]"></div>

      <div className="font-bold text-white text-[40px] ml-[140px] mb-[38px]">RECOMMENDATION</div>
      <div className="grid grid-cols-4 ml-[140px] gap-x-[45px] pr-[100px]">
        <div className="max-w-[319px] min-h-[279px] bg-hmm rounded-[60px] flex flex-col items-center">
          <div className="m-auto">
            <img src={oxygen} alt="oxygen" className="max-h-[165px]"></img>
          </div>
          <div className="font-bold text-[33px] text-center">Oxygen</div>
          <div className="flex text-[18px] mb-[23px]">2 liter</div>
        </div>

        <div className="max-w-[319px] min-h-[279px] bg-hmm rounded-[60px] flex flex-col items-center">
          <div className="m-auto">
            <img src={egg} alt="egg" className="max-h-[165px]"></img>
          </div>
          <div className="font-bold text-[33px] text-center">Egg</div>
          <div className="flex text-[18px] mb-[23px]">Cow egg</div>
        </div>

        <div className="max-w-[319px] min-h-[279px] bg-hmm rounded-[60px] flex flex-col items-center">
          <div className="m-auto">
            <img src={water} alt="water" className="max-h-[165px]"></img>
          </div>
          <div className="font-bold text-[33px] text-center">Water</div>
          <div className="flex text-[18px] mb-[23px]">Sparkling Water</div>
        </div>

        <div className="max-w-[319px] min-h-[279px] bg-hmm rounded-[60px] flex flex-col items-center">
          <div className="m-auto">
            <img src={banana} alt="banana" className="max-h-[165px]"></img>
          </div>
          <div className="font-bold text-[33px] text-center">Banana</div>
          <div className="flex text-[18px] mb-[23px]">Fresh from earth</div>
        </div>
      </div>

      <div className="font-bold text-white text-[40px] ml-[140px] mt-[79px] mb-[53px]">AVAILABLE SUPPLY</div>
      <div className="max-w-[85%] max-h-[441px] bg-button rounded-[20px] ml-[140px] mr-[100px]">
      <div className="flex overflow-x-auto scroll scroll-smooth py-[36px] px-[49px]">
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