import { Link } from "react-router-dom";
import earth from "./Assets/Login-Sign Up/Populated_Planet.png";
 
 
const Login  = () => {
    return (
    <div className='bg-hmm bg-opacity-70 m-[60px] p-[50px] rounded-[35px] shadow-5xl text-left'>
        <form className='mx-auto'>
        <img src={earth} alt="earth" className='absolute w-[880px] top-[50px] left-[900px] -z-10'></img>
                <div className='w-[370px] h-[30px] relative top-[130px] right-[1050px] bg-button ml-auto -z-10'></div>
                <h1 className='text-white font-bold text-[100px]'>LOG IN</h1>
                <h4 className='text-white text-[35px]'>Do not have account? <Link to="/Register" className='italic font-bold text-button text-[35px]'>Sign Up</Link></h4>
                <br></br>
                <div className='felx flex-col mb-4'>
                    <label className='font-bold text-button text-[35px]'>Username</label>
                    <div className='felx flex-col mb-4'>
                    <input className='bg-black rounded-[16px] w-[700px] h-[40px] placeholder:font-bold placeholder:text-hmm py-1 px-2' type="text" placeholder='@budibaik123'  />
                </div>
                </div>
                <div className='felx flex-col mb-4'>
                    <label className='font-bold text-button text-[35px]'>Password</label>
                    <div className='felx flex-col mb-4'>
                    <input className='bg-black rounded-[16px] w-[700px] h-[40px] placeholder:font-bold placeholder:text-hmm py-1 px-2' type="password" placeholder='akuanaksehAt_'/>
                </div>
                </div>
                <br></br>
                <div className='hover:bg-white hover:text-black duration-300 ease-out text-[35px] font-bold text-center border-2 border-button w-[300px] rounded-[10px]'><Link to='/dashboard'>LOG IN</Link></div>
                <br></br>
        </form>
    </div>
    );
}
 
export default Login;