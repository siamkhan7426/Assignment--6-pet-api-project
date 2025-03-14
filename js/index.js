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
// ----------------all card data API call function star ---------------
  const loadAllDataApi = async () => {
    try{
      const res = await fetch `https://openapi.programming-hero.com/api/peddy/pets`;
      const data = await res.json();
      displyAllData(data.pets);
    }catch(error){
      console.log("Error: " + error.message);
    }
};
loadAllDataApi()
// ----------------all card data API call function end ---------------

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
  console.log(button)
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


