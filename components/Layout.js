import Head from "next/head";
import styles from '../styles/Layout.module.css'

export default function Layout({ title, keywords, description, children }) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
      </Head>
      <div className={styles.container}>{children}</div>
    </div>
  );
}

Layout.defaultProps = {
  title: "Naija Events | Find the latest and hottest events and festivals",
  description: "Find the latest and hottest events and festivals",
  keywords: "music,fests,parties,ed,",
};
