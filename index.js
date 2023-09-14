let currentValue = document.querySelectorAll(".current")
let previousValue = document.querySelectorAll(".previous")

let daily = document.querySelector(".daily")
let weekly = document.querySelector(".weekly")
let monthly = document.querySelector(".monthly")

fetch('data.json')
.then(function (response) {
  return response.json();
})
  .then(function (data) {

  currentValue[0].textContent = data[0].timeframes.weekly.current
  currentValue[1].textContent = data[1].timeframes.weekly.current
  currentValue[2].textContent = data[2].timeframes.weekly.current
  currentValue[3].textContent = data[3].timeframes.weekly.current
  currentValue[4].textContent = data[4].timeframes.weekly.current
  currentValue[5].textContent = data[5].timeframes.weekly.current

  previousValue[0].textContent = data[0].timeframes.weekly.previous
  previousValue[1].textContent = data[1].timeframes.weekly.previous
  previousValue[2].textContent = data[2].timeframes.weekly.previous
  previousValue[3].textContent = data[3].timeframes.weekly.previous
  previousValue[4].textContent = data[4].timeframes.weekly.previous
  previousValue[5].textContent = data[5].timeframes.weekly.previous
    
  daily.addEventListener("click", ()=> {
      currentValue[0].textContent = data[0].timeframes.daily.current
      currentValue[1].textContent = data[1].timeframes.daily.current
      currentValue[2].textContent = data[2].timeframes.daily.current
      currentValue[3].textContent = data[3].timeframes.daily.current
      currentValue[4].textContent = data[4].timeframes.daily.current
      currentValue[5].textContent = data[5].timeframes.daily.current
  
      previousValue[0].textContent = data[0].timeframes.daily.previous
      previousValue[1].textContent = data[1].timeframes.daily.previous
      previousValue[2].textContent = data[2].timeframes.daily.previous
      previousValue[3].textContent = data[3].timeframes.daily.previous
      previousValue[4].textContent = data[4].timeframes.daily.previous
      previousValue[5].textContent = data[5].timeframes.daily.previous
    })

  weekly.addEventListener("click", ()=> {
      currentValue[0].textContent = data[0].timeframes.weekly.current
      currentValue[1].textContent = data[1].timeframes.weekly.current
      currentValue[2].textContent = data[2].timeframes.weekly.current
      currentValue[3].textContent = data[3].timeframes.weekly.current
      currentValue[4].textContent = data[4].timeframes.weekly.current
      currentValue[5].textContent = data[5].timeframes.weekly.current
  
      previousValue[0].textContent = data[0].timeframes.weekly.previous
      previousValue[1].textContent = data[1].timeframes.weekly.previous
      previousValue[2].textContent = data[2].timeframes.weekly.previous
      previousValue[3].textContent = data[3].timeframes.weekly.previous
      previousValue[4].textContent = data[4].timeframes.weekly.previous
      previousValue[5].textContent = data[5].timeframes.weekly.previous
    })

  monthly.addEventListener("click", ()=> {
      currentValue[0].textContent = data[0].timeframes.monthly.current
      currentValue[1].textContent = data[1].timeframes.monthly.current
      currentValue[2].textContent = data[2].timeframes.monthly.current
      currentValue[3].textContent = data[3].timeframes.monthly.current
      currentValue[4].textContent = data[4].timeframes.monthly.current
      currentValue[5].textContent = data[5].timeframes.monthly.current
  
      previousValue[0].textContent = data[0].timeframes.monthly.previous
      previousValue[1].textContent = data[1].timeframes.monthly.previous
      previousValue[2].textContent = data[2].timeframes.monthly.previous
      previousValue[3].textContent = data[3].timeframes.monthly.previous
      previousValue[4].textContent = data[4].timeframes.monthly.previous
      previousValue[5].textContent = data[5].timeframes.monthly.previous
    })
})