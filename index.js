document.addEventListener('DOMContentLoaded', () => {
    fetchAllDishes()
})


function renderAllDishes(foodObj){
    console.log(foodObj)
    let divContainer = document.createElement('div')
    let divFrame = document.createElement('div')
    let divImage = document.createElement('div')
    let h1Discription = document.createElement('h2')
    let h1Category = document.createElement('h1')
    let img = document.createElement('img')

    divContainer.className = 'meal-card'
    divFrame.className = 'meal-frame'
    divImage.className = 'meal-image'
    h1Discription.className = 'center-text'

    // console.log(img.src = foodObj.img)
    h1Category.textContent = foodObj.strCategory
    h1Discription.textContent = foodObj.strCategoryDescription
    img.src = foodObj.strCategoryThumb

    divImage.append(img)
    divFrame.append(h1Category, divImage, h1Discription)
    divContainer.append(divFrame)

    document.querySelector('#meal-container').append(divContainer)
}

function fetchAllDishes(){
    fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
        .then(res => res.json())
        // .then(json => console.log(json))
        .then(json => json.categories.forEach(renderAllDishes))
}

