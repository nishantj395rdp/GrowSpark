import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-gray-900 p-4 flex justify-around text-white">
      <Link to="/home">Home</Link>
      <Link to="/wallet">Wallet</Link>
      <Link to="/leaderboard">Leaderboard</Link>
    </nav>
  );
}
