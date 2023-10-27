// read local JSON file in javascript
fetch("../data.json")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    maxValue = getMaxValue(data);
    data.forEach(element => {
        //console.log(element.amount)
        let idChar = 'char-' + element.day;
        char = document.getElementById(idChar)
        setHeightChar(element, char, maxValue);
        setBgChar(element, char);

    });
  })


function getMaxValue(data) {
  values =  data.map(item => item.amount);
  return Math.max(...values);
}

function setHeightChar(element, char, max) {
  const percent = Math.round(element.amount * 100 / max);
  char.classList.add('h-'+percent+'p')
}

function setBgChar(element, char){
  if (element.day === getToday()){
    char.classList.add("char-bar-bg-today");
  } else {
    char.classList.add("char-bar-bg-common");
  }
} 

function getToday(){
  return new Date().toLocaleTimeString('en', { weekday: 'short'}).split(' ')[0].toLowerCase();

}


