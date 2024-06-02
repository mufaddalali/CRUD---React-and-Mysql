import axios from "axios";
import { useState } from "react";
import baseUrl from "../uri/url";
import { useNavigate } from "react-router-dom";
const CreateUser = () => {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({});
  const [successMessage, setsuccessMessage] = useState(false);
  const [errorMessage, seterrorMessage] = useState("");
  const [loading, setloading] = useState(false);
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
setloading(true);
    try {
      const response = await axios.post(`${baseUrl}/api/save`, inputs);

      if (response.status === 200) {
        console.log("success 200");
        setsuccessMessage(true);
        setTimeout(() => {
          navigate("/");
        }, 2000);
        setloading(false)
      } else {
        seterrorMessage("Something Happend! User not saved");
      }
    } catch (error) {
      seterrorMessage(error.message);
      setloading(false)
    }
    finally{
        setloading(false)
    }
  };

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-4 mx-auto flex flex-wrap">
        <div className="w-2/3 bg-gray-100 rounded-lg p-8 flex flex-col m-auto mt-10">
          {successMessage ? (
            <div className="text-center py-4 lg:px-4">
              <div
                className="p-2 bg-green-800 items-center text-green-100 leading-none lg:rounded-full flex lg:inline-flex rounded-md"
                role="alert"
              >
                <span className="flex rounded-full bg-green-500 uppercase px-2 py-1 text-xs font-bold mr-3">
                  Success
                </span>
                <span className="font-semibold mr-2 text-left flex-auto">
                  User Saved Successfully!
                </span>
              </div>
            </div>
          ) : errorMessage && errorMessage != "" ? (
            <div className="text-center py-4 lg:px-4">
              <div
                className="p-2 bg-red-800 items-center text-red-100 leading-none lg:rounded-full flex lg:inline-flex rounded-md"
                role="alert"
              >
                <span className="flex rounded-full bg-red-500 uppercase px-2 py-1 text-xs font-bold mr-3">
                  Error
                </span>
                <span className="font-semibold mr-2 text-left flex-auto">
                  {errorMessage} Try Again
                </span>
              </div>
            </div>
          ) : (
            "Saved Successfully"
          )}
          <h2 className="text-gray-900 text-lg font-medium title-font mb-5">
            Create User
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="relative mb-4">
              <label htmlFor="user" className="leading-7 text-sm text-gray-600">
                Username
              </label>
              <input
                type="text"
                id="username"
                name="username"
                onChange={handleChange}
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="email"
                className="leading-7 text-sm text-gray-600"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                onChange={handleChange}
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="mobile"
                className="leading-7 text-sm text-gray-600"
              >
                Mobile
              </label>
              <input
                type="nmuber"
                id="mobile"
                name="mobile"
                onChange={handleChange}
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <button className="flex items-center text-white bg-green-700 border-0 py-2 px-4 focus:outline-none hover:bg-green-900 rounded text-sm">
              Add User
              {loading && <svg
                version="1.1"
                id="L9"
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                viewBox="0 0 100 100"
                style={{
                    width: "30px",
                    display: "inline-block",
                    marginLeft: "10px"
                }}
              >
                <path
                  fill="#fff"
                  d="M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50"
                >
                  <animateTransform
                    attributeName="transform"
                    attributeType="XML"
                    type="rotate"
                    dur="1s"
                    from="0 50 50"
                    to="360 50 50"
                    repeatCount="indefinite"
                  ></animateTransform>
                </path>
              </svg>}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default CreateUser;
