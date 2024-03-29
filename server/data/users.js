import bcrypt from 'bcryptjs';

const users = [
  {
    name: 'admin',
    email: 'admin@emart.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'Tom',
    email: 'tom@gmail.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Jerry',
    email: 'jerry@gmail.com',
    password: bcrypt.hashSync('123456', 10),
  },
];

export default users;
