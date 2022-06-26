import { useWeb3React } from "@web3-react/core";
import Head from "next/head";
import Link from "next/link";
import Nav from "../components/Layout/Nav";
import Image from "next/image";
import MySkillsSelector from "../components/MySkillsSelector/MySkillsSelector";

const DAI_TOKEN_ADDRESS = "0x6b175474e89094c44da98b954eedeac495271d0f";

function Home() {
  const { account, library } = useWeb3React();
  const isConnected = typeof account === "string" && !!library;

  return (
    <div className="font-mont">
      <Head>
        <title>Open Navi</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <nav className="flex items-center pt-5 px-7">
          <Image src={"/navi.png"} width="100%" height="50%" alt={"Navi"} />
          <Nav />
        </nav>
      </header>

      <main className="pt-5">
        <h1 className="font-bold text-gray-600">
          Generate your{" "}
          <a href="https://github.com/mirshko/next-web3-boilerplate">
            Na'viSkills PFP
          </a>
        </h1>

        {isConnected && (
          <section>
            <div className="flex justify-between px-40 pt-10">
              <div>
                <h1 className="text-gray-500 text-semibold">My Skills</h1>
                <MySkillsSelector />
              </div>
              <div className="border-r"></div>
              <div>
                <h1 className="text-gray-5s00 text-semibold">Preview</h1>
              </div>
            </div>
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
