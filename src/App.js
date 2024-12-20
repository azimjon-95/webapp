import { useEffect } from 'react';

function App() {
  useEffect(() => {
    // Telegram Web App API-ni o‘rnating
    if (window.Telegram.WebApp) {
      // Boshlanishda faqat yarmini oching
      window.Telegram.WebApp.setHeaderColor("bg_color"); // Foydalanuvchi interfeysini moslash
      window.Telegram.WebApp.expand({
        expandToFullScreen: false, // To‘liq ekran rejimini o‘chirish
      });
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
