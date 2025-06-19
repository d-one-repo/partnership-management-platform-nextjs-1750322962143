import { Edit, Delete, ExternalLink, MoreHorizontal, Check, X } from 'lucide-react'
import { useState } from 'react'
import { Menu } from '@headlessui/react'
export default function PartnershipRow({ partner }) {
  const [showActions, setShowActions] = useState(false)
  return (
    <tr className="hover:bg-gray-50 transition">
      <td className="px-4 py-3 font-medium flex items-center gap-2">
        <span>{partner.name}</span>
        <a
          href={partner.link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
          title="External Link"
        >
          <ExternalLink size={16} />
        </a>
      </td>
      <td className="px-4 py-3">{partner.contact}</td>
      <td className="px-4 py-3">
        <span
          className={
            partner.status === 'Active'
              ? 'bg-green-100 text-green-700 px-2 py-1 rounded text-xs font-semibold'
              : partner.status === 'Negotiation'
              ? 'bg-yellow-100 text-yellow-700 px-2 py-1 rounded text-xs font-semibold'
              : 'bg-gray-100 text-gray-500 px-2 py-1 rounded text-xs font-semibold'
          }
        >
          {partner.status}
        </span>
      </td>
      <td className="px-4 py-3">{partner.performance}</td>
      <td className="px-4 py-3">
        {partner.jointMarketing ? (
          <span className="inline-flex items-center gap-1 text-green-600 font-medium">
            <Check size={16} /> Yes
          </span>
        ) : (
          <span className="inline-flex items-center gap-1 text-gray-400 font-medium">
            <X size={16} /> No
          </span>
        )}
      </td>
      <td className="px-4 py-3">{partner.lastActivity}</td>
      <td className="px-4 py-3 text-center">
        <Menu as="div" className="relative inline-block text-left">
          <Menu.Button className="p-1 rounded hover:bg-gray-200">
            <MoreHorizontal size={20} />
          </Menu.Button>
          <Menu.Items className="absolute right-0 z-10 mt-2 w-36 origin-top-right bg-white border border-gray-200 rounded shadow-lg focus:outline-none">
            <div className="py-1">
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`flex items-center gap-2 w-full px-4 py-2 text-sm ${
                      active ? 'bg-gray-100' : ''
                    }`}
                  >
                    <Edit size={16} /> Edit
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`flex items-center gap-2 w-full px-4 py-2 text-sm text-red-600 ${
                      active ? 'bg-gray-100' : ''
                    }`}
                  >
                    <Delete size={16} /> Delete
                  </button>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Menu>
      </td>
    </tr>
  )
}