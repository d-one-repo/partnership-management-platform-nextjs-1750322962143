import { ChevronDown, ChevronUp, Edit, Delete, ExternalLink, MoreHorizontal } from 'lucide-react'
import { useState, useEffect } from 'react'
import PartnershipRow from './PartnershipRow'
const SAMPLE_PARTNERSHIPS = [
  {
    id: 1,
    name: 'NVIDIA GeForce NOW',
    contact: 'jane.doe@nvidia.com',
    status: 'Active',
    performance: 'Excellent',
    jointMarketing: true,
    lastActivity: '2024-06-01',
    link: 'https://www.nvidia.com/en-us/geforce-now/',
  },
  {
    id: 2,
    name: 'Microsoft Xbox Cloud',
    contact: 'john.smith@microsoft.com',
    status: 'Negotiation',
    performance: 'Good',
    jointMarketing: false,
    lastActivity: '2024-05-28',
    link: 'https://www.xbox.com/en-US/xbox-game-pass/cloud-gaming',
  },
  {
    id: 3,
    name: 'Google Stadia',
    contact: 'alex.lee@google.com',
    status: 'Inactive',
    performance: 'Average',
    jointMarketing: false,
    lastActivity: '2024-04-15',
    link: 'https://stadia.google.com/',
  },
  {
    id: 4,
    name: 'Sony PlayStation Now',
    contact: 'emily.tan@sony.com',
    status: 'Active',
    performance: 'Excellent',
    jointMarketing: true,
    lastActivity: '2024-06-03',
    link: 'https://www.playstation.com/en-us/ps-now/',
  }
]
export default function PartnershipList({ search, refresh }) {
  const [data, setData] = useState(SAMPLE_PARTNERSHIPS)
  const [sortAsc, setSortAsc] = useState(true)
  useEffect(() => {
    setData(SAMPLE_PARTNERSHIPS)
  }, [refresh])
  const filtered = data.filter(p =>
    p.name.toLowerCase().includes(search.toLowerCase()) ||
    p.contact.toLowerCase().includes(search.toLowerCase())
  )
  const sorted = [...filtered].sort((a, b) => {
    if (sortAsc) {
      return a.name.localeCompare(b.name)
    } else {
      return b.name.localeCompare(a.name)
    }
  })
  return (
    <div className="bg-white rounded shadow overflow-x-auto">
      <table className="min-w-full table-auto">
        <thead>
          <tr className="bg-gray-100 text-gray-700">
            <th className="px-4 py-3 text-left font-semibold">Partner</th>
            <th className="px-4 py-3 text-left font-semibold">Contact</th>
            <th className="px-4 py-3 text-left font-semibold">
              <div className="flex items-center gap-1">
                Status
                <button
                  className="ml-1"
                  onClick={() => setSortAsc(a => !a)}
                  aria-label="Sort"
                >
                  {sortAsc ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                </button>
              </div>
            </th>
            <th className="px-4 py-3 text-left font-semibold">Performance</th>
            <th className="px-4 py-3 text-left font-semibold">Joint Marketing</th>
            <th className="px-4 py-3 text-left font-semibold">Last Activity</th>
            <th className="px-4 py-3 text-center font-semibold">Actions</th>
          </tr>
        </thead>
        <tbody>
          {sorted.length === 0 && (
            <tr>
              <td colSpan={7} className="text-center py-8 text-gray-400">
                No partnerships found.
              </td>
            </tr>
          )}
          {sorted.map(partner => (
            <PartnershipRow key={partner.id} partner={partner} />
          ))}
        </tbody>
      </table>
    </div>
  )
}