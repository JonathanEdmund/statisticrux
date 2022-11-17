import { Link } from "react-router-dom";
import earth from "./Assets/Login-Sign Up/Populated_Planet.png"; 


const Register  = () => {
    return (
    <div className='bg-hmm bg-opacity-70 m-[60px] px-[50px] pb-[50px] rounded-[35px] shadow-5xl text-left'>
        <form className='mx-auto'>
        <img src={earth} alt="earth" className='absolute w-[880px] top-[50px] left-[900px] -z-10'></img>
                <div className='w-[1100px] h-[30px] relative top-[130px] bg-button -z-10'></div>
                <h1 className='text-white font-bold text-[100px]'>Create Your Account</h1>
                <h4 className='text-white text-[35px]'>Already have account? <Link to="/Login" className='italic font-bold text-button text-[35px]'>Log In</Link></h4>
                <br></br>
                <div className='grid grid-cols-2 gap-3 w-[770px]'>
                    <label className='font-bold text-button text-[35px]'>First Name</label>
                    <label className='font-bold text-button text-[35px]'>Last Name</label>
                </div>
                <div className='grid grid-cols-2 gap-9 w-[740px]'>
                    <input className='bg-black left-[50px] w-[310px] h-[40px] rounded-[16px] placeholder:font-bold placeholder:text-hmm py-1 px-2' type="text" placeholder='Budi'/>
                    <input className='bg-black left-[50px] w-[310px] h-[40px] rounded-[16px] placeholder:font-bold placeholder:text-hmm py-1 px-2' type="text" placeholder='Pekerti'/>
                </div>
                <br></br>
                <div className='felx flex-col mb-4'>
                    <label className='font-bold text-button text-[35px] py-1 px-2'>Username</label>
                    <div className='felx flex-col mb-4'>
                    <input className='bg-black rounded-[16px] w-[700px] h-[40px] placeholder:font-bold placeholder:text-hmm py-1 px-2' type="text"  placeholder='@budibaik123'/>
                </div>
                </div>
                <div className='felx flex-col mb-4'>
                    <label className='font-bold text-button text-[35px] py-1 px-2'>Password</label>
                    <div className='felx flex-col mb-4'>
                    <input className='bg-black rounded-[16px] w-[700px] h-[40px] placeholder:font-bold placeholder:text-hmm py-1 px-2' type="password" placeholder='akuanaksehAt_' />
                </div>
                </div>
                <br></br>
                <div className='hover:bg-white hover:text-black duration-300 ease-out text-[35px] font-bold text-center border-2 border-button w-[300px] rounded-[10px]'><Link to='/login'>SIGN UP</Link></div>
                <br></br>
        </form>
    </div>
    );
}

export default Register;