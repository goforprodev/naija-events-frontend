import Link from "next/Link";
import Layout from "../components/Layout";

export default function AboutPage() {
  return (
    <Layout title={"About Afro events"}>
      <h1>About</h1>
      <Link href={"/"}>Home</Link>
      <p>some thjinfsd</p>
    </Layout>
  );
}
