import { useState } from "react";
import { useFetchUserByEmailQuery, usePromoteUserToAdminMutation } from "../../redux/api/baseApi";
import { toast } from "react-toastify";


const CreateAdmin = () => {

    const [email, setEmail] = useState("");
  const [userId, setUserId] = useState(null);

  // Fetch user by email
  const { data: user, error, refetch } = useFetchUserByEmailQuery(email, {
    skip: !email, // Don't fetch until email is provided
  });

  const handleFetchUser = (e) => {
    e.preventDefault();
    if (email) {
      refetch(); // Fetch user when email is provided
    }
  };

  const handlePromoteToAdmin = async () => {
    try {
      if (user?.data?._id) {
        await promoteToAdmin(user.data._id);
        toast.success("User promoted to Admin successfully!");
      }
    } catch (error) {
      toast.error("Failed to promote user to Admin.");
    }
  };


   // Promote user to admin
   const [promoteToAdmin, { isLoading: isPromoting }] = usePromoteUserToAdminMutation();

    return (
        <div className="max-w-xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Promote User to Admin</h2>

      {/* Form to input email */}
      <form onSubmit={handleFetchUser}>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700">Enter User Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>
        {/* <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Fetch User
        </button> */}
      </form>

      {/* Show user details if fetched */}
      {user && (
        <div className="mt-6">
          <h3 className="text-xl font-bold">User Details</h3>
          <p>Name: {user.data.name}</p>
          <p>Email: {user.data.email}</p>
          <p>Role: {user.data.role}</p>
          
          {/* Promote user to admin button */}
          <button
            onClick={handlePromoteToAdmin}
            className={`mt-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 ${
              isPromoting ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={isPromoting}
          >
            {isPromoting ? "Promoting..." : "Promote to Admin"}
          </button>
        </div>
      )}

      {/* Error handling */}
      {error && <p className="text-red-500 mt-4">User not found or error fetching user.</p>}
    </div>
    );
};

export default CreateAdmin;