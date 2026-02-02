const ProfessionalFooter = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          
          {/* Platform Information */}
          <div>
            <div className="mb-6">
              <div className="w-10 h-10 bg-emerald-600 rounded-lg flex items-center justify-center mb-4">
                <div className="text-white font-bold">VN</div>
              </div>
              <div className="text-xl font-bold mb-2">VeriNew</div>
              <div className="text-gray-400 text-sm">Automated News Verification Platform</div>
            </div>
            <p className="text-gray-400 text-sm">
              Advanced system for news content credibility assessment and misinformation detection.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6">System Access</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Verification Tool</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Case Database</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Research Resources</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">API Documentation</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-bold mb-6">Resources</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Media Literacy Guides</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Fact-Checking Standards</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Research Papers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Educational Materials</a></li>
            </ul>
          </div>

          {/* Contact & Legal */}
          <div>
            <h3 className="text-lg font-bold mb-6">Information</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">About System</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Contact Support</a></li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 mb-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <div className="text-gray-400 text-sm">
              © 2024 VeriNew. Automated News Verification Platform.
            </div>
            <div className="text-gray-500 text-xs mt-2">
              Built for educational and research purposes.
            </div>
          </div>
          
          <div className="flex items-center space-x-6">
            <div className="text-gray-400 text-sm">
              System Version: 3.2.1
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-emerald-500 rounded-full mr-2"></div>
              <span className="text-gray-400 text-sm">Operational</span>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-8 pt-8 border-t border-gray-800">
          <p className="text-gray-500 text-xs text-center leading-relaxed">
            This system provides automated analysis for informational purposes. Results should be interpreted 
            as assistive analysis, not absolute determinations. Not a replacement for professional 
            fact-checking or official verification sources.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default ProfessionalFooter;