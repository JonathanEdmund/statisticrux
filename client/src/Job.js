import { Link } from "react-router-dom";
import Navbar from "./Navbar";

const Job = () => {
  return ( 
    <div>
      <Navbar />
      <div className="py-[100px] text-center">
        <h1 className="font-bold text-button text-[120px]">JOBS</h1>
        <p className="text-[55px]">Back to <Link to="/" className="border-b-8 border-button">Home</Link></p>
      </div>
    </div>
   );
}
 
export default Job;