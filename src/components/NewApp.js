import React, { useState, useEffect } from 'react';
import '../App.css';
import axios from 'axios';

function NewApp() {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');

  async function getQuote() {
    let arrayOfQuotes = [];

    try {
      let response = await axios.get('https://api.quotable.io/random');
      console.log(response);
      arrayOfQuotes = response.data;
      console.log(arrayOfQuotes);
    } catch (error) {
      console.log(error);
    }

    try {
      setQuote(arrayOfQuotes.content);
      setAuthor(arrayOfQuotes.author);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getQuote();
  }, []);

  return (
    <div>
      <h1 classname="reveal-text">
        Get your daily dose of inspiration
        <br></br>
        <br></br>
        <span>Author: {author}</span>
        <br></br>
        <br></br>
        <span>{quote}</span>
      </h1>
      <br></br>
    </div>
  );
}

export default NewApp;
