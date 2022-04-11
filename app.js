document.getElementById("button-addon2").addEventListener("click", function () {
    
    // searchResult()
    inputSearch(true)    
})

document.getElementById("searchInput").addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        
        inputSearch(true)  
    }
})

const inputSearch = data => {
    if (data ==true) {
        const inputField = document.getElementById("searchInput").value
        searchResult(inputField)
    }
    else {
        searchResult("bangladesh")
    }
}
const searchResult = async (inputField)  => {

    // const inputField = document.getElementById("searchInput");
    
    try {
        if (inputField.length != 0) {
            const API_KEY = `ab9065241405dc66af624c4983f42597`;

            const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputField}&appid=${API_KEY}&units=metric`;
            const res = await fetch(url);
            const data = await res.json();
            displayWeatherDataByCard(data)
            inputField.value= " "
            
        }
        else {
            console.log("Input valid input")
        }
    }
    catch (error) {
        errorShow(error)
    }
}
const errorShow = () => {
    const erroMsg = document.getElementById("errorDiv");
    erroMsg.style.display="block"
    

    const div = document.getElementById("containerData");
    div.textContent = ' '
    
}

const displayWeatherDataByCard = results => {
    console.log(results)
    const { feels_like,        
        temp,
        temp_max,
         } = results.main
    const div = document.getElementById("containerData");
    div.textContent = ' '

    
    // ---------------- DISPLAY  ELEMENTS  BY CARD-----------------

    const div2 = document.createElement("div")
    const erroMsg = document.getElementById("errorDiv");
    erroMsg.style.display = "none"

    const icon = `"http://openweathermap.org/img/wn/${results.weather[0].icon}@2x.png"`
    
    if (results.cod !== "404") {
        div2.innerHTML = `<div class="bg-card text-center w-50 mx-auto">
            <div class="card-body">
            <p class="text-white"> ${results.weather[0].main}<img class="text-white"src=${icon} alt=""></p>
            <h1 class="text-white card-title"><i class="fa-solid fa-city"></i> ${results.name}, ${results.sys.country}</h1>
            <h3 class="text-white"><i class="fa-solid fa-temperature-quarter"></i> ${temp} &#8451</h3>
            <p class="text-white">Today  max ${temp_max} &#8451</p>
            <p class="text-white"><i class="fa-solid fa-wind"></i> Feel_real ${feels_like} &#8451</p>
            <h5 class="text-white"><i class="fa-brands fa-skyatlas"></i> ${results.weather[0].main}</h5>
             </div>
            </div >`
    }
    else {
        errorShow()
    }
    div.appendChild(div2)


}

const autoDisplayData =() => {
    inputSearch(false)
}
autoDisplayData()
