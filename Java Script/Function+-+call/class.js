class Customer
{
    customerId;
    customerName;
    creditCard;

constructor(customerId, customerName, creditCard){
    this.customerId = customerId;
    this.customerName = customerName;
    this.creditCard = creditCard;
}   
}

let customer1 = new Customer(1001,`John`,2234);
console.log(customer1.customerId);
console.log(customer1.customerName);
console.log(customer1.creditCard);