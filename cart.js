///////////////////////////////////////////////
///////////////////CART.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code to
    calculate order totals. You'll also be 
    creating customer objects.  
*/


//////////////////PROBLEM 1////////////////////
/*  
    Below is a cart array that has food objects
    inside. 

    Write a callback below that uses the reduce
    array method to calculate the sum of all
    the food. 
*/

const cart = [
    {
        name: 'pizza', 
        price: 9.99
    }, 
    {
        name: 'pasta', 
        price: 8.99
    }, 
    {
        name: 'salad', 
        price: 7.99
    }
]

const totalPrice = cart.reduce((accumulator, item) => {
    return accumulator + item.price;
  }, 0);
  
  console.log(totalPrice);

//////////////////PROBLEM 2////////////////////
/*  
    Write a function called `calcFinalPrice` that
    can take in `cartTotal`,`couponValue`,
    and `tax` arguments. 

    Inside the function, calculate the tax 
    on the cartTotal and add it in. Subtract
    the value of the coupon. Return the final
    number. 

    Note: the numbers passed in for `tax` will be
    decimals, for example: .06 for a 6% tax.
*/

function calcFinalPrice(cartTotal, couponValue, tax) {
    const taxAmount = cartTotal * tax;
    const finalPrice = cartTotal + taxAmount - couponValue;
    return finalPrice;
  }

//////////////////PROBLEM 3////////////////////
/*  
    In this problem, you'll create a model for 
    a customer object as well as an example
    object. 

    Plan out a customer object for the cart page.
    Think about the information that a 
    restaurant would need about its customers.

    In the TEXT ANSWER area below, describe the
    properties that your customer object will have
    and why you chose those properties.

    Explain what data types each property should be
    and why you chose those data types. 

    Your object should have at least 4 properties. 
*/

/*
name (String): This property stores the name of the customer. 
It's a string data type because names are typically made up of letters and other characters that are not used in mathematical operations.

email (String): This property stores the email address of the customer.
It's also a string data type because email addresses are made up of characters that are not used in mathematical operations.

phoneNumber (String): This property stores the phone number of the customer. 
It's a string data type because phone numbers are typically stored and displayed as strings, and may include special characters like dashes or parentheses.

address (Object): This property stores the address of the customer as an object with nested properties. 
This makes it easier to access individual parts of the address, like the street or zip code. Each property of the address object is also a string data type.

*/

/*
    Now, create a customer object following your own
    guidelines.
*/

const customer = {
    name: "John Doe",
    email: "johndoe@example.com",
    phoneNumber: "+1 555-555-5555",
    address: {
      street: "123 Main St",
      city: "Anytown",
      state: "CA",
      zip: "12345"
    }
  };
