import { useState } from 'react';

const ProfessionalVerificationSection = () => {
  const [input, setInput] = useState('');
  const [inputType, setInputType] = useState('text');
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

  const handleClear = () => {
    setInput('');
    setResult(null);
  };

  return (
    <div className="py-20 bg-white border-t border-gray-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Centered Header */}
        <div className="text-center mb-16">
          <div className="text-sm font-medium text-emerald-700 uppercase tracking-wider mb-4">
            News Verification System
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-6 leading-tight">
            Check News Credibility
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Analyze news content using automated content and source verification.
          </p>
        </div>

        <div className="space-y-12">
          
          {/* Input Section */}
          <div>
            {/* Input Type Options - Centered */}
            <div className="flex justify-center space-x-4 mb-8">
              <button
                onClick={() => setInputType('text')}
                className={`px-5 py-2.5 text-sm border rounded-lg transition-all duration-200 ${inputType === 'text' 
                  ? 'border-emerald-600 bg-emerald-50 text-emerald-700 font-medium' 
                  : 'border-gray-300 text-gray-600 hover:border-emerald-300 hover:text-emerald-700'}`}
              >
                Paste article text
              </button>
              <button
                onClick={() => setInputType('url')}
                className={`px-5 py-2.5 text-sm border rounded-lg transition-all duration-200 ${inputType === 'url' 
                  ? 'border-emerald-600 bg-emerald-50 text-emerald-700 font-medium' 
                  : 'border-gray-300 text-gray-600 hover:border-emerald-300 hover:text-emerald-700'}`}
              >
                Paste article URL
              </button>
              <button
                onClick={() => setInputType('document')}
                className={`px-5 py-2.5 text-sm border rounded-lg transition-all duration-200 ${inputType === 'document' 
                  ? 'border-emerald-600 bg-emerald-50 text-emerald-700 font-medium' 
                  : 'border-gray-300 text-gray-600 hover:border-emerald-300 hover:text-emerald-700'}`}
              >
                Upload document
              </button>
            </div>

            {/* Input Field - Centered */}
            <div className="max-w-2xl mx-auto">
              {inputType === 'document' ? (
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-emerald-300 transition-colors duration-200">
                  <div className="text-gray-500 mb-4">Upload document for analysis</div>
                  <label className="px-5 py-2.5 bg-emerald-600 text-white text-sm rounded-lg hover:bg-emerald-700 cursor-pointer inline-block transition-colors duration-200">
                    Choose File
                    <input type="file" className="hidden" />
                  </label>
                  <div className="text-xs text-gray-500 mt-4">PDF, DOC, DOCX (Max 10MB)</div>
                </div>
              ) : (
                <textarea
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  rows="6"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 text-gray-700 font-mono transition-all duration-200 placeholder:text-gray-400 hover:border-emerald-300"
                  placeholder={inputType === 'url' ? 'https://example.com/news-article' : 'Paste the article content here for analysis...'}
                />
              )}
              
              {/* Character Count and Clear */}
              {inputType !== 'document' && (
                <div className="flex justify-between items-center mt-3">
                  <span className={`text-sm ${input.length > 0 ? 'text-emerald-600' : 'text-gray-500'}`}>
                    {input.length} characters
                  </span>
                  {input.trim() && (
                    <button
                      onClick={handleClear}
                      className="text-sm text-emerald-600 hover:text-emerald-800 font-medium transition-colors duration-200"
                    >
                      Clear input
                    </button>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* Analyze Button - Centered */}
          <div className="text-center">
            <button
              onClick={handleAnalysis}
              disabled={!input.trim() || isProcessing}
              className={`px-12 py-3.5 font-medium text-base rounded-lg transition-all duration-200 ${!input.trim() || isProcessing
                ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
                : 'bg-emerald-600 text-white hover:bg-emerald-700 shadow-sm hover:shadow'
              }`}
            >
              {isProcessing ? (
                <div className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Analyzing...
                </div>
              ) : 'Analyze Credibility'}
            </button>
          </div>

          {/* Results Section - Appears below after analysis */}
          {result && (
            <div className="max-w-2xl mx-auto pt-8 border-t border-gray-200">
              <h3 className="text-lg font-medium text-gray-900 mb-8 text-center">
                Analysis Results
              </h3>
              
              <div className="space-y-8">
                
                {/* Status Display */}
                <div className="border border-gray-200 rounded-lg p-6 hover:border-emerald-200 transition-colors duration-200">
                  <div className="flex justify-between items-center mb-4">
                    <div className="text-sm font-medium text-gray-700">Status</div>
                    <div className="text-sm font-medium text-red-600 bg-red-50 px-3 py-1 rounded-full">Likely Misinformation</div>
                  </div>
                  <div className="text-sm text-gray-600">
                    Analysis identifies patterns consistent with unverified content
                  </div>
                </div>

                {/* Confidence Score */}
                <div>
                  <div className="flex justify-between items-center mb-3">
                    <div className="text-sm font-medium text-gray-700">Confidence Score</div>
                    <div className="font-medium text-emerald-700">{result.confidence}%</div>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-emerald-600 rounded-full transition-all duration-500"
                      style={{ width: `${result.confidence}%` }}
                    ></div>
                  </div>
                </div>

                {/* Analysis Summary */}
                <div className="border border-gray-200 rounded-lg p-6 hover:border-emerald-200 transition-colors duration-200 bg-emerald-50/30">
                  <div className="text-sm font-medium text-gray-700 mb-3">Summary</div>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {result.summary}
                  </p>
                </div>

                {/* Indicators */}
                <div>
                  <div className="text-sm font-medium text-gray-700 mb-4">Indicators</div>
                  <div className="grid grid-cols-2 gap-4">
                    {result.indicators.map((indicator, index) => (
                      <div key={index} className="border border-gray-200 rounded-lg p-4 hover:border-emerald-200 transition-colors duration-200 hover:bg-white">
                        <div className="text-xs text-gray-600 mb-2">{indicator.label}</div>
                        <div className={`font-medium ${
                          indicator.value === 'Low' ? 'text-red-600' :
                          indicator.value === 'Medium' ? 'text-amber-600' :
                          'text-emerald-600'
                        }`}>
                          {indicator.value}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          )}

          {/* Disclaimer - Centered */}
          <div className="max-w-2xl mx-auto pt-8 border-t border-gray-200">
            <div className="text-sm text-gray-600 text-center">
              Results generated using automated analysis. Not a substitute for professional fact-checking.
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ProfessionalVerificationSection;