import Banner from "components/Banner/Banner";
import Footer from "components/Footer/Footer";
import Gallery from "components/Gallery/Gallery";
import Header from "components/Header/Header";
import Menu from "components/Menu/Menu";
import { useState } from "react";
//import Popular from "components/Popular/Popular";

import styles from './FrontPage.module.scss'


export default function FrontPage() {
  const [search, setSearch] = useState('')
  //console.log(search);
  return (
    <>
      <Header search={search} setSearch={setSearch} />
      <main>
        <section className={styles.main__section}>
          <Menu />
          <Banner />
        </section>
        <div className={styles.gallery}>
          <Gallery typed={search} />
          {/* <Popular /> */}
        </div>
      </main>
      <Footer />
    </>
  )
}
