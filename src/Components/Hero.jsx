const ProfessionalHero = () => {
  return (
    <div className="min-h-screen bg-white flex items-center">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column - Main Content */}
          <div>
            <div className="mb-8">
              <div className="text-sm font-medium text-emerald-900 uppercase tracking-wider mb-4">
                News Verification System
              </div>
              <h1 className="text-5xl font-bold text-emerald-950 mb-6 leading-tight">
                Verify news credibility
                <span className="block text-black mt-2">before you trust it</span>
              </h1>
              <p className="text-lg text-gray-600 max-w-lg leading-relaxed">
                Professional analysis platform for media organizations and journalists to verify article credibility and detect misinformation.
              </p>
            </div>

            {/* CTA */}
            <div className="mb-12">
              <button className="px-10 py-4 bg-emerald-800 text-white font-medium hover:bg-emerald-900 transition-colors text-base">
                Upload Article for Analysis
              </button>
              <div className="mt-3 text-sm text-gray-500">
                Free verification • 30-second analysis
              </div>
            </div>

            {/* Features */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-100">
              <div>
                <div className="text-gray-900 font-medium mb-2">Source Analysis</div>
                <div className="text-gray-500 text-sm">Publisher credibility</div>
              </div>
              <div>
                <div className="text-gray-900 font-medium mb-2">Fact Checking</div>
                <div className="text-gray-500 text-sm">Database cross-reference</div>
              </div>
              <div>
                <div className="text-gray-900 font-medium mb-2">Bias Detection</div>
                <div className="text-gray-500 text-sm">Pattern analysis</div>
              </div>
            </div>
          </div>

          {/* Right Column - Enhanced Verification Panel */}
          <div className="bg-gray-50 border border-gray-200 p-8">
            <h3 className="text-lg font-medium text-gray-900 mb-8">
              Recent Verifications
            </h3>
            
            <div className="space-y-8">
              {/* Verified Item */}
              <div className="pb-6 border-b border-gray-200">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h4 className="font-medium text-gray-900 text-base mb-1">Economic Policy Report</h4>
                    <div className="flex items-center text-xs text-gray-500">
                      <span className="font-medium text-emerald-700 mr-3">VERIFIED</span>
                      <span>Government • Fiscal Policy</span>
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 text-sm mb-4">
                  Cross-referenced with official sources and verified data from 8 independent sources
                </p>
                <div className="flex justify-between text-sm text-gray-500">
                  <span>96% confidence score</span>
                  <span>12:45 PM</span>
                </div>
              </div>

              {/* Unverified Item */}
              <div>
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h4 className="font-medium text-gray-900 text-base mb-1">Viral Health Claim</h4>
                    <div className="flex items-center text-xs text-gray-500">
                      <span className="font-medium text-red-700 mr-3">UNVERIFIED</span>
                      <span>Health • Social Media</span>
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 text-sm mb-4">
                  Contradictory evidence from reliable medical databases
                </p>
                <div className="flex justify-between text-sm text-gray-500">
                  <span>34% confidence score</span>
                  <span>11:20 AM</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfessionalHero;