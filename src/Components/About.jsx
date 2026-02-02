const CreativeAbout = () => {
  const sections = [
    {
      title: "System Overview",
      content: "Automated news verification platform using advanced natural language processing and machine learning for credibility assessment.",
      color: "border-emerald-200",
      bg: "bg-white",
      accent: "from-emerald-400 to-emerald-500"
    },
    {
      title: "Mission & Purpose",
      content: "Provide objective analysis to support informed decision-making, detect misinformation patterns, and promote media literacy.",
      color: "border-emerald-200",
      bg: "bg-white",
      accent: "from-emerald-400 to-emerald-500"
    },
    {
      title: "Technology Framework",
      content: "Utilizes NLP algorithms, machine learning models, and source verification systems for comprehensive content analysis.",
      color: "border-emerald-200",
      bg: "bg-white",
      accent: "from-emerald-400 to-emerald-500"
    },
    {
      title: "System Disclaimer",
      content: "Automated analysis for informational purposes. Supplements but does not replace professional fact-checking.",
      color: "border-emerald-300",
      bg: "bg-emerald-50",
      accent: "from-emerald-500 to-emerald-600"
    }
  ];

  const stats = [
    { value: "99.2%", label: "Accuracy" },
    { value: "24/7", label: "Operation" },
    { value: "0.8s", label: "Processing" },
    { value: "3.2.1", label: "Version" }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-emerald-50">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Header with creative element */}
        <div className="text-center mb-16 relative">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-64 h-64 bg-gradient-to-r from-emerald-100 to-green-100 rounded-full blur-3xl opacity-30"></div>
          </div>
          <div className="relative">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              System <span className="text-emerald-600">Credibility</span>
            </h2>
            <div className="inline-block">
              <div className="w-32 h-1 bg-gradient-to-r from-emerald-400 to-emerald-600 mb-4"></div>
            </div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive information about the verification system's framework and operational standards
            </p>
          </div>
        </div>

        {/* Equal-sized boxes grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {sections.map((section, index) => (
            <div 
              key={index}
              className={`${section.bg} ${section.color} border rounded-2xl p-8 h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-2 relative overflow-hidden group`}
            >
              {/* Decorative corner */}
              <div className={`absolute top-0 right-0 w-16 h-16 bg-gradient-to-br ${section.accent} opacity-10 rounded-bl-3xl`}></div>
              
              {/* Content */}
              <div className="relative z-10">
                <div className="flex items-center mb-6">
                  <div className={`w-10 h-10 rounded-lg bg-gradient-to-r ${section.accent} flex items-center justify-center mr-4`}>
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{section.title}</h3>
                </div>
                
                <p className="text-gray-700 leading-relaxed">
                  {section.content}
                </p>
                
                {/* Hover effect line */}
                <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-emerald-400 to-emerald-600 group-hover:w-full transition-all duration-500"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats with creative design */}
        <div className="mb-20">
          <div className="bg-white rounded-2xl border border-emerald-100 p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-10 text-center">System Performance Metrics</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="relative inline-block mb-4">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-r from-emerald-50 to-green-50 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <div className="text-2xl font-bold text-emerald-700">{stat.value}</div>
                    </div>
                    <div className="absolute inset-0 rounded-full border-2 border-emerald-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className="text-sm font-medium text-gray-700">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Creative footer */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-50 to-white rounded-2xl transform -rotate-1"></div>
          <div className="relative bg-white rounded-2xl border border-emerald-200 p-10">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Technical <span className="text-emerald-600">Documentation</span>
                </h3>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  Access comprehensive technical specifications, API documentation, and system integration guides.
                </p>
                <button className="px-8 py-3 bg-gradient-to-r from-emerald-500 to-green-500 text-white rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105">
                  View Documentation
                </button>
              </div>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { label: "API Reference", status: "Available" },
                  { label: "Technical Specs", status: "Updated" },
                  { label: "Integration Guide", status: "Available" },
                  { label: "Security Docs", status: "Restricted" }
                ].map((doc, index) => (
                  <div key={index} className="bg-gradient-to-br from-emerald-50 to-white border border-emerald-100 rounded-xl p-6">
                    <div className="text-sm font-medium text-gray-900 mb-2">{doc.label}</div>
                    <div className={`text-xs px-3 py-1 rounded-full inline-block ${
                      doc.status === 'Available' ? 'bg-emerald-100 text-emerald-700' :
                      doc.status === 'Updated' ? 'bg-blue-100 text-blue-700' :
                      'bg-amber-100 text-amber-700'
                    }`}>
                      {doc.status}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default CreativeAbout;