import Heading from "../layout/Heading";
import { useState, useEffect } from "react";
import {API_URL} from "../../constants/api.js"


/*export default function Home() {
    return <Heading title="Home" />;
  }*/

  function BookList() {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
   
    useEffect(function () {
     async function fetchData() {
      try {
       const response = await fetch(API);
   
       if (response.ok) {
        const json = await response.json();
        console.log(json);
        setBooks(json);
       } else {
        setError("An error occured");
       }
      } catch (error) {
       setError(error.toString());
      } finally {
       setLoading(false);
      }
     }
     fetchData();
    }, []);
   
    if (loading) {
     return <div>Loading...</div>;
    }
   
    if (error) {
     return <div>ERROR: An error occured</div>;
    }
   
    return (
     <>
      {books.map(function (book) {
       return <div key={book.id}>{book.title}</div>;
      })}
     </>
    );
   }
   
   export default BookList;