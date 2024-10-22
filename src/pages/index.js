import Head from "next/head";
import { Inter } from "next/font/google";
import Link from "next/link";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
          <title>Home Page</title>
       </Head>
            <div>
                <h1>Welcome to my Blog!</h1>
                <p>Check out my first post! Thanks for visiting!</p>
                  <Link href="/posts/first-post">First Post</Link>
                </div>
     </> 
    );
}
