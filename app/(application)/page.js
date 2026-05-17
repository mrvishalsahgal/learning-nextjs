import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1> Welcome to Next JS </h1>
      <Link href="/about"> About </Link>
      <Link href="/contact"> Contact </Link>
      <Link href="/services"> Services </Link>
    </>
  );
}
