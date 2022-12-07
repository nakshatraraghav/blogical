import { Link } from "react-router-dom";
import logo from "../../assets/blogical.png";

const Login = () => {
  return (
    <div className="h-screen w-screen flex flex-col lg:flex-row items-center justify-center">
      <div className="w-[400px]">
        <div>
          <div className="flex">
            <img src={logo} alt="Blogical Logo" className="w-12 h-12 mr-3" />
            <h1 className="text-5xl font-extrabold mb-3">blogical</h1>
          </div>
          <p className="mb-2 text-lg font-bold">Login</p>
        </div>
        <div>
          <form className="flex flex-col">
            <label className="label">Username</label>
            <input type="text" className="input" />
            <label className="label">Password</label>
            <input type="password" className="input" />
          </form>
          <div>
            <p className="text-base">Don't have an Account?</p>
            <Link to={"/register"}>
              <button className="button">Register</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
