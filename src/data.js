import post1 from './images/post1.png';
import post2 from './images/post2.png';
import post3 from './images/post3.png';
import post4 from './images/post4.png';
import post5 from './images/post5.png';
import post6 from './images/post6.png';
import post7 from './images/post7.png';
import post8 from './images/post8.png';
// import post9 from '../images/post9.png';

export const categories = [
  'technology',
  'news',
  'programming',
  'productivity',
  'crypto',
];

export const authors = ['John', 'William', 'Sara', 'Warner', 'Xavier', 'Bob'];

const data = [
  {
    id: 1,
    image: post1,
    tags: ['App', 'Messaging'],
    author: 'John',
    date: 'January 12, 2021',
    title: 'Best instant messaging app ',
    excerpt:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure quibusdam, pariatur similique libero laborum minus, minima architecto quia ipsa, exercitationem explicabo! Eaque quam pariatur eius!',
    category: 'Technology',
    slug: 'best-messaging-app',
  },
  {
    id: 2,
    image: post2,
    tags: ['Tips', 'Tech', 'ideas'],
    author: 'William',
    date: 'January 10, 2021',
    title: 'Tech ideas to lighten your life',
    excerpt:
      'Isum dolor sit amet consectetur adipisicing elit. Iure quibusdam, pariatur similique libero laborum minus, minima architecto quia ipsa, exercitationem explicabo! Eaque quam pariatur eius, lorem.',
    category: 'Technology',
    slug: 'tech-ideas',
  },
  {
    id: 3,
    image: post3,
    tags: ['Camera', 'xovo'],
    author: 'John',
    date: 'January 8, 2021',
    title: 'Why xovo is the best camera?',
    excerpt:
      'Molor sit amet consectetur adipisicing elit. Iure quibusdam, pariatur similique libero laborum minus, minima architecto quia ipsa, exercitationem explicabo! Eaque quam pariatur eius, lorem ipsum',
    category: 'News',
    slug: 'xovo-camera',
  },
  {
    id: 4,
    image: post4,
    tags: ['Security', 'Tips'],
    author: 'Sara',
    date: 'January 6, 2021',
    title: 'Cyber security tips for all',
    excerpt:
      'Sit amet consectetur adipisicing elit. Iure quibusdam, pariatur similique libero laborum minus, minima architecto quia ipsa, exercitationem explicabo! Eaque quam pariatur eius, lorem ipsum dolor.',
    category: 'News',
    slug: 'cyber-security-tips',
  },
  {
    id: 5,
    image: post5,
    tags: ['Coding', 'Programming'],
    author: 'John',
    date: 'January 4, 2021',
    title: 'Best coding practices for coders',
    excerpt:
      'Amet consectetur adipisicing elit. Iure quibusdam, pariatur similique libero laborum minus, minima architecto quia ipsa, exercitationem explicabo! Eaque quam pariatur eius, lorem ipsum dolor sit.',
    category: 'Programming',
    slug: 'best-coding-practices',
  },
  {
    id: 6,
    image: post6,
    tags: ['Time-table', 'Schedule'],
    author: 'Warner',
    date: 'January 2, 2021',
    title: 'Best scheduling ideas',
    excerpt:
      'Consectetur adipisicing elit. Iure quibusdam, pariatur similique libero laborum minus, minima architecto quia ipsa, exercitationem explicabo! Eaque quam pariatur eius, lorem ipsum dolor sit amet.',
    category: 'Productivity',
    slug: 'best-way-to-schedule',
  },
  {
    id: 7,
    image: post7,
    tags: ['Google', 'Googling'],
    author: 'Xavier',
    date: 'December 28, 2020',
    title: 'Use Google like a pro',
    excerpt:
      'dipisicing elit. Iure quibusdam, pariatur similique libero laborum minus, minima architecto quia ipsa, exercitationem explicabo! Eaque quam pariatur eius, lorem ipsum dolor sit amet consectetur.',
    category: 'Technology',
    slug: 'google-like-pro',
  },
  {
    id: 8,
    image: post8,
    tags: ['Bitcoin', 'Crypto-currency'],
    author: 'Bob',
    date: 'December 24, 2020',
    title: 'All you need to know about Bitcoin',
    excerpt:
      'Iure quibusdam, pariatur similique libero laborum minus, minima architecto quia ipsa, exercitationem explicabo! Eaque quam pariatur eius, lorem ipsum dolor sit amet consectetur dipisicing elit. ',
    category: 'Crypto',
    slug: 'how-bit-coin-works',
  },
];

export default data;
