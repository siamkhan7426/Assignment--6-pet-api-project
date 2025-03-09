
//  --------------- api all data dsiply show -----------------


const displyAllData = (allPetsCard) =>{
    const cardContainer = document.querySelector("#card-continer");
    
    
    allPetsCard.forEach((card) =>  {
        const div = document.createElement("div")
        div.innerHTML = `
        
         <div  class="  bg-white rounded-lg shadow-lg overflow-hidden p-4 ">
                <img src="https://via.placeholder.com/300" alt="Pet" class="w-full h-48 object-cover rounded-lg">
                <h4 class="font-semibold mt-4">Mister Tartosh</h4>
                <p class="text-gray-600 text-sm">🐾 Breed: Golden Retriever</p>
                <p class="text-gray-600 text-sm">📅 Birth: 2024</p>
                <p class="text-gray-600 text-sm">♀ Gender: Female</p>
                <p class="text-gray-600 text-sm">💲Price: 199$</p>
                <div class="flex flex-col lg:flex-row gap-2 mt-4">
                    <span class="rounded-lg border py-2 px-5"><i class="fa-regular fa-thumbs-up"></i></span>
                    <span class="border text-primary px-4 py-2 rounded-lg">Adopt</span>
                    <span class="border text-primary px-4 py-2 rounded-lg">Details</span>
                </div>
            </div>
        
        `
    
        cardContainer.appendChild(div)
        
    });
}