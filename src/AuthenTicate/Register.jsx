import { useNavigate } from "react-router-dom";
import InputGroup from "../Components/InputGroup";
import Layout from "../Components/Layout";

function Register() {
  const navigate = useNavigate();

  return (
    <Layout>

    <div className="container w-[40%] bg-gray-50 h-auto mx-auto border rounded mt-[5%] shadow">
      {/* Heading */}
      <h1 className="flex justify-center text-2xl mt-5">Register</h1>

      {/* Form Fields */}
      <div className="flex flex-col items-center gap-y-4">
        <InputGroup
          label="Full Name"
          placeholder="Enter your full name"
          type="text"
        />
        <InputGroup
          label="Email"
          placeholder="Enter your email"
          type="email"
        />
        <InputGroup
          label="Username"
          placeholder="Choose a username"
          type="text"
        />
        <InputGroup
          label="Password"
          placeholder="Create a password"
          type="password"
        />
        <InputGroup
          label="Confirm Password"
          placeholder="Re-enter your password"
          type="password"
        />

        {/* Submit Button */}
        <button className="w-[79%] bg-green-500 py-2 rounded cursor-pointer hover:bg-green-600">
          Create Account
        </button>

        {/* Navigation back to Login */}
        <div className="text-sm mb-4 text-gray-600">
          Already have an account?
          <button
            className="ml-1 text-blue-500 font-medium hover:underline hover:text-blue-700 transition-colors duration-200 cursor-pointer"
            onClick={() => {
              navigate("/signin");
            }}
          >
            Login here
          </button>
        </div>
      </div>
    </div>
    </Layout>
  );
}

export default Register;
