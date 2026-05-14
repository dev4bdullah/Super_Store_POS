import { TrendingUp, TrendingDown, DollarSign } from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const weeklyData = [
  { name: 'Mon', revenue: 15400 },
  { name: 'Tue', revenue: 12000 },
  { name: 'Wed', revenue: 18500 },
  { name: 'Thu', revenue: 21000 },
  { name: 'Fri', revenue: 19500 },
  { name: 'Sat', revenue: 28000 },
  { name: 'Sun', revenue: 24500 }
];

export default function Dashboard() {
  return (
    <div className="container animate-fade-in py-4">
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Store Dashboard</h1>
        <p className="text-secondary">Overview of today's sales and performance.</p>
      </div>

      <div className="grid grid-cols-3 gap-6 mb-8">
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
          <div className="flex items-center gap-1 text-success text-sm">
            <TrendingUp size={16} />
            <span>+14.5% from yesterday</span>
          </div>
        </div>

        <div className="card p-6">
          <div className="flex items-center gap-4 mb-4">
            <div style={{ padding: '12px', borderRadius: '12px', backgroundColor: 'rgba(16, 185, 129, 0.1)', color: 'var(--success)' }}>
              <DollarSign size={24} />
            </div>
            <div>
              <p className="text-secondary text-sm">Total Transactions</p>
              <h3 className="text-2xl font-bold">142</h3>
            </div>
          </div>
          <div className="flex items-center gap-1 text-success text-sm">
            <TrendingUp size={16} />
            <span>+8% from yesterday</span>
          </div>
        </div>

        <div className="card p-6">
          <div className="flex items-center gap-4 mb-4">
            <div style={{ padding: '12px', borderRadius: '12px', backgroundColor: 'rgba(239, 68, 68, 0.1)', color: 'var(--danger)' }}>
              <DollarSign size={24} />
            </div>
            <div>
              <p className="text-secondary text-sm">Refunds/Returns</p>
              <h3 className="text-2xl font-bold">Rs 850</h3>
            </div>
          </div>
          <div className="flex items-center gap-1 text-danger text-sm">
            <TrendingDown size={16} />
            <span>2 returns today</span>
          </div>
        </div>
      </div>

      <div className="card p-6" style={{ height: '350px', display: 'flex', flexDirection: 'column' }}>
        <h3 className="font-bold mb-4">Weekly Revenue</h3>
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
    </div>
  );
}
