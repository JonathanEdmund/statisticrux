import { Link } from "react-router-dom";

const CheckOut = () => {
  return ( 
    <div className="flex mx-[6.4236%]">
      <div className="w-[47%] mt-[5.55vh]">
        <div className="pt-[7.1%]">
          <p className="font-bold text-[42px]">My Cart</p>
          <div className="-z-10 bg-button w-[180px] h-[17px] relative bottom-[23px] mb-[6vh]"></div>
          <div className="flex items-center mb-[7vh]">
            <div className="w-[150px] h-[150px] rounded-[25px] bg-hmm"></div>
            <div className="w-[50%] pl-[5%]">
              <p className="font-bold text-[30px]">Oxygen</p>
            </div>
            <div>+</div>
          </div>
          <p className="font-bold text-button">+ and more</p>
        </div>
      </div>
      <div className="w-[53%] bg-button rounded-t-[50px] h-[94.45vh] mt-[5.55vh]">
        <div className="px-[7.17%] pt-[7.1%]"> 
          <p className="font-bold text-[42px] pl-[2%]">Delivery</p>
          <div className="bg-hmm px-[6.5%] py-[4vh] mt-[2.6vh] rounded-[40px]">
            <div className="flex justify-between items-center">
              <p className="text-button font-bold text-[32px]">Budi</p>
              <p className="text-red-600 italic font-semibold">Change</p>
            </div>
            <p className="font-medium leading-tight">Pogung Planet 1234E, Zeta</p>
            <p className="font-medium leading-tight">Crux 11234</p>
            <p className="bg-form mt-[7px] py-[10px] px-[10px] italic text-hmm font-semibold rounded-[12px]">Shipping method</p>
          </div>
          <div className="flex justify-between mx-[7.17%] font-bold text-[20px] mt-[2vh]">
            <p>Oxygen</p>
            <p>1x</p>
          </div>
          <div className="flex justify-between mx-[7.17%] font-bold text-[20px] mt-[2vh]">
            <p>Potato</p>
            <p>1x</p>
          </div>
          <div className="flex justify-between mx-[7.17%] font-bold text-[20px] mt-[2vh]">
            <p>Tofu</p>
            <p>1x</p>
          </div>
          <hr className="mt-[4vh] mb-[4vh]"></hr>
          <div className="flex justify-between mx-[7.17%] font-bold text-[20px] mt-[2vh]">
            <p>Total Item</p>
            <p>3x</p>
          </div>
          <div className="flex justify-between mx-[7.17%] font-bold text-[20px] mt-[2vh]">
            <p>Resi Number</p>
            <p>0876424692986</p>
          </div>
          <div className="flex justify-between mx-[7.17%] font-bold text-[20px] mt-[2vh]">
            <p>Estimated Arrival</p>
            <p>21/11/2031</p>
          </div>
          <div className="flex justify-between mx-[7.17%] mt-[3.7vh]">
            <p className="cursor-pointer px-[25px] text-[20px] font-bold text-black hover:scale-105 duration-300 ease-out rounded-[13px] border-[4px] border-black">Cancel</p>
            <p className="cursor-pointer px-[15px] bg-black text-[20px] font-bold hover:scale-105 duration-300 ease-out text-white rounded-[13px] border-[4px] border-black">Item Received</p>
          </div>
        </div>
      </div>
    </div>
   );
}
 
export default CheckOut;