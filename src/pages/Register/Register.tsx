import { Link } from "react-router-dom";
import logo from "../../assets/blogical.png";

const Register = () => {
  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center shadow-2xl">
      <div className="w-[400px]">
        <div className="flex">
          <img src={logo} alt="Blogical Logo" className="w-12 h-12 mr-5" />
          <h1 className="text-5xl font-extrabold mb-3">blogical</h1>
        </div>
        <h3 className="text-2xl font-bold mb-1">Register</h3>
        <form className="flex flex-col">
          <label className="label">Name</label>
          <input type="text" className="input" />
          <label className="label">Username</label>
          <input type="text" className="input" />
          <label className="label">E-Mail</label>
          <input type="email" className="input" />
          <label className="label">Password</label>
          <input type="password" className="input" />
        </form>
        <div>
          <p className="text-base">Already have an Account?</p>
          <Link to={"/login"}>
            <button className="button">Log In</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
