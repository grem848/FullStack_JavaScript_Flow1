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



// You must implement the makeTable(..) function, used below:
const table = makeTable(persons);
document.getElementById('my-table').innerHTML = table;
 
// You must implement the makeTable(..) function, used below:
function makeTable(data) {
  var objectKeys = _.keys(data[0]);
  let tablecreate = "<table class='table'>"
  tablecreate += "<tr>"

  for (let i = 0; i < objectKeys.length; i++) {
    tablecreate += "<th>" + _.startCase(objectKeys[i]) + "</th>";
  }

  tablecreate += "</tr>"

  var newData = data.map((d) => Object.values(d))
  console.log(newData[0])

  for (let i = 0; i < newData.length; i++) {
    tablecreate += "<tr>"
    for (let j = 0; j < objectKeys.length; j++) {
      let newDa = newData[i];
      tablecreate += "<td>" + newDa[j] + "</td>"
  }
    tablecreate += "</tr>"
  }
  tablecreate += "</table>"

  return tablecreate;
}







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
