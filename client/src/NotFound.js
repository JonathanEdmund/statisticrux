import { Link } from "react-router-dom";

const NotFound = () => {
  return ( 
    <div className="py-[100px] text-center">
      <h1 className="font-bold text-button text-[120px]">PAGE NOT FOUND</h1>
      <p className="text-[55px]">Back to <Link to="/" className="border-b-8 border-button">Home</Link></p>
    </div>
   );
}
 
export default NotFound;