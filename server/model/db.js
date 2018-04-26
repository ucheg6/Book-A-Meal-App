const db = {
  menus: [{
    id: 1,
    title: 'Beans',
    date: '20-10-2018',
    mealId: 1,


  },
  {
    id: 2,
    title: 'Rice',
    date: '20-10-2018',
    mealId: 2,
  },
  {
    id: 3,
    title: 'Yam',
    date: '20-10-2018',
    mealId: 3,


  },
  {
    id: 4,
    title: 'Spagghetti',
    date: '20-10-2018',
    mealId: 1,


  },

  ],
  meals: [{
    id: 1,
    title: 'Yam',
    description: 'delicious',
    price: 700,
    imageUrl: 'https://ibravoh.com/fs.jpg',
  },
  {
    id: 2,
    title: 'Rice',
    description: 'delicious',
    price: 500,
    imageUrl: 'https://ibravoh.com/fs.jpg',
  },
  {
    id: 3,
    title: 'Beans',
    description: 'delicious',
    price: 1700,
    imageUrl: 'https://ibravoh.com/fs.jpg',
  },
  {
    id: 4,
    title: 'Spaggheti',
    description: 'delicious',
    price: 400,
    imageUrl: 'https://ibravoh.com/fs.jpg',
  },

  ],

  orders: [
    {
      id: 1,
      customer: 'Uche Akogwu',
      mealId: 2,
      quantity: '2 packs',
      amount: 5000,
      date: '10-4-2018',
      time: '3:30am',
    },

    {
      id: 2,
      customer: 'Ibrahim Ilyasu',
      mealId: 3,
      quantity: '3 packs',
      amount: 52000,
      date: '12-4-2018',
      time: '4:30am',
    },

    {
      id: 3,
      customer: 'siddiq Abiodun',
      mealId: 4,
      quantity: '4 packs',
      amount: 6000,
      date: '10-4-2018',
      time: '2:30am',

    },

    {
      id: 4,
      customer: 'Dikaeinstein Okwa',
      mealId: 1,
      quantity: '2 packs',
      amount: 5000,
      date: '10-4-2018',
      time: '3:30am',
    },
  ],


};

module.exports = db;
