import Link from "next/link";

export default function Services() {
  return (
    <p>
      <h1> Services </h1>
      <p>
        {" "}
        <Link href="services/service1"> service 1</Link>
      </p>
      <p>
        {" "}
        <Link href="services/service2"> service 2</Link>
      </p>
      <p>
        {" "}
        <Link href="services/service3"> service 3</Link>
      </p>
      <p>
        {" "}
        <Link href="services/service4"> service 4</Link>
      </p>
    </p>
  );
}
