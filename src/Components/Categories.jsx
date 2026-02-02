import { useState } from 'react';

const ResourcesSection = () => {
  const [activeTab, setActiveTab] = useState('identification');

  const resources = {
    identification: {
      title: "Identifying Misinformation",
      description: "Methods and techniques for recognizing false or misleading information in various media formats.",
      items: [
        {
          title: "Source Verification Protocol",
          description: "Step-by-step guide to verifying information sources and checking credibility",
          category: "Methodology",
          link: "#"
        },
        {
          title: "Pattern Recognition in False Claims",
          description: "Common characteristics and patterns found in misinformation across different media",
          category: "Analysis",
          link: "#"
        },
        {
          title: "Critical Evaluation Framework",
          description: "Systematic approach to evaluating news content and claims",
          category: "Framework",
          link: "#"
        }
      ]
    },
    sources: {
      title: "Official Fact-Checking Sources",
      description: "Verified and authoritative sources for fact-checking and information verification.",
      items: [
        {
          title: "International Verification Standards",
          description: "Global standards and protocols for professional fact-checking organizations",
          category: "Standards",
          link: "#"
        },
        {
          title: "Government Verification Databases",
          description: "Official databases and resources maintained by government agencies",
          category: "Official",
          link: "#"
        },
        {
          title: "Academic Research Institutions",
          description: "University research centers specializing in misinformation studies",
          category: "Academic",
          link: "#"
        }
      ]
    },
    literacy: {
      title: "Media Literacy Guides",
      description: "Educational resources for developing critical media consumption skills.",
      items: [
        {
          title: "Digital Literacy Curriculum",
          description: "Comprehensive educational materials for digital media literacy",
          category: "Education",
          link: "#"
        },
        {
          title: "Professional Training Modules",
          description: "Training resources for journalists and media professionals",
          category: "Training",
          link: "#"
        },
        {
          title: "Public Awareness Materials",
          description: "Resources for public education and awareness campaigns",
          category: "Awareness",
          link: "#"
        }
      ]
    },
    research: {
      title: "Research & References",
      description: "Academic papers, studies, and technical documentation on misinformation detection.",
      items: [
        {
          title: "Annual Misinformation Research Report",
          description: "Comprehensive annual analysis of misinformation trends and patterns",
          category: "Research",
          link: "#"
        },
        {
          title: "Technical Verification Standards",
          description: "Technical specifications and standards for verification systems",
          category: "Technical",
          link: "#"
        },
        {
          title: "Academic Papers Collection",
          description: "Peer-reviewed research on misinformation detection methodologies",
          category: "Academic",
          link: "#"
        }
      ]
    }
  };

  const currentResources = resources[activeTab];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Educational Resources & Awareness
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Comprehensive materials for media literacy, fact-checking methodologies, 
            and educational resources on misinformation identification and prevention.
          </p>
        </div>

        {/* Navigation Tabs */}
        <div className="border-b border-gray-200 mb-12">
          <div className="flex flex-wrap gap-2">
            {Object.keys(resources).map((key) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`px-6 py-3 text-sm font-medium transition-colors ${
                  activeTab === key
                    ? 'border-b-2 border-emerald-600 text-emerald-700'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {resources[key].title}
              </button>
            ))}
          </div>
        </div>

        {/* Content Area */}
        <div className="mb-12">
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              {currentResources.title}
            </h3>
            <p className="text-gray-600 max-w-3xl">
              {currentResources.description}
            </p>
          </div>

          {/* Resources Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {currentResources.items.map((item, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-6 hover:shadow-sm transition-shadow">
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 bg-emerald-50 text-emerald-700 text-xs font-medium rounded">
                    {item.category}
                  </span>
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-3">
                  {item.title}
                </h4>
                <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                  {item.description}
                </p>
                <div className="border-t border-gray-100 pt-4">
                  <a href={item.link} className="text-emerald-700 hover:text-emerald-800 text-sm font-medium">
                    Access Resource →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Information */}
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h4 className="text-xl font-bold text-gray-900 mb-6">Research & Development</h4>
              <div className="space-y-6">
                <div>
                  <div className="text-sm text-gray-600 mb-2">Current Research Projects</div>
                  <div className="text-2xl font-bold text-emerald-700">12 Active Studies</div>
                </div>
                <div>
                  <div className="text-sm text-gray-600 mb-2">Academic Partnerships</div>
                  <div className="text-2xl font-bold text-emerald-700">8 Institutions</div>
                </div>
              </div>
            </div>
            <div>
              <h4 className="text-xl font-bold text-gray-900 mb-6">Resource Access</h4>
              <div className="space-y-4">
                <button className="w-full px-6 py-3 bg-white border border-gray-300 text-gray-700 rounded hover:bg-gray-50 text-sm">
                  Download Educational Materials
                </button>
                <button className="w-full px-6 py-3 bg-emerald-600 text-white rounded hover:bg-emerald-700 text-sm">
                  Request Research Access
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Documentation */}
        <div className="mt-12 border-t border-gray-200 pt-12">
          <h4 className="text-xl font-bold text-gray-900 mb-8">Documentation & Standards</h4>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="border border-gray-200 rounded-lg p-6">
              <div className="text-sm font-medium text-gray-700 mb-2">Technical Documentation</div>
              <ul className="space-y-3">
                <li className="flex items-center justify-between py-2 border-b border-gray-100">
                  <span className="text-gray-900">Verification Methodology Guide</span>
                  <a href="#" className="text-emerald-700 text-sm">View</a>
                </li>
                <li className="flex items-center justify-between py-2 border-b border-gray-100">
                  <span className="text-gray-900">Technical Standards Manual</span>
                  <a href="#" className="text-emerald-700 text-sm">Download</a>
                </li>
                <li className="flex items-center justify-between py-2">
                  <span className="text-gray-900">System Specifications</span>
                  <a href="#" className="text-emerald-700 text-sm">Access</a>
                </li>
              </ul>
            </div>
            <div className="border border-gray-200 rounded-lg p-6">
              <div className="text-sm font-medium text-gray-700 mb-2">Academic References</div>
              <ul className="space-y-3">
                <li className="flex items-center justify-between py-2 border-b border-gray-100">
                  <span className="text-gray-900">Research Papers Database</span>
                  <a href="#" className="text-emerald-700 text-sm">Browse</a>
                </li>
                <li className="flex items-center justify-between py-2 border-b border-gray-100">
                  <span className="text-gray-900">Methodology Studies</span>
                  <a href="#" className="text-emerald-700 text-sm">Access</a>
                </li>
                <li className="flex items-center justify-between py-2">
                  <span className="text-gray-900">Technical Reports</span>
                  <a href="#" className="text-emerald-700 text-sm">Download</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ResourcesSection;