import { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [name, setName] = useState('');
  const [nomer, setNomer] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const SendMessage = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);

    const token = "8215918565:AAEC5ks2VSx4m9nV10A-fGPtaal47c9yynQ";
    const chat_id = "5884229681";
    const url = `https://api.telegram.org/bot${token}/sendMessage`;
    const text = `Ism: ${name}\nNomer: ${nomer}`;

    try {
      await axios.post(url, { chat_id, text });
      setSuccess(true);
      setName('');
      setNomer('');
      setTimeout(() => setSuccess(false), 4000);
    } catch (err) {
      alert('Xabar yuborilmadi!');
    }

    setLoading(false);
  };

  return (
    <div className="container">
      <form onSubmit={SendMessage} className="form">
        <h2>Ro'yxatga o'tish</h2>

        <label>Ismingiz</label>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Ismingiz"
          required
        />

        <label>Nomeringiz</label>
        <input
          value={nomer}
          onChange={(e) => setNomer(e.target.value)}
          placeholder="Nomeringiz"
          required
        />

        <button type="submit">
          {loading ? <div className="spinner"></div> : 'Yuborish'}
        </button>

        {success && <div className="success">✅ Xabar yuborildi</div>}
      </form>
    </div>
  );
}

export default App;
