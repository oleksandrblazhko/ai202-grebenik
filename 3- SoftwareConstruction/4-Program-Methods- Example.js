//////////Відправка замовлення ////////

async function create_order(full_name, count, date) {
    if (full_name.length < 1 || full_name.length > 1024) {
        return -1;
    } else if ( count <= 0 ) {
        return -2;
    }

    var D = new Date();

    if (date < D.getDate() + 1) {
        alert("Назначить доставку раньше текущей даты невозможно")
    }
}

/////Отримання списку всіх апартаментів//////
app.get('/', async (req, res) => {
    await client.connect();
    const db = client.db('tspp');
    const result = await db.command({ping: 1});

    const collection = await db.collection("Home_info");
    const list = await collection.find().toArray();
    console.log(list);
    await client.close();

    res.send()
})

/////////додавання нових апартаментів"
app.post('/register', async (req, res) => {
    const house = req.body
    await client.connect();
    const db = client.db('tspp');
    const collection = await db.collection("Home_info");
    const insertHouse = await collection.insertOne({
        "hometype": house.hometype,
        "photo": null,
        "price": house.price,
        "countrooms": house.countrooms,
        "info_location": {
            "country": house.country,
            "city": house.city,
            "area": house.area
        }
    });
    await client.close();
    res.send(insertHouse);
})