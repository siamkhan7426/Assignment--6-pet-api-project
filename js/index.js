//------------------------------js function ------ 

// Mobile menu toggle
        const mobileMenuButton = document.getElementById('mobile-menu-button');
        const mobileMenu = document.getElementById('mobile-menu');
        
        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });

    // ---------------------active button color remove function star--------
    const reoveClassBtn = (id)=>{
      const activeBtns = document.getElementsByClassName("category-btn");
     for (const btnActive of activeBtns) {
      btnActive.classList.remove("active");
     };
    };
 // ---------------------active button color remove function end--------
   

// ------------------------- Api Call Function -----------------------------

// Global variable 
let allPetsData = [];
let filteredPetsData = [];
// -------------------------sort function -------------------

// -------------------------Sort Function (Descending by price) -------------------

const sortByPriceDescnding = (allPets)=>{

  return allPets.sort((a, b)=> b.price - a.price);
  
};
// -------------------------Sort Function (Descending by price) end -------------------
// ----------------all card data API call function star ---------------
  const loadAllDataApi = async () => {
    try{
      const res = await fetch `https://openapi.programming-hero.com/api/peddy/pets`;
      const data = await res.json();
      allPetsData = data.pets;
      console.log(allPetsData)
      // const sortPets = sortByPriceDescnding(data.pets)
      displyAllData(allPetsData);
    }catch(error){
      console.log("Error: " + error.message);
    }
};
   // sort ----------function --------------------
   const showSpinnerSort = ()=>{
    const spinner = document.getElementById("load-spinner"); 
    const cardContainer = document.querySelector("#petCard-container");
    spinner.classList.remove("hidden"); 
    cardContainer.classList.add("hidden"); 
    setTimeout(()=>{
      const sortedPets = sortByPriceDescnding([...allPetsData]);
      displyAllData(sortedPets)
      spinner.classList.add("hidden"); 
      cardContainer.classList.remove("hidden"); 
    },2000)
   }
  document.getElementById("sort-btn").addEventListener("click", ()=>{
    showSpinnerSort()
    
  });
 
   
loadAllDataApi();

// ----------------all card data API call function end ---------------

// ----------------buton data sort by felterbuton data sort by felter------------
// Category Button Click Handler


// .....................................dynamic button api data call star -------------------------
const loadCatagoryBtn = async () =>{
 try{
  const responsive = await fetch(`https://openapi.programming-hero.com/api/peddy/categories`);
  const data = await responsive.json();
  dynamicPetBtDataShow(data.categories);
 }catch(error){
  console.log("Error: " + error.message);
 };
};
loadCatagoryBtn();
// .....................................dynamic button api data call end -------------------------

// ------------------------------------ dynamic button catagory call function star ----------------------

const loadCatagoryBtnId = async (catagoryDetails) =>{
  // right grid layout image gulo gaybul how kora dilam  id dey dora
   document.querySelector("#right-side-grid").innerHTML = "";
  const spinner = document.getElementById("load-spinner"); 
  const cardContainer = document.querySelector("#petCard-container");
  cardContainer.innerHTML = " ";
  spinner.classList.remove("hidden"); 
  setTimeout(async()=>{
    try{
      const respon = await fetch(`https://openapi.programming-hero.com/api/peddy/category/${catagoryDetails}`);
      const data = await respon.json();{
        reoveClassBtn();
        const activeBtn = document.getElementById(`btn-${catagoryDetails}`);
        activeBtn.classList.add("active");
        displyAllData(data?.data);
      };
     }catch(error){
      console.log("Error: " + error.message);
     };
      spinner.classList.add("hidden"); 
  
  }, 2000);
};

// ------------------------------------ dynamic button catagory call function end ----------------------

//------------------------------------ dynamic pet id function call star----------------------------------

const loadPetIdFunction = async (petId)=>{
 try{
  const responsives = await fetch (`https://openapi.programming-hero.com/api/peddy/pet/${petId}`);
  const data = await responsives.json();
  showModalFunction(data.petData);
  
 }catch(error){
  console.log("Error: " + error.message);
 };
};
//------------------------------------ dynamic pet id function call end----------------------------------



//------------------------count down function -----------------------------

// Function to handle Adopt button click
function showAdoptionModal(button) {
  const modal = document.getElementById("adoptionModal");
  const countdownText = document.getElementById("countdownText");

  // Disable the button
  button.disabled = true;
  button.classList.add("opacity-50", "cursor-not-allowed");

  // Show modal
  modal.classList.remove("hidden");

  let countdown = 3;

  // Start countdown
  const interval = setInterval(() => {
    countdownText.classList.add("text-lg", "font-bold")
      countdownText.innerText = `(${countdown})`;
      countdown--;

      if (countdown < 0) {
          clearInterval(interval);
          countdownText.innerText = "Adoption Successful! ✅";

          // Auto close modal after 1 second
          setTimeout(() => {
              modal.classList.add("hidden"); // Hide modal

          }, 1000);
      }
  }, 1000);
};


