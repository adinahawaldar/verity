const ProfessionalUseCases = () => {
  const useCases = [
    {
      category: "Media & Journalism",
      title: "Journalists verifying breaking news",
      description:
        "Reuters newsroom implements automated verification for conflict zone reporting and official statement cross-referencing during developing situations.",
      example: "Verification of government statements during political crises",
      imgType: "newsroom",
    },
    {
      category: "Academic Research",
      title: "Students researching credible sources",
      description:
        "University libraries integrate verification tools for academic paper research, helping students evaluate source reliability for citations and literature reviews.",
      example: "Source assessment for thesis and dissertation research",
      imgType: "research",
    },
    {
      category: "Public Information",
      title: "General readers checking viral content",
      description:
        "Public information centers deploy verification systems to help citizens assess the credibility of widely circulated social media content and health claims.",
      example: "Community verification of viral social media posts",
      imgType: "public",
    },
    {
      category: "Professional Analysis",
      title: "Researchers analyzing misinformation trends",
      description:
        "Research institutions utilize the platform for systematic analysis of misinformation patterns, tracking narrative evolution across digital platforms.",
      example: "Stanford Internet Observatory misinformation studies",
      imgType: "analysis",
    },
  ];

  const getImagePlaceholder = (type) => {
    const images = {
      newsroom:
        "https://images.unsplash.com/photo-1588681664899-f142ff2dc9b1?auto=format&fit=crop&w=400&h=250&q=80",
      research:
        "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&w=400&h=250&q=80",
      public:
        "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=400&h=250&q=80",
      analysis:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=400&h=250&q=80",
    };
    return images[type] || images.newsroom;
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Centered Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-emerald-900 mb-6 leading-tight">
            Enterprise Implementation Framework
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Application of Scalable and Reliable Verification Systems in Media,
            Academic, and Research Ecosystems
          </p>
        </div>

        {/* Use Cases */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {useCases.map((useCase, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg overflow-hidden"
            >
              <div className="h-48 bg-gray-100 overflow-hidden">
                <img
                  src={getImagePlaceholder(useCase.imgType)}
                  alt={`${useCase.category} implementation`}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-8">
                <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">
                  {useCase.category}
                </span>

                <h3 className="text-2xl font-bold text-gray-900 mt-4 mb-4">
                  {useCase.title}
                </h3>

                <p className="text-gray-700 mb-6 leading-relaxed">
                  {useCase.description}
                </p>

                <div className="pt-4 border-t border-gray-100">
                  <div className="text-sm text-gray-500 mb-2">
                    Example Application
                  </div>
                  <div className="text-gray-900 font-medium">
                    {useCase.example}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProfessionalUseCases;
