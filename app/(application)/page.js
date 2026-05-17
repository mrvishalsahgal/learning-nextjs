import Link from "next/link";
import Component from "../_components/page";

export default function Home() {
  return (
    <>
      <h1> Welcome to Next JS </h1>
      <Component />
      <Link href="/about"> About </Link>
      <Link href="/contact"> Contact </Link>
      <Link href="/services"> Services </Link>
    </>
  );
}
