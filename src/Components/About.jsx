const ProfessionalAbout = () => {
  const sections = [
    {
      title: "System Overview",
      content: "Automated news verification platform using natural language processing and machine learning for credibility assessment.",
      border: "border-l-4 border-emerald-500"
    },
    {
      title: "Mission & Objectives",
      content: "Provide objective analysis to support informed decision-making and detect misinformation patterns in digital content.",
      border: "border-l-4 border-emerald-500"
    },
    {
      title: "Technology Framework",
      content: "Utilizes NLP algorithms and machine learning models for comprehensive content analysis and verification.",
      border: "border-l-4 border-emerald-500"
    },
    {
      title: "System Disclaimer",
      content: "Automated analysis for informational purposes. Supplements professional fact-checking procedures.",
      border: "border-l-4 border-emerald-600",
      bg: "bg-emerald-50"
    }
  ];

  const metrics = [
    { value: "99.2%", label: "Accuracy" },
    { value: "0.8s", label: "Processing" },
    { value: "24/7", label: "Operation" },
    { value: "3.2.1", label: "Version" }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        
        {/* Professional Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            System Information
          </h2>
          <div className="w-20 h-1 bg-emerald-600 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Overview of the verification system's framework, capabilities, and operational standards
          </p>
        </div>

        {/* Compact Boxes Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {sections.map((section, index) => (
            <div 
              key={index}
              className={`${section.bg || 'bg-white'} ${section.border} border-t border-r border-b border-gray-200 rounded-r-lg rounded-b-lg p-6 hover:shadow-sm transition-shadow duration-300`}
            >
              <h3 className="text-lg font-bold text-gray-900 mb-4">
                {section.title}
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                {section.content}
              </p>
            </div>
          ))}
        </div>

        {/* Compact System Metrics */}
        <div className="mb-12">
          <div className="border border-gray-200 rounded-lg p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-6 text-center">
              System Performance
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {metrics.map((metric, index) => (
                <div key={index} className="text-center">
                  <div className="text-xl font-bold text-emerald-700 mb-1">
                    {metric.value}
                  </div>
                  <div className="text-xs text-gray-600">
                    {metric.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Technical Information */}
        <div className="border border-gray-200 rounded-lg p-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Technical Specifications
              </h3>
              <div className="space-y-3">
                <div className="pb-3 border-b border-gray-100">
                  <div className="text-sm font-medium text-gray-700 mb-1">
                    Natural Language Processing
                  </div>
                  <div className="text-xs text-gray-600">
                    Advanced text analysis for pattern recognition
                  </div>
                </div>
                <div className="pb-3 border-b border-gray-100">
                  <div className="text-sm font-medium text-gray-700 mb-1">
                    Machine Learning Models
                  </div>
                  <div className="text-xs text-gray-600">
                    Statistical classification of content credibility
                  </div>
                </div>
                <div>
                  <div className="text-sm font-medium text-gray-700 mb-1">
                    Source Verification
                  </div>
                  <div className="text-xs text-gray-600">
                    Cross-referencing with verified databases
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Documentation
              </h3>
              <div className="space-y-3">
                <button className="w-full px-4 py-2 bg-white border border-gray-300 text-gray-700 text-sm rounded hover:bg-gray-50 text-left">
                  Technical Specifications
                </button>
                <button className="w-full px-4 py-2 bg-white border border-gray-300 text-gray-700 text-sm rounded hover:bg-gray-50 text-left">
                  API Reference Guide
                </button>
                <button className="w-full px-4 py-2 bg-emerald-600 text-white text-sm rounded hover:bg-emerald-700">
                  Contact Technical Support
                </button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ProfessionalAbout;