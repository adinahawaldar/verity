import { AlertTriangle, XCircle, AlertCircle, ExternalLink } from 'lucide-react';

const RecentMisinformationCases = () => {
  const cases = [
    {
      headline: "Viral Fake Political Photocard Spreads Misleading Claim in Bangladesh",
      status: "Misinformation",
      statusIcon: <XCircle className="w-4 h-4" />,
      statusColor: "text-red-600 bg-red-50 border-red-200",
      summary: "A fact-checking organization identified a manipulated photocard falsely suggesting that a local woman arrested inside an exam hall was a political leader. The claim and associated imagery were fabricated and confirmed as false by fact-checkers.",
      category: "Political Manipulation",
      date: "January 15, 2024",
      sources: [
        { name: "Wikipedia: Misinformation in Bangladesh", url: "https://en.wikipedia.org/wiki/Misinformation_in_Bangladesh" },
        { name: "Reuters Fact Check", url: "https://www.reuters.com/fact-check/" }
      ],
      tags: ["Image Manipulation", "Political Falsehood", "South Asia"]
    },
    {
      headline: "Old Election Video & Photos Falsely Shared as Current Election Misinformation",
      status: "Misleading",
      statusIcon: <AlertTriangle className="w-4 h-4" />,
      statusColor: "text-amber-600 bg-amber-50 border-amber-200",
      summary: "Social media platforms were flooded with outdated election footage and imagery that was falsely presented as current misinformation tied to upcoming polls. Fact-checkers confirmed the content was repurposed and misleading.",
      category: "Election Disinformation",
      date: "December 8, 2023",
      sources: [
        { name: "Wikipedia: Electoral misinformation", url: "https://en.wikipedia.org/wiki/Electoral_misinformation" },
        { name: "AP Fact Check", url: "https://apnews.com/hub/ap-fact-check" }
      ],
      tags: ["Content Recycling", "Election Interference", "Social Media"]
    },
    {
      headline: "Deepfake Image Misrepresents Foreign Leader's Statement in Geopolitical Dispute",
      status: "False Claim",
      statusIcon: <AlertCircle className="w-4 h-4" />,
      statusColor: "text-red-600 bg-red-50 border-red-200",
      summary: "An AI-generated image circulating online falsely depicted a national leader making an official statement in a conflict, which was debunked as a manipulated deepfake unrelated to any verified announcement.",
      category: "AI-Generated Content",
      date: "November 22, 2023",
      sources: [
        { name: "Wikipedia: Deepfake", url: "https://en.wikipedia.org/wiki/Deepfake" },
        { name: "AFP Fact Check", url: "https://factcheck.afp.com/" }
      ],
      tags: ["Deepfake Technology", "Geopolitical", "AI Manipulation"]
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-red-50 border border-red-100 mb-4">
            <AlertTriangle className="w-4 h-4 text-red-600 mr-2" />
            <span className="text-sm font-medium text-red-700">Case Analysis</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Recent Misinformation Cases
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            A selection of widely circulated news claims that were identified as misleading or false 
            through fact-checking sources and independent verification.
          </p>
        </div>

        {/* Cases Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {cases.map((caseItem, index) => (
            <div key={index} className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow duration-300">
              
              {/* Card Header */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center mb-2">
                      <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${caseItem.statusColor} border`}>
                        {caseItem.statusIcon}
                        <span className="ml-1.5">{caseItem.status}</span>
                      </span>
                      <span className="ml-3 text-xs text-gray-500">{caseItem.date}</span>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 leading-tight mb-3">
                      {caseItem.headline}
                    </h3>
                  </div>
                </div>

                {/* Summary */}
                <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                  {caseItem.summary}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {caseItem.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Sources */}
                <div className="border-t border-gray-100 pt-4">
                  <div className="text-xs text-gray-500 font-medium mb-2">Verified Sources:</div>
                  <div className="space-y-2">
                    {caseItem.sources.map((source, sourceIndex) => (
                      <a
                        key={sourceIndex}
                        href={source.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-sm text-blue-600 hover:text-blue-800 transition-colors group"
                      >
                        <span className="truncate">{source.name}</span>
                        <ExternalLink className="w-3 h-3 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer */}
              <div className="px-6 py-4 bg-gray-50 border-t border-gray-100">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500">
                    Case #{index + 1} • {caseItem.category}
                  </span>
                  <button className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors">
                    View Full Report →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Information */}
        <div className="bg-white rounded-xl border border-gray-200 p-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-bold text-gray-900 mb-4">Methodology</h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                Cases are selected based on circulation volume, impact assessment, and verification 
                by multiple independent fact-checking organizations. Each case undergoes rigorous 
                analysis including source tracing, image verification, and contextual evaluation.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-bold text-gray-900 mb-4">Verification Standards</h4>
              <ul className="text-gray-600 text-sm space-y-2">
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-1.5 mr-3 flex-shrink-0"></div>
                  Cross-referenced with multiple fact-checking organizations
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-1.5 mr-3 flex-shrink-0"></div>
                  Verified against official sources and records
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-1.5 mr-3 flex-shrink-0"></div>
                  Technical analysis of digital content
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Footer Note */}
        <div className="text-center mt-8">
          <p className="text-sm text-gray-500">
            For comprehensive fact-checking resources, visit{' '}
            <a href="https://en.wikipedia.org/wiki/Fact-checking" className="text-blue-600 hover:text-blue-800">
              Wikipedia: Fact-checking
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default RecentMisinformationCases;