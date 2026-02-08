const ProfessionalProcess = () => {
  const steps = [
    {
      step: "1",
      title: "Content Ingestion",
      description: "Extracts article text and metadata"
    },
    {
      step: "2",
      title: "Language Analysis",
      description: "Detects sensational language patterns"
    },
    {
      step: "3",
      title: "Source Check",
      description: "Evaluates publisher reliability"
    },
    {
      step: "4",
      title: "Cross-Reference",
      description: "Matches with verified datasets"
    },
    {
      step: "5",
      title: "Final Assessment",
      description: "Generates credibility score"
    }
  ];

  return (
    <section className="py-16 bg-white border-t border-gray-100">
      <div className="max-w-6xl mx-auto px-4">

        {/* Centered Header */}
        <div className="text-center mb-16">
          
          <h2 className="text-4xl font-bold text-emerald-900 mb-6 leading-tight">
            News Credibility Assessment </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A Structured Five-Step Analytical Process Designed to Systematically Evaluate, Validate, and Determine the Credibility of News Content         </p>
        </div>

        <div className="space-y-12">
        </div>




        {/* Header
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            How Verification Works
          </h2>
          <p className="text-gray-600">
            Five-step analysis process for news credibility assessment
          </p>
        </div> */}

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {steps.map((item, index) => (
            <div key={index} className="border border-gray-200 p-5 rounded">
              <div className="text-sm font-medium text-emerald-700 mb-3">
                Step {item.step}
              </div>
              <h3 className="font-medium text-gray-900 mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-gray-600">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-12 pt-8 border-t border-gray-100">
          <p className="text-sm text-gray-600">
            Automated analysis for objective verification. Results supplement professional fact-checking.
          </p>
        </div>

      </div>
    </section>
  );
};

export default ProfessionalProcess;