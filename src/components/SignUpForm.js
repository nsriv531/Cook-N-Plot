import { useState } from "react";

const SignUpForm = () => {
  const [formData, setFormData] = useState({
    username: "",
    confirmUsername: "",
    email: "",
    password: "",
    confirmPassword: ""
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.username !== formData.confirmUsername) {
      setError("Usernames do not match");
      return;
    }
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      const response = await fetch("http://localhost:3000/api/users/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (!response.ok) throw new Error(result.error);

      setSuccess("User registered successfully!");
      setError("");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-[#f7f7c9] font-custom text-black">
      <form
        onSubmit={handleSubmit}
        className="bg-[#A4B465] p-4 sm:p-6 lg:p-8 rounded-lg shadow-lg w-full sm:w-80 md:w-96 mx-4"
      >
        <h2 className="font-bold mb-4 text-center text-2xl sm:text-3xl lg:text-5xl">Sign Up</h2>
        {error && <p className="text-red-500 text-sm mb-3">{error}</p>}
        {success && <p className="text-[#626F47] text-sm mb-3">{success}</p>}

        <label className="block mb-2 text-base sm:text-lg lg:text-3xl">Enter Username</label>
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
          className="w-full p-2 rounded bg-[#dfc591] focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />

        <label className="block mt-4 mb-2 text-base sm:text-lg lg:text-3xl">Confirm Username</label>
        <input
          type="text"
          name="confirmUsername"
          value={formData.confirmUsername}
          onChange={handleChange}
          className="w-full p-2 rounded bg-[#dfc591] focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />

        <label className="block mt-4 mb-2 text-base sm:text-lg lg:text-3xl">Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-2 rounded bg-[#dfc591] focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />

        <label className="block mt-4 mb-2 text-base sm:text-lg lg:text-3xl">Enter Password</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          className="w-full p-2 rounded bg-[#dfc591] focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />

        <label className="block mt-4 mb-2 text-base sm:text-lg lg:text-3xl">Confirm Password</label>
        <input
          type="password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          className="w-full p-2 rounded bg-[#dfc591] focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />

        <button
          type="submit"
          className="w-full bg-[#626F47] hover:bg-[#dfc591] text-black font-bold py-2 sm:py-3 px-4 rounded mt-4 text-base sm:text-lg lg:text-3xl"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignUpForm;
