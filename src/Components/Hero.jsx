const ProfessionalHero = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-screen py-16">
          
          {/* Left Column - Content */}
          <div className="pt-8 lg:pt-0">
            {/* Headline */}
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-8">
              Automated News
              <span className="block text-emerald-700 mt-2">Verification Platform</span>
            </h1>

            {/* Description */}
            <p className="text-lg text-gray-600 mb-12 leading-relaxed pr-4">
              Advanced system for analyzing news content credibility using 
              natural language processing and machine learning. 
              Detect misinformation and verify information accuracy across 
              digital media.
            </p>

            {/* Key Metrics */}
            <div className="flex items-center space-x-12 mb-12">
              <div>
                <div className="text-2xl font-bold text-emerald-700 mb-1">99.2%</div>
                <div className="text-sm text-gray-500">Accuracy Rate</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-emerald-700 mb-1">0.8s</div>
                <div className="text-sm text-gray-500">Avg. Analysis Time</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-emerald-700 mb-1">24/7</div>
                <div className="text-sm text-gray-500">Operational</div>
              </div>
            </div>

            {/* CTA Button - Aligned with content above */}
            <button className="px-10 py-3.5 bg-emerald-700 text-white font-medium text-lg rounded-md hover:bg-emerald-800 transition-colors">
              Analyze Article Credibility
            </button>
          </div>

          {/* Right Column - Verification Examples */}
          <div className="border border-gray-200 rounded-lg p-8 bg-white shadow-sm mt-8 lg:mt-0">
            <h3 className="text-xl font-semibold text-gray-900 mb-8 pb-4 border-b border-gray-100">
              Recent Verifications
            </h3>

            <div className="space-y-8">
              {/* Verified Example */}
              <div className="pb-8 border-b border-gray-100">
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center mr-4 flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 bg-emerald-600 rounded-full"></div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-medium text-gray-900">Government Economic Report</h4>
                      <span className="text-xs font-medium text-emerald-700 bg-emerald-50 px-2 py-1 rounded">
                        VERIFIED
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 mb-3 leading-relaxed">
                      Official statement cross-referenced with verified sources
                    </p>
                    <div className="flex items-center text-xs text-gray-500">
                      <span className="mr-4">Confidence: 96%</span>
                      <span>Sources: 8 verified</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Unverified Example */}
              <div className="pb-8">
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center mr-4 flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-medium text-gray-900">Viral Health Claim</h4>
                      <span className="text-xs font-medium text-red-700 bg-red-50 px-2 py-1 rounded">
                        UNVERIFIED
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 mb-3 leading-relaxed">
                      Insufficient evidence and contradictory sources detected
                    </p>
                    <div className="flex items-center text-xs text-gray-500">
                      <span className="mr-4">Confidence: 34%</span>
                      <span>Sources: 0 verified</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Button - Aligned with left column button */}
              <div className="pt-2">
                <button className="w-full py-3.5 bg-gray-900 text-white font-medium rounded-md hover:bg-gray-800 transition-colors">
                  Submit Article for Analysis
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfessionalHero;