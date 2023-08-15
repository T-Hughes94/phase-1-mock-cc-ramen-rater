// //BY PUTTING VARIABLES AT THE TOP IT ALLOWS THEM TO FUNCTION IN A GLOBAL SCOPE ACCESSED BY ANYTHING UNDERNEATH THEM


// //here we are creating a variable to pull out the element we need from the html and storing it as a value for later use
// const ramenMenu = document.getElementById('ramen-menu')
// //this is creating a variable that stores the external link for the data
// const ramenAPI = "http://localhost:3000/ramens"
// //this variable selects the id 'ramen-menu' and adds an event listener that passes the submit button through the function createNewRamen
// const newRamenForm = document.getElementById('ramen-menu').addEventListener('submit', createNewRamen)

// //this fetch function then pulls the data into our js file
// fetch(ramenAPI)
// //here we are directing that data to our json file
// .then (r => r.json())
// //this hoists the function used to access the API
// .then(renderRamens)

// //this function accesses the API and pulls every image
// function renderRamens(ramens) {
//     ramens.forEach(renderRamenImage)
// }
// //this function creates an image element that renders a single ramen image from the API
// function renderRamenImage(ramen) {
//     //creating the image element
//     const ramenImage = document.createElement('img')
//     //creating a call back for the image
//     ramenImage.src = ramen.image;
//     //attatching the image to #ramen-menu
//     ramenMenu.append(ramenImage);
//    //this even listener allows us to be notified when images are clicked and uses the renderRamenDetail function to display the data
//     ramenImage.addEventListener('click', () => renderRamenDetail(ramen))
// }
// //this function displays the object data stored in the API to provide detailed inforomation about a ramen
//     function renderRamenDetail (ramen) {
//     //this line creates a variabel that selects the id 'ramen-detail' from the html document
//     const ramenDetail = document.getElementById('ramen-detail')
//     //this line creates a variable that selects the class 'detail-image'
//     const detailImage = ramenDetail.querySelector('.detail-image')
//     //this line sets the source image of that class to the API
//     detailImage.src = ramen.image
//     //this line sets a text description for accessibility purposes
//     detailImage.alt = ramen.name
//     //this line selects the class 'name' and assigns it the value of its text from the API
//     ramenDetail.querySelector(' .name').textContent = ramen.name
//     //this line selects the class "restaurant" and assigns the text content of the inforomation provided by the API
//     ramenDetail.querySelector(' .restaurant').textContent = ramen.restaurant
//    //select the id 'rating-display' from the html doc. and add the textContent to be the ramen(data) and the value of the key rating for that ramens data in the API
//    document.getElementById('rating-display').textContent = ramen.rating
//    //select the id 'comment-display' and assign the text content of the data from (ramen) which grabs it from the data of the slected ramens API data
//    document.getElementById('comment-display').textContent = ramen.content
   
   
   
   
   
// }
// //this function creates a new ramen an adds it to the menu
// function createNewRamen(event){
//     // Prevent the default form submission behavior
//     event.preventDefault()
//     // Get the form element from the event
//     const form = event.target
//    // Create a new ramen object with data from the form
//     const newRamen = {
//         name:form.name.value,
//         restaurant: form.restaurant.value,
//         image:form.image.value,
//         rating:form.rating.value,
//         comment:form.comment.value,

    

//     }
//     // Call the renderRamenImage function with the new ramen object
//     renderRamenImage(newRamen);
// }

//--Davids CODE--

//Deliverable 1:Display images on menu
//fill top bar for navigation
//Fetch from server
fetch('http:/localhost:3000/ramens')
.then(r => r.json())
.then (ramens => {
   //loop through the ramen array forEach
    ramens.forEach((ramenObj) => addToMenu(ramenObj))
})
//create and assign image tag for ramen menu
function addToMenu(ramenObj){
    const menu = document.querySelector('#ramen-menu')
    const img = document.createElement('img')
    img.src = ramenObj.image
    menu.appendChild(img)
    img.addEventListener('click', () => displayRamen(ramenObj))

}
   
  

function displayRamen(ramenObj){
    const detail_image = document.querySelector('.detail-image')
    const name =document.querySelector('.name')
    const restaurant = document.querySelector('.restaurant')
    const rating_display = document.querySelector('#rating-display')
    const comment_display = document.querySelector('#comment-display')
    
    restaurant.textContent = ramenObj.restaurant
    detail_image.src = ramenObj.image
    name.textContent  = ramenObj.name
    rating_display.textContent =ramenObj.rating
    comment_display.textContent = ramenObj.comment


}

//click on an image from # ramen-menu and assign image tag for ramen menu

//Delieverable2 Disply ramen
 

//event lostener (click) on image
//query select all necesarry info for detail
//fill out text content
//Deliverable3:Form deliverable(no POST method needed)
const form =document.querySelector('#new-ramen')
form.addEventListener('submit', (e)=>ramenFormHandler(e))
//add event listener ("submit")
function ramenFormHandler(e){
    e.preventDefault()
    console.log(e.target['name'].value)

    const newRamenObj = {
        'name':e.target['name'].value,
        'restaurant':e.target['restaurant'].value,
        'image':e.target['image'].value,
        'rating':e.target['rating'].value,
        'comment':e.target['comment'].value,
    }
    addToMenu(newRamenObj)
}
//add to menu div

