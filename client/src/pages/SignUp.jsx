import { Button, Label, TextInput } from "flowbite-react";
import { Link } from "react-router-dom";

function SignUp() {
  return (
    <div className=" mt-20 overflow-hidden">
      <div className="flex p-4  max-w-3xl mx-auto flex-col md:flex-row md:items-center">
        {/* LEFT SIDE */}
        <div className="flex-1">
          <Link
            to={"/"}
            className="self-center whitespace-nowrap text-4xl  font-bold dark:text-white"
          >
            <span className="px-2 py-1 bg-gradient-to-r from-purple-600 to-cyan-500 rounded-md text-white">
              Dwyoo
            </span>
            Blog
          </Link>
          <p className="text-sm mt-5 font-semibold">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem,
            expedita!
          </p>
        </div>
        {/* RIGHT SIDE */}
        <div className="flex-1">
          <form className="flex flex-col gap-4 mt-4">
            <div>
              <Label value="Your Username" />
              <TextInput type="text" placeholder="Username" id="username" />
            </div>
            <div>
              <Label value="Your Email" />
              <TextInput
                type="text"
                placeholder="anonymous@gmail.com"
                id="email"
              />
            </div>
            <div>
              <Label value="Your Password" />
              <TextInput type="password" placeholder="Password" id="password" />
            </div>
            <Button gradientDuoTone="purpleToPink" outline>
              Sign Up
            </Button>
          </form>
          <div className="flex gap-2 text-sm mt-5">
            <span>Have an account?</span>
            <Link to={"/sign-in"} className="text-blue-500">
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
