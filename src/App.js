import React from 'react';
import Accordian from './components/Accordion';

const items = [
  {
    title: 'What is React?',
    content: 'React is a front end javascript framework'
  },
  {
    title: 'Why use React?',
    content: 'React is a favorite JS library for javascript'
  },
  {
    title: 'How do you use React?',
    content: 'You use React by creating components'
  }
];

export default () => {
  return <Accordian items={items} />;
};
