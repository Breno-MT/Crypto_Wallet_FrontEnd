import Head from 'next/head';
import LoginForm from '@/components/LoginForm';
import Layout from './layout';

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Crypto Wallet</title>
      </Head>
      <main className="flex min-h-screen items-center justify-center bg-gray-50 px-4">
        <LoginForm />
      </main>
    </Layout>
  );
}
