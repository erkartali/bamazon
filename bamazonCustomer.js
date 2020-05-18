var mysql = require("mysql");
var inquirer = require("inquirer");
var Table = require("easy-table");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "flipflip",
  database: "bamazon_DB",
});

function getStuff() {
  connection.query("SELECT * FROM product", function (err, results) {
    if (err) throw err;
    var data = results;
    var t = new Table();

    data.forEach(function (result) {
      t.cell("ID", result.id);
      t.cell("Product Name", result.product_name);
      t.cell("Department Name", result.department_name);
      t.cell("Price", result.price);
      t.cell("Stock", result.stock_quantity);
      t.newRow();
    });

    console.log(t.toString());
    purchaseItem();
  });
}

getStuff();

function purchaseItem() {
  connection.query("SELECT * FROM product", function (err, results) {
    if (err) throw err;

    inquirer
      .prompt([
        {
          name: "item",
          type: "input",
          message: "Select the id of the item you would like to purchase?",
        },
        {
          name: "quantity",
          type: "input",
          message: "How many would you like to buy",
        },
      ])
      .then(function (answer) {
        var chosenItem = answer.item;
        var chosenQuantity = answer.quantity;
        chosenQuantity = Number(chosenQuantity);
        // console.log(`chosen quantity: ${chosenQuantity}`);
        var someVar = [];

        var availableQuantity = connection.query(
          "SELECT stock_quantity FROM product WHERE id IN (" + chosenItem + ")",
          function (err, id) {
            if (err) {
              throw err;
            } else {
              setValue(id);
            }
          }
        );

        function setValue(value) {
            
            availableQuantity = value;
            newQuantity = availableQuantity[0].stock_quantity;
            console.log(newQuantity);
          var idArr = [];

          for (var i = 0; i < results.length; i++) {
            idArr.push(results[i].id);
          }

          chosenItem = parseInt(chosenItem);

          if (idArr.includes(chosenItem) && newQuantity >= chosenQuantity) {
            console.log("Purchase made!");
            var newTotal = newQuantity - chosenQuantity;
            connection.query(
              `UPDATE product SET stock_quantity = ${newTotal} WHERE id = ${chosenItem}`
            );

            getStuff();

          } else {
            console.log("That wont work.");
            getStuff();
          }
        }
      });
  });
}
