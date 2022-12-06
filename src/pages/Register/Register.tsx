import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center shadow-2xl">
      <div className="w-[400px]">
        <h1 className="text-5xl font-extrabold mb-2">blogical</h1>
        <h3 className="text-2xl font-bold mb-1">Register</h3>
        <form className="flex flex-col">
          <label>Name</label>
          <input type="text" className="input" />
          <label>Username</label>
          <input type="text" className="input" />
          <label>E-Mail</label>
          <input type="email" className="input" />
          <label>Password</label>
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
