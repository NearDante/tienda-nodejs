import bcrypt from 'bcryptjs';

const users = [
  {
    id: 1,
    username: 'admin',
    passwordHash: bcrypt.hashSync('123456', 10)
  },
  {
    id: 2,
    username: 'user',
    passwordHash: bcrypt.hashSync('password', 10),
  },
];

export default users;
