export const fakeUsers = Array.from({ length: 50 }, (_, i) => ({
    id: i + 1,
    username: `User${Math.floor(Math.random() * 1000)}`, 
    moneyWasted: Math.floor(Math.random() * 5000) + 500, // Between 500 and 5500
  }));
  