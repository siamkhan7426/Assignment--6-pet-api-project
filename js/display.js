//  --------------- api all data dsiply show -----------------

const displyAllData = (allPetsCard) => {
  const cardContainer = document.querySelector("#petCard-container");
  allPetsCard.forEach((card) => {
    const {image, breed, date_of_birth, price, gender, pet_details, pet_name} = card;
    console.log(card)
    const div = document.createElement("div");
    div.innerHTML = `
     
    <div class="bg-white rounded-lg shadow-md overflow-hidden p-4">
                        <img src="${image}?height=200&width=300" alt="Golden Retriever" class="w-full h-48 object-cover mb-3">
                        <h4 class="font-semibold mb-2">${pet_name}</h4>
                        <div class="text-sm text-gray-600 mb-3">
                            <p>🐾 Breed: ${breed ? breed : "N/A"}</p>
                            <p>📅 Birth: 2024</p>
                            <p>♀ Gender: Female</p>
                            <p>💰 Price: $199</p>
                        </div>
                        <hr>
                        <div class="flex flex-col lg:flex-row justify-end gap-2 mt-3">
                            <button class="border rounded-lg py-1 px-3 flex items-center hover:bg-gray-100">👍 Like</button>
                            <button class="border rounded-lg py-1 px-3 text-green-500 hover:bg-green-100">Adopt</button>
                            <button class="border rounded-lg py-1 px-3 text-blue-500 hover:bg-blue-100">Details</button>
                        </div>
                    </div>
        
        `;

    cardContainer.appendChild(div);
  });
};
