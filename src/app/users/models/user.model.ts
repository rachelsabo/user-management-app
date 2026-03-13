export interface User {
  id: number;
  email: string;
  username: string;
  age: number;
}

export const MOCK_USERS: User[] = [
  {
    id: 1,
    email: 'alice@example.com',
    username: 'alice',
    age: 28,
  },
  {
    id: 2,
    email: 'bob@example.com',
    username: 'bobby',
    age: 34,
  },
  {
    id: 3,
    email: 'charlie@example.com',
    username: 'charlie_c',
    age: 22,
  },
  {
    id: 4,
    email: 'dana@example.com',
    username: 'dana_d',
    age: 30,
  },
];
