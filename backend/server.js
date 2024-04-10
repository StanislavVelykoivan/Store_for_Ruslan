const express = require('express');
const Database = require('./components/db'); // Подключаем класс для работы с базой данных
const app = express();
const port = 3000;

// Создаем экземпляр класса Database
const db = new Database();


db.connect();

app.use(express.json()); 

app.get('/', (req, res) => {
  res.send('Привет, мир!');
});

app.get('/Mouse', async (req, res) => {
    try {
      // Получаем все данные о мышках из базы данных
      const mice = await db.getAllDocuments("StoreForRuslan", "Mouse");
      res.send(mice);
    } catch (error) {
      console.error("Error retrieving mouse data:", error);
      res.status(500).send("Ошибка при получении данных о мышках из базы данных");
    }
  });

  app.post('/Mouse', async (req, res) => {
    try {
      const newMouse = req.body; // Предполагается, что данные о новой мышке передаются в теле запроса
      await db.insertDocument("StoreForRuslan", "Mouse", newMouse);
      res.send('Мышь успешно добавлена в базу данных!');
    } catch (error) {
      console.error("Error adding mouse:", error);
      res.status(500).send("Ошибка при добавлении мыши в базу данных");
    }
  });

  app.delete('/Mouse/:id', async (req, res) => {
    try {
      const mouseId = req.params.id; // Получаем идентификатор мышки из URL запроса
      await db.deleteDocument("StoreForRuslan", "Mouse", mouseId);
      res.send('Мышь успешно удалена из базы данных!');
    } catch (error) {
      console.error("Error deleting mouse:", error);
      res.status(500).send("Ошибка при удалении мыши из базы данных");
    }
  });
// Запускаем сервер
app.listen(port, () => {
  console.log(`Сервер запущен на http://localhost:${port}`);
});
