import { Link, useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { useContext, useState } from "react";
import { ContextProvider } from "../../Context/Context";
import { HiMiniEyeSlash, HiMiniEye } from "react-icons/hi2";



const Login = () => {
  const { googleSignIn, signInEmailPass } = useContext(ContextProvider);
  const [isShow, setIsShow] = useState("");
  const [error, setError] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const location = useLocation();
  const navigate  = useNavigate();
  console.log(location)

  const handleSignIn = (e) => {
    e.preventDefault();

    setError(' ')
    
    signInEmailPass(email, password)
      .then(() => {
        navigate(location?.state? location.state : '/')
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const socialLogInHandler = (social) => {
    social()
    .then(()=>{
      navigate(location?.state? location.state : '/')
    })
  };

 

  return (
    <div>
      <div className="hero min-h-screen">
        <div>
          <div className="my-10">
            <p className="text-3xl text-bold text-center">
              Log in your Account
            </p>
          </div>
          <div className=" w-full pb-4 shadow-2xl lg:w-96">
            <form onSubmit={handleSignIn} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control relative">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  type={isShow ? "text" : "password"}
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <span
                  onClick={() => setIsShow(!isShow)}
                  className="absolute right-3 top-14"
                >
                  {!isShow ? (
                    <HiMiniEye></HiMiniEye>
                  ) : (
                    <HiMiniEyeSlash></HiMiniEyeSlash>
                  )}
                </span>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Log in</button>
              </div>
              <div className="text-center">
                <p className="text-sm text-center">
                  Dont have account?{" "}
                  <Link to="/register" className="text-blue-400">
                    Register now
                  </Link>{" "}
                </p>
              </div>
            </form>
            <div className="text-center">
              <p className="text-xl font-semibold">Log in with</p>
              <button onClick={() => socialLogInHandler(googleSignIn)}>
                {" "}
                <FcGoogle className="text-2xl"></FcGoogle>{" "}
              </button>
            </div>
          </div>
          <div className="mt-10">{error && <p className="text-sm text-red-500 text-center">{error}</p>}</div>
        </div>
      </div>
    </div>
  );
};

export default Login;
