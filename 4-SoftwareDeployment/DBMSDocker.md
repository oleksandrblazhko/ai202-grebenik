### Етапи створення контейнеру для роботи з *MongoDB*
1. Встановлюємо та налаштовуємо Docker
2. Запускаємо командний рядок або *PowerShell*
3. Створюємо каталог `C:/mongotest`, використовуючи команду `mkdir`.
4. В каталозі, створюємо підкаталог scripts, що буде містити файл `init.js` з прописаним кодом:
```js
db = connect("mongodb://localhost/project");

db.createUser({
  user: "admin",
  pwd: "admin",
  roles: ["readWrite", "dbAdmin"],
});

db.users.insertMany([
  {
    "_id": "1",
    username: "AngelikaGrebenik",
    password: "123",
    secret_key: "5e0dd59c8686b2ed36a50a9f428cf39f305a1fb5c0d2f842a5b2716bae9e0004",
  },
  {
    "_id": "2",
    username: "Angelika",
    password: "321",
    secret_key: "5e0dd59c8676b2e236a50a9f428cf39f305a1fb5c0d2f842a5b2716bae9e0004",
  },
]);

db.orders.insertMany([
  {
    sender: "1",
    count: 2,
    date: "20.10.2022",
  },
  {
    sender: "2",
    count: 2,
    date: "20.10.2022",
  },
  {
    sender: "1",
    count: 1,
    date: "20.10.2022",
  },
]);
```

5. Вводимо команду `docker pull mongo` для отримання образу із потрібними файлами та конфігурацією.
6. Створюємо та запускаємо новий контейнер, використовуючи команду `docker run --name grebenik-mongo -p 27017:27017 -w /scripts -v ${PWD}:/scripts -d mongo`.
7. Запускаємо _mongosh_ для роботи з _MongoDB_: `docker exec -it grebenik-mongo mongosh project` та загружаємо скрипт `load("scripts/init.js")`.
8. База даних налаштована та заповнена, підключатися до неї можна за URI `mongodb://admin:admin@localhost:27017/project` (вказуємо ім'я користувача, пароль, локальну адресу та назву файлу для подальшої взаємодії).