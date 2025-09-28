import Navbar from "../components/Navbar";

export default function Leaderboard() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="p-6">
        <h1 className="text-2xl font-bold">Leaderboard</h1>
        <p className="text-gray-400">See who’s leading in the Grow Spark AI community!</p>
      </div>
    </div>
  );
}
