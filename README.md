# Title / Repository Name
Bamazon

## About / Synopsis

Bamazon is a mock store front that shows customers an inventory screen and allows them to purchase items. When an item is purchased, it updates the inventory screen to reflect the new quantity. if there aren't enough items in stock. the purchase will not go through.

## Organization

The app has three main functions the first one called getStuff gets the inventory information from the database. the second one called purschaseItem uses inquirer to prompt the user to enter which item they would like to purchase and how many they want. the third function called setValue updates the new quantity to the database and calls the getStuff function to show the new values to the user.

## Usage

the following istructions will be run from the command line.

* to run the app, you must first enter $ node bamazonCustomer.js from the bamazon project folder in the command line

* enter the id of the item you would like to purchase and hit enter

* enter the quantity that you would like to purchase and hit enter

* then admire the magic!



### Screenshots

<img width="1001" alt="Screen Shot 2020-05-22 at 11 55 52 AM" src="https://user-images.githubusercontent.com/61101099/82691257-38dcbc00-9c23-11ea-98fa-7a3a95a9d91e.png">

<img width="1014" alt="Screen Shot 2020-05-22 at 12 00 06 PM" src="https://user-images.githubusercontent.com/61101099/82691609-ccae8800-9c23-11ea-93e9-738e606cab6d.png">

<img width="1016" alt="Screen Shot 2020-05-22 at 11 57 02 AM" src="https://user-images.githubusercontent.com/61101099/82691375-6de90e80-9c23-11ea-9a05-0500b2328525.png">

<img width="1015" alt="Screen Shot 2020-05-22 at 11 58 31 AM" src="https://user-images.githubusercontent.com/61101099/82691468-93761800-9c23-11ea-9000-ce040a6d0731.png">

### Dependencies

* "easy-table": "^1.1.1",
* "inquirer": "^7.1.0",
* "mysql": "^2.18.1"

### Link

https://github.com/erkartali/bamazon
