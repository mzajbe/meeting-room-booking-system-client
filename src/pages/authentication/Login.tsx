import React from 'react';



const Login: React.FC = () => {
  return (
    <div className="bg-login-bg bg-cover text-white flex min-h-screen flex-col items-center pt-16 sm:justify-center sm:pt-0">
      
      <div className="relative border border-white mt-12 w-full max-w-lg sm:mt-10 backdrop-blur-lg ">
        <div className="relative -mb-px h-px w-full bg-gradient-to-r from-transparent via-sky-300 to-transparent"></div>
        <div
          className="mx-5 shadow-[20px_0_20px_20px] shadow-slate-500/10 dark:shadow-white/20 rounded-lg border-white/20 border-l-white/20 border-r-white/20 sm:shadow-sm lg:rounded-xl lg:shadow-none">
          <div className="flex flex-col p-6">
            <h3 className="text-xl font-semibold leading-6 tracking-tighter text-neon animate-neon-blink ">Login</h3>
            <p className="mt-1.5 text-sm font-medium text-white">Enter your credentials to continue.</p>
          </div>
          <div className="p-6 pt-0">
            <form>
              <div>
                <div>
                  <div
                    className="group relative rounded-lg border focus-within:border-green-200 px-3 pb-1.5 pt-2.5 duration-200 focus-within:ring focus-within:ring-sky-300/30">
                    <div className="flex justify-between">
                      <label className="text-xs font-medium text-muted-foreground group-focus-within:text-white text-gray-100">
                        Username
                      </label>
                      <div className="absolute right-3 translate-y-2 text-green-200">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                          className="w-6 h-6">
                          <path fillRule="evenodd"
                            d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                            clipRule="evenodd" />
                        </svg>
                      </div>
                    </div>
                    <input
                      type="text"
                      name="username"
                      placeholder="Username"
                      autoComplete="off"
                      className="block w-full border-0 bg-transparent p-0 text-sm file:my-1 file:rounded-full file:border-0 file:bg-accent file:px-4 file:py-2 file:font-medium placeholder:text-muted-foreground/90 focus:outline-none focus:ring-0 sm:leading-7 text-foreground"
                    />
                  </div>
                </div>
              </div>
              <div className="mt-4">
                <div>
                  <div
                    className="group relative rounded-lg border focus-within:border-green-200 px-3 pb-1.5 pt-2.5 duration-200 focus-within:ring focus-within:ring-sky-300/30">
                    <div className="flex justify-between">
                      <label className="text-xs font-medium text-muted-foreground group-focus-within:text-white text-gray-100">
                        Password
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        type="password"
                        name="password"
                        className="block w-full border-0 bg-transparent p-0 text-sm file:my-1 placeholder:text-muted-foreground/90 focus:outline-none focus:ring-0 sm:leading-7 text-foreground"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-4 flex items-center justify-between">
                
                
              </div>
              <div className="mt-4 flex items-center justify-end gap-x-2">
                <a
                  className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:ring hover:ring-white h-10 px-4 py-2 duration-200"
                  href="/register"
                >
                  Register
                </a>
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

    // <div
    //   className="flex h-screen w-full items-center justify-center bg-gray-900 bg-cover bg-no-repeat"
    //   style={{
    //     backgroundImage: loginBg,


    //     //   "url('https://images.unsplash.com/photo-1499123785106-343e69e68db1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1748&q=80')"

    //   }}
    // >
    //   <div className="rounded-xl bg-gray-800 bg-opacity-50 px-16 py-10 shadow-lg backdrop-blur-md max-sm:px-8">
    //     <div className="text-white">
    //       <div className="mb-8 flex flex-col items-center">
    //         <img
    //           src="https://www.logo.wine/a/logo/Instagram/Instagram-Glyph-Color-Logo.wine.svg"
    //           width="150"
    //           alt="Instagram Logo"
    //         />
    //         <h1 className="mb-2 text-2xl">Instagram</h1>
    //         <span className="text-gray-300">Enter Login Details</span>
    //       </div>
    //       <form action="#">
    //         <div className="mb-4 text-lg">
    //           <input
    //             className="rounded-3xl border-none bg-yellow-400 bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md"
    //             type="email"
    //             name="email"
    //             placeholder="id@email.com"
    //           />
    //         </div>

    //         <div className="mb-4 text-lg">
    //           <input
    //             className="rounded-3xl border-none bg-yellow-400 bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md"
    //             type="password"
    //             name="password"
    //             placeholder="*********"
    //           />
    //         </div>
    //         <div className="mt-8 flex justify-center text-lg text-black">
    //           <button
    //             type="submit"
    //             className="rounded-3xl bg-yellow-400 bg-opacity-50 px-10 py-2 text-white shadow-xl backdrop-blur-md transition-colors duration-300 hover:bg-yellow-600"
    //           >
    //             Login
    //           </button>
    //         </div>
    //       </form>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Login;
