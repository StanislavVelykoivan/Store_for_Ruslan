const express = require('express');
const app = express();
const port = 3000;

// Обработчик маршрута для корневого URL
app.get('/', (req, res) => {
  res.send('Привет, мир!');
});

// Запускаем сервер
app.listen(port, () => {
  console.log(`Сервер запущен на http://localhost:${port}`);
});