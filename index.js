let pickedHex = ""

function getColors(baseColor, mode) {
  let fetchUrl = "https://www.thecolorapi.com/scheme?hex=" + baseColor + "&mode=" + mode + "&count=5"
  console.log(fetchUrl)
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
        document.querySelector(paragraphId).textContent = data.colors[i].hex.value
      }

      // console.log(colorResults)
    })
}

document.getElementById("form").addEventListener("submit", parseForm)

function parseForm(e) {
  e.preventDefault()
  let pickedHex = document.getElementById("color").value.substring(1)
  let colorScheme = document.getElementById("color-scheme").value
  console.log(colorScheme)
  console.log(pickedHex)
  getColors(pickedHex, colorScheme)
}