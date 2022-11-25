const { MongoClient, ServerApiVersion } = require('mongodb');

const client = {"id":"1","username":"AngelikaGrebenik","password":"123","secret_key":"5e0dd59c8686b2ed36a50a9f428cf39f305a1fb5c0d2f842a5b2716bae9e0004"};

class DataBase {
    async init() {
        const mongoClient = await new MongoClient('mongodb://admin:admin@localhost:27017/project', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            serverApi: ServerApiVersion.v1
        }).connect();

        this.orders = mongoClient.db('project').collection('orders');
    }

    async newOrder(ord) {
        try {
            await this.orders.insertOne(ord);

            return { ok: true };
        } catch (e) {
            return { ok: false };
        }
    }
}

const db = new DataBase();

async function create_order(user_id, count) {
    if (count < 1) {
        return -2;
    }
    if (user_id < 0) {
        return -1;
    }

    const orderObj = {
        sender: client.id,
        count: count,
        date: Date.now()
    }

    let result = await db.newOrder(orderObj);

    if (result.ok) return 1;
    else return -1;
}

async function test() {
    await db.init();

    if (await create_order(
        {
            "username": "AngelikaGrebenik",
            "count": "2",
            "date": "20.10.2022"
        }) == 1) console.log('TC1.1 (none; create_order(AngelikaGrebenik, 2, 20.10.2022)) == 1): \nPassed');
    else console.log('TC1.1 (none; create_order(AngelikaGrebenik, 2, 20.10.2022)) == 1): \nFailed');
    if (await create_order(
        {
            "username": "Grebenik",
            "count": "2",
            "date": "20.10.2022"
        }) == -1) console.log('TC1.2 (none; create_order(Grebenik, 2, 20.10.2022)) == -1): \nPassed');
    else console.log('TC1.2 (none; create_order(Grebenik, 2, 20.10.2022)) == -1): \nFailed');
    if (await create_order(
        {
            "username": "AngelikaGrebenik",
            "count": "0",
            "date": "20.10.2022"
        }) == -2) console.log('TC1.3 none; create_order(AngelikaGrebenik, 0, 20.10.2022)) == -2): \n Passed');
    else console.log('TC1.3 none; create_order(AngelikaGrebenik, 0, 20.10.2022)) == -2): \n Failed');

}
test();