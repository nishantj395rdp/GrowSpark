import Navbar from "../components/Navbar";

export default function Wallet() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="p-6">
        <h1 className="text-2xl font-bold">Wallet</h1>
        <p className="text-gray-400">Check your balance and transactions here.</p>
      </div>
    </div>
  );
}
