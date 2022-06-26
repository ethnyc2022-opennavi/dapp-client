import { useWeb3React } from "@web3-react/core";
import Head from "next/head";
import Link from "next/link";
import Nav from "../components/Layout/Nav";
import Image from 'next/image';
import FileUpload from "../components/FileUpload";

const DAI_TOKEN_ADDRESS = "0x6b175474e89094c44da98b954eedeac495271d0f";

function Home() {
  const { account, library } = useWeb3React();
  const isConnected = typeof account === "string" && !!library;

  return (
    <div>
      <Head>
        <title>Open Navi</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <nav className="flex items-center pt-5 px-7">
          <Link href="/">
            <Image src={'/navi.png'} width="100%" height="50%" alt={'Navi'}/>
          </Link>
          <Nav/>
        </nav>
      </header>

      <main className="pt-5">
        <h1>
          Welcome to{" "}
          <a href="https://github.com/mirshko/next-web3-boilerplate">
            Open Navi
          </a>
        </h1>

        {isConnected && (
          <section>
            <FileUpload></FileUpload>
          </section>
        )}


      </main>

      <style jsx>{`
        nav {
          display: flex;
          justify-content: space-between;
        }

        main {
          text-align: center;
        }
      `}</style>
    </div>
  );
}

export default Home;
