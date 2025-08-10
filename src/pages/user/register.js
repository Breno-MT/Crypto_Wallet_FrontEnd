import RegisterForm from "@/components/auth/RegisterForm";
import Layout from "../layout";

export default function RegisterUser() {
  return (
    <Layout>
      <main className="flex min-h-screen items-center justify-center bg-gray-50 px-4">
        <RegisterForm />
      </main>
    </Layout>
  );
}
