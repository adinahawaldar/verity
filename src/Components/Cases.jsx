import { useState } from 'react';

const DatabaseSection = () => {
  const [filter, setFilter] = useState('all');
  const [search, setSearch] = useState('');

  const cases = [
    {
      id: 'VN-2024-001',
      headline: 'Government announces new economic policy measures',
      status: 'Verified',
      date: '2024-02-04',
      source: 'Official Press Release',
      confidence: 98,
      category: 'Government',
      summary: 'Policy announcement cross-verified with official sources'
    },
    {
      id: 'VN-2024-002',
      headline: 'Viral claim about health breakthrough treatment',
      status: 'False',
      date: '2024-02-03',
      source: 'Social Media',
      confidence: 92,
      category: 'Health',
      summary: 'No scientific evidence or peer-reviewed studies found'
    },
    {
      id: 'VN-2024-003',
      headline: 'Corporate earnings report analysis',
      status: 'Verified',
      date: '2024-02-02',
      source: 'Financial Reports',
      confidence: 96,
      category: 'Business',
      summary: 'Figures verified against official SEC filings'
    },
    {
      id: 'VN-2024-004',
      headline: 'Political candidate statement fact-check',
      status: 'Misleading',
      date: '2024-02-01',
      source: 'Campaign Speech',
      confidence: 87,
      category: 'Politics',
      summary: 'Statement contains partial truths without full context'
    },
    {
      id: 'VN-2024-005',
      headline: 'Environmental study findings',
      status: 'Verified',
      date: '2024-01-31',
      source: 'Research Journal',
      confidence: 95,
      category: 'Science',
      summary: 'Study methodology and data verified by experts'
    },
    {
      id: 'VN-2024-006',
      headline: 'Technology product announcement claims',
      status: 'False',
      date: '2024-01-30',
      source: 'Tech Blog',
      confidence: 91,
      category: 'Technology',
      summary: 'Exaggerated claims not supported by actual product specifications'
    },
    {
      id: 'VN-2024-007',
      headline: 'Sports contract negotiation reports',
      status: 'Verified',
      date: '2024-01-29',
      source: 'Sports Network',
      confidence: 94,
      category: 'Sports',
      summary: 'Reports confirmed by official team statements'
    },
    {
      id: 'VN-2024-008',
      headline: 'Celebrity endorsement controversy',
      status: 'Misleading',
      date: '2024-01-28',
      source: 'Entertainment News',
      confidence: 85,
      category: 'Entertainment',
      summary: 'Context missing from original statements'
    }
  ];

  const filteredCases = cases.filter(caseItem => {
    if (filter !== 'all' && caseItem.status !== filter) return false;
    if (search && !caseItem.headline.toLowerCase().includes(search.toLowerCase())) return false;
    return true;
  });

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Verified Case Archive
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Transparent database of analyzed news articles and claims, showing verification status 
            and confidence scores for public accountability.
          </p>
        </div>

        {/* Filters */}
        <div className="bg-gray-50 rounded-lg border border-gray-200 p-6 mb-8">
          <div className="grid md:grid-cols-2 gap-6">
            
            {/* Status Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Verification Status
              </label>
              <div className="flex flex-wrap gap-3">
                {['all', 'Verified', 'False', 'Misleading'].map((status) => (
                  <button
                    key={status}
                    onClick={() => setFilter(status === 'all' ? 'all' : status)}
                    className={`px-4 py-2 rounded text-sm font-medium transition-colors ${
                      filter === (status === 'all' ? 'all' : status)
                        ? 'bg-emerald-600 text-white'
                        : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
                    }`}
                  >
                    {status === 'all' ? 'All Cases' : status}
                  </button>
                ))}
              </div>
            </div>

            {/* Search */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Search Cases
              </label>
              <div className="relative">
                <input
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search by headline or ID..."
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-emerald-50 border border-emerald-100 rounded-lg p-4">
            <div className="text-2xl font-bold text-emerald-700 mb-1">{cases.length}</div>
            <div className="text-sm text-gray-600">Total Cases</div>
          </div>
          <div className="bg-emerald-50 border border-emerald-100 rounded-lg p-4">
            <div className="text-2xl font-bold text-emerald-700 mb-1">
              {cases.filter(c => c.status === 'Verified').length}
            </div>
            <div className="text-sm text-gray-600">Verified</div>
          </div>
          <div className="bg-red-50 border border-red-100 rounded-lg p-4">
            <div className="text-2xl font-bold text-red-700 mb-1">
              {cases.filter(c => c.status === 'False').length}
            </div>
            <div className="text-sm text-gray-600">False Claims</div>
          </div>
          <div className="bg-amber-50 border border-amber-100 rounded-lg p-4">
            <div className="text-2xl font-bold text-amber-700 mb-1">
              {cases.filter(c => c.status === 'Misleading').length}
            </div>
            <div className="text-sm text-gray-600">Misleading</div>
          </div>
        </div>

        {/* Cases Table */}
        <div className="border border-gray-200 rounded-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Case Details
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Category
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Confidence
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Date
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredCases.map((caseItem) => (
                  <tr key={caseItem.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4">
                      <div>
                        <div className="text-sm font-medium text-gray-900 mb-1">
                          {caseItem.headline}
                        </div>
                        <div className="text-xs text-gray-500">
                          ID: {caseItem.id} • Source: {caseItem.source}
                        </div>
                        <div className="text-sm text-gray-600 mt-2">
                          {caseItem.summary}
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                        caseItem.status === 'Verified' 
                          ? 'bg-emerald-100 text-emerald-800'
                          : caseItem.status === 'False'
                          ? 'bg-red-100 text-red-800'
                          : 'bg-amber-100 text-amber-800'
                      }`}>
                        {caseItem.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{caseItem.category}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div>
                        <div className="text-sm font-medium text-gray-900 mb-1">{caseItem.confidence}%</div>
                        <div className="w-24 h-1 bg-gray-200 rounded-full overflow-hidden">
                          <div 
                            className={`h-full ${
                              caseItem.confidence >= 90 ? 'bg-emerald-500' :
                              caseItem.confidence >= 80 ? 'bg-amber-500' :
                              'bg-red-500'
                            }`}
                            style={{ width: `${caseItem.confidence}%` }}
                          ></div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {caseItem.date}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Empty State */}
        {filteredCases.length === 0 && (
          <div className="text-center py-12 border border-gray-200 rounded-lg">
            <div className="text-gray-500 mb-2">No cases match your filters</div>
            <button
              onClick={() => {
                setFilter('all');
                setSearch('');
              }}
              className="text-emerald-600 hover:text-emerald-700 text-sm font-medium"
            >
              Clear filters
            </button>
          </div>
        )}

        {/* Database Info */}
        <div className="mt-8 bg-gray-50 rounded-lg border border-gray-200 p-6">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-medium text-gray-900 mb-4">Database Information</h4>
              <ul className="space-y-3 text-sm text-gray-600">
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-1.5 mr-3 flex-shrink-0"></div>
                  <span>Updated in real-time as new cases are verified</span>
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-1.5 mr-3 flex-shrink-0"></div>
                  <span>All cases undergo standardized verification process</span>
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-1.5 mr-3 flex-shrink-0"></div>
                  <span>Complete audit trail available for each case</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-medium text-gray-900 mb-4">Export Options</h4>
              <div className="space-y-3">
                <button className="w-full px-4 py-2 bg-white border border-gray-300 rounded text-sm text-gray-700 hover:bg-gray-50">
                  Download Full Dataset (CSV)
                </button>
                <button className="w-full px-4 py-2 bg-emerald-600 text-white rounded text-sm hover:bg-emerald-700">
                  Request API Access
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500">
            Database last updated: Today, 14:30 GMT • Total records: {cases.length}
          </p>
        </div>

      </div>
    </section>
  );
};

export default DatabaseSection;