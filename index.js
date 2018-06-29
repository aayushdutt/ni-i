
const mongoose = require('mongoose')


// Connect to db
const db = mongoose.connect('mongodb://localhost:27017/customerscli')

const Customer = require('./models/customer')
// Add Customer
const addCustomer = (customer) => {
  Customer.create(customer, function(){
    console.info('New Customer Added')
    mongoose.connection.close()
  })
}

const findCustomer = (name) => {
  // Make case insensitive
  const search = new RegExp(name, 'i') //'i' means case insensitive
  
  Customer.find({$or: [{firstname: search}, {lastname: search}]})
  .then(customer =>{
    console.info(customer)
    console.info(`${customer.length} matches`)
    mongoose.connection.close()
  })
}

const updateCustomer = (_id, customer)=>{
  Customer.update({_id}, customer)
  .then(customer => {
    console.info('Update Successful')
    mongoose.connection.close()
  })
}

const removeCustomer = (_id)=>{
  Customer.remove({_id})
  .then(() => {
    console.info('Removed!')
    mongoose.connection.close()
  })
}

const listCustomers = ()=>{
  Customer.find()
  .then((customers) => {
    console.info(customers)
    console.info(`${customers.length} customers`)
    mongoose.connection.close()
  })
}

module.exports = {
  addCustomer,
  findCustomer,
  updateCustomer,
  removeCustomer,
  listCustomers
}
