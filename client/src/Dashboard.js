import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [date, setDate] = useState("");
  const [age, setAge] = useState("");
  const [id, setId] = useState("");

  const user = { firstname, lastname, username, date, age, id };
  const APIendpoint = "";

  useEffect(() => {
    console.log("useEffect ran");
  });

  const handleSubmit = () => {
    fetch(APIendpoint, {
      method: "POST",
      headers: {"Content-Type" : "application/json"},
      body: JSON.stringify(user)
    });
  };

  return ( 
    <div className="grid grid-cols-12 h-[100vh]">
      <div className="col-span-5 bg-button px-[90px] py-[30px] rounded-r-[50px] flex flex-col">
        <img alt="" className="w-[50%] pt-[46%] mx-auto rounded-[50%] border-hmm border-2"></img>
        <p className="font-bold text-[40px] text-center leading-none mt-[10px]">Hai First Name!</p>
        <form onSubmit={handleSubmit} className="grid grid-cols-12 mx-auto mt-[45px] text-center">
          <div className="flex justify-start pl-[4%] col-span-12">
            <p className="font-bold text-[20px] leading-none mr-auto">First Name</p>
            <p className="font-bold text-[20px] leading-none mr-auto ml-[4%]">Last Name</p>
          </div>
          <input 
            placeholder="Naruto" 
            className="bg-black rounded-[16px] m-[10px] p-[11px] col-span-6 placeholder:font-bold placeholder:text-hmm"
            value={firstname}
            onChange={(e) => setFirstName(e.target.value)}
          ></input>
          <input 
            placeholder="Uchiha" 
            className="bg-black rounded-[16px] m-[10px] p-[11px] col-span-6 placeholder:font-bold placeholder:text-hmm"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          ></input>
          <div className="flex justify-start pl-[4%] mt-[2px] col-span-12">
            <p className="font-bold text-[20px] leading-none mr-auto">Username</p>
          </div>
          <input 
            placeholder="narto" 
            className="bg-black rounded-[16px] m-[10px] p-[11px] col-span-12 w-[96%] placeholder:font-bold placeholder:text-hmm"
            value={lastname}
            onChange={(e) => setLastName(e.target.value)}
          ></input>
          <div className="flex justify-start pl-[4%] mt-[2px] col-span-12">
            <p className="font-bold text-[20px] leading-none mr-[50%]">Date of Birth</p>
            <p className="font-bold text-[20px] leading-none ml-[1%]">Age</p>
          </div>
          <input 
            placeholder="31 Februari 2030" 
            className="bg-black rounded-[16px] m-[10px] p-[11px] col-span-9 placeholder:font-bold placeholder:text-hmm"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          ></input>
          <input 
            placeholder="-7" 
            className="bg-black rounded-[16px] m-[10px] p-[11px] col-span-3 placeholder:font-bold placeholder:text-hmm"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          ></input>
          <div className="col-span-12 flex justify-start pl-[4%] mt-[2px]">
            <p className="font-bold text-[20px] leading-none mr-[50%]">Global ID Number</p>
          </div>
          <input 
            placeholder="1234569420" 
            className="bg-black rounded-[16px] m-[10px] p-[11px] col-span-12 placeholder:font-bold placeholder:text-hmm"
            value={id}
            onChange={(e) => setId(e.target.value)}
          ></input>
          <button type="submit" className="col-start-8 col-span-5 bg-live py-[10px] rounded-[15px] mt-[20px] mx-[10px] font-bold text-[25px] leading-none hover:scale-105 ease duration-300">SAVE</button>
        </form>
      </div>
      <div className="pt-[50px] mx-[40px] col-span-7">
        <p className="font-bold text-[40px]">Dashboard</p>
        <div className="w-[240px] h-[20px] bg-button relative bottom-[25px] -z-10"></div>
        <p className="font-medium text-[20px]">Collect your first starterpack in Crux planet!</p>
        <Link to="/house">
          <div className="bg-hmm w-[100%] rounded-[60px] mt-[40px] p-[40px] hover:scale-105 ease-in-out duration-300">
            <p className="text-button font-bold text-[40px]">House</p>
            <p className="text-[20px]"><i>Choose your dream home as your sanctuary</i></p>
          </div>
        </Link>
        <Link to="/dailysupply">
          <div className="bg-hmm w-[100%] rounded-[60px] mt-[30px] p-[40px] hover:scale-105 ease-in-out duration-300">
            <p className="text-button font-bold text-[40px]">Daily Supply</p>
            <p className="text-[20px]"><i>Choose items to meet your needs each day, you can select three essential items</i></p>
          </div>
        </Link>
        <Link to="/job">
          <div className="bg-hmm w-[100%] rounded-[60px] mt-[30px] p-[40px] hover:scale-105 ease-in-out duration-300">
            <p className="text-button font-bold text-[40px]">Job</p>
            <p className="text-[20px]"><i>What contribution would you like to make to help growth of life on planet Crux?</i></p>
          </div>
        </Link>
      </div>
    </div>
   );
}
 
export default Dashboard;