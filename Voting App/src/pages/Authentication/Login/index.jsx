import FormLogin from "../../../components/forms/FormLogin";

export default function Login() {
  return (
    <>
      <div className="relative">
        <div className="grid grid-cols-[2fr,2fr] relative box-border">
          <div className="w-full h-full">
            <img
              className="w-[90%]"
              alt="registration"
              src="/src/assets/images/res.jpg"
            />
          </div>
          <div className="relative w-full h-screen flex justify-center items-center">
            <FormLogin />
          </div>
        </div>
      </div>
    </>
  );
}
