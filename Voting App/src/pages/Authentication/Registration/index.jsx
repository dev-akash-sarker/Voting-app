import FormRegistration from "../../../components/forms/FormRegistration";

export default function Registration() {
  return (
    <>
      <div className="relative">
        <div className="grid grid-cols-[2fr,2fr] relative box-border">
          <div className="relative w-full h-screen flex justify-center items-center">
            <FormRegistration />
          </div>
          <div className="w-full h-full">
            <img
              className="w-[90%]"
              alt="registration"
              src="/src/assets/images/res.jpg"
            />
          </div>
        </div>
      </div>
    </>
  );
}
