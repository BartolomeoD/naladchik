const express = require('express'); // Импорт фреймоврка
const app = express(); // Создает приложение Express. Функция express () - это функция верхнего уровня, экспортируемая модулем express.

app.use(express.static(`${__dirname}/public`)); //Для предоставления статических файлов, например, изображений, файлов CSS и JavaScript в Express используется функция промежуточной обработки express.static. Для того чтобы начать непосредственное предоставление файлов, необходимо передать имя каталога, в котором находятся статические ресурсы, в функцию промежуточной обработки express.static. __dirname – переменная содержащая абсолютный путь к папке.

app.listen(3000, () => console.log('server started')); // Приложение запускает сервер и слушает соединения на порте 3000.

app.get('/addition', (req, res) => { // /addition – путь который пригодится для вызова обработчика с клиента. Req, res – переменные содержащие объекты запроса и ответа соответсвенно. Этот путь задаете вы сами!
  const query = req.query; // получаем объект строки запроса
  const { a = 0, b = 0 } = query; // из объекта строки запроса получаем переменные a и b (или другие, зависит от того, с какими параметрами вы вызвали запрос на клиенте)
  res.json({ result: parseInt(a) + parseInt(b) }); // отправка ответа происходит в формате json. В данном случае отправляем объект с полем result, которое хранит результат операции
});

app.get('/subtraction', (req, res) => { 
  const query = req.query;
  const { a = 0, b = 0 } = query;
  res.json({ result: parseInt(a) - parseInt(b) });
});

app.get('/multiple', (req, res) => { 
  const query = req.query;
  const { a = 0, b = 0 } = query;
  res.json({ result: parseInt(a) * parseInt(b) });
});

app.get('/divide', (req, res) => { 
  const query = req.query;
  const { a = 0, b = 0 } = query;
  res.json({ result: parseInt(a) / parseInt(b) });
});