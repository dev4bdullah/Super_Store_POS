import { useState } from 'react';
import { MoreVertical, CheckCircle, XCircle, Search, X } from 'lucide-react';

export default function SuperAdmin() {
  const [shops, setShops] = useState([
    { id: '1', name: 'Al-Madina Super Store', status: 'active', joined: '2026-03-15', revenue: 'Rs 145,000' },
    { id: '2', name: 'Khan Garments', status: 'held', joined: '2026-03-20', revenue: 'Rs 0' },
    { id: '3', name: 'Fresh Mart Point', status: 'active', joined: '2026-04-01', revenue: 'Rs 12,500' }
  ]);
  
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [openActionMenuId, setOpenActionMenuId] = useState(null);
  const [newShop, setNewShop] = useState({
    name: '',
    status: 'active',
    revenue: ''
  });
  const [searchQuery, setSearchQuery] = useState('');

  const handleAddAccount = (e) => {
    e.preventDefault();
    const today = new Date().toISOString().split('T')[0];
    const newId = String(shops.length + 1);
    const shopToAdd = {
      id: newId,
      name: newShop.name,
      status: newShop.status,
      joined: today,
      revenue: newShop.revenue ? (newShop.revenue.startsWith('Rs') ? newShop.revenue : `Rs ${newShop.revenue}`) : 'Rs 0'
    };
    
    setShops([shopToAdd, ...shops]);
    setIsModalOpen(false);
    setNewShop({ name: '', status: 'active', revenue: '' });
  };

  const activeCount = shops.filter(s => s.status === 'active').length;
  const heldCount = shops.filter(s => s.status === 'held').length;
  const totalCount = shops.length;

  const filteredShops = shops.filter(shop => 
    shop.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="container animate-fade-in py-4">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold">Super Panel</h1>
          <p className="text-secondary">Manage your SaaS subscriptions manually.</p>
        </div>
        <button className="btn btn-primary" onClick={() => setIsModalOpen(true)}>Add New Account</button>
      </div>

      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="card p-4">
          <p className="text-secondary text-sm">Active Subscriptions</p>
          <p className="text-2xl font-bold text-success">{activeCount}</p>
        </div>
        <div className="card p-4">
          <p className="text-secondary text-sm">Held Accounts</p>
          <p className="text-2xl font-bold text-warning">{heldCount}</p>
        </div>
        <div className="card p-4">
          <p className="text-secondary text-sm">Total Accounts</p>
          <p className="text-2xl font-bold">{totalCount}</p>
        </div>
      </div>

      <div className="card">
        <div className="p-4 border-b flex justify-between items-center" style={{ borderColor: 'var(--border-color)' }}>
          <h2 className="font-bold">Managed Shops</h2>
          <div style={{ maxWidth: '250px' }}>
            <div style={{ position: 'relative' }}>
              <Search size={16} className="text-secondary" style={{ position: 'absolute', left: 10, top: 10 }} />
              <input 
                type="text" 
                className="input" 
                placeholder="Search shops..." 
                style={{ paddingLeft: '2rem' }} 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </div>
        
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
            <thead className="bg-elevated text-secondary text-sm">
              <tr>
                <th className="p-4 font-medium">Shop Name</th>
                <th className="p-4 font-medium">Status</th>
                <th className="p-4 font-medium">Joined Date</th>
                <th className="p-4 font-medium">Est. Platform Rev.</th>
                <th className="p-4 font-medium">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredShops.map(shop => (
                <tr key={shop.id} style={{ borderBottom: '1px solid var(--border-color)' }}>
                  <td className="p-4 font-medium">{shop.name}</td>
                  <td className="p-4">
                    <span style={{ 
                      display: 'inline-flex', alignItems: 'center', gap: '4px',
                      padding: '4px 8px', borderRadius: '12px', fontSize: '12px',
                      backgroundColor: shop.status === 'active' ? 'rgba(34, 197, 94, 0.1)' : 'rgba(245, 158, 11, 0.1)',
                      color: shop.status === 'active' ? 'var(--success)' : 'var(--warning)'
                    }}>
                      {shop.status === 'active' ? <CheckCircle size={12} /> : <XCircle size={12} />}
                      {shop.status.toUpperCase()}
                    </span>
                  </td>
                  <td className="p-4 text-secondary text-sm">{shop.joined}</td>
                  <td className="p-4">{shop.revenue}</td>
                  <td className="p-4" style={{ position: 'relative' }}>
                    <button 
                      className="btn btn-ghost" 
                      style={{ padding: '4px' }}
                      onClick={() => setOpenActionMenuId(openActionMenuId === shop.id ? null : shop.id)}
                    >
                      <MoreVertical size={16} />
                    </button>

                    {openActionMenuId === shop.id && (
                      <>
                        {/* Click-outside listener overlay */}
                        <div 
                          style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, zIndex: 10 }} 
                          onClick={() => setOpenActionMenuId(null)}
                        />
                        
                        <div 
                          className="card animate-fade-in" 
                          style={{ 
                            position: 'absolute', right: '40px', top: '20px', 
                            padding: '8px', zIndex: 20, minWidth: '150px',
                            display: 'flex', flexDirection: 'column', gap: '4px',
                            boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.5)'
                          }}
                        >
                          <button 
                            className="btn btn-ghost" 
                            style={{ padding: '8px', justifyContent: 'flex-start', fontSize: '0.875rem' }}
                            onClick={() => {
                              const newStatus = shop.status === 'active' ? 'held' : 'active';
                              setShops(shops.map(s => s.id === shop.id ? { ...s, status: newStatus } : s));
                              setOpenActionMenuId(null);
                            }}
                          >
                            Mark as {shop.status === 'active' ? 'Held' : 'Active'}
                          </button>
                          <button 
                            className="btn btn-ghost" 
                            style={{ padding: '8px', justifyContent: 'flex-start', fontSize: '0.875rem', color: '#ef4444' }}
                            onClick={() => {
                              if(window.confirm('Are you sure you want to delete this account?')) {
                                setShops(shops.filter(s => s.id !== shop.id));
                              }
                              setOpenActionMenuId(null);
                            }}
                          >
                            Delete Account
                          </button>
                        </div>
                      </>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {isModalOpen && (
        <div style={{
          position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.7)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          zIndex: 50, backdropFilter: 'blur(4px)'
        }}>
          <div className="card animate-fade-in" style={{ width: '400px', maxWidth: '90%', padding: '24px' }}>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">Add New Account</h2>
              <button className="btn btn-ghost" onClick={() => setIsModalOpen(false)} style={{ padding: '4px' }}>
                <X size={20} />
              </button>
            </div>
            
            <form onSubmit={handleAddAccount}>
              <div className="mb-4">
                <label className="block text-secondary mb-2 text-sm">Shop Name</label>
                <input 
                  type="text" 
                  className="input w-full" 
                  required
                  value={newShop.name}
                  onChange={(e) => setNewShop({...newShop, name: e.target.value})}
                  placeholder="e.g. Corner Market"
                />
              </div>
              
              <div className="mb-4">
                <label className="block text-secondary mb-2 text-sm">Status</label>
                <select 
                  className="input w-full"
                  value={newShop.status}
                  onChange={(e) => setNewShop({...newShop, status: e.target.value})}
                >
                  <option value="active">Active</option>
                  <option value="held">Held</option>
                </select>
              </div>
              
              <div className="mb-6">
                <label className="block text-secondary mb-2 text-sm">Est. Platform Revenue</label>
                <input 
                  type="text" 
                  className="input w-full" 
                  required
                  value={newShop.revenue}
                  onChange={(e) => setNewShop({...newShop, revenue: e.target.value})}
                  placeholder="e.g. 50,000"
                />
              </div>
              
              <div className="flex justify-end gap-2">
                <button type="button" className="btn btn-ghost" onClick={() => setIsModalOpen(false)}>Cancel</button>
                <button type="submit" className="btn btn-primary">Create Account</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
