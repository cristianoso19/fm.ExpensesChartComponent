// read local JSON file in javascript
fetch("../data.json")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    maxValue = getMaxValue(data);
    data.forEach(element => {
        let idChar = 'char-' + element.day;
        char = document.getElementById(idChar)
        setHeightChar(element, char, maxValue);
        setBgChar(element, char);
        setAmountValue(element, char);
    });
  })

function setAmountValue(element, char){
  const tooltip = char.querySelector('span');
  console.log(element.amount);
  tooltip.innerText = '$' + element.amount; 
}

function getMaxValue(data) {
  values =  data.map(item => item.amount);
  return Math.max(...values);
}

function setHeightChar(element, char, max) {
  const percent = Math.round(element.amount * 85 / max);
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


