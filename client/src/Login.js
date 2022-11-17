import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import earth from "./Assets/Login-Sign Up/Populated_Planet.png";
import { login } from "./store/authSlice";

const Login = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);

  const userRef = useRef();
  const passwordRef = useRef();

  const navigate = useNavigate();
  useEffect(() => {
    if (user) {
      navigate("/dashboard");
    }
  }, [navigate, user]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const input = {
      username: userRef.current.value,
      password: passwordRef.current.value,
    };
    dispatch(login(input));
  };

  return (
    <div className="bg-hmm bg-opacity-70 m-[60px] p-[50px] rounded-[35px] shadow-5xl text-left">
      <form className="mx-auto" onSubmit={handleSubmit}>
        <img
          src={earth}
          alt="earth"
          className="absolute w-[880px] top-[50px] left-[900px] -z-10"
        ></img>
        <div className="w-[370px] h-[30px] relative top-[130px] right-[1050px] bg-button ml-auto -z-10"></div>
        <h1 className="text-white font-bold text-[100px]">LOG IN</h1>
        <h4 className="text-white text-[35px]">
          Do not have account?{" "}
          <Link
            to="/Register"
            className="italic font-bold text-button text-[35px]"
          >
            Sign Up
          </Link>
        </h4>
        <br></br>
        <div className="felx flex-col mb-4">
          <label className="font-bold text-button text-[35px]">Username</label>
          <div className="felx flex-col mb-4">
            <input
              className="bg-black rounded-[16px] w-[700px] h-[40px] placeholder:font-bold placeholder:text-hmm py-1 px-2"
              type="text"
              ref={userRef}
              placeholder="@budibaik123"
            />
          </div>
        </div>
        <div className="felx flex-col mb-4">
          <label className="font-bold text-button text-[35px]">Password</label>
          <div className="felx flex-col mb-4">
            <input
              className="bg-black rounded-[16px] w-[700px] h-[40px] placeholder:font-bold placeholder:text-hmm py-1 px-2"
              type="password"
              ref={passwordRef}
              placeholder="akuanaksehAt_"
            />
          </div>
        </div>
        <br></br>
        <button className="hover:bg-white hover:text-black duration-300 ease-out text-[35px] font-bold text-center border-2 border-button w-[300px] rounded-[10px]">
          {/* <Link to="/dashboard">LOG IN</Link> */}
          Log In
        </button>
        <br></br>
      </form>
    </div>
  );
};

export default Login;
