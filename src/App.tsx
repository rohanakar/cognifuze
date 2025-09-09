import "./App.css";
import { Routes, Route, Link, useLocation } from "react-router-dom";
import Me from "./pages/me/Me";
import Home from "./pages/home/Cognifuze";
import About from "./pages/home/About";

const Error: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-full text-center">
      <h1 className="text-5xl font-bold text-red-600 mb-4">404</h1>
      <p className="text-lg text-gray-700">Page Not Found</p>
    </div>
  );
};

function App() {
  const location = useLocation();

  const showNavbarRoutes = ["/", "/about"];

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {showNavbarRoutes.includes(location.pathname) && (
        <nav className="bg-transparent text-white fixed w-full z-20 flex p-8 m-8">
          <ul className="flex space-x-12 text-xl font-semibold">
            <li>
              <Link to="/" className="hover:text-yellow-300 transition-colors">
                Cognifuze
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="hover:text-yellow-300 transition-colors"
              >
                About
              </Link>
            </li>
          </ul>
        </nav>
      )}
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/cv/:name" element={<Me />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
