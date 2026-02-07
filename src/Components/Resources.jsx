const ProfessionalResources = () => {
  const resources = [
    {
      category: "VERIFICATION METHODOLOGY",
      title: "Identifying Unverified Information",
      description: "Systematic framework for evaluating news credibility, source verification, and recognition of misinformation patterns in digital content.",
      topics: [
        "Source verification techniques",
        "Credibility assessment framework",
        "Pattern recognition methods",
        "Fact-checking procedures"
      ]
    },
    {
      category: "ANALYSIS FRAMEWORK",
      title: "Misinformation Analysis",
      description: "Comprehensive analysis of manipulation techniques and recognition strategies for digital content assessment.",
      topics: [
        "Manipulation pattern analysis",
        "Source authentication methods",
        "Context verification techniques",
        "Visual content assessment"
      ]
    },
    {
      category: "MEDIA LITERACY",
      title: "Critical Information Assessment",
      description: "Framework for systematic source evaluation and information verification protocols for digital media consumption.",
      topics: [
        "Critical analysis methodologies",
        "Source hierarchy evaluation",
        "Bias assessment framework",
        "Verification protocols"
      ]
    },
    {
      category: "PROFESSIONAL STANDARDS",
      title: "Verification Protocols",
      description: "Professional verification standards and methodologies employed for reliable information assessment.",
      topics: [
        "Cross-referencing protocols",
        "Timeline verification standards",
        "Expert validation procedures",
        "Evidence assessment guidelines"
      ]
    }
  ];

  const research = [
    {
      institution: "Reuters Institute",
      title: "Digital News Verification Report",
      focus: "Global verification trends and assessment methodologies"
    },
    {
      institution: "Stanford University",
      title: "Media Analysis Framework",
      focus: "Systematic approach to information verification"
    },
    {
      institution: "Professional Standards",
      title: "Verification Methodology",
      focus: "Industry standards for information assessment"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-16">
          <div className="mb-6">
            <div className="w-20 h-1 bg-emerald-600 mb-4"></div>
            <span className="text-sm font-medium text-emerald-700 uppercase tracking-wider">
              Information Resources
            </span>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Verification & Analysis Resources
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl">
            Professional frameworks and methodologies for information verification and media analysis
          </p>
        </div>

        {/* Main Resources Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {resources.map((resource, index) => (
            <div key={index} className="border border-gray-200 rounded-lg">
              <div className="p-8">
                {/* Category */}
                <div className="mb-6">
                  <span className="text-xs font-medium text-emerald-700 uppercase tracking-wider">
                    {resource.category}
                  </span>
                </div>

                {/* Title & Description */}
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {resource.title}
                </h3>
                <p className="text-gray-700 mb-8 leading-relaxed">
                  {resource.description}
                </p>

                {/* Topics */}
                <div className="mb-8">
                  <div className="text-sm font-medium text-gray-700 mb-4 pb-2 border-b border-gray-100">
                    Key Components
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    {resource.topics.map((topic, idx) => (
                      <div key={idx} className="text-sm text-gray-600">
                        {topic}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action */}
                <a 
                  href="#"
                  className="inline-flex items-center text-gray-900 hover:text-emerald-700 font-medium"
                >
                  Access resource →
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Research Section */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-gray-900 mb-10 pb-4 border-b border-gray-200">
            Research & Publications
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {research.map((study, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-6">
                <div className="text-lg font-bold text-gray-900 mb-3">
                  {study.institution}
                </div>
                <div className="text-gray-900 font-medium mb-4">
                  {study.title}
                </div>
                <div className="text-sm text-gray-600 mb-6">
                  {study.focus}
                </div>
                <div className="pt-4 border-t border-gray-100">
                  <a href="#" className="text-sm text-gray-700 hover:text-emerald-700 font-medium">
                    View publication →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Professional Framework */}
        <div className="border border-gray-200 rounded-xl p-10">
          <div className="grid lg:grid-cols-2 gap-10">
            <div>
              <h4 className="text-2xl font-bold text-gray-900 mb-6">
                Verification Framework
              </h4>
              <p className="text-gray-700 mb-8 leading-relaxed">
                Comprehensive methodology integrating systematic source evaluation, 
                cross-referencing protocols, and evidence validation standards for 
                professional information verification.
              </p>
              
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <div className="text-sm font-medium text-gray-700 mb-3">Methodology</div>
                  <div className="space-y-2">
                    <div className="text-sm text-gray-600">Source assessment protocols</div>
                    <div className="text-sm text-gray-600">Evidence validation standards</div>
                    <div className="text-sm text-gray-600">Context verification methods</div>
                  </div>
                </div>
                
                <div>
                  <div className="text-sm font-medium text-gray-700 mb-3">Applications</div>
                  <div className="space-y-2">
                    <div className="text-sm text-gray-600">Media analysis frameworks</div>
                    <div className="text-sm text-gray-600">Professional verification standards</div>
                    <div className="text-sm text-gray-600">Research methodologies</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="border-l border-gray-200 pl-10">
              <div className="text-sm font-medium text-gray-700 mb-6">Resource Access</div>
              <div className="space-y-6">
                <a href="#" className="block text-gray-900 hover:text-emerald-700">
                  <div className="font-medium">Methodology Library</div>
                  <div className="text-sm text-gray-600">Complete verification frameworks</div>
                </a>
                
                <a href="#" className="block text-gray-900 hover:text-emerald-700">
                  <div className="font-medium">Professional Standards</div>
                  <div className="text-sm text-gray-600">Industry verification protocols</div>
                </a>
                
                <a href="#" className="block text-gray-900 hover:text-emerald-700">
                  <div className="font-medium">Research Database</div>
                  <div className="text-sm text-gray-600">Academic and professional studies</div>
                </a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ProfessionalResources;