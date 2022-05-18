import { useState, useEffect } from "react";
import {API} from "./api.js"



  function DessertList() {
    const [desserts, setDesserts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
   
    useEffect(function () {
     async function fetchData() {
      try {
       const response = await fetch(API);
   
       if (response.ok) {
        const json = await response.json();
        console.log(json);
        setDesserts(json);
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
      {desserts.map(function (dessert) {
       return <div key={dessert.id}> <h2>{dessert.title.rendered} </h2>{dessert.content.rendered}</div>;
      })}
     </>
    );
   }
   
   export default DessertList;