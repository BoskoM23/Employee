const employees = [
  {
    "id": "1",
    "name": "John Doe",
    "salary": "1500"
  },
  {
    "id": "2",
    "name": "Ron Morris",
    "salary": "150"
  },
  {
    "id": "3",
    "name": "Jack Johnson",
    "salary": "0"
  },
  {
    "id": "4",
    "name": "Peter Jones",
    "salary": "1780"
  }
];

// sort json file in ascending order
function salaryAsce() {
  employees.sort((a, b) => parseFloat(a.salary) - parseFloat(b.salary));
  console.log(employees);
}
// sort json file in descending order
function salaryDesc() {
  employees.sort((a, b) => parseFloat(b.salary) - parseFloat(a.salary));
  console.log(employees);

}
// read local JSON file in javascript
function getEmplFrom() {
  fetch("./employees.json")
    .then((res) => {
      return res.json();
    })
    .then((data) => console.log(data));
}