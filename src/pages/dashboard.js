import DashboardScreen from "@/components/dashboard/DashboardScreen";
import Layout from "./layout";

export default function Dashboard() {
  return (
    <Layout>
      <main className="flex min-h-screen items-center justify-center bg-gray-50 px-4">
        <DashboardScreen />
      </main>
    </Layout>
  );
}
