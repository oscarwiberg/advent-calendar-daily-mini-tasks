function getReadyTables() {
    const readyTables = []
    for (let i = 0; i < 2; i++) {
        readyTables.push(Math.round(Math.random()*20) + 1)
    }
    return readyTables
}

function displayTables() {
    const display = getReadyTables().map(function (table) {
        return `<div class="table">${table}</div>`
    }) 
    return display
}

document.getElementById('tables').innerHTML = displayTables()


/* Ready Tables
- Topic: Return a Function
Our restaurant has 20 tables and the staff serves 
2 tables at a time. They need to know which tables 
are ready to serve.  
Let's fix this with what we learned about returning a 
function inside of another function. */