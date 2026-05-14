import { useState } from 'react';
import { Package, Plus, X, Trash2 } from 'lucide-react';

export default function Inventory() {
  const [products, setProducts] = useState([
    { id: '1', name: 'Lipton Yellow Label 250g', price: 450, stock: 45, category: 'Grocery', icon: '🍵' },
    { id: '2', name: 'Nestle Milkpak 1L', price: 290, stock: 12, category: 'Dairy', icon: '🥛' },
    { id: '3', name: 'Mezan Cooking Oil 1L', price: 560, stock: 110, category: 'Grocery', icon: '🛢️' },
    { id: '4', name: 'Surf Excel 1kg', price: 680, stock: 5, category: 'Cleaning', icon: '🧼' },
    { id: '5', name: 'Coca Cola 1.5L', price: 180, stock: 50, category: 'Beverages', icon: '🥤' },
    { id: '6', name: 'Super Crisp Chips', price: 50, stock: 200, category: 'Snacks', icon: '🥔' },
    { id: '7', name: 'Daily Bread', price: 120, stock: 30, category: 'Bakery', icon: '🍞' },
    { id: '8', name: 'Local Eggs Dozen', price: 400, stock: 25, category: 'Dairy', icon: '🥚' },
    { id: '9', name: 'Panadol 500mg', price: 40, stock: 500, category: 'Medicine', icon: '💊' },
    { id: '10', name: 'Brufen 400mg', price: 80, stock: 250, category: 'Medicine', icon: '💊' },
    { id: '11', name: 'Dettol Soap 115g', price: 110, stock: 80, category: 'Personal Care', icon: '🧼' },
    { id: '12', name: 'Colgate Toothpaste', price: 150, stock: 65, category: 'Personal Care', icon: '🪥' },
    { id: '13', name: 'Tapal Danedar 400g', price: 750, stock: 40, category: 'Grocery', icon: '☕' },
    { id: '14', name: 'National Ketchup', price: 320, stock: 55, category: 'Grocery', icon: '🍅' },
    { id: '15', name: 'Shan Biryani Masala', price: 100, stock: 120, category: 'Spices', icon: '🌶️' },
    { id: '16', name: "Mitchell's Chilli Garlic 800g", price: 350, stock: 40, category: 'Grocery', icon: '🥫' },
    { id: '17', name: "Mitchell's Jam 450g", price: 400, stock: 30, category: 'Grocery', icon: '🍓' },
    { id: '18', name: 'Dawn Bread Large', price: 150, stock: 20, category: 'Bakery', icon: '🍞' },
    { id: '19', name: 'Adams Cheese 200g', price: 450, stock: 15, category: 'Dairy', icon: '🧀' },
    { id: '20', name: 'Blue Band Margarine 250g', price: 280, stock: 25, category: 'Dairy', icon: '🧈' },
    { id: '21', name: 'Nurpur Butter 200g', price: 450, stock: 15, category: 'Dairy', icon: '🧈' },
    { id: '22', name: 'Nestle Fruita Vitals 1L', price: 260, stock: 35, category: 'Beverages', icon: '🧃' },
    { id: '23', name: 'Sprite 1.5L', price: 180, stock: 60, category: 'Beverages', icon: '🥤' },
    { id: '24', name: 'Pepsi 1.5L', price: 180, stock: 60, category: 'Beverages', icon: '🥤' },
    { id: '25', name: '7UP 1.5L', price: 180, stock: 60, category: 'Beverages', icon: '🥤' },
    { id: '26', name: 'Rooh Afza 800ml', price: 450, stock: 25, category: 'Beverages', icon: '🍷' },
    { id: '27', name: 'Dalda Banaspati 1kg', price: 550, stock: 40, category: 'Grocery', icon: '🛢️' },
    { id: '28', name: 'Habib Cooking Oil 1L', price: 560, stock: 45, category: 'Grocery', icon: '🛢️' },
    { id: '29', name: 'Lux Soap 115g', price: 90, stock: 100, category: 'Personal Care', icon: '🧼' },
    { id: '30', name: 'Safeguard Soap 115g', price: 110, stock: 80, category: 'Personal Care', icon: '🧼' },
    { id: '31', name: 'Lifebuoy Soap 115g', price: 85, stock: 120, category: 'Personal Care', icon: '🧼' },
    { id: '32', name: 'Head & Shoulders 185ml', price: 450, stock: 30, category: 'Personal Care', icon: '🧴' },
    { id: '33', name: 'Sunsilk Shampoo 185ml', price: 350, stock: 40, category: 'Personal Care', icon: '🧴' },
    { id: '34', name: 'Ariel Washing Powder 1kg', price: 650, stock: 25, category: 'Cleaning', icon: '🧼' },
    { id: '35', name: 'Vim Dishwash Liquid 500ml', price: 280, stock: 35, category: 'Cleaning', icon: '🧽' },
    { id: '36', name: 'Lemon Max Bar', price: 60, stock: 150, category: 'Cleaning', icon: '🧽' },
    { id: '37', name: 'Harpic Toilet Cleaner 500ml', price: 250, stock: 40, category: 'Cleaning', icon: '🚽' },
    { id: '38', name: 'Rose Petal Tissue', price: 200, stock: 60, category: 'Household', icon: '🧻' },
    { id: '39', name: 'Pampers Diapers Size 4', price: 2500, stock: 15, category: 'Baby Care', icon: '👶' },
    { id: '40', name: "Johnson's Baby Powder", price: 400, stock: 25, category: 'Baby Care', icon: '🍼' },
    { id: '41', name: 'Peak Freans Sooper', price: 50, stock: 100, category: 'Snacks', icon: '🍪' },
    { id: '42', name: 'LU Prince Biscuits', price: 40, stock: 120, category: 'Snacks', icon: '🍪' },
    { id: '43', name: 'TUC Biscuits', price: 30, stock: 150, category: 'Snacks', icon: '🥨' },
    { id: '44', name: "Lay's French Cheese", price: 50, stock: 80, category: 'Snacks', icon: '🥔' },
    { id: '45', name: 'Kurkure Chutney Chaska', price: 50, stock: 90, category: 'Snacks', icon: '🌶️' },
    { id: '46', name: 'National Iodized Salt 800g', price: 60, stock: 70, category: 'Grocery', icon: '🧂' },
    { id: '47', name: "Mitchell's Vinegar 800ml", price: 150, stock: 40, category: 'Grocery', icon: '🍾' },
    { id: '48', name: "Young's Mayonnaise 500ml", price: 450, stock: 30, category: 'Grocery', icon: '🥚' },
    { id: '49', name: 'Knorr Chicken Cubes', price: 80, stock: 100, category: 'Grocery', icon: '🍲' },
    { id: '50', name: 'Knorr Noodles Chatpata', price: 60, stock: 150, category: 'Snacks', icon: '🍜' }
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingProductId, setEditingProductId] = useState(null);
  const [newProduct, setNewProduct] = useState({
    name: '', price: '', stock: '', category: '', icon: '📦'
  });

  const handleOpenAdd = () => {
    setEditingProductId(null);
    setNewProduct({ name: '', price: '', stock: '', category: '', icon: '📦' });
    setIsModalOpen(true);
  };

  const handleOpenEdit = (product) => {
    setEditingProductId(product.id);
    setNewProduct({ ...product });
    setIsModalOpen(true);
  };

  const handleSaveProduct = (e) => {
    e.preventDefault();
    
    if (editingProductId) {
      setProducts(products.map(p => p.id === editingProductId ? { 
        ...p, 
        ...newProduct, 
        price: Number(newProduct.price), 
        stock: Number(newProduct.stock) 
      } : p));
    } else {
      const newId = String(Math.random().toString(36).substr(2, 9));
      const productToAdd = {
        id: newId,
        name: newProduct.name,
        price: Number(newProduct.price),
        stock: Number(newProduct.stock),
        category: newProduct.category || 'General',
        icon: newProduct.icon || '📦'
      };
      setProducts([productToAdd, ...products]);
    }
    
    setIsModalOpen(false);
  };

  const handleDeleteProduct = (id) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      setProducts(products.filter(p => p.id !== id));
    }
  };

  return (
    <div className="container animate-fade-in py-4">
      <div className="flex justify-between items-center mb-6 header-responsive">
        <div>
          <h1 className="text-2xl font-bold">Inventory Management</h1>
          <p className="text-secondary">Manage your store's products and pricing.</p>
        </div>
        <button className="btn btn-primary w-full-sm" onClick={handleOpenAdd}>
          <Plus size={18} /> Add Product
        </button>
      </div>

      <div className="card">
        <div style={{ overflowX: 'auto' }}>
          <table style={{ minWidth: '600px', width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
            <thead className="bg-elevated text-secondary text-sm">
              <tr>
                <th className="p-4 font-medium" style={{ width: '50px' }}>Icon</th>
                <th className="p-4 font-medium">Product Name</th>
                <th className="p-4 font-medium">Category</th>
                <th className="p-4 font-medium">Price</th>
                <th className="p-4 font-medium">Stock Level</th>
                <th className="p-4 font-medium">Action</th>
              </tr>
            </thead>
            <tbody>
              {products.map(p => (
                <tr key={p.id} style={{ borderBottom: '1px solid var(--border-color)' }}>
                  <td className="p-4 text-2xl">{p.icon}</td>
                  <td className="p-4 font-medium">{p.name}</td>
                  <td className="p-4">
                    <span style={{ padding: '2px 8px', borderRadius: '12px', fontSize: '12px', background: 'var(--bg-elevated)' }}>
                      {p.category}
                    </span>
                  </td>
                  <td className="p-4 font-bold">Rs {p.price}</td>
                  <td className="p-4">
                    <span style={{ color: p.stock < 10 ? 'var(--danger)' : 'inherit' }}>
                      {p.stock} units
                      {p.stock < 10 && ' (Low)'}
                    </span>
                  </td>
                  <td className="p-4">
                    <div className="flex gap-2 items-center">
                      <button className="btn btn-ghost text-sm" onClick={() => handleOpenEdit(p)}>Edit</button>
                      <button 
                        className="btn btn-ghost" 
                        style={{ padding: '4px', color: 'var(--danger)' }} 
                        onClick={() => handleDeleteProduct(p.id)}
                        title="Delete product"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
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
              <h2 className="text-xl font-bold">{editingProductId ? 'Edit Product' : 'Add New Product'}</h2>
              <button className="btn btn-ghost" onClick={() => setIsModalOpen(false)} style={{ padding: '4px' }}>
                <X size={20} />
              </button>
            </div>
            
            <form onSubmit={handleSaveProduct}>
              <div className="mb-4">
                <label className="block text-secondary mb-2 text-sm">Product Name</label>
                <input 
                  type="text" 
                  className="input w-full" 
                  required
                  value={newProduct.name}
                  onChange={(e) => setNewProduct({...newProduct, name: e.target.value})}
                  placeholder="e.g. Bread"
                />
              </div>

              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-secondary mb-2 text-sm">Price (Rs)</label>
                  <input 
                    type="number" 
                    className="input w-full" 
                    required min="0" step="0.01"
                    value={newProduct.price}
                    onChange={(e) => setNewProduct({...newProduct, price: e.target.value})}
                    placeholder="250"
                  />
                </div>
                <div>
                  <label className="block text-secondary mb-2 text-sm">Stock Level</label>
                  <input 
                    type="number" 
                    className="input w-full" 
                    required min="0"
                    value={newProduct.stock}
                    onChange={(e) => setNewProduct({...newProduct, stock: e.target.value})}
                    placeholder="100"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <label className="block text-secondary mb-2 text-sm">Category</label>
                  <input 
                    type="text" 
                    className="input w-full" 
                    required
                    value={newProduct.category}
                    onChange={(e) => setNewProduct({...newProduct, category: e.target.value})}
                    placeholder="e.g. Grocery"
                  />
                </div>
                <div>
                  <label className="block text-secondary mb-2 text-sm">Icon / Emoji</label>
                  <div 
                    className="flex flex-wrap gap-2 mb-2"
                    style={{ maxHeight: '140px', overflowY: 'auto', padding: '4px' }}
                  >
                    {[
                      '📦', '🛒', '🛍️', '🏷️',
                      '🍎', '🍊', '🍌', '🍉', '🍇', '🍓', '🍒', '🍑', '🥭', '🍍', '🥥', '🥝', '🍅', '🍆', '🥑', '🥦', '🥬', '🥒', '🌶️', '🧄', '🧅', '🥔', '🥕', '🌽', '🍄',
                      '🥩', '🍗', '🍖', '🥚', '🥛', '🧀', '🧈', '🍞', '🥐', '🥖', '🥨', '🥯', '🥞',
                      '🥫', '🍝', '🍜', '🍚', '🍲', '🍯', '🍪', '🍩', '🍫', '🍬', '🍭', '🍿', '🍟', '🍕', '🌭', '🍔', '🌮', '🌯',
                      '🥤', '🧃', '🧉', '🍼', '☕', '🍵', '🧊', '🧋', '🛢️',
                      '🧼', '🧻', '🧴', '🧽', '🧺', '🧹', '🪣'
                    ].map(emoji => (
                      <button 
                        key={emoji} 
                        type="button" 
                        onClick={() => setNewProduct({...newProduct, icon: emoji})}
                        className="btn btn-ghost"
                        style={{ 
                          padding: '0.25rem 0.5rem', fontSize: '1.25rem', minWidth: 'unset',
                          background: newProduct.icon === emoji ? 'var(--primary)' : 'transparent',
                          color: newProduct.icon === emoji ? '#fff' : 'inherit'
                        }}
                      >
                        {emoji}
                      </button>
                    ))}
                  </div>
                  <input 
                    type="text" 
                    className="input w-full" 
                    value={newProduct.icon}
                    onChange={(e) => setNewProduct({...newProduct, icon: e.target.value})}
                    placeholder="Or type an emoji (e.g. 📦)"
                  />
                </div>
              </div>
              
              <div className="flex justify-end gap-2">
                <button type="button" className="btn btn-ghost" onClick={() => setIsModalOpen(false)}>Cancel</button>
                <button type="submit" className="btn btn-primary">{editingProductId ? 'Save Changes' : 'Add Product'}</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
