const searchResult = async () => {
    const inputField = document.getElementById("searchInput");
    if (inputField.value.length != 0) {
        console.log(inputField.value)
        const api =`ab9065241405dc66af624c4983f42597`
        const url = `http://api.openweathermap.org/geo/1.0/direct?q=${inputField.value}&limit=5&appid=${api}`;
            const res = await fetch(url)
            const data = await res.json();
        
        displayWeatherDataByCard(data)
}
    else {
        console.log("404")
    }
}
const displayWeatherDataByCard = results => {
    console.log(results)
    const div = document.getElementById("containerData");
    div.textContent = ''
    results.forEach(result => {
        
        const {name,country,state} = result
        console.log(result)

        
        
        const div2 = document.createElement("div");
        
            div2.innerHTML = `<div class="card w-75">
            <div class="card-body">
            <h3 class="card-title">City-${name} <span>Country- ${country}</span></h3>
            <p class="card-text">State: ${state}</p>
            <a href="#" class="btn btn-primary">Button</a>
            </div></div >`
        div.appendChild(div2)
        
    });
}