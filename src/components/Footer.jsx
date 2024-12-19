import { CiFacebook, CiLinkedin, CiYoutube } from 'react-icons/ci';
import { FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 text-center md:text-left">
        <div>
          <h3 className="text-xl font-bold">Movie Portal</h3>
          <p className="mt-2 text-sm text-gray-300">
            Your one-stop destination for all things movies!
          </p>
        </div>

        <div>
          <h3 className="text-xl font-bold">Contact Us</h3>
          <ul className="mt-2 space-y-1 text-sm text-gray-300">
            <li>Email: support@movieportal.com</li>
            <li>Phone: +1-234-567-890</li>
            <li>Address: 123 Movie Street, Film City</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-bold">Follow Us</h3>
          <ul className="flex justify-center md:justify-start space-x-4 mt-2 text-3xl">
            <li>
              <a
                href="https://www.facebook.com/neelaa.rani"
                target="_blank"
                className="hover:text-blue-500"
              >
                <CiFacebook />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/neela-rani"
                target="_blank"
                className="hover:text-blue-400"
              >
                <CiLinkedin />
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/@neela-rani"
                target="_blank"
                className="hover:text-pink-400"
              >
                <CiYoutube />
              </a>
            </li>
            <li>
              <a
                href="https://github.com/neelarani"
                target="_blank"
                className="hover:text-blue-700"
              >
                <FaGithub />
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-6 text-center border-t border-gray-700 pt-4 text-sm">
        <p>&copy; 2024 Movie Portal. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
