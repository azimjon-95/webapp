import { useEffect } from 'react';

function App() {
  useEffect(() => {
    // Telegram Web App API-ni o‘rnating
    if (window.Telegram && window.Telegram.WebApp) {
      // Boshlanishda yarmini ochish
      window.Telegram.WebApp.setHeaderColor("red"); // Foydalanuvchi interfeysini moslash
      window.Telegram.WebApp.expand({
        expandToFullScreen: false, // To‘liq ekran rejimini o‘chirish
      });
    } else {
      console.warn("Telegram WebApp API mavjud emas!");
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
