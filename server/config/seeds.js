const db = require('./connection');
const { User, Product, Category, Access } = require('../models');

db.once('open', async () => {
  await Category.deleteMany();

  const categories = await Category.insertMany([
    { name: 'Food' },
    { name: 'Household Supplies' },
    { name: 'Electronics' },
    { name: 'Books' },
    { name: 'Toys' }
  ]);
  console.log('categories seeded');

  await Access.deleteMany();

  const access = await Access.insertMany([
    { name: 'Buyer' },
    { name: 'Seller' },
    { name: 'Admin' }
    
  ]);

  console.log('Access seeded');

  await User.deleteMany();

   
  const user=await User.create([{
    firstName: 'Pamela',
    lastName: 'Washington',
    email: 'pamela@testmail.com',
    password: 'password12345',
    access: access[0]._id
   
  },

  {
    firstName: 'Elijah',
    lastName: 'Holt',
    email: 'eholt@testmail.com',
    password: 'password12345',
    access: access[1]._id
  }]);

  console.log('users seeded');


  await Product.deleteMany();

  const products = await Product.insertMany([
    {
      name: 'Tin of Cookies',
      description:
        'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      image: 'cookie-tin.jpg',
      category: categories[0]._id,
      price: 2.99,
      quantity: 500,
      seller_id: user[1]._id
    }
  
  ]);

  console.log('products seeded');

  
  process.exit();
});
