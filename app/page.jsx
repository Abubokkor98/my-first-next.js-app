import Hello from "./components/Hello";

export default function Home() {
  console.log("yoyoyo");
  return (
    <>
      <h2 className="text-4xl font-bold text-center">
        My First Next.js App is here
      </h2>
      <hr/>
      <Hello></Hello>
    </>
  );
}
