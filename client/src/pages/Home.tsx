import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow p-6">
        <h1 className="text-2xl font-bold">Welcome to Grow Spark AI</h1>
        <p className="text-gray-400 mt-2">Start mining, playing, and earning cool tokens!</p>
      </div>
    </div>
  );
}
