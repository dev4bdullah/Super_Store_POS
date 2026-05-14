export default function Receipt({ cart, total, cashReceived, change, show, logoUrl, storeName, storeAddress, storePhone }) {
  if (!show) return null;

  return (
    <div className="receipt-container no-print-hide">
      <div className="receipt-content">
        <div style={{ textAlign: 'center', marginBottom: '20px' }}>
          <div style={{ width: '60px', height: '60px', borderRadius: '50%', border: '2px solid black', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 10px', overflow: 'hidden' }}>
            {logoUrl ? (
              <img src={logoUrl} alt="Store Logo" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            ) : (
              <span style={{ fontSize: '24px', fontWeight: 'bold' }}>AM</span>
            )}
          </div>
          <h2 style={{ fontSize: '18px', margin: '0 0 5px 0' }}>{storeName || 'Al-Madina Super Store'}</h2>
          <p style={{ fontSize: '12px', margin: '0', color: '#666' }}>{storeAddress || '123 Main Market Road, Faisalabad'}</p>
          <p style={{ fontSize: '12px', margin: '5px 0 10px 0', color: '#666' }}>Phone: {storePhone || '+92 300 1234567'}</p>
          <p style={{ fontSize: '12px', margin: '0' }}>Date: {new Date().toLocaleString()}</p>
        </div>

        <div style={{ borderBottom: '1px dashed black', margin: '15px 0' }}></div>

        <table style={{ width: '100%', fontSize: '14px', marginBottom: '15px' }}>
          <thead>
            <tr style={{ textAlign: 'left' }}>
              <th style={{ paddingBottom: '10px' }}>Item</th>
              <th style={{ paddingBottom: '10px', textAlign: 'center' }}>Qty</th>
              <th style={{ paddingBottom: '10px', textAlign: 'right' }}>Price</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item, idx) => (
              <tr key={idx}>
                <td style={{ paddingBottom: '5px' }}>{item.name}</td>
                <td style={{ paddingBottom: '5px', textAlign: 'center' }}>{item.qty}</td>
                <td style={{ paddingBottom: '5px', textAlign: 'right' }}>Rs {item.price * item.qty}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div style={{ borderBottom: '1px dashed black', margin: '15px 0' }}></div>

        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '16px', fontWeight: 'bold', marginBottom: '5px' }}>
          <span>Total:</span>
          <span>Rs {total}</span>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '14px', marginBottom: '5px' }}>
          <span>Cash Received:</span>
          <span>Rs {cashReceived || 0}</span>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '14px', marginBottom: '15px' }}>
          <span>Change:</span>
          <span>Rs {change >= 0 ? change : 0}</span>
        </div>

        <div style={{ borderBottom: '1px dashed black', margin: '15px 0' }}></div>

        <div style={{ textAlign: 'center', fontSize: '12px', marginTop: '20px' }}>
          <p style={{ margin: '0 0 5px 0', fontWeight: 'bold' }}>Thank you for shopping!</p>
          <p style={{ margin: '0', color: '#666' }}>Software by PosSaaS</p>
        </div>
      </div>

      <style>{`
        .no-print-hide {
          display: none;
        }
        @media print {
          .no-print-hide {
            display: block;
          }
          body * {
            visibility: hidden;
          }
          .receipt-container, .receipt-container * {
            visibility: visible;
          }
          .receipt-container {
            position: absolute;
            left: 0;
            top: 0;
            width: 80mm; /* Standard thermal printer width */
            padding: 0;
            margin: 0;
            background: white;
            color: black;
          }
        }
      `}</style>
    </div>
  );
}
