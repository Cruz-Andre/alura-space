import Banner from "components/Banner/Banner";
import Footer from "components/Footer/Footer";
import Gallery from "components/Gallery/Gallery";
import Header from "components/Header/Header";
import Menu from "components/Menu/Menu";
import Popular from "components/Popular/Popular";

import styles from './FrontPage.module.scss'


export default function FrontPage() {
  return (
    <>
      <Header />
      <main>
        <section className={styles.main__section}>
          <Menu />
          <Banner />
        </section>
        <div className={styles.gallery}>
          <Gallery />
          {/* <Popular /> */}
        </div>
      </main>
      <Footer />
    </>
  )
}
