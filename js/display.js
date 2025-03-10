//  --------------- api all data dsiply all pets card show star -----------------

const displyAllData = (allPetsCard) => {
  const cardContainer = document.querySelector("#petCard-container");
 cardContainer.innerHTML =" "
  if(allPetsCard ==0){
    cardContainer.classList.remove("grid");
  cardContainer.innerHTML = `
 <div class="space-y-4 flex flex-col justify-center mx-auto  min-h-80 items-center">
  <img src="./assest/Group.jpg" class=" shadow-md">
 <div class="space-y-4">
 </div>
  <h2 class="text-center text-2xl font-bold">No Information Available</h2>
  <p class="text-center">It is a long established fact that a reader will be distracted by the readable content of a page when looking at 
its layout. The point of using Lorem Ipsum is that it has a.</p>
 </div>
  
  `;
  return;
  
  }else{
    cardContainer.classList.add("grid")
  };
  allPetsCard.forEach((card) => {
    const {image, breed, date_of_birth, price, gender, pet_details, pet_name} = card;
    const div = document.createElement("div");
    div.innerHTML = `
    <div class="bg-white rounded-lg shadow-md overflow-hidden p-4">
                        <img src="${image}?height=200&width=300" alt="Golden Retriever" class="w-full h-48 object-cover mb-3">
                        <h4 class="font-semibold mb-2">${pet_name ? pet_name : "N/A Pet Name"}</h4>
                        <div class="text-sm text-gray-600 mb-3">
                            <p>🐾 Breed: ${breed ? breed : "N/A Breed"}</p>
                            <p>📅 Birth: ${date_of_birth ? date_of_birth : "N/A Birth"}</p>
                            <p>♀ Gender: ${gender ? gender : "N/A Gender"}</p>
                            <p>💰 Price: ${price ? price : "N/A Price"}</p>
                        </div>
                        <hr>
                        <div class="flex flex-col lg:flex-row justify-end gap-2 mt-3">
                            <button id="likeBtn" class="border rounded-lg py-1 px-3 flex items-center hover:bg-gray-100">👍 Like</button>
                            <button id="adoptBtn" class="border rounded-lg py-1 px-3 text-green-500 hover:bg-green-100">Adopt</button>
                            <button id="detailsBtn" class="border rounded-lg py-1 px-3 text-blue-500 hover:bg-blue-100">Details</button>
                        </div>
                    </div>
        `;

    cardContainer.appendChild(div);
  });
};

//  --------------- api all data dsiply all pets card show end -----------------

// ------------------ dynamic pet button show all api call function star ------------

const dynamicPetBtDataShow = (petBtn)=>{
  const buttonContainer = document.querySelector("#btn-container");
  
  petBtn.forEach((petBtn) => {
    const {id, category, category_icon} = petBtn;
    //console.log(category)
    const div = document.createElement("div");
    div.innerHTML = `
    <button id="btn-" onclick='loadCatagoryBtnId("${category}")' class=" bg-white cursor-pointer border px-8 py-3  flex gap-2 items-center justify-center text-center shadow">
               ${category}<img class="w-14 h-12 category-btn" src="${category_icon}" alt="">
            </button>
    
    `
    buttonContainer.appendChild(div);
    
  });
};
// ------------------ dynamic pet button show all api call function end ------------
