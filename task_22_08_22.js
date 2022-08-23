const scores = [
    {
      marks: 32,
      name: "Yvette Merritt",
    },
    {
      marks: 57,
      name: "Lillian Ellis",
    },
    {
      marks: 22,
      name: "Mccall Carter",
    },
    {
      marks: 21,
      name: "Pate Collier",
    },
    {
      marks: 91,
      name: "Debra Beard",
    },
    {
      marks: 75,
      name: "Nettie Hancock",
    },
    {
      marks: 20,
      name: "Hatfield Hodge",
    },
  ];

//Find average with one array method

const Mark = scores
    .map((m) => m.marks)
    .reduce((acc, cur) => acc + cur);
const avg = Mark / scores.length;
console.log(avg.toFixed(2));


// Find topper's name

const max = scores
  .map((m) => m.marks)
  .reduce((a,b)=>{
    return Math.max(a,b)
  });
console.log(max);

const topper = scores
  .filter((m)=> m.marks >= max)
  .map((n) => n.name);
console.log(topper);
