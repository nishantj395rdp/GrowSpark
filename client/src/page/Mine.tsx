import React from "react";

const Mine: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col justify-between pb-20">
      {/* Balance + Energy */}
      <div className="p-4">
        <div className="bg-gray-900 p-4 rounded-xl mb-4">
          <h1 className="text-2xl font-bold">Skyes Balance</h1>
          <p className="text-3xl font-extrabold text-yellow-400">
            139,071
          </p>
          <div className="mt-4">
            <p className="text-sm mb-1">Energy</p>
            <div className="w-full bg-gray-700 rounded-full h-3">
              <div className="bg-yellow-400 h-3 rounded-full w-3/4"></div>
            </div>
            <p className="text-xs text-gray-400 mt-1">4000 / 8500</p>
          </div>
        </div>

        {/* Block info */}
        <div className="bg-gray-900 p-4 rounded-xl mb-4 flex justify-between text-sm">
          <div>
            <p className="text-gray-400">Block</p>
            <p className="font-bold">#1831238</p>
          </div>
          <div>
            <p className="text-gray-400">Reward</p>
            <p className="font-bold">2500</p>
          </div>
          <div>
            <p className="text-gray-400">Complexity</p>
            <p className="font-bold">1244</p>
          </div>
          <div>
            <p className="text-gray-400">Online</p>
            <p className="font-bold">22,191</p>
          </div>
        </div>

        {/* Start Mining button */}
        <button className="w-full bg-yellow-500 text-black font-bold py-3 rounded-lg">
          Start Mining
        </button>

        {/* Last Blocks */}
        <div className="mt-6">
          <h2 className="font-bold mb-2">Last Blocks</h2>
          <div className="space-y-2">
            {Array.from({ length: 5 }).map((_, i) => (
              <div
                key={i}
                className="flex justify-between bg-gray-800 p-3 rounded-lg text-sm"
              >
                <p>Block #{1831239 + i}</p>
                <p className="text-gray-400">@username</p>
                <p className="text-gray-500">03:1{i}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Nav */}
      <div className="fixed bottom-0 w-full bg-gray-900 text-white flex justify-around py-3 border-t border-gray-700">
        <button className="flex flex-col items-center text-yellow-400">
          <span>⛏</span>
          <span className="text-xs">Mine</span>
        </button>
        <button className="flex flex-col items-center">
          <span>📋</span>
          <span className="text-xs">Tasks</span>
        </button>
        <button className="flex flex-col items-center">
          <span>⚡</span>
          <span className="text-xs">Upgrade</span>
        </button>
        <button className="flex flex-col items-center">
          <span>👛</span>
          <span className="text-xs">Wallet</span>
        </button>
      </div>
    </div>
  );
};

export default Mine;
