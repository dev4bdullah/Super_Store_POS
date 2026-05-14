import { useState } from 'react';
import { MoreVertical, CheckCircle, XCircle, Search, X, TrendingUp, Users, Activity } from 'lucide-react';
import { AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const revenueData = [
  { month: 'Jan', revenue: 45000 },
  { month: 'Feb', revenue: 52000 },
  { month: 'Mar', revenue: 61000 },
  { month: 'Apr', revenue: 59000 },
  { month: 'May', revenue: 75000 },
  { month: 'Jun', revenue: 88000 },
];

const platformGrowth = [
  { month: 'Jan', activeShops: 12, newSignups: 4 },
  { month: 'Feb', activeShops: 15, newSignups: 3 },
  { month: 'Mar', activeShops: 22, newSignups: 8 },
  { month: 'Apr', activeShops: 26, newSignups: 5 },
  { month: 'May', activeShops: 35, newSignups: 10 },
  { month: 'Jun', activeShops: 42, newSignups: 8 },
];

export default function SuperAdmin() {
  const [shops, setShops] = useState([
    { id: '1', name: 'Al-Madina Super Store', status: 'active', joined: '2026-03-15', revenue: 'Rs 145,000' },
    { id: '2', name: 'Khan Garments', status: 'held', joined: '2026-03-20', revenue: 'Rs 0' },
    { id: '3', name: 'Fresh Mart Point', status: 'active', joined: '2026-04-01', revenue: 'Rs 12,500' },
    { id: '4', name: 'Zahid Pharmacy', status: 'active', joined: '2026-05-10', revenue: 'Rs 45,000' }
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
          <h1 className="text-2xl font-bold">Super Admin Panel</h1>
          <p className="text-secondary">Platform analytics and tenant management.</p>
        </div>
        <button className="btn btn-primary" onClick={() => setIsModalOpen(true)}>Add New Account</button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="card p-6">
          <div className="flex items-center gap-4 mb-4">
            <div style={{ padding: '12px', borderRadius: '12px', backgroundColor: 'rgba(34, 197, 94, 0.1)', color: 'var(--success)' }}>
              <Activity size={24} />
            </div>
            <div>
              <p className="text-secondary text-sm">Active Subscriptions</p>
              <h3 className="text-2xl font-bold text-success">{activeCount}</h3>
            </div>
          </div>
          <div className="flex items-center gap-1 text-success text-sm font-medium">
            <TrendingUp size={16} />
            <span>+2 this month</span>
          </div>
        </div>
        
        <div className="card p-6">
          <div className="flex items-center gap-4 mb-4">
            <div style={{ padding: '12px', borderRadius: '12px', backgroundColor: 'rgba(245, 158, 11, 0.1)', color: 'var(--warning)' }}>
              <XCircle size={24} />
            </div>
            <div>
              <p className="text-secondary text-sm">Held Accounts</p>
              <h3 className="text-2xl font-bold text-warning">{heldCount}</h3>
            </div>
          </div>
          <div className="flex items-center gap-1 text-secondary text-sm font-medium">
            <span>Pending clearance</span>
          </div>
        </div>
        
        <div className="card p-6">
          <div className="flex items-center gap-4 mb-4">
            <div style={{ padding: '12px', borderRadius: '12px', backgroundColor: 'rgba(59, 130, 246, 0.1)', color: 'var(--accent-color)' }}>
              <Users size={24} />
            </div>
            <div>
              <p className="text-secondary text-sm">Total Accounts</p>
              <h3 className="text-2xl font-bold">{totalCount}</h3>
            </div>
          </div>
          <div className="flex items-center gap-1 text-success text-sm font-medium">
            <TrendingUp size={16} />
            <span>+18% Year over Year</span>
          </div>
        </div>
      </div>

      {/* Analytics Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* Platform Revenue Chart */}
        <div className="card p-6" style={{ height: '350px', display: 'flex', flexDirection: 'column' }}>
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-bold text-lg">Platform Revenue Growth</h3>
            <span className="text-xs font-bold px-2 py-1 bg-success rounded-full" style={{ color: '#fff', backgroundColor: 'var(--success)' }}>+24%</span>
          </div>
          <div style={{ flex: 1, width: '100%', minHeight: 0 }}>
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={revenueData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorAdminRev" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="var(--accent-color)" stopOpacity={0.5}/>
                    <stop offset="95%" stopColor="var(--accent-color)" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="var(--border-color)" />
                <XAxis dataKey="month" stroke="var(--text-secondary)" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis stroke="var(--text-secondary)" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(value) => `Rs ${value/1000}k`} />
                <Tooltip 
                  contentStyle={{ backgroundColor: 'var(--bg-elevated)', borderRadius: '8px', border: '1px solid var(--border-color)', color: 'var(--text-primary)' }}
                  itemStyle={{ color: 'var(--accent-color)', fontWeight: 'bold' }}
                />
                <Area type="monotone" dataKey="revenue" stroke="var(--accent-color)" strokeWidth={3} fillOpacity={1} fill="url(#colorAdminRev)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Shop Acquisition Chart */}
        <div className="card p-6" style={{ height: '350px', display: 'flex', flexDirection: 'column' }}>
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-bold text-lg">Shop Acquisition</h3>
            <span className="text-secondary text-sm">New vs Active</span>
          </div>
          <div style={{ flex: 1, width: '100%', minHeight: 0 }}>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={platformGrowth} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="var(--border-color)" />
                <XAxis dataKey="month" stroke="var(--text-secondary)" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis stroke="var(--text-secondary)" fontSize={12} tickLine={false} axisLine={false} />
                <Tooltip 
                  contentStyle={{ backgroundColor: 'var(--bg-elevated)', borderRadius: '8px', border: '1px solid var(--border-color)', color: 'var(--text-primary)' }}
                  cursor={{ fill: 'var(--bg-secondary)', opacity: 0.4 }}
                />
                <Legend verticalAlign="top" height={36} iconType="circle" />
                <Bar dataKey="activeShops" name="Total Active Shops" fill="var(--accent-color)" radius={[4, 4, 0, 0]} />
                <Bar dataKey="newSignups" name="New Signups" fill="var(--success)" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      <div className="card">
        <div className="p-6 border-b flex justify-between items-center" style={{ borderColor: 'var(--border-color)' }}>
          <h2 className="font-bold text-lg">Managed Tenant Shops</h2>
          <div style={{ maxWidth: '300px', width: '100%' }}>
            <div style={{ position: 'relative' }}>
              <Search size={16} className="text-secondary" style={{ position: 'absolute', left: 10, top: 10 }} />
              <input 
                type="text" 
                className="input w-full" 
                placeholder="Search by shop name..." 
                style={{ paddingLeft: '2.5rem' }} 
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
                <th className="p-4 font-medium text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredShops.map((shop, index) => (
                <tr key={shop.id} style={{ borderBottom: index === filteredShops.length - 1 ? 'none' : '1px solid var(--border-color)' }}>
                  <td className="p-4 font-medium">{shop.name}</td>
                  <td className="p-4">
                    <span style={{ 
                      display: 'inline-flex', alignItems: 'center', gap: '4px',
                      padding: '4px 10px', borderRadius: '12px', fontSize: '12px', fontWeight: 'bold',
                      backgroundColor: shop.status === 'active' ? 'rgba(34, 197, 94, 0.1)' : 'rgba(245, 158, 11, 0.1)',
                      color: shop.status === 'active' ? 'var(--success)' : 'var(--warning)'
                    }}>
                      {shop.status === 'active' ? <CheckCircle size={12} /> : <XCircle size={12} />}
                      {shop.status.toUpperCase()}
                    </span>
                  </td>
                  <td className="p-4 text-secondary text-sm">{shop.joined}</td>
                  <td className="p-4 font-medium">{shop.revenue}</td>
                  <td className="p-4 text-center" style={{ position: 'relative' }}>
                    <button 
                      className="btn btn-ghost" 
                      style={{ padding: '6px' }}
                      onClick={() => setOpenActionMenuId(openActionMenuId === shop.id ? null : shop.id)}
                    >
                      <MoreVertical size={18} />
                    </button>

                    {openActionMenuId === shop.id && (
                      <>
                        <div 
                          style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, zIndex: 10 }} 
                          onClick={() => setOpenActionMenuId(null)}
                        />
                        
                        <div 
                          className="card animate-fade-in" 
                          style={{ 
                            position: 'absolute', right: '40px', top: '20px', 
                            padding: '8px', zIndex: 20, minWidth: '160px',
                            display: 'flex', flexDirection: 'column', gap: '4px',
                            boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.3)'
                          }}
                        >
                          <button 
                            className="btn btn-ghost" 
                            style={{ padding: '8px 12px', justifyContent: 'flex-start', fontSize: '0.875rem' }}
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
                            style={{ padding: '8px 12px', justifyContent: 'flex-start', fontSize: '0.875rem', color: 'var(--danger)' }}
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
          <div className="card animate-slide-up" style={{ width: '400px', maxWidth: '90%', padding: '24px' }}>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold">Add New Account</h2>
              <button className="btn btn-ghost" onClick={() => setIsModalOpen(false)} style={{ padding: '4px' }}>
                <X size={20} />
              </button>
            </div>
            
            <form onSubmit={handleAddAccount}>
              <div className="mb-4">
                <label className="block text-secondary mb-2 text-sm font-medium">Shop Name</label>
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
                <label className="block text-secondary mb-2 text-sm font-medium">Status</label>
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
                <label className="block text-secondary mb-2 text-sm font-medium">Est. Platform Revenue</label>
                <input 
                  type="text" 
                  className="input w-full" 
                  required
                  value={newShop.revenue}
                  onChange={(e) => setNewShop({...newShop, revenue: e.target.value})}
                  placeholder="e.g. 50,000"
                />
              </div>
              
              <div className="flex justify-end gap-3 mt-8 border-t pt-4" style={{ borderColor: 'var(--border-color)' }}>
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
