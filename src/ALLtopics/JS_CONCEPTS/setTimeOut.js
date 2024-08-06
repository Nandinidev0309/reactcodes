// function data() {
//   setTimeout(() => {
//     fetch("https://fakestoreapi.com/products")
//       .then((res) => res.json())
//       .then((data) => console.log(data));
//     setTimeout(() => {
//       fetch("https://fakestoreapi.com/products")
//         .then((res) => res.json())
//         .then((data) => console.log(data));
//       setTimeout(() => {
//         fetch("https://fakestoreapi.com/products")
//           .then((res) => res.json())
//           .then((data) => console.log(data));
//         setTimeout(() => {
//           fetch("https://fakestoreapi.com/products")
//             .then((res) => res.json())
//             .then((data) => console.log(data));
//           setTimeout(() => {
//             fetch("https://fakestoreapi.com/products")
//               .then((res) => res.json())
//               .then((data) => console.log(data));
//           }, 1000);
//         }, 1000);
//       }, 1000);
//     }, 1000);
//   }, 1000);
// }
// data()

//.................................................................................


// async function data() {
//   const url = "https://fakestoreapi.com/products"; 
//   for (let i = 0; i < 5; i++) {
//     try {
//       const response = await fetch(url);
//       const data = await response.json();
//       console.log(data);
//     } catch (error) {
//       console.log(error, "error data");
//     }
//     await new Promise((resolve) => setTimeout(resolve, 1000));
//   }
// }
// data();