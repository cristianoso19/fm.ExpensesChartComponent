
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

