import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const SignUp = () => {
  const { createUser } = useContext(AuthContext);
  const handleSignup = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const signup = { name, email, password };
    console.log(signup);

    createUser(email, password)
      .then((result) => {
        console.log(result);
      })
      .then((error) => console.log(error));
  };
  return (
    <div>
      <div className="my-8 md:border border-blue-600 mx-auto w-1/2 p-12">
        <h1 className="text-2xl my-6">Signup Here</h1>
        <form onSubmit={handleSignup}>
          <label htmlFor="">Name:</label>
          <br />
          <input
            className="my-2 px-4 py-2 border"
            type="text"
            name="name"
            id=""
            placeholder="Name"
          />
          <br />
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
          <input
            className="bg-blue-400 p-2 mt-4"
            type="submit"
            value="Sign Up"
          />
        </form>
      </div>
    </div>
  );
};

export default SignUp;
