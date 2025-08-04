import { useState } from 'react';
import { loginUser } from '@/pages/utils/loginUser';

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    loginUser({
      "email": email,
      "password": password
    });
  }

  return (
    <div className="flex flex-col md:flex-row items-center bg-white rounded max-w-4xl w-full overflow-hidden">
      <div className="hidden md:block md:w-1/2">
        <img
          src="/images/Login.gif"
          alt="Login Animation"
          className="object-cover h-full w-full"
          loading="lazy"
        />
    </div>
      <form
        onSubmit={handleSubmit}
        className="bg-white rounded px-8 pt-6 pb-8 max-w-md w-full"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Entrar</h2>

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
            minLength={6}
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
        >
          Login
        </button>
      </form>
    </div>
  );
}
