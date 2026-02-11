const ProfessionalHero = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 flex items-center justify-center py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center">
          
          {/* Minimal Star Rating with distinct gray background */}
          <div className="inline-flex items-center justify-center space-x-2 bg-gray-100 px-4 py-2 rounded-full mb-6">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-3 h-3 text-amber-500 fill-current" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="text-xs font-medium text-gray-700 tracking-wide">
              Enterprise Platform
            </span>
          </div>
          
          {/* Main headline with professional highlight */}
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-[1.1]">
            Verify News Credibility
            <br />
            <span className="relative inline-block mt-6">
              <span className="relative z-10 bg-gradient-to-r from-emerald-700 to-emerald-600 bg-clip-text text-transparent">
                Before You Trust It
              </span>
              <span className="absolute bottom-1 left-0 w-full h-3 bg-gradient-to-r from-emerald-100 to-emerald-50 -z-0"></span>
            </span>
          </h1>
          
          {/* Professional subtitle */}
          <div className="max-w-2xl mx-auto mb-16">
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Enterprise-grade platform trusted by leading media organizations and journalists worldwide 
              for verifying article credibility and detecting misinformation in real-time.
            </p>
            
            {/* Trust indicators */}
            <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-gray-500">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-emerald-500 rounded-full mr-2"></div>
                ISO 27001 Certified
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-emerald-500 rounded-full mr-2"></div>
                GDPR Compliant
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-emerald-500 rounded-full mr-2"></div>
                99.9% Uptime SLA
              </div>
            </div>
          </div>

          {/* Professional CTA Section */}
          <div className="mb-20">
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="px-10 py-4 bg-gray-900 text-white font-semibold hover:bg-gray-800 transition-all duration-200 rounded-lg shadow-md hover:shadow-lg text-base">
                Start Free Analysis
              </button>
              <button className="px-10 py-4 bg-white text-gray-700 font-semibold border border-gray-300 hover:border-gray-400 transition-all duration-200 rounded-lg shadow-sm hover:shadow text-base">
                Schedule Demo
              </button>
            </div>
            <div className="mt-4 text-sm text-gray-500">
              No credit card required • Enterprise plans available
            </div>
          </div>

          {/* Professional Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-20">
            <div className="text-center">
              <div className="text-3xl font-bold text-emerald-700 mb-2">99.8%</div>
              <div className="font-medium text-gray-900 mb-2">Analytical Accuracy</div>
              <div className="text-gray-600 text-sm">Industry-leading verification precision</div>
            </div>
            
            <div className="text-center">
              <div className="text-3xl font-bold text-emerald-700 mb-2">&lt;30s</div>
              <div className="font-medium text-gray-900 mb-2">Average Processing</div>
              <div className="text-gray-600 text-sm">Real-time analysis and reporting</div>
            </div>
            
            <div className="text-center">
              <div className="text-3xl font-bold text-emerald-700 mb-2">10,000+</div>
              <div className="font-medium text-gray-900 mb-2">Daily Verifications</div>
              <div className="text-gray-600 text-sm">Global media organizations</div>
            </div>
          </div>

          {/* Trusted Partners */}
          <div className="pt-12 border-t border-gray-200">
            <div className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-8">
              Trusted By Industry Leaders
            </div>
            <div className="flex flex-wrap justify-center items-center gap-12">
              {[
                { name: "BBC News", color: "text-gray-800" },
                { name: "Reuters", color: "text-gray-800" },
                { name: "Associated Press", color: "text-gray-800" },
                { name: "CNN International", color: "text-gray-800" },
                { name: "The Guardian", color: "text-gray-800" },
                { name: "Bloomberg", color: "text-gray-800" },
              ].map((org, index) => (
                <div key={index} className={`text-lg font-medium ${org.color} opacity-90 hover:opacity-100 transition-opacity`}>
                  {org.name}
                </div>
              ))}
            </div>
          </div>

          {/* Security Badge */}
          <div className="mt-12 pt-8 border-t border-gray-100">
            <div className="inline-flex items-center space-x-2 text-sm text-gray-500">
              <svg className="w-4 h-4 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Enterprise-grade security • End-to-end encryption • SOC 2 Type II certified</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfessionalHero;