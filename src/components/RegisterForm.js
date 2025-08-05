import { useState } from "react";
import Link from "next/link";
import { registerUser } from "@/pages/utils/registerUser";
import Image from "next/image";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    registerUser({
      username: username,
      email: email,
      password: password,
    });
  }

  return (
    <div className="flex flex-col md:flex-row items-center bg-white rounded max-w-4xl w-full overflow-hidden">
      <div className="hidden md:block md:w-1/2">
        <Image
          src="/images/Register.gif"
          alt="Register Animation"
          width={500}
          height={500}
          loading="lazy"
        />
      </div>
      <form
        onSubmit={handleSubmit}
        className="bg-white rounded px-8 pt-6 pb-8 max-w-md w-full"
      >
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-700">
          Create an account
        </h2>

        <div className="mb-4">
          <label
            htmlFor="username"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Username
          </label>
          <input
            id="username"
            type="text"
            placeholder="Enter your username"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-600"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            minLength={4}
            required
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="youremail@exemple.com"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-600"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="password"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Password
          </label>
          <input
            id="password"
            type="password"
            placeholder="********"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-600"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            minLength={9}
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
        >
          Create account
        </button>
        <div className="py-2 flex items-center space-x-1">
          <p className="text-gray-700 text-sm font-bold mb-2">
            Already have an account?
          </p>
          <Link
            href="/user/login"
            className="text-blue-700 text-sm font-bold mb-2 underline"
          >
            Click here
          </Link>
        </div>
      </form>
    </div>
  );
}
