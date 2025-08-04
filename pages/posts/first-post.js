import Head from 'next/head';
import Image from 'next/image';
import Layout from '../../components/layout';
import Link from "next/link";

export default function FirstPost() {
    return (
        <Layout>
            <Head>
                <title>This is the headlines! yeah!</title>
            </Head>
            <h1>Now this is the first post</h1>
            <h2>
                <Link href="/">Home</Link>
            </h2>
            <p>Just a silvia because yea</p>
            <Image
                src="/images/s15.jpg"
                height={155}
                width={155}
                alt='Silvia S15'
            />
        </Layout>
    );
}