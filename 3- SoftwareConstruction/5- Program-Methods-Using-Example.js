
/////Додавання нових апартаментів//////
await collection.insertOne({
    "hometype": "apartments",
    "price": 1244,
    "countrooms": 2,
    "country": "Ukraine",
    "city": "Odessa",
    "area": "Tairowo"
})

///////Весь список апартаментів з локацією Україна, Одеса, Таїрово вивести////////
await collection.find({"info_location" : Ukraine, Odessa, Tairowo}).toArray();

///////Оформити замовлення////////////
let full_name = 'Гребенік Анжеліка Олександрівна'
let count = 2
let date = "18.11.2022"
await collection.create_order(full_name, count, date);