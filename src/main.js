
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
  return new Date().toLocaleTimeString('en', { weekday: 'short'}).split(' ')[0].toLowerCase();

}

class stat {
  constructor({
    day,
    amount,
    cssStyle,
    porcent
  }){
    this.day = day;
    this.amount = amount;
    this.cssStyle = cssStyle;
    this.porcent = porcent;
  }
  setCssStyle(day){
    if (day === getToday()){
      this.cssStyle = 'bg-cyan'
    } else {
      this.cssStyle = 'bg-softRed'
    }
  }


}

console.log(getToday());
