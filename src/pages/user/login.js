import LoginForm from "@/components/auth/LoginForm";
import Layout from "../layout";

export default function LoginUser() {
  return (
    <Layout>
      <main className="flex min-h-screen items-center justify-center bg-gray-50 px-4">
        <LoginForm />
      </main>
    </Layout>
  );
}
