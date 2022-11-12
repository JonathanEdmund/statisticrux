import { Link } from 'react-router-dom';

const Navbar = () => {
  return ( 
    <div className="flex flex-col fixed h-[100vh] w-[100px] bg-button justify-end rounded-r-[40px]">
      <p className="text-[55px]"><Link to="/" className="border-b-8 border-button">Home</Link></p>
      <p className="text-[55px]"><Link to="/dailysupply" className="border-b-8 border-button">Daily Supplies</Link></p>
      <p className="text-[55px]"><Link to="/job" className="border-b-8 border-button">Jobs</Link></p>
      <p className="text-[55px]"><Link to="/house" className="border-b-8 border-button">Houses</Link></p>
    </div>
   );
}
 
export default Navbar;