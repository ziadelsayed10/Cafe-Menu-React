import React from 'react'

const Categories = ({selectedCategory,setSelectedCategory,language}) => {
 
  
  // { id: 1, name: { en: "All categories", ar: "كل التصنيفات" }, img: "src/images/addition.webp" },
  const categories = [
    { id: 2, name: { en: "Ice Tea", ar: "شاي مثلج" }, img: "src/images/ice_tea_lemon.webp" },
    { id: 3, name: { en: "Iced Coffee", ar: "قهوة مثلجة" }, img: "src/images/iced_pop_corn.webp" },
    { id: 4, name: { en: "Hot Drink", ar: "مشروبات ساخنة" }, img: "src/images/hot_drink.webp" },
    { id: 5, name: { en: "Coffe", ar: "كوفي" }, img: "src/images/flat_white.webp" },
  
    { id: 7, name: { en: "Smoothie", ar: "اسموزي" }, img: "src/images/smoothie_mango.webp" },
    { id: 8, name: { en: "Mojito", ar: "موخيتو" }, img: "src/images/mojito.webp" },
    { id: 9, name: { en: "Boba", ar: "بوبا" }, img: "src/images/iced_chocolate.webp" },
    { id: 10, name: { en: "Milk shake", ar: "ميلك تشيك " }, img: "src/images/milk_shake_mango.webp" },
    { id: 11, name: { en: "Frappe", ar: "فرابيه" }, img: "src/images/frappe_pop_corn.webp" },
    { id: 12, name: { en: "Addition", ar: "إضافات" }, img: "src/images/addition_boba.webp" },
    { id: 13, name: { en: "Matcha", ar: "ماتشا" }, img: "src/images/match_cappuccino.webp" },
    { id: 14, name: { en: "Specialty Coffee", ar: "سبيشيال كوفي" }, img: "src/images/V60.webp" },
  ];
  
  return (
   <>


   <div className='par'>
   {
  categories.map((category) =>(
   <div onClick={() => {setSelectedCategory(category.id)}} style={{ backgroundImage:  `url(${category.img})`}} key={category.id}className={`category ${selectedCategory === category.id ? "active" : ""}`}>
   <p style={{
                     position: "absolute",
                     top: "50%",
                     left: "50%",
                     fontFamily:"Dancing Script",
                     transform: "translate(-50%, -50%)",
                     color: "white",
                     fontWeight: "bold",
                     fontSize:"20px",
                     lineHeight:"normal",
                     textShadow: "1px 1px 5px rgba(0,0,0,0.9)"}}>{category.name[language]}</p>
      </div>
    
  ))
}

  
  
    </div>
   </>
  )
}

export default Categories








