const ProfessionalMethodology = () => {
  const methodologies = [
    {
      title: "Natural Language Processing",
      description: "Advanced text analysis for claim identification and language pattern recognition"
    },
    {
      title: "Machine Learning Classification",
      description: "Statistical models for content credibility assessment and misinformation detection"
    },
    {
      title: "Source Reputation Modeling",
      description: "Publisher credibility evaluation based on historical accuracy and reliability metrics"
    },
    {
      title: "Bias & Manipulation Detection",
      description: "Analysis of language framing, emotional appeal, and presentation patterns"
    },
    {
      title: "Continuous Model Updates",
      description: "Regular system enhancements based on new data and verification patterns"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        
{/* Centered Header */}
        <div className="text-center mb-16">
          
          <h2 className="text-4xl font-bold text-emerald-900 mb-6 leading-tight">
Enterprise Implementation Framework     </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
Application of Scalable and Reliable Verification Systems in Media, Academic, and Research Ecosystems  </p>
        </div>

        {/* Methodology Cards - New UI Style */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Left Column */}
          <div className="space-y-8">
            {methodologies.slice(0, 2).map((method, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-sm">
                <div className="text-sm text-emerald-700 font-medium mb-2">
                  Methodology
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {method.title}
                </h3>
                <p className="text-gray-600">
                  {method.description}
                </p>
              </div>
            ))}
          </div>

          {/* Center Column - Feature Card */}
          <div className="bg-white rounded-lg p-6 shadow-sm flex flex-col h-full">
            <div>
              <div className="text-sm text-emerald-700 font-medium mb-2">
                Core Technology
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {methodologies[2].title}
              </h3>
              <p className="text-gray-600">
                {methodologies[2].description}
              </p>
            </div>
            
            {/* System Performance at Bottom - Pushed to bottom */}
            <div className="mt-auto pt-8">
              <div className="border-t border-gray-100 pt-6">
                <div className="text-xs text-gray-500 mb-4">System Performance</div>
                <div className="flex items-center space-x-8">
                  <div>
                    <div className="text-2xl font-bold text-emerald-700">99.2%</div>
                    <div className="text-xs text-gray-600">Accuracy Rate</div>
                  </div>
                  <div className="h-8 w-px bg-gray-300"></div>
                  <div>
                    <div className="text-2xl font-bold text-emerald-700">24/7</div>
                    <div className="text-xs text-gray-600">Operational</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            {methodologies.slice(3).map((method, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-sm">
                <div className="text-sm text-emerald-700 font-medium mb-2">
                  Methodology
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {method.title}
                </h3>
                <p className="text-gray-600">
                  {method.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="text-center">
          <p className="text-sm text-gray-600 max-w-2xl mx-auto">
            All methodologies undergo regular validation and enhancement. System maintains highest standards of analytical integrity.
          </p>
        </div>

      </div>
    </section>
  );
};

export default ProfessionalMethodology;