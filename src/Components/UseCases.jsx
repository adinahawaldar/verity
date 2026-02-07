const ProfessionalUseCases = () => {
  const useCases = [
    {
      category: "Media & Journalism",
      title: "Journalists verifying breaking news",
      description: "Reuters newsroom implements automated verification for conflict zone reporting and official statement cross-referencing during developing situations.",
      example: "Verification of government statements during political crises",
      imgType: "newsroom"
    },
    {
      category: "Academic Research",
      title: "Students researching credible sources",
      description: "University libraries integrate verification tools for academic paper research, helping students evaluate source reliability for citations and literature reviews.",
      example: "Source assessment for thesis and dissertation research",
      imgType: "research"
    },
    {
      category: "Public Information",
      title: "General readers checking viral content",
      description: "Public information centers deploy verification systems to help citizens assess the credibility of widely circulated social media content and health claims.",
      example: "Community verification of viral social media posts",
      imgType: "public"
    },
    {
      category: "Professional Analysis",
      title: "Researchers analyzing misinformation trends",
      description: "Research institutions utilize the platform for systematic analysis of misinformation patterns, tracking narrative evolution across digital platforms.",
      example: "Stanford Internet Observatory misinformation studies",
      imgType: "analysis"
    }
  ];

  const caseStudies = [
    {
      organization: "Reuters Institute",
      study: "2024 Digital News Report",
      focus: "News verification in conflict reporting",
      link: "#"
    },
    {
      organization: "Harvard Kennedy School",
      study: "Misinformation Research Initiative",
      focus: "Source credibility assessment methods",
      link: "#"
    },
    {
      organization: "Stanford Internet Observatory",
      study: "Platform manipulation analysis",
      focus: "Cross-platform misinformation tracking",
      link: "#"
    }
  ];

  // Image placeholders with realistic alt text
  const getImagePlaceholder = (type) => {
    const images = {
      newsroom: "https://images.unsplash.com/photo-1588681664899-f142ff2dc9b1?auto=format&fit=crop&w=400&h=250&q=80",
      research: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&w=400&h=250&q=80",
      public: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=400&h=250&q=80",
      analysis: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=400&h=250&q=80"
    };
    return images[type] || images.newsroom;
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Professional Implementation
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl">
            Real-world application of verification systems in media, academic, and research environments
          </p>
        </div>

        {/* Use Cases with Images */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-20">
          {useCases.map((useCase, index) => (
            <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
              {/* Image */}
              <div className="h-48 bg-gray-100 overflow-hidden">
                <img 
                  src={getImagePlaceholder(useCase.imgType)} 
                  alt={`${useCase.category} implementation`}
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Content */}
              <div className="p-8">
                <div className="mb-4">
                  <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">
                    {useCase.category}
                  </span>
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {useCase.title}
                </h3>
                
                <p className="text-gray-700 mb-6 leading-relaxed">
                  {useCase.description}
                </p>
                
                <div className="pt-4 border-t border-gray-100">
                  <div className="text-sm text-gray-500 mb-2">Example Application</div>
                  <div className="text-gray-900 font-medium">
                    {useCase.example}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Case Studies */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-gray-900 mb-10">Research & Case Studies</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-6 hover:border-gray-300 transition-colors">
                <div className="text-xs font-medium text-gray-500 mb-4">CASE STUDY</div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">
                  {study.organization}
                </h4>
                <div className="text-gray-700 mb-4">
                  {study.study}
                </div>
                <div className="text-sm text-gray-500 mb-6">
                  {study.focus}
                </div>
                <a 
                  href={study.link}
                  className="text-sm text-gray-700 hover:text-emerald-700 font-medium inline-flex items-center"
                >
                  View study details
                  <span className="ml-2">→</span>
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Integration & Media */}
        <div className="bg-gray-50 border border-gray-200 rounded-xl p-10">
          <div className="grid lg:grid-cols-2 gap-10">
            <div>
              <h4 className="text-2xl font-bold text-gray-900 mb-6">Media Integration</h4>
              <p className="text-gray-700 mb-8 leading-relaxed">
                Major news organizations integrate verification tools directly into their editorial workflows, 
                enabling real-time credibility assessment during breaking news situations and investigative reporting.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center mr-4 flex-shrink-0">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                  </div>
                  <div>
                    <div className="font-medium text-gray-900 mb-2">Real-time Verification</div>
                    <div className="text-sm text-gray-600">Integration with CMS systems for editorial workflows</div>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center mr-4 flex-shrink-0">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                  </div>
                  <div>
                    <div className="font-medium text-gray-900 mb-2">Source Database</div>
                    <div className="text-sm text-gray-600">Access to verified source credibility histories</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <div className="border-l border-gray-200 pl-10">
                <h5 className="text-lg font-bold text-gray-900 mb-6">Featured Media Coverage</h5>
                <div className="space-y-6">
                  <a href="#" className="block group">
                    <div className="text-sm text-gray-500 mb-2">The New York Times</div>
                    <div className="text-gray-900 font-medium mb-2 group-hover:text-emerald-700">
                      How newsrooms are automating fact-checking
                    </div>
                    <div className="text-sm text-gray-500">Technology section • March 2024</div>
                  </a>
                  
                  <a href="#" className="block group">
                    <div className="text-sm text-gray-500 mb-2">Columbia Journalism Review</div>
                    <div className="text-gray-900 font-medium mb-2 group-hover:text-emerald-700">
                      Verification tools in investigative reporting
                    </div>
                    <div className="text-sm text-gray-500">Research paper • February 2024</div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ProfessionalUseCases;