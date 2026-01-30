import { FileText, AlertTriangle, ArrowRight, Clock, Users, CheckCircle } from 'lucide-react'

export function ClaimsTriageMockup() {
  return (
    <div className="bg-gray-900 rounded-2xl p-6 shadow-2xl border border-gray-800 max-w-md w-full">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-sm font-semibold text-white">Claims Triage</h3>
        <span className="text-xs bg-blue-500/20 text-blue-400 px-2 py-1 rounded-full">
          AUTO-ROUTED
        </span>
      </div>

      {/* Claim Classification */}
      <div className="bg-gray-800/50 rounded-xl p-4 mb-4">
        <div className="flex items-center gap-2 mb-3">
          <FileText className="w-4 h-4 text-blue-400" />
          <span className="text-xs font-medium text-gray-300">Claim Classification</span>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-gray-800 rounded-lg p-3">
            <span className="text-xs text-gray-400 block mb-1">Type</span>
            <span className="text-sm font-medium text-white">Auto - Collision</span>
          </div>
          <div className="bg-gray-800 rounded-lg p-3">
            <span className="text-xs text-gray-400 block mb-1">LOB</span>
            <span className="text-sm font-medium text-white">Personal Auto</span>
          </div>
        </div>
      </div>

      {/* Priority & Severity */}
      <div className="bg-gray-800/50 rounded-xl p-4 mb-4">
        <div className="flex items-center gap-2 mb-3">
          <AlertTriangle className="w-4 h-4 text-amber-400" />
          <span className="text-xs font-medium text-gray-300">Priority & Severity</span>
        </div>
        <div className="grid grid-cols-3 gap-3">
          <div className="bg-gray-800 rounded-lg p-3 text-center">
            <span className="text-xs text-gray-400 block mb-1">Priority</span>
            <span className="text-sm font-semibold text-amber-400">Medium</span>
          </div>
          <div className="bg-gray-800 rounded-lg p-3 text-center">
            <span className="text-xs text-gray-400 block mb-1">Severity</span>
            <span className="text-sm font-semibold text-white">$12,500</span>
          </div>
          <div className="bg-gray-800 rounded-lg p-3 text-center">
            <span className="text-xs text-gray-400 block mb-1">Complexity</span>
            <span className="text-sm font-semibold text-blue-400">Standard</span>
          </div>
        </div>
      </div>

      {/* Routing Recommendation */}
      <div className="bg-gray-800/50 rounded-xl p-4 mb-4">
        <div className="flex items-center gap-2 mb-3">
          <Users className="w-4 h-4 text-green-400" />
          <span className="text-xs font-medium text-gray-300">Routing Recommendation</span>
        </div>
        <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-3">
          <div className="flex items-center justify-between">
            <div>
              <span className="text-sm font-medium text-white block">Auto Claims - Team B</span>
              <span className="text-xs text-gray-400">SLA: 48 hours</span>
            </div>
            <ArrowRight className="w-5 h-5 text-green-400" />
          </div>
        </div>
      </div>

      {/* Evidence Highlights */}
      <div className="bg-gray-800/50 rounded-xl p-4">
        <div className="flex items-center gap-2 mb-3">
          <CheckCircle className="w-4 h-4 text-blue-400" />
          <span className="text-xs font-medium text-gray-300">Evidence Highlights</span>
        </div>
        <div className="space-y-2">
          {[
            { label: 'Police Report', status: 'Verified' },
            { label: 'Photos (5)', status: 'Attached' },
            { label: 'Repair Estimate', status: 'Pending' },
          ].map((item, i) => (
            <div key={i} className="flex items-center justify-between bg-gray-800 rounded-lg px-3 py-2">
              <span className="text-xs text-gray-300">{item.label}</span>
              <span
                className={`text-xs px-2 py-0.5 rounded-full ${
                  item.status === 'Verified'
                    ? 'bg-green-500/20 text-green-400'
                    : item.status === 'Pending'
                    ? 'bg-amber-500/20 text-amber-400'
                    : 'bg-blue-500/20 text-blue-400'
                }`}
              >
                {item.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
