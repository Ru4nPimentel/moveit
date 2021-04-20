import React from "react";
import CompletedChallenges from "../components/CompletedChallenges";
import Contdown from "../components/Contdown";
import ExperienceBar from "../components/ExperienceBar";
import Profile from "../components/Profile";

import Head from "next/head";

import styles from "../styles/pages/Home.module.css"
import ChallengeBox from "../components/ChallengeBox";
import { CountdownProvider } from "../contexts/CountdownContext";

export default function Home() {
  return (
    <React.Fragment>
      <div className={styles.container}>
        <Head>
          <title>Inicio | move.it</title>
        </Head>
        <ExperienceBar />
        <CountdownProvider>
          <article >
            <section >
              <Profile />
              <CompletedChallenges />
              <Contdown />
            </section>
            <section>
              <ChallengeBox />
            </section>
          </article>
        </CountdownProvider>
      </div>

    </React.Fragment>

  );
}
