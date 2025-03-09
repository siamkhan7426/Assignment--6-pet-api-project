// Mobile menu toggle
        const mobileMenuButton = document.getElementById('mobile-menu-button');
        const mobileMenu = document.getElementById('mobile-menu');
        
        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    


// ------------------------- Api Call Function -----------------------------

  const loadAllDataApi = async () => {

    try{
      const res = await fetch `https://openapi.programming-hero.com/api/peddy/pets`;
      const data = await res.json();
      displyAllData(data.pets)
    }catch(error){
      console.log("this is error", error)
    }



}

loadAllDataApi()