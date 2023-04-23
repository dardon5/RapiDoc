// import mongoose from "mongoose";
// import express from "express";
// import cors from "cors";
// import dotenv from "dotenv";
// import Doctor from "../models/Doctor.js";

// const specialtyOptions = [
//   "General Practitioner",
//   "Cardiology",
//   "Dermatology",
//   "Gastroenterology",
// ];

// const priceOptions = ["$20", "$25", "$30", "$35", "$40", "$45", "$50"];

// const insuranceOptions = ["Asesuisa", "MAPFRE", "AIG", "None"];

// const locationOptions = [
//   "Colonia Escalon",
//   "Santa Elena",
//   "San Salvador",
//   "La Libertad",
// ];

// // Function to generate random first and last names
// function generateName() {
//   const firstNames = [
//     "Sophia",
//     "Jackson",
//     "Olivia",
//     "Liam",
//     "Emma",
//     "Noah",
//     "Ava",
//     "Elijah",
//     "Isabella",
//     "Lucas",
//     "Mia",
//     "Mason",
//     "Charlotte",
//     "Logan",
//     "Amelia",
//     "Oliver",
//     "Harper",
//     "Ethan",
//     "Evelyn",
//     "Aiden",
//     "Abigail",
//   ];
//   const lastNames = [
//     "Smith",
//     "Johnson",
//     "Brown",
//     "Taylor",
//     "Miller",
//     "Wilson",
//     "Moore",
//     "Jones",
//     "Jackson",
//     "Martin",
//     "Lee",
//     "Perez",
//     "Thompson",
//     "White",
//     "Harris",
//     "Clark",
//     "Young",
//     "Allen",
//     "King",
//     "Wright",
//   ];
//   const firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
//   const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
//   return [firstName, lastName];
// }

// mongoose
//   .connect(process.env.MONGO_DB, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(async () => {
//     console.log("Connected to database");

//     // Generate 30 doctors
//     const numDoctors = 30;
//     for (let i = 1; i <= numDoctors; i++) {
//       const [firstName, lastName] = generateName();
//       const email = `${firstName.toLowerCase()}.${lastName.toLowerCase()}@gmail.com`;
//       const specialties = [
//         specialtyOptions[Math.floor(Math.random() * specialtyOptions.length)],
//       ];
//       const insurance = [
//         insuranceOptions[Math.floor(Math.random() * insuranceOptions.length)],
//       ];
//       const availability = "8am - 5pm";
//       const location =
//         locationOptions[Math.floor(Math.random() * locationOptions.length)];
//       const price = parseInt(
//         priceOptions[Math.floor(Math.random() * priceOptions.length)].substring(
//           1
//         )
//       );
//       const doctor = await Doctor.create({
//         firstName,
//         lastName,
//         email,
//         specialties,
//         insurance,
//         availability,
//         location,
//         price,
//       });
//       console.log(`Doctor ${doctor.firstName} ${doctor.lastName} created`);
//     }

//     console.log("Finished creating doctors");
//   })
//   .catch((error) => console.log(error));
