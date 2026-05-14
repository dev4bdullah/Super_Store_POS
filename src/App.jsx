import { useState } from 'react';
import { useLocation, NavLink, Link, Navigate, Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import { Store, ShoppingCart, User, Settings as SettingsIcon, LogOut } from 'lucide-react';
import Logo from './components/Logo';
import './App.css';

// Pages
import Admin from './pages/Admin/Admin';
import Dashboard from './pages/Shop/Dashboard';
import Inventory from './pages/Shop/Inventory';
import Settings from './pages/Shop/Settings';
import Terminal from './pages/POS/Terminal';
import Login from './pages/Auth/Login';

const Layout = ({ children, role, onLogout }) => {
  const location = useLocation();
  const isPosPage = location.pathname === '/pos';

  const NavItem = ({ to, icon: Icon, label, end = false }) => (
    <NavLink 
      to={to} 
      end={end}
      className={({ isActive }) => `btn sidebar-link ${isActive ? 'active' : 'btn-ghost'}`}
      style={{ justifyContent: 'flex-start' }}
    >
      <Icon size={18} /> {label}
    </NavLink>
  );

  return (
    <div className="app-layout">
      {/* Sidebar Navigation */}
      <nav className="glass-panel no-print" style={{ 
        position: 'fixed', top: 0, left: 0, bottom: 0, width: '250px', 
        padding: '1.5rem 1rem', display: 'flex', flexDirection: 'column',
        zIndex: 50,
        // For Salesman on POS page, we hide the sidebar
        display: (role === 'salesman' && isPosPage) ? 'none' : 'flex'
      }}>
        <div className="mb-6">
          <Logo width="160px" />
        </div>
        
        <div className="text-xs font-bold text-secondary mb-4 uppercase tracking-wider pl-4">
          {role === 'superadmin' ? 'Super Admin' : role === 'shop' ? 'Shop Owner' : 'Salesman'}
        </div>

        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          {role === 'superadmin' && (
            <NavItem to="/admin" icon={User} label="Subscriptions" />
          )}
          
          {role === 'shop' && (
            <>
              <NavItem to="/shop" icon={Store} label="Dashboard" end={true} />
              <NavItem to="/shop/inventory" icon={Store} label="Inventory" />
              <NavItem to="/shop/settings" icon={SettingsIcon} label="Settings" />
            </>
          )}

          {/* Both Shop Owner and Salesman can access POS */}
          {(role === 'shop' || role === 'salesman') && !isPosPage && (
            <div style={{ marginTop: 'auto', marginBottom: '8px' }}>
              <Link to="/pos" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                <ShoppingCart size={18} /> Launch POS
              </Link>
            </div>
          )}
          
          <button onClick={onLogout} className="btn btn-danger btn-ghost" style={{ justifyContent: 'flex-start', marginTop: (role === 'superadmin' || isPosPage) ? 'auto' : 0 }}>
            <LogOut size={18} /> Logout
          </button>
        </div>
      </nav>

      {/* Main Content Area */}
      <main style={{ 
        marginLeft: (role === 'salesman' && isPosPage) ? '0' : '250px', 
        minHeight: '100vh', 
        background: 'var(--bg-primary)',
        transition: 'margin-left 0.3s ease'
      }}>
        {children}
      </main>
      
      {/* Mobile nav indicator - simplified for mockup */}
      <style>{`
        @media (max-width: 768px) {
          nav.glass-panel {
            transform: translateX(-100%);
          }
          main {
            margin-left: 0 !important;
          }
        }
      `}</style>
    </div>
  );
};

// Top level routing
function App() {
  const [userRole, setUserRole] = useState(null); // 'superadmin', 'shop', 'salesman', or null

  const handleLogin = (role) => {
    setUserRole(role);
  };

  const handleLogout = () => {
    setUserRole(null);
  };

  // Guard components
  const RequireAuth = ({ roleRequired, children }) => {
    if (!userRole) return <Navigate to="/login" replace />;
    
    // Check if the route allows the user's role
    const hasAccess = 
      (roleRequired === 'superadmin' && userRole === 'superadmin') ||
      (roleRequired === 'shop' && userRole === 'shop') ||
      (roleRequired === 'pos' && (userRole === 'shop' || userRole === 'salesman'));
      
    if (!hasAccess) {
      // Redirect to their default page based on role if they try to access something forbidden
      if (userRole === 'superadmin') return <Navigate to="/admin" replace />;
      if (userRole === 'shop') return <Navigate to="/shop" replace />;
      if (userRole === 'salesman') return <Navigate to="/pos" replace />;
    }
    
    return children;
  };

  return (
    <Router>
      <Routes>
        <Route path="/login" element={
          userRole ? (
            // If already logged in, redirect to correct dashboard
            userRole === 'superadmin' ? <Navigate to="/admin" replace /> :
            userRole === 'shop' ? <Navigate to="/shop" replace /> :
            <Navigate to="/pos" replace />
          ) : (
            <Login onLogin={handleLogin} />
          )
        } />

        <Route path="/" element={<Navigate to={userRole ? `/${userRole === 'superadmin' ? 'admin' : userRole === 'shop' ? 'shop' : 'pos'}` : '/login'} replace />} />
        
        <Route path="/admin/*" element={
          <RequireAuth roleRequired="superadmin">
            <Layout role={userRole} onLogout={handleLogout}>
              <Routes>
                <Route path="/" element={<Admin />} />
                <Route path="*" element={<Navigate to="/admin" replace />} />
              </Routes>
            </Layout>
          </RequireAuth>
        } />
        
        <Route path="/shop/*" element={
          <RequireAuth roleRequired="shop">
            <Layout role={userRole} onLogout={handleLogout}>
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/inventory" element={<Inventory />} />
                <Route path="/settings" element={<Settings />} />
                <Route path="*" element={<Navigate to="/shop" replace />} />
              </Routes>
            </Layout>
          </RequireAuth>
        } />
        
        <Route path="/pos" element={
          <RequireAuth roleRequired="pos">
            <Layout role={userRole} onLogout={handleLogout}>
              <Terminal onLogout={handleLogout} />
            </Layout>
          </RequireAuth>
        } />
        
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
