import { TrendingUp, TrendingDown, DollarSign, ShoppingCart, Package, AlertTriangle, Clock } from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend } from 'recharts';

const weeklyData = [
  { name: 'Mon', revenue: 15400 },
  { name: 'Tue', revenue: 12000 },
  { name: 'Wed', revenue: 18500 },
  { name: 'Thu', revenue: 21000 },
  { name: 'Fri', revenue: 19500 },
  { name: 'Sat', revenue: 28000 },
  { name: 'Sun', revenue: 24500 }
];

const categoryData = [
  { name: 'Grocery', value: 12000 },
  { name: 'Dairy', value: 8000 },
  { name: 'Medicine', value: 15000 },
  { name: 'Snacks', value: 5000 },
  { name: 'Personal Care', value: 6500 }
];

const COLORS = ['#3B82F6', '#10B981', '#F59E0B', '#EF4444', '#8B5CF6'];

const recentTransactions = [
  { id: 'TXN-1046', time: '12:22 PM', items: 5, total: 2100, status: 'Completed' },
  { id: 'TXN-1045', time: '12:05 PM', items: 2, total: 850, status: 'Refunded' },
  { id: 'TXN-1044', time: '11:30 AM', items: 12, total: 4500, status: 'Completed' },
  { id: 'TXN-1043', time: '11:12 AM', items: 1, total: 450, status: 'Completed' },
  { id: 'TXN-1042', time: '10:45 AM', items: 4, total: 1250, status: 'Completed' },
];

export default function Dashboard() {
  return (
    <div className="container animate-fade-in py-4">
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Store Dashboard</h1>
        <p className="text-secondary">Overview of your store's sales and performance.</p>
      </div>

      {/* Top Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="card p-6">
          <div className="flex items-center gap-4 mb-4">
            <div style={{ padding: '12px', borderRadius: '12px', backgroundColor: 'rgba(59, 130, 246, 0.1)', color: 'var(--accent-color)' }}>
              <DollarSign size={24} />
            </div>
            <div>
              <p className="text-secondary text-sm">Today's Sales</p>
              <h3 className="text-2xl font-bold">Rs 24,500</h3>
            </div>
          </div>
          <div className="flex items-center gap-1 text-success text-sm font-medium">
            <TrendingUp size={16} />
            <span>+14.5% from yesterday</span>
          </div>
        </div>

        <div className="card p-6">
          <div className="flex items-center gap-4 mb-4">
            <div style={{ padding: '12px', borderRadius: '12px', backgroundColor: 'rgba(16, 185, 129, 0.1)', color: 'var(--success)' }}>
              <ShoppingCart size={24} />
            </div>
            <div>
              <p className="text-secondary text-sm">Total Orders</p>
              <h3 className="text-2xl font-bold">142</h3>
            </div>
          </div>
          <div className="flex items-center gap-1 text-success text-sm font-medium">
            <TrendingUp size={16} />
            <span>+8% from yesterday</span>
          </div>
        </div>

        <div className="card p-6">
          <div className="flex items-center gap-4 mb-4">
            <div style={{ padding: '12px', borderRadius: '12px', backgroundColor: 'rgba(139, 92, 246, 0.1)', color: '#8B5CF6' }}>
              <Package size={24} />
            </div>
            <div>
              <p className="text-secondary text-sm">Avg. Order Value</p>
              <h3 className="text-2xl font-bold">Rs 172</h3>
            </div>
          </div>
          <div className="flex items-center gap-1 text-secondary text-sm font-medium">
            <TrendingUp size={16} className="text-success" />
            <span>Steady performance</span>
          </div>
        </div>

        <div className="card p-6 border-l-4" style={{ borderLeftColor: 'var(--danger)' }}>
          <div className="flex items-center gap-4 mb-4">
            <div style={{ padding: '12px', borderRadius: '12px', backgroundColor: 'rgba(239, 68, 68, 0.1)', color: 'var(--danger)' }}>
              <AlertTriangle size={24} />
            </div>
            <div>
              <p className="text-secondary text-sm">Low Stock Items</p>
              <h3 className="text-2xl font-bold">8</h3>
            </div>
          </div>
          <div className="flex items-center gap-1 text-danger text-sm font-medium">
            <TrendingDown size={16} />
            <span>Needs immediate restocking</span>
          </div>
        </div>
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        {/* Main Revenue Chart */}
        <div className="card p-6 lg:col-span-2" style={{ height: '400px', display: 'flex', flexDirection: 'column' }}>
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-bold text-lg">Weekly Revenue Trend</h3>
            <select className="input" style={{ padding: '4px 8px', fontSize: '14px', height: 'auto' }}>
              <option>This Week</option>
              <option>Last Week</option>
              <option>This Month</option>
            </select>
          </div>
          <div style={{ flex: 1, width: '100%', minHeight: 0 }}>
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={weeklyData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="var(--accent-color)" stopOpacity={0.4}/>
                    <stop offset="95%" stopColor="var(--accent-color)" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="var(--border-color)" />
                <XAxis dataKey="name" stroke="var(--text-secondary)" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis stroke="var(--text-secondary)" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(value) => `Rs ${value/1000}k`} />
                <Tooltip 
                  contentStyle={{ backgroundColor: 'var(--bg-elevated)', borderRadius: '8px', border: '1px solid var(--border-color)', color: 'var(--text-primary)' }}
                  itemStyle={{ color: 'var(--accent-color)', fontWeight: 'bold' }}
                  cursor={{ stroke: 'var(--border-color)', strokeWidth: 1, strokeDasharray: '3 3' }}
                />
                <Area type="monotone" dataKey="revenue" stroke="var(--accent-color)" strokeWidth={3} fillOpacity={1} fill="url(#colorRevenue)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Sales by Category Pie Chart */}
        <div className="card p-6" style={{ height: '400px', display: 'flex', flexDirection: 'column' }}>
          <h3 className="font-bold text-lg mb-2">Sales by Category</h3>
          <p className="text-secondary text-sm mb-4">Distribution of revenue across departments</p>
          <div style={{ flex: 1, width: '100%', minHeight: 0 }}>
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={categoryData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={100}
                  paddingAngle={5}
                  dataKey="value"
                  stroke="none"
                >
                  {categoryData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip 
                  formatter={(value) => `Rs ${value}`}
                  contentStyle={{ backgroundColor: 'var(--bg-elevated)', borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}
                />
                <Legend verticalAlign="bottom" height={36} iconType="circle" />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Recent Transactions Table */}
      <div className="card">
        <div className="p-6 border-b" style={{ borderColor: 'var(--border-color)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h3 className="font-bold text-lg flex items-center gap-2">
            <Clock size={20} className="text-secondary" /> Recent Transactions
          </h3>
          <button className="btn btn-ghost text-sm">View All</button>
        </div>
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
            <thead className="bg-elevated text-secondary text-sm">
              <tr>
                <th className="p-4 font-medium">Transaction ID</th>
                <th className="p-4 font-medium">Time</th>
                <th className="p-4 font-medium">Items</th>
                <th className="p-4 font-medium">Total Amount</th>
                <th className="p-4 font-medium">Status</th>
              </tr>
            </thead>
            <tbody>
              {recentTransactions.map((txn, idx) => (
                <tr key={txn.id} style={{ borderBottom: idx === recentTransactions.length - 1 ? 'none' : '1px solid var(--border-color)' }}>
                  <td className="p-4 font-medium">{txn.id}</td>
                  <td className="p-4 text-secondary">{txn.time}</td>
                  <td className="p-4">{txn.items} items</td>
                  <td className="p-4 font-bold">Rs {txn.total}</td>
                  <td className="p-4">
                    <span 
                      style={{ 
                        padding: '4px 12px', 
                        borderRadius: '20px', 
                        fontSize: '12px', 
                        fontWeight: 'bold',
                        backgroundColor: txn.status === 'Completed' ? 'rgba(16, 185, 129, 0.1)' : 'rgba(239, 68, 68, 0.1)',
                        color: txn.status === 'Completed' ? 'var(--success)' : 'var(--danger)'
                      }}
                    >
                      {txn.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
