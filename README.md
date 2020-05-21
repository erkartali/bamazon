# Title / Repository Name
Bamazon

## About / Synopsis

Bamazon is a mock store front that shows customers an inventory screen and allows them to purchase items. When an item is purchased, it updates the inventory screen to reflect the new quantity. if there aren't enough items in stock. the purchase will not go through.

## Organization

The app has three main functions the first one called getStuff gets the inventory information from the database. the second one called purschaseItem uses inquirer to prompt the user to enter which item they would like to purchase and how many they want. the third function called setValue updates the new quantity to the database and calls the getStuff function to show the new values to the user.

## Usage

the following istructions will be run from the command line.

* to run the app, you must first enter $ node bamazonCustomer.js from the bamazon project folder

* enter the id of the item you would like to purchase and hit enter

* enter the quantity that you would like to purchase and hit enter

* then admire the magic!



### Screenshots

https://user-images.githubusercontent.com/61101099/81124727-cddd7680-8efb-11ea-8cfa-fcb01b584636.png

https://user-images.githubusercontent.com/61101099/81124760-e51c6400-8efb-11ea-8dcc-2f9e966e7074.png

https://user-images.githubusercontent.com/61101099/81124776-f5344380-8efb-11ea-862d-811f86b7f831.png

https://user-images.githubusercontent.com/61101099/81124798-ff564200-8efb-11ea-8770-0cdda0082cb8.png

### Dependencies

* "easy-table": "^1.1.1",
* "inquirer": "^7.1.0",
* "mysql": "^2.18.1"

### Link

https://github.com/erkartali/bamazon
