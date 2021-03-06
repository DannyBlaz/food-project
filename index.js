document.addEventListener('DOMContentLoaded', () => {
    fetchAllDishes()
})

function renderAllDishes(foodObj){
    let divContainer = document.createElement('div')
    let divFrame = document.createElement('div')
    let divImage = document.createElement('div')
    let h1Discription = document.createElement('h2')
    let h1Category = document.createElement('h1')
    let img = document.createElement('img')
    
    // like section
    let foodLikes = 0
    const likeContainer = document.createElement('div');
    const likes = document.createElement('span');
    const likeLogo = document.createElement('button');
    
    likeContainer.className = 'likes-section'
    likes.className = 'likes'
    likeLogo.className = 'like-button'
    
    likes.textContent = "0 likes"
    likeLogo.textContent = "♥"
    
    
    divContainer.className = 'meal-card'
    divFrame.className = 'meal-frame'
    divImage.className = 'meal-image'
    h1Discription.className = 'center-text'
    
    h1Category.textContent = foodObj.strCategory
    h1Discription.textContent = foodObj.strCategoryDescription
    img.src = foodObj.strCategoryThumb
    
    divImage.append(img)
    likeContainer.append(likes, likeLogo)
    divFrame.append(h1Category, divImage, likeContainer)
    divContainer.append(divFrame)

    document.querySelector('#meal-container').append(divContainer)
    
    // Event Listeners
    divImage.addEventListener('mouseover', () => {
        divImage.style.cursor = 'pointer'
    })

    divImage.addEventListener('click', (e) => {
        if (!e.target.parentElement.parentElement.querySelector("h2")) { 
            divFrame.append(h1Discription) 
        } else{
            e.target.parentElement.parentElement.querySelector("h2").remove()
        }
    })

    likeLogo.addEventListener('click', () => {
        foodLikes += 1
        likes.textContent = `${foodLikes} likes`
    })
}

function fetchAllDishes(){
    fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
        .then(res => res.json())
        .then(json => json.categories.forEach(renderAllDishes))
}

