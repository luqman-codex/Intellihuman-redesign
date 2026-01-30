import { AlertTriangle, Shield, Link2, Clock, FileText, ArrowRight, AlertCircle } from 'lucide-react'

export function FraudSignalsMockup() {
  return (
    <div className="bg-gray-900 rounded-2xl p-6 shadow-2xl border border-gray-800 max-w-md w-full">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-sm font-semibold text-white">Fraud Risk Analysis</h3>
        <span className="text-xs bg-red-500/20 text-red-400 px-2 py-1 rounded-full">
          HIGH RISK
        </span>
      </div>

      {/* Risk Summary */}
      <div className="bg-gray-800/50 rounded-xl p-4 mb-4">
        <div className="flex items-center gap-2 mb-3">
          <Shield className="w-4 h-4 text-red-400" />
          <span className="text-xs font-medium text-gray-300">Risk Summary</span>
        </div>
        <div className="flex items-center gap-4">
          <div className="relative w-20 h-20">
            <svg className="w-20 h-20 transform -rotate-90">
              <circle
                cx="40"
                cy="40"
                r="32"
                stroke="#374151"
                strokeWidth="8"
                fill="none"
              />
              <circle
                cx="40"
                cy="40"
                r="32"
                stroke="#ef4444"
                strokeWidth="8"
                fill="none"
                strokeDasharray={`${78 * 0.78} ${78 * 0.22}`}
                strokeLinecap="round"
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-xl font-bold text-red-400">78</span>
            </div>
          </div>
          <div className="flex-1">
            <span className="text-xs text-gray-400 block mb-1">Fraud Risk Score</span>
            <span className="text-lg font-semibold text-white block">High Risk</span>
            <span className="text-xs text-gray-500">3 signals detected</span>
          </div>
        </div>
      </div>

      {/* Top 3 Signals */}
      <div className="bg-gray-800/50 rounded-xl p-4 mb-4">
        <div className="flex items-center gap-2 mb-3">
          <AlertTriangle className="w-4 h-4 text-amber-400" />
          <span className="text-xs font-medium text-gray-300">Top Fraud Signals</span>
        </div>
        <div className="space-y-3">
          {[
            {
              type: 'Inconsistency',
              label: 'Date Mismatch',
              detail: 'Incident date differs by 3 days between documents',
              severity: 'high',
            },
            {
              type: 'Behavioral',
              label: 'Claim Timing',
              detail: 'Filed 2 days after policy inception',
              severity: 'medium',
            },
            {
              type: 'Relationship',
              label: 'Network Link',
              detail: 'Claimant linked to 2 prior fraud cases',
              severity: 'high',
            },
          ].map((signal, i) => (
            <div key={i} className="bg-gray-800 rounded-lg p-3">
              <div className="flex items-center justify-between mb-1">
                <div className="flex items-center gap-2">
                  {signal.type === 'Inconsistency' && <AlertCircle className="w-4 h-4 text-red-400" />}
                  {signal.type === 'Behavioral' && <Clock className="w-4 h-4 text-amber-400" />}
                  {signal.type === 'Relationship' && <Link2 className="w-4 h-4 text-purple-400" />}
                  <span className="text-xs font-medium text-white">{signal.label}</span>
                </div>
                <span
                  className={`text-[10px] px-2 py-0.5 rounded-full font-medium ${
                    signal.severity === 'high'
                      ? 'bg-red-500/20 text-red-400'
                      : 'bg-amber-500/20 text-amber-400'
                  }`}
                >
                  {signal.severity === 'high' ? 'High' : 'Medium'}
                </span>
              </div>
              <p className="text-xs text-gray-400 pl-6">{signal.detail}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Evidence Highlights */}
      <div className="bg-gray-800/50 rounded-xl p-4 mb-4">
        <div className="flex items-center gap-2 mb-3">
          <FileText className="w-4 h-4 text-blue-400" />
          <span className="text-xs font-medium text-gray-300">Evidence Highlights</span>
        </div>
        <div className="space-y-2">
          {['Police Report - Page 2, Line 14', 'Claim Form - Section 4', 'Prior Claims Database'].map(
            (item, i) => (
              <div key={i} className="flex items-center justify-between bg-gray-800 rounded-lg px-3 py-2">
                <span className="text-xs text-gray-300">{item}</span>
                <ArrowRight className="w-4 h-4 text-gray-500" />
              </div>
            )
          )}
        </div>
      </div>

      {/* Next Action */}
      <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-4">
        <div className="flex items-center justify-between">
          <div>
            <span className="text-xs text-red-400 block mb-1">Recommended Action</span>
            <span className="text-sm font-semibold text-white">Create SIU Investigation Task</span>
          </div>
          <button className="px-4 py-2 bg-red-500 text-white text-xs font-medium rounded-lg hover:bg-red-600 transition-colors">
            Create Task
          </button>
        </div>
      </div>
    </div>
  )
}
