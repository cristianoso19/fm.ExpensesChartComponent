
// read local JSON file in javascript
fetch("../data.json")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
    data.forEach(element => {
        console.log(element.amount)
    });
  })

function getToday(){
  return new Date().toLocaleTimeString("en", { weekday: 'short'}).split(' ')[0].toLowerCase();

}

console.log(getToday());
