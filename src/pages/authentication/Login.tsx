/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useLoginMutation } from "../../redux/features/auth/authApi";
import { useAppDispatch } from "../../redux/hooks";
import { setUser } from "../../redux/features/authSlice";
import { verifyToken } from "../../utils/verifyToken";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";

const Login: React.FC = () => {
  const dispatch = useAppDispatch();
  const { register, handleSubmit } = useForm();

  const [login,{data,error}] = useLoginMutation();
  const location = useLocation();
  const navigate = useNavigate();

  console.log("data =>" , data);
  console.log("error =>" , error);

  // toast.error(error?.data?.message,{
  //   toastId:"error1",
  // })

  useEffect(() => {
    // Handle error display using toast
    if (error) {
      if ("data" in error) {
        const apiError = error as FetchBaseQueryError;
        // Check if apiError.data is an object and has a message property
        const errorMessage = (apiError?.data as { message?: string })?.message;

        if (errorMessage) {
          toast.error(errorMessage, {
            toastId: "error1",
          });
        } else {
          toast.error("An error occurred during login.", {
            toastId: "error1",
          });
        }
      } else {
        toast.error("An unexpected error occurred.", {
          toastId: "error1",
        });
      }
    }
  }, [error]);

  
  

  

  useEffect(() => {
    // Show the toast notification if redirected from Register
    if (location.state && location.state.fromRegister) {
      toast.success("Registration successful! Please login.", {
        toastId: "success1",
      });

      // Clear the state to prevent the toast from showing again
      navigate("/login", { replace: true, state: {} });
    }
  }, [location, navigate]);

  const onSubmit = async (data:any) => {
    const userInfo = {
      email: data.email,
      password:data.password,
    }
    const res = await login(userInfo).unwrap();
    


    const user = verifyToken(res.token);
    console.log(user);
    
    

    dispatch(setUser({user:user,token:res.token}));
    
    
  };

  return (
    <div
      
      className="bg-login-bg bg-cover text-white flex min-h-screen flex-col items-center pt-16 sm:justify-center sm:pt-0"
    >
      <div className="relative border border-white mt-12 w-full max-w-lg sm:mt-10 backdrop-blur-lg ">
        <div className="relative -mb-px h-px w-full bg-gradient-to-r from-transparent via-sky-300 to-transparent"></div>
        <div className="mx-5 shadow-[20px_0_20px_20px] shadow-slate-500/10 dark:shadow-white/20 rounded-lg border-white/20 border-l-white/20 border-r-white/20 sm:shadow-sm lg:rounded-xl lg:shadow-none">
          <div className="flex flex-col p-6">
            <h3 className="text-xl font-semibold leading-6 tracking-tighter text-neon animate-neon-blink ">
              Login
            </h3>
            <p className="mt-1.5 text-sm font-medium text-white">
              Enter your credentials to continue.
            </p>
          </div>
          <div className="p-6 pt-0">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div>
                <div>
                  <div className="group relative rounded-lg border focus-within:border-green-200 px-3 pb-1.5 pt-2.5 duration-200 focus-within:ring focus-within:ring-sky-300/30">
                    <div className="flex justify-between">
                      <label className="text-xs font-medium text-muted-foreground group-focus-within:text-white text-gray-100">
                        Email
                      </label>
                    </div>
                    <input
                      type="text"
                      id="email"
                      {...register("email")}
                      placeholder="email"
                      autoComplete="off"
                      className="block w-full border-0 bg-transparent p-0 text-sm file:my-1 file:rounded-full file:border-0 file:bg-accent file:px-4 file:py-2 file:font-medium placeholder:text-muted-foreground/90 focus:outline-none focus:ring-0 sm:leading-7 text-foreground"
                    />
                  </div>
                </div>
              </div>
              <div className="mt-4">
                <div>
                  <div className="group relative rounded-lg border focus-within:border-green-200 px-3 pb-1.5 pt-2.5 duration-200 focus-within:ring focus-within:ring-sky-300/30">
                    <div className="flex justify-between">
                      <label className="text-xs font-medium text-muted-foreground group-focus-within:text-white text-gray-100">
                        Password
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        type="password"
                        id="password"
                        {...register("password")}
                        placeholder="Password"
                        className="block w-full border-0 bg-transparent p-0 text-sm file:my-1 placeholder:text-muted-foreground/90 focus:outline-none focus:ring-0 sm:leading-7 text-foreground"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-4 flex items-center justify-between"></div>
              <div className="mt-4 flex items-center justify-end gap-x-2">
                <Link to="/register">
                  <a
                    className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:ring hover:ring-white h-10 px-4 py-2 duration-200"
                    href="/register"
                  >
                    Register
                  </a>
                </Link>
                <button
                  className="font-semibold hover:bg-black hover:text-white hover:ring hover:ring-white transition duration-300 inline-flex items-center justify-center rounded-md text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-white text-black h-10 px-4 py-2"
                  type="submit"
                >
                  Log in
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
