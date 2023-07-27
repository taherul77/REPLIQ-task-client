"use client";


import { useAuth } from "@/lib/context/AuthProvider";
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-hot-toast";


const Login = () => {
  const { login } = useAuth();
  const [open, setOpen] = useState({
      password: false,
  });
  const router = useRouter()

  // const navigate = useNavigate();
  // const location = useLocation();
  // const from = location.state?.from?.pathname || "/";

  const [error, setError] = useState("");

  const handleSubmit = async (event) => {
      event.preventDefault();
      const form = event.target;
      const phone = form.phone.value;
      const password = form.password.value;

      const data = {
          phone,
          password,
      };

      const logIn = await login(data);

      if (logIn === true) {
          form.reset();
          setError("");
          toast.success("Login successful");
          router.push("/")
      } else {
          setError(logIn);
          toast.error(logIn);
      }
  };

  return (
    <div className=" login-item hero min-h-screen bg-white">
        <div className="hero-content   flex-col lg:flex-row">
          <div className="mr-12 w-1/2">
            <Image height={500} width={500} src="https://i.ibb.co/6tx9hS8/16292986-beautifulwoman-114-removebg.png" alt="" />
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-white">
            <div>
              <div className="p-8 space-y-3 rounded-xl  text-neutral">
                <h1 className="text-2xl font-bold text-center">Login</h1>
                {error && (
                        <div className="flex justify-center items-center gap-1">
                            {" "}
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={3}
                                stroke="currentColor"
                                className="w-5 h-5 text-red-500"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>{" "}
                            <p className="text-md font-bold text-red-500 text-center">
                                {error}
                            </p>
                        </div>
                    )}
                <form
                   onSubmit={handleSubmit}
                  noValidate=""
                  action=""
                  className="space-y-6 ng-untouched ng-pristine ng-valid"
                >
                  <div className="space-y-1 text-sm">
                    <label htmlFor="email" className="block">
                      Phone
                    </label>
                    <input
                      type="text"
                      name="phone"
                      placeholder="Phone Number"
                      className="w-full px-4 py-3 bg-white rounded-md border border-black text-neutral"
                      required
                    />
                  </div>
                  <div className="space-y-1 text-sm">
                    <label htmlFor="password" className="block">
                      Password
                    </label>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      placeholder="Password"
                      className="w-full px-4 py-3 bg-white rounded-md border border-black  text-neutral"
                      required
                    />
                    
                  </div>
                  <small>
                    <p className="text-error -mt-2">
                      {/* {error.split("Firebase:")} */}
                    </p>
                  </small>
                  <button
                    type="submit"
                    className="block w-full p-3 text-center px-6 py-2 font-bold text-cyan-50 border-md rounded-md  bg-yellow-500"
                  >
                    Log in
                  </button>
                </form>
               
                
                <p className="text-xs text-center sm:px-6">
                  Do not have an account? <br />
                  <Link href='/register'
                    
                    className="underline hover:text-primary"
                  >
                    Register Now
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Login
