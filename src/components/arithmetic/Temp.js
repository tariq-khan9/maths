import React from 'react';

const Temp = ({totalSheets, temp}) => {

  const messages = [
    "Hello!",
    "Welcome!",
    "How are you?",
    "Have a nice day!",
    "Goodbye!",
    "See you later!"
  ];
  
  // Generate a random number of messages
  const numberOfMessages = Math.floor(Math.random() * messages.length) + 1;
  
  // Create an array to hold the randomly selected messages
  const randomMessages = [];
  for (let i = 0; i < 10; i++) {
    const randomIndex = Math.floor(Math.random() * messages.length);
    randomMessages.push(messages[randomIndex]);
  }
  if(temp)
  return (
    <div className='flex p-6 w-full justify-center mt-6 rounded-md bg-green-400'>
      <div className='w-40 h-7 bg-green-200'>
        {randomMessages.map((message, index) => (
          <h2 key={index}>{message}</h2>
        ))}
      </div>
    </div>
  );
  
        }

        export default Temp;