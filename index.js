let pickedHex = "bbdefb"
let mode = "monochrome"
let fetchUrl = "https://www.thecolorapi.com/scheme?hex=" + pickedHex + "&mode=" + mode + "&count=5"
let colorResults = []

fetch(fetchUrl, {
  method: "GET",
  headers: {
    'Content-Type': 'application/json'
  }
})
  .then(response => response.json())
  .then(data => {
    console.log(data)

    for (let i = 0; i < data.colors.length; i++) {
      // colorResults.push(data.colors[i])
      let divId = "#color" + i + " div"
      console.log(data.colors[i].hex.value)
      document.querySelector(divId).style.background = data.colors[i].hex.value

      let paragraphId = "#color" + i + " p"
      document.querySelector(divId).textContent = data.colors[i].hex.value
    }

    console.log(colorResults)
  })