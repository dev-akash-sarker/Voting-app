import { countries } from "countries-list";
import Select from "react-select";
import { useState } from "react";
import "/node_modules/flag-icons/css/flag-icons.min.css";
import CustomOption from "./CustomOption";
import CustomSingleValue from "./CustomSingleValue";
import { Link } from "react-router-dom";

export default function FormRegistration() {
  const [selectedOption, setSelectedOption] = useState(null);

  const countryname = Object.entries(countries);

  const abc = countryname.map(([key, item]) => [item.name, key]);
  const transformedAbc = abc.map((country) => ({
    value: country[0],
    label: country[0],
    short: country[1],
  }));

  return (
    <>
      <div>
        <h1 className=" font-GilroyMedium text-xl mb-8">Signup</h1>
        <form className=" w-[350px]">
          <div className="mt-4">
            <label htmlFor="name">
              <b>Name</b>
            </label>
            <br />
            <input
              type="text"
              name="name"
              className=" w-full h-9 mt-2 border-2 border-primary_border_color rounded-sm shadow-sm focus:outline-none indent-2"
              placeholder="Enter your name"
            />
          </div>
          <div className="mt-4">
            <label htmlFor="email">
              <b>Email</b>
            </label>
            <br />
            <input
              type="email"
              name="email"
              className=" w-full h-9 mt-2 border-2 border-primary_border_color rounded-sm shadow-sm focus:outline-none indent-2"
              placeholder="Enter your email"
            />
          </div>
          <div className="mt-4">
            <label htmlFor="country">
              <b>Country</b>
            </label>
            <br />
            <Select
              className="mt-2 "
              defaultValue={selectedOption}
              onChange={setSelectedOption}
              options={transformedAbc}
              components={{
                Option: CustomOption,
                SingleValue: CustomSingleValue,
              }}
            />
          </div>
          <div className="mt-4">
            <label htmlFor="password">
              <b>Password</b>
            </label>
            <br />
            <input
              type="password"
              name="password"
              className=" w-full h-9 mt-2 border-2 border-primary_border_color rounded-sm shadow-sm focus:outline-none indent-2"
              placeholder="Create your password"
            />
          </div>
          <button className="mt-4 w-full bg-black text-white font-GilroyBold py-3 rounded-md shadow-md">
            Get Started
          </button>
        </form>
        <p className=" text-center mt-4">
          <span className=" font-GilroyMedium">Already have an account? </span>
          <Link className=" font-GilroyBold" to="/login">
            login
          </Link>
        </p>
      </div>
    </>
  );
}
