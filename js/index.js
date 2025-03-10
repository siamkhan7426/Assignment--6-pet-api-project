// Mobile menu toggle
        const mobileMenuButton = document.getElementById('mobile-menu-button');
        const mobileMenu = document.getElementById('mobile-menu');
        
        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    


// ------------------------- Api Call Function -----------------------------
// ----------------all card data API call function star ---------------
  const loadAllDataApi = async () => {

    try{
      const res = await fetch `https://openapi.programming-hero.com/api/peddy/pets`;
      const data = await res.json();
      displyAllData(data.pets);
    }catch(error){
      console.log("Error: " + error.message);
    };



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

// ------------------------------------ dynamic button id call function star ----------------------

const loadCatagoryBtnId = async (catagoryDetails) =>{
  console.log(catagoryDetails);
 try{
  const respon = await fetch(`https://openapi.programming-hero.com/api/peddy/category/${catagoryDetails}`);
  const data = await respon.json();
  displyAllData(data?.data);
 }catch(error){
  console.log("Error: " + error.message);
 };
};
