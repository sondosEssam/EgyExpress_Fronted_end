import { useEffect } from "react";
import { useState } from "react";
function CategroiesList() {
  const [Categories, setCategories] = useState([]);
  const api_url = "https://fakestoreapi.com/products/categories";
  useEffect(()=>{
    fetch(api_url)
    .then((res)=>res.json()).then((data)=>setCategories(data));
  }, []);
  const handleClick = (category)=>{
    console.log(category);
  }
  return (
    <div className="categories">
      {Categories.map((category)=>{
        return <button key={category} onClick={handleClick(category)}>{category}</button>
      })}
    </div>
  );
}
export default CategroiesList;
