//////Було змінено ТС1.4, тепер там введені дані, які повинні видати результат 1, тому ТС1.4 буде Failed
async function test() {
    await db.init();

    if (await create_order(
        {
            "full_name": "Grebenik Angelika Alexandrovna",
            "count": "2",
            "date": "20.10.2022"
        }) == 1) console.log('TC1.1 (none; create_order(Grebenik Angelika Alexandrovna, 2, 20.10.2022)) == 1): \nPassed');
    else console.log('TC1.1 (none; create_order(Grebenik Angelika Alexandrovna, 2, 20.10.2022)) == 1): \nFailed');
    if (await create_order(
        {
            "full_name": "Grebenik",
            "count": "2",
            "date": "20.10.2022"
        }) == -1) console.log('TC1.2 (none; create_order(Grebenik, 2, 20.10.2022)) == -1): \nPassed');
    else console.log('TC1.2 (none; create_order(Grebenik, 2, 20.10.2022)) == -1): \nFailed');
    if (await create_order(
        {
            "full_name": "Grebenik Angelika Alexandrovna",
            "count": "0",
            "date": "20.10.2022"
        }) == -2) console.log('TC1.3 none; create_order(Grebenik Angelika Alexandrovna, 0, 20.10.2022)) == -2): \n Passed');
    else console.log('TC1.3 none; create_order(Grebenik Angelika Alexandrovna, 0, 20.10.2022)) == -2): \n Failed');
    if (await create_order(
        {
            "full_name": "Grebenik Angelika Alexandrovna",
            "count": "2",
            "date": "20.10.2022"
        }) == -3) console.log('TC1.4 (none; create_order(Grebenik Angelika Alexandrovna, 2, 20.10.2022)) == -3):  \nPassed');
    else console.log('TC1.4 (none; create_order(Grebenik Angelika Alexandrovna, 2, 20.10.2022)) == -3): \nFailed');

}
test();