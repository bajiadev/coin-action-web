import { useState, useEffect } from "react";

export default function PresaleWidget() {
  const tokenName = "MyToken";
  const presaleEnd = new Date("2025-03-01T00:00:00Z").getTime(); // Set presale end time
  const rate = 1000; // Example: 1 ETH = 1000 Tokens
  const totalRaised = 150; // Example: 150 ETH raised

  const [timeLeft, setTimeLeft] = useState(presaleEnd - Date.now());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(presaleEnd - Date.now());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (ms) => {
    const seconds = Math.floor(ms / 1000) % 60;
    const minutes = Math.floor(ms / (1000 * 60)) % 60;
    const hours = Math.floor(ms / (1000 * 60 * 60)) % 24;
    const days = Math.floor(ms / (1000 * 60 * 60 * 24));
    return `${days}d ${hours}h ${minutes}m ${seconds}s`;
  };

  const handleBuy = () => {
    alert("Buy function triggered"); // Replace with actual purchase logic
  };

  return (
    <div className="p-6 bg-indigo-500 bg-opacity-80 text-white rounded-2xl shadow-lg w-96">
      <h2 className="text-2xl font-bold text-center">{tokenName} Presale</h2>
      <p className="text-center mt-2 text-lg">Time Left: {formatTime(timeLeft)}</p>
      <p className="text-center mt-2 text-lg">Total Raised: {totalRaised} ETH</p>
      <p className="text-center mt-2 text-lg">Rate: 1 ETH = {rate} {tokenName}</p>
      <button
        onClick={handleBuy}
        className="mt-4 w-full bg-blue-600 hover:bg-blue-500 text-white py-2 rounded-lg font-semibold"
      >
        Buy {tokenName}
      </button>
    </div>
  );
}
