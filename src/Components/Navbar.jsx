import { useState } from 'react';

const MinimalGreenNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    'Dashboard',
    'Verification',
    'Database', 
    'Resources',
    'Analytics',
    'About'
  ];

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="w-10 h-10 bg-gradient-to-br from-emerald-400 to-green-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold">V</span>
            </div>
            <div className="ml-3">
              <h1 className="text-xl font-bold text-gray-900">VeriNew</h1>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item}
                href="#"
                className="text-sm text-gray-600 hover:text-emerald-700 font-medium transition-colors"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Right Side */}
          <div className="flex items-center space-x-4">
            <button className="hidden md:block px-5 py-2 bg-emerald-700 hover:bg-emerald-900 text-white text-sm font-medium rounded transition-colors">
              Start Verification
            </button>
            
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-gray-600 hover:text-gray-900"
            >
              <div className="space-y-1.5">
                <span className={`block w-6 h-0.5 bg-gray-600 transition-all ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                <span className={`block w-6 h-0.5 bg-gray-600 transition-all ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                <span className={`block w-6 h-0.5 bg-gray-600 transition-all ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-100 mt-2 py-4">
            <div className="space-y-3">
              {navItems.map((item) => (
                <a
                  key={item}
                  href="#"
                  className="block py-2 text-gray-600 hover:text-emerald-700 font-medium"
                >
                  {item}
                </a>
              ))}
              <button className="w-full mt-4 py-2.5 bg-black hover:bg-black text-white text-sm font-medium rounded">
                Start Verification
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default MinimalGreenNavbar;