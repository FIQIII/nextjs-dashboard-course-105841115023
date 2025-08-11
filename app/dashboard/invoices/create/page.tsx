'use client';

 import { FormEvent } from 'react';
 
 // Ini adalah komponen untuk halaman 'create invoice'
 export default function Page() {
  // Fungsi ini akan dipanggil saat formulir disubmit
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
  event.preventDefault(); // Mencegah halaman dari reload
 

  // Logika untuk mengirim data formulir ke backend akan diletakkan di sini
  // (misalnya menggunakan Server Actions atau API Route)
  const formData = new FormData(event.currentTarget);
  const customerId = formData.get('customerId');
  const amount = formData.get('amount');
  const status = formData.get('status');
 

  console.log({ customerId, amount, status });
  alert('Form submitted! Check the console.');
  }
 

  return (
  <main style={{ padding: '20px' }}>
  <h1 style={{ marginBottom: '20px' }}>Buat Invoice Baru</h1>
  <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', maxWidth: '400px' }}>
  {/* Input untuk Pelanggan */}
  <div style={{ marginBottom: '16px', display: 'flex', flexDirection: 'column' }}>
  <label htmlFor="customer" style={{ marginBottom: '8px' }}>Pilih Pelanggan:</label>
  <select id="customer" name="customerId" required style={{ padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }}>
  <option value="">Pilih pelanggan...</option>
  {/* Opsi pelanggan akan diisi dari database */}
  <option value="michael-novotny">Michael Novotny</option>
  <option value="Delba de Oliveira">Delba de Oliveira</option>
  <option value="Balazs Orban">Balazs Orban</option>
  {/* ...opsi lainnya */}
  </select>
  </div>
 

  {/* Input untuk Jumlah */}
  <div style={{ marginBottom: '16px', display: 'flex', flexDirection: 'column' }}>
  <label htmlFor="amount" style={{ marginBottom: '8px' }}>Jumlah ($):</label>
  <input
  id="amount"
  name="amount"
  type="number"
  placeholder="Masukkan jumlah"
  step="0.01"
  required
  style={{ padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }}
  />
  </div>
 

  {/* Input untuk Status Pembayaran */}
  <div style={{ marginBottom: '16px' }}>
  <label style={{ marginBottom: '8px', display: 'block' }}>Status Pembayaran:</label>
  <div style={{ display: 'flex', alignItems: 'center', marginBottom: '4px' }}>
  <input
  id="pending"
  name="status"
  type="radio"
  value="pending"
  required
  style={{ marginRight: '8px' }}
  />
  <label htmlFor="pending">Pending</label>
  </div>
  <div style={{ display: 'flex', alignItems: 'center' }}>
  <input
  id="paid"
  name="status"
  type="radio"
  value="paid"
  required
  style={{ marginRight: '8px' }}
  />
  <label htmlFor="paid">Paid</label>
  </div>
  </div>
 

  <button type="submit" style={{ padding: '10px 15px', borderRadius: '4px', border: 'none', backgroundColor: '#007bff', color: 'white', cursor: 'pointer' }}>Buat Invoice</button>
  </form>
  </main>
  );
 }