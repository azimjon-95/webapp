import { useEffect } from 'react';

function App() {
  useEffect(() => {
    // Telegram Web App API-ni o‘rnating
    if (window.Telegram.WebApp) {
      window.Telegram.WebApp.expand(); // To‘liq ekran qilish
    }
  }, []);

  return (
    <div>
      <h1>Telegram Web App</h1>
      <p>Bu React.js orqali qurilgan Telegram ichidagi web app.</p>
    </div>
  );
}


export default App;
