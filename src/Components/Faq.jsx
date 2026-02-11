import React, { useState } from 'react';

const ProfessionalFAQs = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "How does your news verification technology work?",
      answer: "Our platform employs a multi-layered verification process combining natural language processing, source credibility analysis, and cross-referencing against trusted databases."
    },
    {
      question: "What types of content can be analyzed?",
      answer: "We support news articles, press releases, social media posts, blog content, and research papers in multiple formats including plain text, PDFs, and webpage URLs."
    },
    {
      question: "How accurate is your verification system?",
      answer: "Our system maintains a 99.8% accuracy rate validated by independent third-party auditors, with continuous model training and human-in-the-loop validation."
    },
    {
      question: "What security measures protect analyzed content?",
      answer: "All content is processed using end-to-end encryption with ISO 27001 certification and GDPR compliance. Data is never stored beyond the verification period without consent."
    },
    {
      question: "How quickly can I get verification results?",
      answer: "Standard analysis completes in under 30 seconds. Enterprise clients can access prioritized processing with guaranteed SLAs of under 10 seconds per article."
    },
    {
      question: "Can the system be integrated with existing workflows?",
      answer: "Yes, we provide comprehensive APIs, SDKs, and pre-built integrations for popular CMS platforms including WordPress, Drupal, and custom newsroom systems."
    }
  ];

  return (
    <div className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 bg-emerald-50 rounded-full mb-4">
            <span className="text-sm font-semibold text-emerald-700 uppercase tracking-wider">
              FAQs
            </span>
          </div>
          
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            Quick answers to common questions about our news verification platform.
          </p>
        </div>

        {/* Compact FAQs */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="border border-gray-200 rounded-lg hover:border-gray-300 transition-colors"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none focus:ring-2 focus:ring-emerald-100 rounded-lg"
              >
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-0.5">
                    <div className="w-6 h-6 bg-emerald-50 rounded flex items-center justify-center mr-4">
                      <span className="text-sm font-semibold text-emerald-700">Q{index + 1}</span>
                    </div>
                  </div>
                  <span className="font-medium text-gray-900 text-base">
                    {faq.question}
                  </span>
                </div>
                {openIndex === index ? (
                  <svg className="w-5 h-5 text-gray-400 flex-shrink-0 ml-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5 text-gray-400 flex-shrink-0 ml-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                )}
              </button>
              
              {/* Answer - Animated */}
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 pb-5 pt-2">
                  <div className="pl-10">
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                    
                    {/* Additional context for specific FAQs */}
                    {index === 0 && (
                      <div className="mt-4 pt-4 border-t border-gray-100">
                        <div className="flex flex-wrap gap-2">
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-50 text-blue-700 border border-blue-100">
                            NLP Analysis
                          </span>
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-50 text-purple-700 border border-purple-100">
                            Source Credibility
                          </span>
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-50 text-emerald-700 border border-emerald-100">
                            Bias Detection
                          </span>
                        </div>
                      </div>
                    )}
                    
                    {index === 2 && (
                      <div className="mt-4 pt-4 border-t border-gray-100">
                        <div className="flex items-center space-x-6">
                          <div>
                            <div className="text-sm font-medium text-gray-500">Accuracy Rate</div>
                            <div className="text-lg font-bold text-emerald-700">99.8%</div>
                          </div>
                          <div>
                            <div className="text-sm font-medium text-gray-500">Audit Score</div>
                            <div className="text-lg font-bold text-emerald-700">A+</div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Link */}
        <div className="mt-12 pt-8 border-t border-gray-100 text-center">
          <p className="text-gray-600 mb-4">
            Need more detailed information?
          </p>
          <button className="text-emerald-600 font-semibold hover:text-emerald-700 inline-flex items-center">
            Contact our enterprise team
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </div>

      </div>
    </div>
  );
};

export default ProfessionalFAQs;