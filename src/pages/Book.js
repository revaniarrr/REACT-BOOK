import { useEffect, useState } from "react";
import BookList from "../components/BookList";

export default function Book(props) {
  let [books, setBooks] = useState([]);

  useEffect(() => {
    /**inizialize state books */
    let arrBooks = [
      {
        isbn: 1,title: `Marvel Comic`,creator: `undertaker`,publisher: `Lancar Jaya`,income: 1000,rating: 3,
        progress: 40,
        cover: `https://www.comicbookdaily.com/wp-content/uploads/2020/10/t-av-ann-2.jpg`,
      },
      {
        isbn: 2,title: `Doraemon`,creator: `Rhodey`,publisher: `Kencana `,income: 5000,rating: 4,
        progress: 60,
        cover: `https://shogakukan.asia/wp-content/uploads/2014/12/Doraemon-4.jpg`,
      },
      {
        isbn: 3,title: `Spiderman Comic`,creator: `Jose Maurinho`,publisher: `FF Publisher`,income: 7000,rating: 5,
        progress: 80,
        cover: `https://i.pinimg.com/originals/1f/81/4a/1f814a592d0389080a1643d214912f6d.jpg`,
      },
    ];

    setBooks(arrBooks);
  },[])

  return (
    <div className="container-fluid">
      {books.map((item) => (
        <BookList 
        key={`key-${item.isbn}`}
        isbn={item.isbn}
        title={item.title}
        creator={item.creator}
        publisher={item.publisher}
        rating={item.rating}
        cover={item.cover}
        progress= {item.progress}>
        </BookList>
      ))}
    </div>
  );
}