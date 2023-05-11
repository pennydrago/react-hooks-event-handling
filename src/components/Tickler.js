import React from "react";

// Passing a function reference

// function Tickler() {
//   function tickle() {
//     console.log("Teehee!");
//   }

//   return <button onClick={tickle}>Tickle me!</button>;
// }

// Using an inline function

function Tickler() {
  return <button onClick={() => console.log("Teehee!")}>Tickle me!</button>;
}

export default Tickler;
