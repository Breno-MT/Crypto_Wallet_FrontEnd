import { useState } from "react";
import { loginUser } from "@/pages/utils/loginUser";
import { useRouter } from "next/router";
import { translateCaption } from "@/i18n";
import Image from "next/image";
import Link from "next/link";

export default function LoginForm() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function handleSubmit(event) {
    event.preventDefault();

    setLoading(true);
    setError(null);

    try {
      await loginUser({
        email: email,
        password: password,
      });
      alert("Login efetuado com sucesso!");
      router.push("/user/dashboard");
    } catch (err) {
      setError(err.message || "Unknown error");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex flex-col md:flex-row items-center bg-white rounded max-w-4xl w-full overflow-hidden">
      <div className="hidden md:block md:w-1/2">
        <Image
          src="/images/Login.gif"
          alt="Login Animation"
          width={350}
          height={350}
          loading="lazy"
        />
      </div>
      <form
        onSubmit={handleSubmit}
        className="bg-white rounded px-8 pt-6 pb-8 max-w-md w-full"
      >
        <h1>{error ? `${error}` : ""}</h1>
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-700">
          {translateCaption("login.title")}
        </h2>

        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            {translateCaption("login.email")}
          </label>
          <input
            id="email"
            type="email"
            placeholder={translateCaption("login.email_tip")}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-600"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            disabled={loading}
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="password"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            {translateCaption("login.password")}
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
            disabled={loading}
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
          disabled={loading}
        >
          {translateCaption("login.submit")}
        </button>
        <div className="py-2 flex items-center space-x-1">
          <p className="text-gray-700 text-sm font-bold mb-2">
            {translateCaption("login.dont_have_account_capitalized")}
          </p>
          <Link
            href="/user/register"
            className="text-blue-700 text-sm font-bold mb-2 underline"
          >
            {translateCaption("login.click_here_capitalized")}
          </Link>
        </div>
      </form>
    </div>
  );
}
