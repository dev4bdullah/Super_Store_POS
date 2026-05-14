import { useState } from 'react';
import { User, Lock, AlertCircle } from 'lucide-react';
import Logo from '../../components/Logo';

export default function Login({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const mockCredentials = [
    { u: 'admin', p: 'admin123', role: 'superadmin' },
    { u: 'shop', p: 'shop123', role: 'shop' },
    { u: 'pos', p: 'pos123', role: 'salesman' }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    // Simulate API delay
    setTimeout(() => {
      const match = mockCredentials.find(c => c.u === username && c.p === password);
      
      if (match) {
        onLogin(match.role);
      } else {
        setError('Invalid username or password');
        setIsLoading(false);
      }
    }, 800);
  };

  return (
    <div className="flex items-center justify-center login-bg" style={{ minHeight: '100vh', padding: '20px' }}>
      <div className="login-glass-card" style={{ width: '100%', maxWidth: '400px', padding: '40px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        
        <div style={{ width: '100%', textAlign: 'center', marginBottom: '32px' }}>
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '16px' }}>
            <Logo width="160px" />
          </div>
          <h2 style={{ fontSize: '20px', fontWeight: '700', marginBottom: '4px', color: 'var(--text-primary)' }}>Login to your account</h2>
          <p style={{ fontSize: '12px', color: 'var(--text-secondary)', fontWeight: '500' }}>Please sign in to your workspace.</p>
        </div>

        {error && (
          <div style={{ width: '100%', display: 'flex', alignItems: 'center', gap: '12px', padding: '16px', marginBottom: '24px', borderRadius: '12px', backgroundColor: 'rgba(239, 68, 68, 0.1)', border: '1px solid rgba(239, 68, 68, 0.2)', color: 'var(--danger)' }}>
            <AlertCircle size={20} />
            <span style={{ fontSize: '14px', fontWeight: '500' }}>{error}</span>
          </div>
        )}

        <form onSubmit={handleSubmit} style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div style={{ position: 'relative', width: '100%' }}>
            <div style={{ position: 'absolute', left: '16px', top: '0', bottom: '0', display: 'flex', alignItems: 'center', color: 'var(--text-secondary)' }}>
              <User size={18} />
            </div>
            <input
              type="text"
              className="input"
              placeholder="Username"
              style={{ width: '100%', paddingLeft: '48px', height: '52px', borderRadius: '12px', fontSize: '16px' }}
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>

          <div style={{ width: '100%' }}>
            <input
              type="password"
              className="input"
              placeholder="Password"
              style={{ width: '100%', paddingLeft: '16px', height: '52px', borderRadius: '12px', fontSize: '16px' }}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button 
            type="submit"
            className="btn btn-primary"
            style={{ width: '100%', height: '52px', borderRadius: '12px', fontSize: '16px', fontWeight: '600', marginTop: '8px' }}
            disabled={isLoading}
          >
            {isLoading ? 'Signing in...' : 'Sign In'}
          </button>
        </form>
        
      </div>
    </div>
  );
}
