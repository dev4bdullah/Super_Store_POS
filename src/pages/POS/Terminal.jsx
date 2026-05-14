import { useState, useEffect } from 'react';
import { Search, ShoppingCart, Minus, Plus, Trash2, Maximize, Printer, LogOut } from 'lucide-react';
import Receipt from './Receipt';

export default function Terminal({ onLogout }) {
  const [cart, setCart] = useState([]);
  const [cashReceived, setCashReceived] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  // Store Settings
  const [storeSettings, setStoreSettings] = useState({
    name: 'Al-Madina Super Store',
    address: '123 Main Market Road, Faisalabad',
    phone: '+92 300 1234567',
    logo: null
  });

  useEffect(() => {
    const savedName = localStorage.getItem('pos_storeName');
    const savedAddress = localStorage.getItem('pos_storeAddress');
    const savedPhone = localStorage.getItem('pos_storePhone');
    const savedLogo = localStorage.getItem('pos_logo');

    setStoreSettings({
      name: savedName || 'Al-Madina Super Store',
      address: savedAddress || '123 Main Market Road, Faisalabad',
      phone: savedPhone || '+92 300 1234567',
      logo: savedLogo || null
    });
  }, []);

  // Custom Item State
  const [showCustomModal, setShowCustomModal] = useState(false);
  const [customItem, setCustomItem] = useState({ name: '', price: '', image: null });

  // Mock Products
  const [products, setProducts] = useState([
    { id: '1', name: 'Lipton Yellow Label 250g', price: 450, icon: '🍵' },
    { id: '2', name: 'Nestle Milkpak 1L', price: 290, icon: '🥛' },
    { id: '3', name: 'Mezan Cooking Oil 1L', price: 560, icon: '🛢️' },
    { id: '4', name: 'Surf Excel 1kg', price: 680, icon: '🧼' },
    { id: '5', name: 'Coca Cola 1.5L', price: 180, icon: '🥤' },
    { id: '6', name: 'Super Crisp Chips', price: 50, icon: '🥔' },
    { id: '7', name: 'Daily Bread', price: 120, icon: '🍞' },
    { id: '8', name: 'Local Eggs Dozen', price: 400, icon: '🥚' },
    { id: '9', name: 'Panadol 500mg', price: 40, icon: '💊' },
    { id: '10', name: 'Brufen 400mg', price: 80, icon: '💊' },
    { id: '11', name: 'Dettol Soap 115g', price: 110, icon: '🧼' },
    { id: '12', name: 'Colgate Toothpaste', price: 150, icon: '🪥' },
    { id: '13', name: 'Tapal Danedar 400g', price: 750, icon: '☕' },
    { id: '14', name: 'National Ketchup', price: 320, icon: '🍅' },
    { id: '15', name: 'Shan Biryani Masala', price: 100, icon: '🌶️' },
    { id: '16', name: "Mitchell's Chilli Garlic 800g", price: 350, icon: '🥫' },
    { id: '17', name: "Mitchell's Jam 450g", price: 400, icon: '🍓' },
    { id: '18', name: 'Dawn Bread Large', price: 150, icon: '🍞' },
    { id: '19', name: 'Adams Cheese 200g', price: 450, icon: '🧀' },
    { id: '20', name: 'Blue Band Margarine 250g', price: 280, icon: '🧈' },
    { id: '21', name: 'Nurpur Butter 200g', price: 450, icon: '🧈' },
    { id: '22', name: 'Nestle Fruita Vitals 1L', price: 260, icon: '🧃' },
    { id: '23', name: 'Sprite 1.5L', price: 180, icon: '🥤' },
    { id: '24', name: 'Pepsi 1.5L', price: 180, icon: '🥤' },
    { id: '25', name: '7UP 1.5L', price: 180, icon: '🥤' },
    { id: '26', name: 'Rooh Afza 800ml', price: 450, icon: '🍷' },
    { id: '27', name: 'Dalda Banaspati 1kg', price: 550, icon: '🛢️' },
    { id: '28', name: 'Habib Cooking Oil 1L', price: 560, icon: '🛢️' },
    { id: '29', name: 'Lux Soap 115g', price: 90, icon: '🧼' },
    { id: '30', name: 'Safeguard Soap 115g', price: 110, icon: '🧼' },
    { id: '31', name: 'Lifebuoy Soap 115g', price: 85, icon: '🧼' },
    { id: '32', name: 'Head & Shoulders 185ml', price: 450, icon: '🧴' },
    { id: '33', name: 'Sunsilk Shampoo 185ml', price: 350, icon: '🧴' },
    { id: '34', name: 'Ariel Washing Powder 1kg', price: 650, icon: '🧼' },
    { id: '35', name: 'Vim Dishwash Liquid 500ml', price: 280, icon: '🧽' },
    { id: '36', name: 'Lemon Max Bar', price: 60, icon: '🧽' },
    { id: '37', name: 'Harpic Toilet Cleaner 500ml', price: 250, icon: '🚽' },
    { id: '38', name: 'Rose Petal Tissue', price: 200, icon: '🧻' },
    { id: '39', name: 'Pampers Diapers Size 4', price: 2500, icon: '👶' },
    { id: '40', name: "Johnson's Baby Powder", price: 400, icon: '🍼' },
    { id: '41', name: 'Peak Freans Sooper', price: 50, icon: '🍪' },
    { id: '42', name: 'LU Prince Biscuits', price: 40, icon: '🍪' },
    { id: '43', name: 'TUC Biscuits', price: 30, icon: '🥨' },
    { id: '44', name: "Lay's French Cheese", price: 50, icon: '🥔' },
    { id: '45', name: 'Kurkure Chutney Chaska', price: 50, icon: '🌶️' },
    { id: '46', name: 'National Iodized Salt 800g', price: 60, icon: '🧂' },
    { id: '47', name: "Mitchell's Vinegar 800ml", price: 150, icon: '🍾' },
    { id: '48', name: "Young's Mayonnaise 500ml", price: 450, icon: '🥚' },
    { id: '49', name: 'Knorr Chicken Cubes', price: 80, icon: '🍲' },
    { id: '50', name: 'Knorr Noodles Chatpata', price: 60, icon: '🍜' }
  ]);

  const addToCart = (product) => {
    setCart(prev => {
      const existing = prev.find(p => p.id === product.id);
      if (existing) {
        return prev.map(p => p.id === product.id ? { ...p, qty: p.qty + 1 } : p);
      }
      return [...prev, { ...product, qty: 1 }];
    });
  };

  const updateQty = (id, delta) => {
    setCart(prev => prev.map(p => {
      if (p.id === id) {
        const newQty = Math.max(1, p.qty + delta);
        return { ...p, qty: newQty };
      }
      return p;
    }));
  };

  const removeFromCart = (id) => {
    setCart(prev => prev.filter(p => p.id !== id));
  };

  const total = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
  const change = cashReceived ? parseInt(cashReceived) - total : 0;

  const handlePrint = () => {
    window.print();
  };

  const handleCheckout = () => {
    handlePrint();
    // In a real app we'd save to DB here
    setTimeout(() => {
      setCart([]);
      setCashReceived('');
      alert("Transaction saved successfully!");
    }, 1000);
  };

  const handleAddCustomItem = () => {
    if (!customItem.name || !customItem.price) return;

    const newItem = {
      id: `custom_${Date.now()}`,
      name: customItem.name,
      price: parseInt(customItem.price),
      icon: '📦',
    };

    setProducts(prev => [newItem, ...prev]);
    setShowCustomModal(false);
    setCustomItem({ name: '', price: '', image: null });
  };

  const filteredProducts = products.filter(p => 
    p.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="terminal-layout" style={{ display: 'flex', height: '100vh', overflow: 'hidden' }}>

      {/* Receipt Component (Hidden unless printing) */}
      <Receipt 
        cart={cart} 
        total={total} 
        cashReceived={cashReceived} 
        change={change} 
        show={true} 
        logoUrl={storeSettings.logo}
        storeName={storeSettings.name}
        storeAddress={storeSettings.address}
        storePhone={storeSettings.phone}
      />

      {/* Main Terminal Area */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', padding: '1rem', overflowY: 'auto' }}>

        {/* Header Options */}
        <div className="flex justify-between items-center mb-4">
          <div style={{ position: 'relative', width: '250px' }}>
            <Search size={16} className="text-secondary" style={{ position: 'absolute', left: 10, top: 10 }} />
            <input 
              type="text" 
              className="input" 
              placeholder="Search product..." 
              style={{ paddingLeft: '2rem', height: '40px' }} 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div className="flex gap-2">
            <button
              className="btn btn-primary"
              style={{ borderRadius: '50%', width: '48px', height: '48px', padding: 0 }}
              onClick={() => setShowCustomModal(true)}
              title="Add Custom Item"
            >
              <Plus size={24} />
            </button>
            <button
              className="btn btn-danger btn-ghost"
              style={{ borderRadius: '50%', width: '48px', height: '48px', padding: 0 }}
              onClick={onLogout}
              title="Logout"
            >
              <LogOut size={24} />
            </button>
          </div>
        </div>



        {/* Custom Item Modal */}
        {showCustomModal && (
          <div className="card mb-4 animate-slide-up p-4 border" style={{ borderColor: 'var(--accent-color)', background: 'var(--bg-elevated)' }}>
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-bold">Add Custom Item</h3>
              <button className="btn btn-ghost text-sm" onClick={() => setShowCustomModal(false)}>Close</button>
            </div>

            <div className="grid gap-3">
              <input
                type="text"
                className="input"
                placeholder="Item Name"
                value={customItem.name}
                onChange={(e) => setCustomItem({ ...customItem, name: e.target.value })}
              />
              <input
                type="number"
                className="input"
                placeholder="Price (PKR)"
                value={customItem.price}
                onChange={(e) => setCustomItem({ ...customItem, price: e.target.value })}
              />



              <button
                className="btn btn-primary mt-2"
                onClick={handleAddCustomItem}
                disabled={!customItem.name || !customItem.price}
              >
                Add to Items
              </button>
            </div>
          </div>
        )}

        {/* Product Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))', gap: '12px', flex: 1, alignContent: 'start', paddingBottom: '20px' }}>
          {filteredProducts.map(p => (
            <div
              key={p.id}
              className="card"
              style={{ padding: '1rem', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', textAlign: 'center', height: '120px' }}
              onClick={() => addToCart(p)}
            >
              {p.imageUrl ? (
                <img src={p.imageUrl} alt={p.name} style={{ width: '48px', height: '48px', objectFit: 'cover', borderRadius: '8px', marginBottom: '8px' }} />
              ) : (
                <span style={{ fontSize: '32px', marginBottom: '8px' }}>{p.icon}</span>
              )}
              <span className="font-bold text-sm line-clamp-1">{p.name}</span>
              <span className="text-accent text-xs font-bold">Rs {p.price}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Cart Sidebar */}
      <div className="glass-panel" style={{ width: '350px', borderLeft: '1px solid var(--border-color)', display: 'flex', flexDirection: 'column' }}>
        <div className="p-4 border-b" style={{ borderColor: 'var(--border-color)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h2 className="font-bold flex items-center gap-2">
            <ShoppingCart size={20} /> Current Billing
          </h2>
          <span className="text-secondary text-sm">{cart.length} items</span>
        </div>

        {/* Cart Items */}
        <div style={{ flex: 1, overflowY: 'auto', padding: '1rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {cart.length === 0 ? (
            <div style={{ margin: 'auto', textAlign: 'center', color: 'var(--text-secondary)' }}>
              <ShoppingCart size={48} style={{ margin: '0 auto 1rem', opacity: 0.2 }} />
              <p>Cart is empty</p>
              <p className="text-sm">Scan a product or tap from grid</p>
            </div>
          ) : (
            cart.map(item => (
              <div key={item.id} className="flex justify-between items-center bg-secondary p-2 rounded-md border" style={{ borderColor: 'var(--border-color)' }}>
                <div style={{ flex: 1, display: 'flex', gap: '8px', alignItems: 'center' }}>
                  {item.imageUrl ? (
                    <img src={item.imageUrl} alt={item.name} style={{ width: '32px', height: '32px', objectFit: 'cover', borderRadius: '4px' }} />
                  ) : (
                    <span style={{ fontSize: '24px' }}>{item.icon}</span>
                  )}
                  <div>
                    <p className="font-bold text-sm" style={{ marginBottom: '4px' }}>{item.name}</p>
                    <p className="text-accent text-xs">Rs {item.price} x {item.qty} = Rs {item.price * item.qty}</p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button className="btn btn-ghost" style={{ padding: '4px', borderRadius: '50%' }} onClick={() => updateQty(item.id, -1)}>
                    <Minus size={14} />
                  </button>
                  <span className="font-bold text-sm">{item.qty}</span>
                  <button className="btn btn-ghost" style={{ padding: '4px', borderRadius: '50%' }} onClick={() => updateQty(item.id, 1)}>
                    <Plus size={14} />
                  </button>
                  <button className="btn btn-ghost text-danger" style={{ padding: '4px', marginLeft: '4px' }} onClick={() => removeFromCart(item.id)}>
                    <Trash2 size={16} />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Checkout Section */}
        <div className="p-4" style={{ background: 'var(--bg-elevated)', borderTop: '1px solid var(--border-color)' }}>
          <div className="flex justify-between items-center mb-2">
            <span className="text-secondary">Total</span>
            <span className="text-2xl font-bold">Rs {total}</span>
          </div>

          <div className="mb-4">
            <label className="text-xs text-secondary mb-1 block">Cash Received (PKR)</label>
            <input
              type="number"
              className="input"
              placeholder="0"
              value={cashReceived}
              onChange={(e) => setCashReceived(e.target.value)}
              style={{ fontSize: '18px', fontWeight: 'bold' }}
            />
          </div>

          {cashReceived && parseInt(cashReceived) >= total && (
            <div className="flex justify-between items-center mb-4 p-2 rounded bg-success" style={{ color: 'white' }}>
              <span className="text-sm">Change to Return</span>
              <span className="font-bold">Rs {change}</span>
            </div>
          )}

          <button
            className="btn btn-primary"
            style={{ width: '100%', height: '54px', fontSize: '18px' }}
            disabled={cart.length === 0}
            onClick={handleCheckout}
          >
            <Printer size={20} /> Print & Checkout
          </button>
        </div>
      </div>

      {/* Mobile specific styling */}
      <style>{`
        @media (max-width: 768px) {
          .terminal-layout {
            flex-direction: column !important;
            height: auto !important;
            overflow: auto !important;
          }
          .terminal-layout > div[style*="flex: 1"] {
            overflow-y: visible !important;
          }
          .glass-panel {
            position: static !important;
            width: 100% !important;
            min-height: 400px;
            border-left: none !important;
            border-top: 1px solid var(--border-color) !important;
            transform: none !important;
          }
        }
      `}</style>
    </div>
  );
}
