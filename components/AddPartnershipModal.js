import { Plus, X, Save } from 'lucide-react'
import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
const INITIAL = {
  name: '',
  contact: '',
  status: 'Active',
  performance: 'Good',
  jointMarketing: false,
  lastActivity: '',
  link: '',
}
export default function AddPartnershipModal({ open, setOpen, onAdded }) {
  const [form, setForm] = useState(INITIAL)
  const [saving, setSaving] = useState(false)
  function handleChange(e) {
    const { name, value, type, checked } = e.target
    setForm(f => ({
      ...f,
      [name]: type === 'checkbox' ? checked : value,
    }))
  }
  function handleSubmit(e) {
    e.preventDefault()
    setSaving(true)
    setTimeout(() => {
      setSaving(false)
      setForm(INITIAL)
      setOpen(false)
      if (onAdded) onAdded()
    }, 800)
  }
  function handleClose() {
    setForm(INITIAL)
    setOpen(false)
  }
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={handleClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-200"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-150"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-30 transition-opacity" />
        </Transition.Child>
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-200"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-150"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-lg rounded bg-white p-6 shadow-xl">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <Plus size={24} className="text-blue-600" />
                    <Dialog.Title className="text-lg font-bold">
                      Add New Partnership
                    </Dialog.Title>
                  </div>
                  <button
                    className="p-1 rounded hover:bg-gray-100"
                    onClick={handleClose}
                  >
                    <X size={20} />
                  </button>
                </div>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Partner Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      className="w-full border rounded px-3 py-2 outline-none focus:ring-2 focus:ring-blue-200"
                      value={form.name}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Contact Email
                    </label>
                    <input
                      type="email"
                      name="contact"
                      required
                      className="w-full border rounded px-3 py-2 outline-none focus:ring-2 focus:ring-blue-200"
                      value={form.contact}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-1">
                      <label className="block text-sm font-medium mb-1">
                        Status
                      </label>
                      <select
                        name="status"
                        className="w-full border rounded px-3 py-2"
                        value={form.status}
                        onChange={handleChange}
                      >
                        <option value="Active">Active</option>
                        <option value="Negotiation">Negotiation</option>
                        <option value="Inactive">Inactive</option>
                      </select>
                    </div>
                    <div className="flex-1">
                      <label className="block text-sm font-medium mb-1">
                        Performance
                      </label>
                      <select
                        name="performance"
                        className="w-full border rounded px-3 py-2"
                        value={form.performance}
                        onChange={handleChange}
                      >
                        <option value="Excellent">Excellent</option>
                        <option value="Good">Good</option>
                        <option value="Average">Average</option>
                        <option value="Poor">Poor</option>
                      </select>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      name="jointMarketing"
                      id="jointMarketing"
                      checked={form.jointMarketing}
                      onChange={handleChange}
                      className="h-4 w-4"
                    />
                    <label htmlFor="jointMarketing" className="text-sm">
                      Joint Marketing Initiative
                    </label>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Last Activity Date
                    </label>
                    <input
                      type="date"
                      name="lastActivity"
                      required
                      className="w-full border rounded px-3 py-2 outline-none focus:ring-2 focus:ring-blue-200"
                      value={form.lastActivity}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">
                      External Link
                    </label>
                    <input
                      type="url"
                      name="link"
                      placeholder="https://partner.com"
                      className="w-full border rounded px-3 py-2 outline-none focus:ring-2 focus:ring-blue-200"
                      value={form.link}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="flex justify-end gap-2 pt-2">
                    <button
                      type="button"
                      className="px-4 py-2 rounded bg-gray-100 text-gray-700 hover:bg-gray-200"
                      onClick={handleClose}
                      disabled={saving}
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="flex items-center gap-2 px-4 py-2 rounded bg-blue-600 text-white font-semibold hover:bg-blue-700 transition"
                      disabled={saving}
                    >
                      <Save size={18} />
                      {saving ? 'Saving...' : 'Save'}
                    </button>
                  </div>
                </form>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}