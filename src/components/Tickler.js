import React from "react";

// function Tickler() {
//   function tickle() {
//     console.log("Teehee!");
//   }

//   return <button onClick={tickle}>Tickle me!</button>;
// }
// arrow function
function Tickler() {
  return <button onClick={() => console.log("Teehee!")}>Tickle me!</button>;
}
export default Tickler;
