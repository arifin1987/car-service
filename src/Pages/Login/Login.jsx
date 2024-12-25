import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const { signIn } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  console.log(location);
  const handleLogin = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;
    const user = { email, password };
    console.log(user);
    signIn(email, password)
      .then((result) => {
        const loggedInUser = result.user;
        console.log(loggedInUser);
        const user = { email };

        axios
          .post("http://localhost:5000/jwt", user, {
            withCredentials: true,
          })
          .then((res) => {
            console.log(res.data);
            if (res.data.success) {
              navigate(location?.state ? location?.state : "/");
            }
          });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="my-8 md:border border-blue-600 mx-auto w-1/2 p-12">
      <h1 className="text-2xl my-6">Login Here</h1>
      <form onSubmit={handleLogin}>
        <label htmlFor="">Email:</label>
        <br />
        <input
          className="my-2 px-4 py-2 border"
          type="email"
          name="email"
          id=""
          placeholder="Email"
        />
        <br />
        <label htmlFor="">Password:</label>
        <br />
        <input
          className="px-4 py-2 border"
          type="password"
          name="password"
          id=""
          placeholder="Password"
        />
        <br />
        <input className="bg-blue-400 p-2 mt-4" type="submit" value="Login" />
      </form>
      <p>
        New to car service? <Link to="/signup">Sign Up</Link>
      </p>
    </div>
  );
};

export default Login;
