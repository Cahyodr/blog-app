import { Alert, Button, Label, Spinner, TextInput } from "flowbite-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function SignUp() {
  const [formData, setFormData] = useState({});
  const [errorMessage, setErrorMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  function handleChange(e) {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    if (!formData.username || !formData.email || !formData.password) {
      return setErrorMessage("Please fill out all fields!");
    }

    setIsLoading(true);
    setErrorMessage(null);

    try {
      const res = await fetch("/backend/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (data.success === false) {
        setIsLoading(false);
        return setErrorMessage(data.message);
      }

      setIsLoading(false);
      if (res.ok) {
        navigate("/sign-in");
      }
    } catch (error) {
      setIsLoading(false);
      setErrorMessage(error);
    }
  }

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
          <form className="flex flex-col gap-4 mt-4" onSubmit={handleSubmit}>
            <div>
              <Label value="Your Username" />
              <TextInput
                type="text"
                placeholder="Username"
                id="username"
                onChange={handleChange}
              />
            </div>
            <div>
              <Label value="Your Email" />
              <TextInput
                type="email"
                placeholder="anonymous@gmail.com"
                id="email"
                onChange={handleChange}
              />
            </div>
            <div>
              <Label value="Your Password" />
              <TextInput
                type="password"
                placeholder="Password"
                id="password"
                onChange={handleChange}
              />
            </div>
            <Button
              gradientDuoTone="purpleToPink"
              outline
              type="submit"
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <Spinner size="sm" />
                  <span className="ml-3">Loading...</span>
                </>
              ) : (
                "Sign Up"
              )}
            </Button>
          </form>
          <div className="flex gap-2 text-sm mt-5">
            <span>Have an account?</span>
            <Link to={"/sign-in"} className="text-blue-500">
              Sign In
            </Link>
          </div>
          <div>
            {errorMessage && (
              <Alert
                className="mt-5"
                id="alert-border-1"
                color="failure"
                withBorderAccent
              >
                {errorMessage}
              </Alert>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
