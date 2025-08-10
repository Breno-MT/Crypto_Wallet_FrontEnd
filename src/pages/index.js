import Head from "next/head";
import HomeScreen from "@/components/home/HomeScreen";
import Layout from "./layout";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Crypto Wallet</title>
      </Head>
      <main className="flex min-h-screen items-center justify-center bg-gray-50 px-4">
        <HomeScreen />
      </main>
    </Layout>
  );
}
