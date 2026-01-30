import { FileText, CheckCircle, XCircle, AlertTriangle, ArrowRight } from 'lucide-react'

export function UnderwritingMockup() {
  return (
    <div className="bg-gray-900 rounded-2xl p-6 shadow-2xl border border-gray-800 max-w-md w-full">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-sm font-semibold text-white">Underwriting Guideline Check</h3>
        <span className="text-xs bg-amber-500/20 text-amber-400 px-2 py-1 rounded-full">
          REFERRAL NEEDED
        </span>
      </div>

      {/* Submission Summary */}
      <div className="bg-gray-800/50 rounded-xl p-4 mb-4">
        <div className="flex items-center gap-2 mb-3">
          <FileText className="w-4 h-4 text-blue-400" />
          <span className="text-xs font-medium text-gray-300">Submission Summary</span>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-gray-800 rounded-lg p-3">
            <span className="text-xs text-gray-400 block mb-1">Applicant</span>
            <span className="text-sm font-medium text-white">ABC Manufacturing</span>
          </div>
          <div className="bg-gray-800 rounded-lg p-3">
            <span className="text-xs text-gray-400 block mb-1">Product</span>
            <span className="text-sm font-medium text-white">Commercial GL</span>
          </div>
          <div className="bg-gray-800 rounded-lg p-3">
            <span className="text-xs text-gray-400 block mb-1">Premium</span>
            <span className="text-sm font-medium text-white">$45,000</span>
          </div>
          <div className="bg-gray-800 rounded-lg p-3">
            <span className="text-xs text-gray-400 block mb-1">Effective Date</span>
            <span className="text-sm font-medium text-white">Mar 1, 2025</span>
          </div>
        </div>
      </div>

      {/* Guideline Pass/Fail Checks */}
      <div className="bg-gray-800/50 rounded-xl p-4 mb-4">
        <div className="flex items-center gap-2 mb-3">
          <CheckCircle className="w-4 h-4 text-green-400" />
          <span className="text-xs font-medium text-gray-300">Guideline Checks</span>
        </div>
        <div className="space-y-2">
          {[
            { label: 'Industry Classification', status: 'pass' },
            { label: 'Revenue Threshold', status: 'pass' },
            { label: 'Loss History (5yr)', status: 'fail', reason: 'Exceeds 60% LR' },
            { label: 'Years in Business', status: 'pass' },
            { label: 'Territory Eligibility', status: 'pass' },
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-3 bg-gray-800 rounded-lg px-3 py-2">
              {item.status === 'pass' ? (
                <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
              ) : (
                <XCircle className="w-4 h-4 text-red-400 flex-shrink-0" />
              )}
              <div className="flex-1">
                <span className="text-xs text-gray-300 block">{item.label}</span>
                {item.reason && <span className="text-xs text-red-400">{item.reason}</span>}
              </div>
              <span
                className={`text-[10px] px-2 py-0.5 rounded-full font-medium ${
                  item.status === 'pass'
                    ? 'bg-green-500/20 text-green-400'
                    : 'bg-red-500/20 text-red-400'
                }`}
              >
                {item.status === 'pass' ? 'Pass' : 'Fail'}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Referral Recommendation */}
      <div className="bg-amber-500/10 border border-amber-500/30 rounded-xl p-4 mb-4">
        <div className="flex items-center gap-2 mb-2">
          <AlertTriangle className="w-4 h-4 text-amber-400" />
          <span className="text-xs font-semibold text-amber-400">Referral Recommendation</span>
        </div>
        <p className="text-sm text-white mb-2">Refer to Senior Underwriter</p>
        <div className="text-xs text-gray-400">
          <span className="font-medium">Reason Code:</span> LH-001 - Loss history exceeds threshold
        </div>
      </div>

      {/* Evidence References */}
      <div className="bg-gray-800/50 rounded-xl p-4">
        <div className="flex items-center gap-2 mb-3">
          <FileText className="w-4 h-4 text-blue-400" />
          <span className="text-xs font-medium text-gray-300">Evidence References</span>
        </div>
        <div className="space-y-2">
          {['Application Form', 'Loss Runs (5yr)', 'Financial Statements'].map((item, i) => (
            <div key={i} className="flex items-center justify-between bg-gray-800 rounded-lg px-3 py-2">
              <span className="text-xs text-gray-300">{item}</span>
              <ArrowRight className="w-4 h-4 text-gray-500" />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
