import ReactDOM from 'react-dom/client';
import React from 'react';
import BookList from "./components/book/BookList";

import './index.css';

const firstBook = {
    id: 1,
    image: './so_good.jpg',
    title : "So good they can't ignore you",
    author: "Cal Newport"
}

const secondBook = {
    id: 2,
    image: './finish.png',
    title : "Finish - give yourself the gift of done",
    author: "Jon Acuff"
}

const thirdBook = {
    id: 3,
    image: './cracking.jpg',
    title : "Cracking the coding interview",
    author: "Gayle Laakman Mcdowell"
}
let books = [firstBook, secondBook, thirdBook];

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<BookList books={books}/>);