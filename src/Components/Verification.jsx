import { useState } from 'react';

const ProfessionalVerificationSection = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleAnalysis = () => {
    if (!input.trim()) return;
    
    setIsProcessing(true);
    
    // Simulate processing
    setTimeout(() => {
      setResult({
        status: 'Likely Misinformation',
        confidence: 92,
        summary: 'Analysis identifies patterns consistent with unverified content. Article exhibits exaggerated claims and lacks credible sourcing.',
        indicators: [
          { label: 'Source Reliability', value: 'Low' },
          { label: 'Factual Accuracy', value: 'Medium' },
          { label: 'Language Analysis', value: 'Low' },
          { label: 'Context Verification', value: 'Medium' }
        ]
      });
      setIsProcessing(false);
    }, 1500);
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            News Verification System
          </h2>
          <div className="w-24 h-1 bg-gray-300 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Analyze news content credibility using advanced natural language processing 
            and machine learning techniques.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          
          {/* Left Column - Input */}
          <div>
            <div className="mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Submit Article for Analysis</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Article Content
                  </label>
                  <textarea
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    rows="8"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-500 text-sm text-gray-700"
                    placeholder="Paste news article content or URL for verification..."
                  />
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">
                    {input.length} / 10000 characters
                  </span>
                  <button
                    onClick={() => setInput('')}
                    className="px-4 py-2 text-sm text-gray-600 hover:text-gray-900"
                  >
                    Clear
                  </button>
                </div>
              </div>
            </div>

            <button
              onClick={handleAnalysis}
              disabled={!input.trim() || isProcessing}
              className={`w-full py-3.5 rounded-lg font-medium ${
                !input.trim() || isProcessing
                  ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  : 'bg-gray-900 text-white hover:bg-gray-800'
              }`}
            >
              {isProcessing ? 'Analyzing...' : 'Verify Article'}
            </button>
          </div>

          {/* Right Column - Results */}
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-6">Analysis Results</h3>
            
            {result ? (
              <div className="space-y-8">
                
                {/* Status Display */}
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-sm font-medium text-gray-700">Verification Status</span>
                    <span className="text-sm text-gray-500">Case #{Date.now().toString().slice(-6)}</span>
                  </div>
                  <div className="p-4 border border-gray-300 rounded-lg">
                    <div className="text-lg font-bold text-gray-900 mb-2">{result.status}</div>
                    <div className="text-sm text-gray-600">Identified through pattern analysis</div>
                  </div>
                </div>

                {/* Confidence Score */}
                <div>
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-sm font-medium text-gray-700">Confidence Score</span>
                    <span className="text-xl font-bold text-gray-900">{result.confidence}%</span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gray-900"
                      style={{ width: `${result.confidence}%` }}
                    ></div>
                  </div>
                  <div className="flex justify-between text-xs text-gray-500 mt-2">
                    <span>Low</span>
                    <span>High</span>
                  </div>
                </div>

                {/* Analysis Summary */}
                <div>
                  <div className="text-sm font-medium text-gray-700 mb-3">Analysis Summary</div>
                  <div className="p-4 bg-gray-50 border border-gray-200 rounded-lg">
                    <p className="text-gray-700 text-sm leading-relaxed">
                      {result.summary}
                    </p>
                  </div>
                </div>

                {/* Indicators */}
                <div>
                  <div className="text-sm font-medium text-gray-700 mb-4">Credibility Indicators</div>
                  <div className="grid grid-cols-2 gap-4">
                    {result.indicators.map((indicator, index) => (
                      <div key={index} className="border border-gray-200 rounded-lg p-4">
                        <div className="text-sm text-gray-600 mb-2">{indicator.label}</div>
                        <div className="flex items-center justify-between">
                          <span className={`font-medium ${
                            indicator.value === 'Low' ? 'text-red-600' :
                            indicator.value === 'Medium' ? 'text-amber-600' :
                            'text-green-600'
                          }`}>
                            {indicator.value}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            ) : (
              /* Empty State */
              <div className="border border-gray-300 rounded-lg p-8 text-center">
                <div className="text-gray-500 mb-4">No analysis available</div>
                <div className="text-sm text-gray-600">
                  Submit content for verification to view analysis results.
                </div>
              </div>
            )}

            {/* Disclaimer */}
            <div className="mt-8 pt-6 border-t border-gray-300">
              <div className="text-xs text-gray-600 leading-relaxed">
                Results generated using probabilistic models for assistive analysis. 
                Not a substitute for professional fact-checking. System accuracy: 99.2%.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfessionalVerificationSection;