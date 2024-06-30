import { Link } from "react-router-dom";

export default function FormLogin() {
  return (
    <>
      <div>
        <h1 className=" font-GilroyMedium text-xl mb-8">Signup</h1>
        <form className=" w-[350px]">
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
            Signin
          </button>
        </form>
        <p className=" text-center mt-4">
          <span className=" font-GilroyMedium">Are you new here? </span>
          <Link className=" font-GilroyBold" to="/">
            Signup
          </Link>
        </p>
      </div>
    </>
  );
}
