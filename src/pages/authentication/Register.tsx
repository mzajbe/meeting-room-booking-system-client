import { useState } from "react";
import { useSignUpMutation } from "../../redux/api/baseApi";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Register = () => {
  const [signUp, { isLoading }] = useSignUpMutation();
  const navigate = useNavigate();

  const [errors, setErrors] = useState({ email: "" });

  // State for form data
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    address: "",
  });

  // Handle form input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Simple email validation
    if (name === "email") {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(value)) {
        setErrors({ ...errors, email: "Please enter a valid email address" });
      } else {
        setErrors({ ...errors, email: "" });
      }
    }
  };

  // Handle form submit
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (errors.email) {
      toast.error("Please correct the errors before submitting.");
      return;
    }

    try {
      // Ensure role is sent with default 'user' value
      const result = await signUp({
        name: formData.name,
        email: formData.email,
        password: formData.password,
        phone: formData.phone,
        address: formData.address,
        role: "user", // Ensure this is sent
      }).unwrap();

      console.log("User signed up successfully:", result);

      // // Show success toast
      // toast.success("Registration successful!", {
      //   toastId: "success",
      // });

      navigate("/login", { state: { fromRegister: true } });
    } catch (error) {
      console.error("Failed to sign up:", error);

      // Show error toast
      toast.error("Registration failed! Please try again.", {
        toastId: "failed",
      });
    }
  };

  return (
    <div className="bg-login-bg bg-cover text-white flex min-h-screen flex-col items-center pt-16 sm:justify-center sm:pt-0">
      <div className="relative border border-white mt-12 w-full max-w-lg sm:mt-10 backdrop-blur-lg">
        <div className="relative -mb-px h-px w-full bg-gradient-to-r from-transparent via-sky-300 to-transparent"></div>
        <div className="mx-5 shadow-[20px_0_20px_20px] shadow-slate-500/10 dark:shadow-white/20 rounded-lg border-white/20 border-l-white/20 border-r-white/20 sm:shadow-sm lg:rounded-xl lg:shadow-none">
          <div className="flex flex-col p-6">
            <h3 className="text-xl font-semibold leading-6 tracking-tighter text-neon animate-neon-blink">
              Register
            </h3>
            <p className="mt-1.5 text-sm font-medium text-white">
              Enter your credentials to continue.
            </p>
          </div>
          <div className="p-6 pt-0">
            <form onSubmit={handleSubmit}>
              <div className="mb-2">
                <div className="group relative rounded-lg border focus-within:border-green-200 px-3 pb-1.5 pt-2.5 duration-200 focus-within:ring focus-within:ring-sky-300/30">
                  <label className="text-xs font-medium text-gray-100">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Name"
                    className="block w-full border-0 bg-transparent p-0 text-sm placeholder:text-gray-400 focus:outline-none"
                  />
                </div>
              </div>
              <div className="mb-2">
                <div className="group relative rounded-lg border focus-within:border-green-200 px-3 pb-1.5 pt-2.5 duration-200 focus-within:ring focus-within:ring-sky-300/30">
                  <label className="text-xs font-medium text-gray-100">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                    className="block w-full border-0 bg-transparent p-0 text-sm placeholder:text-gray-400 focus:outline-none"
                  />
                </div>
                {/* Email Error Display */}
                {errors.email && (
                  <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                )}
              </div>
              <div className="mb-2">
                <div className="group relative rounded-lg border focus-within:border-green-200 px-3 pb-1.5 pt-2.5 duration-200 focus-within:ring focus-within:ring-sky-300/30">
                  <label className="text-xs font-medium text-gray-100">Password</label>
                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Password"
                    className="block w-full border-0 bg-transparent p-0 text-sm placeholder:text-gray-400 focus:outline-none"
                  />
                </div>
              </div>
              <div className="mb-2">
                <div className="group relative rounded-lg border focus-within:border-green-200 px-3 pb-1.5 pt-2.5 duration-200 focus-within:ring focus-within:ring-sky-300/30">
                  <label className="text-xs font-medium text-gray-100">Phone Number</label>
                  <input
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone Number"
                    className="block w-full border-0 bg-transparent p-0 text-sm placeholder:text-gray-400 focus:outline-none"
                  />
                </div>
              </div>
              <div className="mb-2">
                <div className="group relative rounded-lg border focus-within:border-green-200 px-3 pb-1.5 pt-2.5 duration-200 focus-within:ring focus-within:ring-sky-300/30">
                  <label className="text-xs font-medium text-gray-100">Address</label>
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    placeholder="Address"
                    className="block w-full border-0 bg-transparent p-0 text-sm placeholder:text-gray-400 focus:outline-none"
                  />
                </div>
              </div>
              <div className="mt-4 flex justify-end">
                <button
                  type="submit"
                  className="rounded-md bg-accent px-4 py-2 text-sm font-medium text-white transition-all hover:bg-accent/90"
                >
                  {isLoading ? "Signing Up..." : "Register"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
