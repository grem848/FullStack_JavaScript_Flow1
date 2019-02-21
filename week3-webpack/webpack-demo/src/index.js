import _ from "lodash";
import './style.css';
import 'bootstrap/dist/css/bootstrap.css'

class Person {
  constructor(fn, ln, s) {
    this.firstName = fn;
    this.lastName = ln;
    this.favoriteSport = s;
  }
}

const persons = [
  new Person("Kurt", "Wonnegut", "Socker"),
  new Person("Jan", "Peterson", "Hockey"),
  new Person("Jane", "Peterson", "Skating"),
  new Person("John", "Hansen", "Socker"),
]

const cities = [
  { city: "Lyngby", zipCode: "2800" },
  { city: "Hvidovre", zipCode: "2650" },
  { city: "Glostrup", zipCode: "2600" },
]

const hobbies = [
  { name: "football", players: 22 },
  { name: "chess", players: 2 },
  { name: "boxing", players: 2 },
]


// You must implement the makeTable(..) function, used below:
function makeTable(data) {

  let table = "<table><tr>";

  let thead = "";

  _.keys(data[0]).forEach(element => {
    thead += "<td>" + _.startCase(element) + "</td>";
  });
  table += thead + "</tr>";

  let tbody = "<tr>"; 
  data.forEach(element => { // THIS DOESNT WORK
    // for (let i = 0; i < element.length; i++) {
      tbody += "<td>" + _.startCase(element[0]) + "</td>";
    // }
    console.log(element)
  });


  table += tbody + "</tr></table>";
  // console.log(table);
  return table;
}

// const table = makeTable(persons);
// const table = makeTable(cities);
const table = makeTable(hobbies);
document.getElementById('my-table').innerHTML = table;




// import _ from 'lodash';
// import './style.css';
// import Icon from './icon.png';

// function component() {
//   let element = document.createElement('div');

//   // Lodash, currently included via a script, is required for this line to work
//   element.innerHTML = _.join(['Hello', 'webpack'], ' ');
//   element.classList.add('hello');

//   const name = 'Kurt Wonnegut';
//   setTimeout(() => alert(`Hello there from ${name}`), 1000);

//   // Add the image to our existing div.
//   var myIcon = new Image();
//   myIcon.src = Icon;

//   element.appendChild(myIcon);


//   return element;
// }

// document.body.appendChild(component());