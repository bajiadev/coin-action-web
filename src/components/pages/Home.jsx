
import { FaTelegramPlane, FaTwitter, FaEnvelope } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import chainLogo from '../../assets/images/chainlogo.png'; // update if needed

const Home = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800 flex flex-col items-center justify-center px-4">
      {/* Logo + Title */}
      <div className="flex flex-col items-center mb-10">
        <img src={chainLogo} alt="Coin Action" className="w-44 h-44 rounded-lg" />
       
        <p className="text-lg mt-2 text-center text-gray-600 max-w-lg">
          Simplifying cross-chain trading for everyone. Fast, secure, and multi-chain ready.
        </p>
      </div>

      {/* CTA Button */}
      <Link
        to="/exchange"
        className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-3 rounded-xl transition-all mb-10"
      >
        Launch Exchange
      </Link>

      {/* Contact / Socials */}
      <div className="flex flex-col sm:flex-row gap-6 text-lg text-gray-700">
        <a
          href="https://t.me/chainactionchannel"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:text-indigo-600 transition"
        >
          <FaTelegramPlane className="text-blue-500" />
          Telegram
        </a>

        <a
          href="https://twitter.com/chainaction24"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:text-indigo-600 transition"
        >
          <FaTwitter className="text-blue-400" />
          Twitter
        </a>

        <a
          href="mailto:chainaction24@gmail.com"
          className="flex items-center gap-2 hover:text-indigo-600 transition"
        >
          <FaEnvelope className="text-gray-500" />
          Email
        </a>
      </div>
    </div>
  );
};

export default Home;

