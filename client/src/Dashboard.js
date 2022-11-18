import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const Dashboard = () => {
  const user = useSelector((state) => state.auth.user);
  const username = useSelector((state) => state.auth.username);
  const [userData, setUserData] = useState();

  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const usernameRef = useRef();
  const dateRef = useRef();

  const navigate = useNavigate();
  useEffect(() => {
    if (!user) {
      navigate("/login");
    }

    if (user) {
      fetch(`/api/auth/${username}`)
        .then((response) => response.json())
        .then((data) => {
          setUserData(data.user);

          const date = new Date(data.user.dateOfBirth);
          dateRef.current.defaultValue = `${date.getFullYear()}-${`0${date.getMonth()}`.slice(
            -2
          )}-${`0${date.getDate()}`.slice(-2)}`;
        });
    }
  }, [navigate, user, username]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // update user info
    const input = {
      firstName: firstNameRef.current.value,
      lastName: lastNameRef.current.value,
      newUsername: usernameRef.current.value,
      dateOfBirth: dateRef.current.value,
    };
    console.log(input);

    fetch(`/api/auth/${username}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(input),
    })
      .then((response) => response.json())
      .then((data) => {
        setUserData(data.user);
      });
  };

  return (
    <div className="grid grid-cols-12 h-[100vh]">
      <div className="col-span-5 bg-button px-[90px] py-[30px] rounded-r-[50px] flex flex-col">
        <img
          alt=""
          className="w-[50%] pt-[46%] mx-auto rounded-[50%] border-hmm border-2"
        ></img>
        <p className="font-bold text-[40px] text-center leading-none mt-[10px]">
          Hai {userData?.firstName}!
        </p>
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-12 mx-auto mt-[45px] text-center"
        >
          <div className="flex justify-start pl-[4%] col-span-12">
            <p className="font-bold text-[20px] leading-none mr-auto">
              First Name
            </p>
            <p className="font-bold text-[20px] leading-none mr-auto ml-[4%]">
              Last Name
            </p>
          </div>
          <input
            placeholder="Naruto"
            className="bg-black rounded-[16px] m-[10px] p-[11px] col-span-6 placeholder:font-bold placeholder:text-hmm"
            ref={firstNameRef}
            defaultValue={userData?.firstName}
          ></input>
          <input
            placeholder="Uchiha"
            className="bg-black rounded-[16px] m-[10px] p-[11px] col-span-6 placeholder:font-bold placeholder:text-hmm"
            defaultValue={userData?.lastName}
            ref={lastNameRef}
          ></input>
          <div className="flex justify-start pl-[4%] mt-[2px] col-span-12">
            <p className="font-bold text-[20px] leading-none mr-auto">
              Username
            </p>
          </div>
          <input
            placeholder="narto"
            className="bg-black rounded-[16px] m-[10px] p-[11px] col-span-12 w-[96%] placeholder:font-bold placeholder:text-hmm"
            defaultValue={userData?.username}
            ref={usernameRef}
          ></input>
          <div className="flex justify-start pl-[4%] mt-[2px] col-span-12">
            <p className="font-bold text-[20px] leading-none mr-[50%]">
              Date of Birth
            </p>
            <p className="font-bold text-[20px] leading-none ml-[1%]">Age</p>
          </div>
          <input
            type="date"
            placeholder="31 Februari 2030"
            className="bg-black rounded-[16px] m-[10px] p-[11px] col-span-9 placeholder:font-bold placeholder:text-hmm"
            ref={dateRef}
          ></input>
          <div className="bg-black rounded-[16px] m-[10px] p-[11px] col-span-3 placeholder:font-bold placeholder:text-hmm">
            {userData?.dateOfBirth &&
              new Date().getFullYear() -
                new Date(userData.dateOfBirth).getFullYear()}
          </div>
          <div className="col-span-12 flex justify-start pl-[4%] mt-[2px]">
            <p className="font-bold text-[20px] leading-none mr-[50%]">
              Global ID Number
            </p>
          </div>
          <input
            placeholder="1234569420"
            className="bg-black rounded-[16px] m-[10px] p-[11px] col-span-12 placeholder:font-bold placeholder:text-hmm"
            defaultValue={userData?._id}
            // ref={idRef}
          ></input>
          <button
            type="submit"
            className="col-start-8 col-span-5 bg-live py-[10px] rounded-[15px] mt-[20px] mx-[10px] font-bold text-[25px] leading-none hover:scale-105 ease duration-300"
          >
            SAVE
          </button>
        </form>
      </div>
      <div className="pt-[50px] mx-[40px] col-span-7">
        <p className="font-bold text-[40px]">Dashboard</p>
        <div className="w-[240px] h-[20px] bg-button relative bottom-[25px] -z-10"></div>
        <p className="font-medium text-[20px]">
          Collect your first starterpack in Crux planet!
        </p>
        <Link to="/house">
          <div className="bg-hmm w-[100%] rounded-[60px] mt-[40px] p-[40px] hover:scale-105 ease-in-out duration-300">
            <p className="text-button font-bold text-[40px]">House</p>
            <p className="text-[20px]">
              <i>Choose your dream home as your sanctuary</i>
            </p>
          </div>
        </Link>
        <Link to="/dailysupply">
          <div className="bg-hmm w-[100%] rounded-[60px] mt-[30px] p-[40px] hover:scale-105 ease-in-out duration-300">
            <p className="text-button font-bold text-[40px]">Daily Supply</p>
            <p className="text-[20px]">
              <i>
                Choose items to meet your needs each day, you can select three
                essential items
              </i>
            </p>
          </div>
        </Link>
        <Link to="/job">
          <div className="bg-hmm w-[100%] rounded-[60px] mt-[30px] p-[40px] hover:scale-105 ease-in-out duration-300">
            <p className="text-button font-bold text-[40px]">Job</p>
            <p className="text-[20px]">
              <i>
                What contribution would you like to make to help growth of life
                on planet Crux?
              </i>
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;
