import _ from "lodash"

const data = [
  {
    username: "Franz" ,
    role: "admin"
  } ,
  {
    username: "Valentina" ,
    role: "seller"
  } ,
  {
    username: "Yulemy" ,
    role: "seller"
  } ,
  {
    username: "Santiago" ,
    role: "customer"
  }

];

const rta = _.groupBy (data, (item) => item.role );
console.log(rta);

