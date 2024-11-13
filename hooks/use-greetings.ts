'use client';

import { useState, useEffect } from 'react';

const greetings = [
  "It's gonna be a long night, {name}",
  "Look who decided to show up, {name}",
  "Ready to cause some trouble, {name}",
  "Stay hydrated, {name}",
  "The city is yours tonight, {name}",
  "Got your dancing shoes on, {name}",
  "Time to make some memories, {name}",
  "The night is still young, {name}",
  "Your Uber driver missed you, {name}",
  "Weekend mode activated, {name}"
];

export function useGreeting(username: string) {
  const [greeting, setGreeting] = useState('');

  useEffect(() => {
    const randomGreeting = greetings[Math.floor(Math.random() * greetings.length)];
    setGreeting(randomGreeting.replace('{name}', username));
  }, [username]);

  return greeting;
}