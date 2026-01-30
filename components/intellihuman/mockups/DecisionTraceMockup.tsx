import { FileText, User, Car, Shield, AlertTriangle, CheckCircle, ChevronRight } from 'lucide-react'

interface DecisionTraceMockupProps {
  variant?: 'default' | 'expanded'
}

export function DecisionTraceMockup({ variant = 'default' }: DecisionTraceMockupProps) {
  return (
    <div className="bg-gray-900 rounded-2xl p-6 shadow-2xl border border-gray-800 max-w-lg w-full">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-green-500" />
          <span className="text-xs text-gray-400 font-medium">Governance: Policy 2.1</span>
        </div>
        <span className="text-xs text-gray-500">Override History: None</span>
        <span className="text-xs text-gray-400">Traceability: Enabled</span>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-4 gap-3">
        {/* Column 1: Inputs & Documents */}
        <div className="bg-gray-800/50 rounded-xl p-4">
          <h4 className="text-xs font-semibold text-gray-300 mb-3">Inputs & Documents</h4>
          <div className="space-y-2">
            {[
              { icon: FileText, label: 'Policy Details', status: 'complete' },
              { icon: FileText, label: 'Claim Form PDF', status: 'warning' },
              { icon: FileText, label: 'Repair Estimate', status: 'complete' },
              { icon: FileText, label: 'Field Notes', status: 'complete' },
              { icon: FileText, label: 'Photos & Media', status: 'complete' },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2 bg-gray-800 rounded-lg px-3 py-2">
                <item.icon className="w-4 h-4 text-blue-400" />
                <span className="text-xs text-gray-300 flex-1">{item.label}</span>
                <div className="w-12 h-1 bg-gray-700 rounded" />
                {item.status === 'warning' ? (
                  <div className="w-4 h-4 rounded bg-red-500/20 flex items-center justify-center">
                    <div className="w-2 h-2 bg-red-500 rounded" />
                  </div>
                ) : (
                  <div className="w-4 h-4 rounded bg-blue-500/20 flex items-center justify-center">
                    <div className="w-2 h-2 bg-blue-500 rounded" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Column 2: Structured Entities */}
        <div className="bg-gray-800/50 rounded-xl p-4">
          <h4 className="text-xs font-semibold text-gray-300 mb-3">Structured Entities</h4>
          <div className="space-y-2">
            {[
              { icon: User, label: 'Insured Person', value: 'John Doe' },
              { icon: User, label: 'Claimant', value: 'Jane Smith' },
              { icon: Car, label: 'Vehicle', value: '2021 Sedan' },
              { icon: AlertTriangle, label: 'Loss Cause', value: 'Collision' },
              { icon: Shield, label: 'Coverage', value: 'Comprehensive' },
              { icon: FileText, label: 'Limits', value: '$30k' },
              { icon: FileText, label: 'Deductible', value: '$500' },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2 bg-gray-800 rounded-lg px-3 py-2">
                <item.icon className="w-4 h-4 text-blue-400" />
                <div className="flex-1">
                  <span className="text-xs text-gray-400 block">{item.label}</span>
                  <span className="text-xs text-white font-medium">{item.value}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Column 3: Rules & Signals */}
        <div className="bg-gray-800/50 rounded-xl p-4">
          <h4 className="text-xs font-semibold text-gray-300 mb-3">Rules & Signals</h4>
          <div className="space-y-2">
            {[
              { label: 'Coverage Active', status: 'pass' },
              { label: 'Cause of Loss Covered', status: 'pass' },
              { label: 'Liability Clear', status: 'review' },
              { label: 'Fraud Score', value: 'Low, 92% Confidence', status: 'pass' },
              { label: 'Repair Estimate Validated', status: 'pass' },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2 bg-gray-800 rounded-lg px-3 py-2">
                <span className="text-xs text-gray-300 flex-1">{item.label}</span>
                {item.value && <span className="text-xs text-blue-400">{item.value}</span>}
                <span
                  className={`text-[10px] px-2 py-0.5 rounded-full font-medium ${
                    item.status === 'pass'
                      ? 'bg-green-500/20 text-green-400'
                      : item.status === 'review'
                      ? 'bg-amber-500/20 text-amber-400'
                      : 'bg-red-500/20 text-red-400'
                  }`}
                >
                  {item.status === 'pass' ? 'Pass' : item.status === 'review' ? 'Review' : 'Fail'}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Column 4: Evidence Linkage & Final Recommendation */}
        <div className="space-y-3">
          {/* Evidence Linkage */}
          <div className="bg-gray-800/50 rounded-xl p-4">
            <h4 className="text-xs font-semibold text-gray-300 mb-3">Evidence Linkage</h4>
            <div className="space-y-2">
              {[1, 2, 3].map((i) => (
                <div key={i} className="bg-gray-800 rounded-lg p-2">
                  <div className="flex items-center gap-2 mb-1">
                    <div className="w-8 h-6 bg-gray-700 rounded" />
                    <div className="flex-1 space-y-1">
                      <div className="w-full h-1 bg-gray-700 rounded" />
                      <div className="w-2/3 h-1 bg-gray-700 rounded" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Final Recommendation */}
          <div className="bg-gray-800/50 rounded-xl p-4">
            <h4 className="text-xs font-semibold text-gray-300 mb-3">Final Recommendation & Audit</h4>
            <div className="bg-gray-800 rounded-lg p-3 mb-2">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs text-gray-400">Governance: Policy 2.1</span>
                <span className="text-xs text-gray-500">Traceability: Enabled</span>
              </div>
              <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-3 mb-3">
                <div className="flex items-center gap-2 mb-1">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm font-semibold text-green-400">Approve Claim</span>
                </div>
                <span className="text-xs text-gray-400">Confidence: 95%</span>
              </div>
              <div className="text-xs text-amber-400 flex items-center gap-1 mb-2">
                <div className="w-2 h-2 rounded-full bg-amber-400" />
                Pending Final Review
              </div>
              <div className="flex items-center justify-between text-xs text-gray-400">
                <div className="flex items-center gap-1">
                  <FileText className="w-3 h-3" />
                  Audit Log: 3 actions
                </div>
                <div className="flex items-center gap-1 text-green-400">
                  <CheckCircle className="w-3 h-3" />
                  Compliance Check: Passed
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
