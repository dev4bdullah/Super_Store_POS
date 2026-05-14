import { useState, useRef, useEffect } from 'react';
import { Store, Image as ImageIcon, Printer } from 'lucide-react';
import Receipt from '../POS/Receipt';

export default function Settings() {
  const [storeName, setStoreName] = useState('Al-Madina Super Store');
  const [storeAddress, setStoreAddress] = useState('123 Main Market Road, Near Clock Tower, Faisalabad');
  const [storePhone, setStorePhone] = useState('+92 300 1234567');
  const [logoUrl, setLogoUrl] = useState(null);
  const fileInputRef = useRef(null);

  useEffect(() => {
    const savedName = localStorage.getItem('pos_storeName');
    const savedAddress = localStorage.getItem('pos_storeAddress');
    const savedPhone = localStorage.getItem('pos_storePhone');
    const savedLogo = localStorage.getItem('pos_logo');

    if (savedName) setStoreName(savedName);
    if (savedAddress) setStoreAddress(savedAddress);
    if (savedPhone) setStorePhone(savedPhone);
    if (savedLogo) setLogoUrl(savedLogo);
  }, []);

  const handleLogoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 2 * 1024 * 1024) {
        alert("File size exceeds 2MB maximum.");
        return;
      }

      const reader = new FileReader();
      reader.onloadend = () => {
        setLogoUrl(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = () => {
    localStorage.setItem('pos_storeName', storeName);
    localStorage.setItem('pos_storeAddress', storeAddress);
    localStorage.setItem('pos_storePhone', storePhone);
    if (logoUrl) {
      localStorage.setItem('pos_logo', logoUrl);
    } else {
      localStorage.removeItem('pos_logo');
    }
    alert("Settings saved successfully!");
  };

  const testCart = [
    { name: 'Store Logo Setup Fee', qty: 1, price: 0 },
    { name: 'Premium POS Experience', qty: 1, price: 0 }
  ];

  return (
    <div className="container animate-fade-in py-4" style={{ maxWidth: '800px' }}>
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Store Settings</h1>
        <p className="text-secondary">Configure your store information and receipts.</p>
      </div>

      <div className="card p-6 mb-6">
        <h2 className="text-lg font-bold flex items-center gap-2 mb-4">
          <Store size={20} className="text-accent" /> Store Details
        </h2>

        <div className="grid gap-4">
          <div>
            <label className="text-sm font-medium mb-2 block">Store Name</label>
            <input
              type="text"
              className="input"
              value={storeName}
              onChange={(e) => setStoreName(e.target.value)}
            />
          </div>
          <div>
            <label className="text-sm font-medium mb-2 block">Address</label>
            <textarea
              className="input"
              rows="3"
              value={storeAddress}
              onChange={(e) => setStoreAddress(e.target.value)}
            ></textarea>
          </div>
          <div>
            <label className="text-sm font-medium mb-2 block">Contact Number</label>
            <input
              type="tel"
              className="input"
              value={storePhone}
              onChange={(e) => setStorePhone(e.target.value)}
            />
          </div>
        </div>
      </div>

      <div className="card p-6 mb-6">
        <h2 className="text-lg font-bold flex items-center gap-2 mb-4">
          <ImageIcon size={20} className="text-accent" /> Receipt Logo
        </h2>
        <p className="text-secondary text-sm mb-4">This logo will be printed on all your customer receipts.</p>

        <div className="flex items-center gap-6">
          <div style={{ width: 100, height: 100, borderRadius: '50%', backgroundColor: 'var(--bg-elevated)', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px dashed var(--border-color)', overflow: 'hidden' }}>
            {logoUrl ? (
              <img src={logoUrl} alt="Store Logo" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            ) : (
              <span className="text-xl font-bold text-secondary">AM</span>
            )}
          </div>
          <div>
            <input
              type="file"
              accept="image/png, image/jpeg"
              ref={fileInputRef}
              style={{ display: 'none' }}
              onChange={handleLogoUpload}
            />
            <button
              className="btn btn-outline"
              style={{ border: '1px solid var(--border-color)', marginBottom: '8px' }}
              onClick={() => fileInputRef.current?.click()}
            >
              Upload New Logo
            </button>
            <p className="text-xs text-secondary">Max size: 2MB (JPG, PNG)</p>
          </div>
        </div>
      </div>

      <div className="card p-6 mb-6">
        <h2 className="text-lg font-bold flex items-center gap-2 mb-4">
          <Printer size={20} className="text-accent" /> Printer Connectivity
        </h2>
        <p className="text-secondary text-sm mb-4">Connect thermal printers for receipts. The browser's native print works with USB, Wi-Fi, and Bluetooth thermal printers.</p>

        <button className="btn btn-primary" onClick={() => window.print()}>Test Print Receipt</button>
      </div>

      {/* Hidden receipt used for the test print */}
      <Receipt
        cart={testCart}
        total={0}
        cashReceived={0}
        change={0}
        show={true}
        logoUrl={logoUrl}
        storeName={storeName}
        storeAddress={storeAddress}
        storePhone={storePhone}
      />

      <div className="flex justify-end gap-2">
        <button className="btn btn-ghost" onClick={() => {
          setLogoUrl(null);
          // Resets other fields to defaults in real app
        }}>Cancel</button>
        <button className="btn btn-primary" onClick={handleSave}>Save Changes</button>
      </div>
    </div>
  );
}
