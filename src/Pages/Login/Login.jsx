import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const Login = () => {
  const { signIn } = useContext(AuthContext);
  const handleLogin = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;
    const user = { email, password };
    console.log(user);
    signIn(email, password)
      .then((data) => {
        console.log(data);
      })
      .then((error) => {
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
    </div>
  );
};

export default Login;
