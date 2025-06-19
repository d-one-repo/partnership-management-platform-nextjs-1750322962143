import { Home, Plus, Search, User, Settings } from 'lucide-react'
import PartnershipList from '../components/PartnershipList'
import AddPartnershipModal from '../components/AddPartnershipModal'
import { useState } from 'react'
export default function HomePage() {
  const [modalOpen, setModalOpen] = useState(false)
  const [search, setSearch] = useState('')
  const [refresh, setRefresh] = useState(false)
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow">
        <div className="container mx-auto flex items-center justify-between p-4">
          <div className="flex items-center gap-2">
            <Home size={28} className="text-blue-600" />
            <h1 className="text-2xl font-bold text-gray-800">Logitech Partnership Management</h1>
          </div>
          <div className="flex items-center gap-4">
            <button
              className="flex items-center gap-1 px-3 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
              onClick={() => setModalOpen(true)}
            >
              <Plus size={20} />
              <span className="font-medium">New Partnership</span>
            </button>
            <User size={24} className="text-gray-500" title="Nathan Coutinho" />
            <Settings size={24} className="text-gray-500" />
          </div>
        </div>
      </header>
      <main className="container mx-auto p-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
          <div className="flex items-center bg-white rounded shadow px-3 py-2 w-full md:w-1/3">
            <Search size={20} className="text-gray-400 mr-2" />
            <input
              type="text"
              placeholder="Search partnerships..."
              className="w-full outline-none bg-transparent"
              value={search}
              onChange={e => setSearch(e.target.value)}
            />
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-500">Signed in as</span>
            <span className="font-semibold text-gray-700">Nathan Coutinho</span>
          </div>
        </div>
        <PartnershipList search={search} refresh={refresh} />
        <AddPartnershipModal
          open={modalOpen}
          setOpen={setModalOpen}
          onAdded={() => setRefresh(r => !r)}
        />
      </main>
      <footer className="bg-white border-t mt-8">
        <div className="container mx-auto py-4 text-center text-sm text-gray-400">
          &copy; {new Date().getFullYear()} Logitech. All rights reserved.
        </div>
      </footer>
    </div>
  )
}