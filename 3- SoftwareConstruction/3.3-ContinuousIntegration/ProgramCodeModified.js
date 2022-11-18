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
