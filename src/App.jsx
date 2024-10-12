// import { useState } from "react";
// import "./App.css";

// function App() {
//   const [item, setItem] = useState("");

//   const items = [
//     {
//       item: "Ear Plug",
//       price: 2200,
//     },
//     {
//       item: "Nokia phone",
//       price: 2800,
//     },
//     {
//       item: "Realme",
//       price: 9800,
//     },
//     {
//       item: "Redmi",
//       price: 8900,
//     },
//     {
//       item: "Samsung",
//       price: 25000,
//     },
//     {
//       item: "iPhone",
//       price: 100000,
//     },
//   ];

//   const handleItem = (e) => {
//     setItem(e.target.value);
//   };

//   const handleForm = (e) => {
//     e.preventDefault();
//   };

//   return (
//     <>
//       <form onSubmit={handleForm}>
//         <input
//           type="text"
//           onChange={(e) => setItem(e.target.value)}
//           placeholder="Enter Product Name"
//         />
//         <button type="submit" onClick={handleItem}>
//           Submit
//         </button>
//       </form>

//       {/* Any item which is greater than 10000 have 18% GST & less than 10000 have 12% GST & which exclusive items which are higher than 40000 have 28% GST. */}

//       <div className="productName">
//         <h1>Item Name:</h1>
//         <span>{item}</span>
//         <h1>Price: </h1>
//         <span></span>
//         <h1>GST %: </h1>
//         <span></span>
//         <h1>Final Price: </h1>
//         <span></span>
//       </div>
//       <div>{city}</div>
//     </>
//   );
// }

// export default App;

import { useState } from "react";
import "./App.css";

function App() {
  const [item, setItem] = useState("");
  const [price, setPrice] = useState("");
  const [gst, setGst] = useState(0);

  const items = [
    { item: "Ear Plug", price: 2200 },
    { item: "Nokia phone", price: 2800 },
    { item: "Realme", price: 9800 },
    { item: "Redmi", price: 8900 },
    { item: "Samsung", price: 25000 },
    { item: "iPhone", price: 100000 },
  ];

  const handleItemChange = (e) => {
    const productName = e.target.value;
    setItem(productName);

    const selectedItem = items.find(
      (prod) => prod.item.toLowerCase() === productName.toLowerCase()
    );

    if (selectedItem) {
      const productPrice = selectedItem.price;
      setPrice(productPrice);

      // GST Logic:
      // - Greater than 10000 → 18% GST
      // - Less than 10000 → 12% GST
      // - Higher than 40000 → 28% GST

      let calculatedGst;
      if (productPrice > 40000) {
        calculatedGst = 28;
      } else if (productPrice > 10000) {
        calculatedGst = 18;
      } else {
        calculatedGst = 12;
      }
      setGst(calculatedGst);
    } else {
      setPrice("Item not found");
      setGst(0);
    }
  };

  const handleForm = (e) => {
    e.preventDefault();
  };

  const finalPrice = price && !isNaN(price) ? price + (price * gst) / 100 : "";

  return (
    <>
      <form onSubmit={handleForm}>
        <input
          type="text"
          value={item}
          onChange={handleItemChange}
          placeholder="Enter Product Name"
        />
        <button type="submit">Submit</button>
      </form>

      <div className="productName">
        <div className="table">
          <h2>Item</h2>
          <h2>Price</h2>
          <h2>GST %</h2>
          <h2>Final Price</h2>
        </div>
        <div className="table">
          <h3>{item}</h3>
          <h3>{price !== "" ? price : "N/A"}</h3>
          <h3>{gst !== 0 ? gst + "%" : "N/A"}</h3>
          <h3>{finalPrice !== "" ? finalPrice : "N/A"}</h3>
        </div>
      </div>
    </>
  );
}

export default App;
