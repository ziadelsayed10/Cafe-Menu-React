import React from 'react'

const Products = ({searchText,setSearchText,selectedCategory,setSelectedCategory,language}) => {
   

    const products = {
      2: [
        { name: { en: " Passion Fruit", ar: "باشن فروت" }, price: { en: "85 EGP", ar: "85 جنيه" }, img: "src/images/ice_tea_passion_fruit.webp" },
        { name: { en: " Lemon", ar: "ليمون" }, price: { en: "80 EGP", ar: "80 جنيه" }, img: "src/images/ice_tea_lemon.webp" },
        { name: { en: " Watermelon", ar: "بطيخ" }, price: { en: "80 EGP", ar: "80 جنيه" }, img: "src/images/ice_tea_watermelon.webp" },
        { name: { en: " Strawberry", ar: "فراولة" }, price: { en: "80 EGP", ar: "80 جنيه" }, img: "src/images/ice_tea_strawberry.webp" },
        { name: { en: " Pomegranate", ar: "رمان" }, price: { en: "80 EGP", ar: "80 جنيه" }, img: "src/images/ice_tea_pomegranate.webp" },
        { name: { en: " Cinnamon", ar: "قرفة" }, price: { en: "80 EGP", ar: "80 جنيه" }, img: "src/images/ice_tea_cinnamon.webp" },
        { name: { en: " Blueberry", ar: "توت أزرق" }, price: { en: "85 EGP", ar: "85 جنيه" }, img: "src/images/ice_tea_blueberry.webp" },
      ],
      3: [
        { name: { en: "Iced Americano", ar: "آيس امريكانو" }, price: { en: "80 EGP", ar: "80 جنيه" }, img: "src/images/iced_americano.webp" },
        { name: { en: "Iced Latte", ar: "آيس لاتيه" }, price: { en: "100 EGP", ar: "100 جنيه" }, img: "src/images/iced_latte.webp" },
        { name: { en: "Iced Spanish Latte", ar: "آيس سبانش لاتيه" }, price: { en: "130 EGP", ar: "130 جنيه" }, img: "src/images/iced_spanish_latte.webp" },
        { name: { en: "Iced Mocha", ar: "آيس موكا" }, price: { en: "115 EGP", ar: "115 جنيه" }, img: "src/images/iced_mocha.webp" },
        { name: { en: "Iced Caramel Macchiato", ar: "ايس كراميل ميكاتو" }, price: { en: "105 EGP", ar: "105 جنيه" }, img: "src/images/iced_caramel_macciato.webp" },
        { name: { en: "Iced White Mocha", ar: "ايس وايت موكا" }, price: { en: "115 EGP", ar: "115 جنيه" }, img: "src/images/iced_white_mocha.webp" },
        { name: { en: "Iced Chocolate", ar: "آيس شوكلت" }, price: { en: "100 EGP", ar: "100 جنيه" }, img: "src/images/iced_chocolate.webp" },
        { name: { en: "Pistachio Iced Latte", ar: "آيس لاتيه بيستاشيو" }, price: { en: "180 EGP", ar: "180 جنيه" }, img: "src/images/iced_pistachio_latte.webp" },
        { name: { en: "Iced Banan", ar: "آيس موز" }, price: { en: "130 EGP", ar: "130 جنيه" }, img: "src/images/iced_banan.webp" },
        { name: { en: "Iced Chocolate Bar", ar: "آيس شوكولاتة بار" }, price: { en: "130 EGP", ar: "130 جنيه" }, img: "src/images/iced_chocolate_bar.webp" },
        { name: { en: "Iced Watermelon", ar: "آيس بطيخ" }, price: { en: "130 EGP", ar: "130 جنيه" }, img: "src/images/iced_watermelon.webp" },
        { name: { en: "Iced Pop Corn", ar: "آيس فشار" }, price: { en: "130 EGP", ar: "130 جنيه" }, img: "src/images/iced_pop_corn.webp" },
        { name: { en: "Iced Toffee Crunch", ar: "آيس توفي كرنش" }, price: { en: "130 EGP", ar: "130 جنيه" }, img: "src/images/iced_toffee_crunch.webp" },
        { name: { en: "Iced Delce", ar: "آيس ديليتشي" }, price: { en: "130 EGP", ar: "130 جنيه" }, img: "src/images/iced_delce.webp" },
      ],
      4: [
        { name: { en: "Classic Tea", ar: "شاي" }, price: { en: "45 EGP", ar: "45 جنيه" }, img: "src/images/classic_tea.webp" },
        { name: { en: "Turkish S Coffe", ar: "قهوة تركي سنجل" }, price: { en: "45 EGP", ar: "45 جنيه" }, img: "src/images/turkish_coffe.webp" },
        { name: { en: "Mint Green", ar: "شاي نعناع اخضر" }, price: { en: "40 EGP", ar: "40 جنيه" }, img: "src/images/mint_green.webp" },
        { name: { en: "Turkish D Coffe", ar: "قهوة تركي دابل" }, price: { en: "65 EGP", ar: "65 جنيه" }, img: "src/images/turkish_coffe.webp" },
        { name: { en: "Strawberry Tea", ar: "شاي فراولة" }, price: { en: "40 EGP", ar: "40 جنيه" }, img: "src/images/strawberry_tea.webp" },
        { name: { en: "French Coffe", ar: "قهوة فرنساوي" }, price: { en: "55 EGP", ar: "55 جنيه" }, img: "src/images/french_coffe.webp" },
        { name: { en: "Peach & Passion Fruit Tea", ar: "شاي خوخ باشون " }, price: { en: "40 EGP", ar: "40 جنيه" }, img: "src/images/passion_fruit_tea.webp" },
        { name: { en: "Hazelnut French Coffe", ar: "قهوة فرنساوي بندق" }, price: { en: "70 EGP", ar: "70 جنيه" }, img: "src/images/hazelnut_french_coffe.webp" },
        { name: { en: "Mango Tea", ar: "شاي مانجا" }, price: { en: "40 EGP", ar: "40 جنيه" }, img: "src/images/mango_tea.webp" },
        { name: { en: "Caramel French Coffe", ar: "قهوة فرنساوي كراميل" }, price: { en: "70 EGP", ar: "70 جنيه" }, img: "src/images/caramel_french_coffe.webp" },
        { name: { en: "Raspberry Indulgence Tea", ar: "شاي راز بيري" }, price: { en: "40 EGP", ar: "40 جنيه" }, img: "src/images/raspberry_tea.webp" },
        { name: { en: "French Vanilla Coffe", ar: "قهوة  فرنساوي فايليا" }, price: { en: "70 EGP", ar: "70 جنيه" }, img: "src/images/french_vanilla_coffe.webp" },
        { name: { en: "Hot Cider", ar: "هوت سيدر" }, price: { en: "75 EGP", ar: "75 جنيه" }, img: "src/images/hot_cider.webp" },
        { name: { en: "Hot Chocolate", ar: "هوت شوكلت" }, price: { en: "100 EGP", ar: "100 جنيه" }, img: "src/images/hot_chocolate.webp" },
      ],
      5: [
        { name: { en: "ُEspresso S", ar: "اسبريسو سنجل" }, price: { en: "65 EGP", ar: "65 جنيه" }, img: "src/images/espresso_s.webp" },
        { name: { en: "Espresso D", ar: "اسبريسو دابل" }, price: { en: "100 EGP", ar: "100 جنيه" }, img: "src/images/espresso_d.webp" },
        { name: { en: "Latte", ar: "لاتيه" }, price: { en: "90 EGP", ar: "90 جنيه" }, img: "src/images/latte.webp" },
        { name: { en: "Cappuccino", ar: "كابتشينو" }, price: { en: "85 EGP", ar: "85 جنيه" }, img: "src/images/cappuccino.webp" },
        { name: { en: "Flat White", ar: "فلات وايت" }, price: { en: "80 EGP", ar: "80 جنيه" }, img: "src/images/flat_white.webp" },
        { name: { en: "Macchiato", ar: "ماكياتو" }, price: { en: "60 EGP", ar: "60 جنيه" }, img: "src/images/macchiato.webp" },
        { name: { en: "Caramel Macchiato", ar: "ماكياتو كراميل" }, price: { en: "135 EGP", ar: "135 جنيه" }, img: "src/images/caramel_macchiato.webp" },
        { name: { en: "Mocha", ar: "موكا" }, price: { en: "120 EGP", ar: "120 جنيه" }, img: "src/images/mocha.webp" },
        { name: { en: "Americano", ar: " اميركانو" }, price: { en: "70 EGP", ar: "70 جنيه" }, img: "src/images/americano.webp" },
        { name: { en: "Triestino", ar: "تريستينو" }, price: { en: "65 EGP", ar: "65 جنيه" }, img: "src/images/triestino.webp" },
        { name: { en: "Spanish Latte", ar: "سبانش لاتيه" }, price: { en: "100 EGP", ar: "100 جنيه" }, img: "src/images/spanish_latte.webp" },
      ],
      
      7: [
        { name: { en: "Passion", ar: "باشون" }, price: { en: "120 EGP", ar: "120 جنيه" }, img: "src/images/smoothie_passion.webp" },
        { name: { en: "Strawberry", ar: "فراولة" }, price: { en: "120 EGP", ar: "120 جنيه" }, img: "src/images/smoothie_strawberry.webp" },
        { name: { en: "Mango", ar: "مانجو" }, price: { en: "120 EGP", ar: "120 جنيه" }, img: "src/images/smoothie_mango.webp" },
        { name: { en: "Blueberry", ar: "بلوبيري" }, price: { en: "120 EGP", ar: "120 جنيه" }, img: "src/images/smoothie_blueberry.webp" },
        { name: { en: "Lemon mint", ar: "ليمون نعناع" }, price: { en: "85 EGP", ar: "85 جنيه" }, img: "src/images/smoothie_lemon_mint.webp" },
        { name: { en: "Kiwi ", ar: "كيوي " }, price: { en: "120 EGP", ar: "120 جنيه" }, img: "src/images/smoothie_kiwi.webp" },
        { name: { en: "Peach", ar: "خوخ" }, price: { en: "120 EGP", ar: "120 جنيه" }, img: "src/images/smoothie_peach.webp" },
      ],
    
      8: [
        { name: { en: "Green Apple", ar: "تفاح أخضر" }, price: { en: "120 EGP", ar: "120 جنيه" }, img: "src/images/green_apple.webp" },
        { name: { en: "7 On The Beach", ar: "سيفن اون ذا بيتش" }, price: { en: "120 EGP", ar: "120 جنيه" }, img: "src/images/7_on_the_beach.webp" },
        { name: { en: "Classic", ar: "كلاسيك" }, price: { en: "90 EGP", ar: "90 جنيه" }, img: "src/images/classic.webp" },
        { name: { en: "Passion", ar: "باشن" }, price: { en: "120 EGP", ar: "120 جنيه" }, img: "src/images/passion.webp" },
        { name: { en: "Pomegranate", ar: "رمان" }, price: { en: "120 EGP", ar: "120 جنيه" }, img: "src/images/pomegranate.webp" },
        { name: { en: "Watermelon", ar: "بطيخ" }, price: { en: "120 EGP", ar: "120 جنيه" }, img: "src/images/watermelon.webp" },
        { name: { en: "Strawberry", ar: "فراولة" }, price: { en: "120 EGP", ar: "120 جنيه" }, img: "src/images/strawberry.webp" },
        { name: { en: "Red Bull", ar: "ريد بول" }, price: { en: "100 EGP", ar: "100 جنيه" }, img: "src/images/red_bull.webp" },
        { name: { en: "Kiwi", ar: "كيوي" }, price: { en: "120 EGP", ar: "120 جنيه" }, img: "src/images/kiwi.webp" },
        { name: { en: "Blueberry", ar: "توت أزرق" }, price: { en: "120 EGP", ar: "120 جنيه" }, img: "src/images/blueberry.webp" },
        { name: { en: "Cerise Cherry", ar: "كرز سيريز" }, price: { en: "120 EGP", ar: "120 جنيه" }, img: "src/images/cerise_cherry.webp" },
      ],
      9: [
        { name: { en: "Iced Chocolate", ar: "آيس شوكولاتة" }, price: { en: "120 EGP", ar: "120 جنيه" }, img: "src/images/iced_chocolate.webp" },
        { name: { en: "Iced Caramel", ar: "آيس كراميل" }, price: { en: "130 EGP", ar: "130 جنيه" }, img: "src/images/iced_caramel.webp" },
        { name: { en: "Iced Strawberry", ar: "آيس فراولة" }, price: { en: "130 EGP", ar: "130 جنيه" }, img: "src/images/iced_strawberry.webp" },
        { name: { en: "Iced Blueberry", ar: "آيس توت أزرق" }, price: { en: "130 EGP", ar: "130 جنيه" }, img: "src/images/iced_blueberry.webp" },
        { name: { en: "Salted Caramel Iced", ar: "آيس كراميل مملح" }, price: { en: "100 EGP", ar: "100 جنيه" }, img: "src/images/salted_caramel_iced.webp" },
      ],
      10: [
        { name: { en: "Strawberry", ar: "فراولة" }, price: { en: "180 EGP", ar: "180 جنيه" }, img: "src/images/milk_shake_strawberry.webp" },
        { name: { en: "Mango", ar: "مانجو" }, price: { en: "180 EGP", ar: "180 جنيه" }, img: "src/images/milk_shake_mango.webp" },
        { name: { en: "Chocolate", ar: "شوكليت" }, price: { en: "150 EGP", ar: "150 جنيه" }, img: "src/images/milk_shake_chocalete.webp" },
        { name: { en: "Blueberry", ar: " بلوبيري" }, price: { en: "150 EGP", ar: "150 جنيه" }, img: "src/images/milk_shake_blueberry.webp" },
        { name: { en: "Vanilla", ar: "فينيليا" }, price: { en: "150 EGP", ar: "150 جنيه" }, img: "src/images/milk_shake_vanilla.webp" },
        { name: { en: "Nutella", ar: "نوتيلا" }, price: { en: "150 EGP", ar: "150 جنيه" }, img: "src/images/milk_shake_nutella.webp" },
        { name: { en: "Lotus", ar: "لوتس" }, price: { en: "150 EGP", ar: "150 جنيه" }, img: "src/images/milk_shake_lotus.webp" },
        { name: { en: "Pistachio", ar: "بيستاشيو" }, price: { en: "200 EGP", ar: "200 جنيه" }, img: "src/images/milk_shake_pistachio.webp" },
        { name: { en: "Oreo", ar: "اوريو" }, price: { en: "150 EGP", ar: "150 جنيه" }, img: "src/images/milk_shake_oreo.webp" },
      ],
      11: [
        { name: { en: "Toffee Crunch", ar: "توفي كرنش" }, price: { en: "130 EGP", ar: "130 جنيه" }, img: "src/images/frappe_toffee_crunch.webp" },
        { name: { en: "Delce", ar: "ديليتشي" }, price: { en: "130 EGP", ar: "130 جنيه" }, img: "src/images/frappe_delce.webp" },
        { name: { en: "Pop Corn", ar: "فشار" }, price: { en: "130 EGP", ar: "130 جنيه" }, img: "src/images/frappe_pop_corn.webp" },
        { name: { en: "Coffee", ar: "قهوة" }, price: { en: "120 EGP", ar: "120 جنيه" }, img: "src/images/frappe_coffee.webp" },
        { name: { en: "Caramel", ar: "كراميل" }, price: { en: "130 EGP", ar: "130 جنيه" }, img: "src/images/frappe_caramel.webp" },
        { name: { en: "Mocha", ar: "موكا" }, price: { en: "130 EGP", ar: "130 جنيه" }, img: "src/images/frappe_mocha.webp" },
        { name: { en: "Lotus", ar: "لوتس" }, price: { en: "140 EGP", ar: "140 جنيه" }, img: "src/images/frappe_lotus.webp" },
        { name: { en: "White Chocolate", ar: "شوكولاتة بيضاء" }, price: { en: "135 EGP", ar: "135 جنيه" }, img: "src/images/frappe_white_chocolate.webp" },
        { name: { en: "Irish Cream", ar: "آيريش كريم" }, price: { en: "130 EGP", ar: "130 جنيه" }, img: "src/images/frappe_irish_cream.webp" },
      ],
      12: [
        { name: { en: "Espresso", ar: "إسبريسو" }, price: { en: "30 EGP", ar: "30 جنيه" }, img: "src/images/addition_espresso.webp" },
        { name: { en: "Milk", ar: "حليب" }, price: { en: "20 EGP", ar: "20 جنيه" }, img: "src/images/addition_milk.webp" },
        { name: { en: "Whipped Cream", ar: "كريمة مخفوقة" }, price: { en: "25 EGP", ar: "25 جنيه" }, img: "src/images/addition_whipped_cream.webp" },
        { name: { en: "Flavors", ar: "نكهات" }, price: { en: "20 EGP", ar: "20 جنيه" }, img: "src/images/addition_flavors.webp" },
        { name: { en: "BOBA", ar: "بوبا" }, price: { en: "25 EGP", ar: "25 جنيه" }, img: "src/images/addition_boba.webp" },
        { name: { en: "Sauce", ar: "صلصة" }, price: { en: "25 EGP", ar: "25 جنيه" }, img: "src/images/addition_sauce.webp" },
      ],
      13: [
        { name: { en: "Ice Matcha", ar: "ايس ماتشا" }, price: { en: "95 EGP", ar: "95 جنيه" }, img: "src/images/ice_matcha.webp" },
        { name: { en: "Matcha Frappuccino", ar: "ماتشا فرابي" }, price: { en: "90 EGP", ar: "90 جنيه" }, img: "src/images/matcha_frapi.webp" },
        { name: { en: "Matcha Cappuccino", ar: " كابتشينو ماتشا" }, price: { en: "90 EGP", ar: "90 جنيه" }, img: "src/images/match_cappuccino.webp" },
        { name: { en: "Hot Matcha", ar: "هوت ماتشا" }, price: { en: "65 EGP", ar: "65 جنيه" }, img: "src/images/hot_matcha.webp" },
      ],
      14: [
        { name: { en: "Cold Brew", ar: "كولد برو" }, price: { en: "130 EGP", ar: "130 جنيه" }, img: "src/images/cold_brew.webp" },
        { name: { en: "V60", ar: "V60" }, price: { en: "120 EGP", ar: "120 جنيه" }, img: "src/images/v60.webp" },
        { name: { en: "Chmex", ar: "كيمكس" }, price: { en: "120 EGP", ar: "120 جنيه" }, img: "src/images/chmex.webp" },
        { name: { en: "French Press", ar: "فرنش بريس" }, price: { en: "120 EGP", ar: "120 جنيه" }, img: "src/images/french_press.webp" },
        { name: { en: "Syphon", ar: "سايفون" }, price: { en: "120 EGP", ar: "120 جنيه" }, img: "src/images/syphon.webp" },
      ],
    };

    const allProducts = Object.values(products).flat(); // دمج جميع المنتجات

// فلترة المنتجات بناءً على نص البحث (جميع المنتجات دائمًا)
const searchFilteredProducts = allProducts.filter((product) =>
  product.name[language].toLowerCase().includes(searchText.toLowerCase())
);

// تحديد المنتجات التي يتم عرضها بناءً على التصنيف
// const categoryFilteredProducts =
//   selectedCategory === 1 || selectedCategory === null
//     ? allProducts
//     : products[selectedCategory] || [];


const categoryFilteredProducts =
  selectedCategory === 2 || selectedCategory === null
    ? products[2]
    : products[selectedCategory] || [];

// تحديد المنتجات التي ستُعرض في الواجهة
const displayedProducts =
  searchText.length > 0 ? searchFilteredProducts : categoryFilteredProducts;

return (
  <>
    {/* مربع البحث */}
    <div className='search-container'>
    <input className='search-input'
      type="text"
      placeholder={language === "en" ? "Search products..." : "ابحث عن المنتجات..."}
      value={searchText}
      onChange={(e) => setSearchText(e.target.value)} // تحديث نص البحث
    />
</div>
    {/* عرض المنتجات */}
    <div className="product-par">
      {displayedProducts.length > 0 ? (
        displayedProducts.map((product, index) => (
          <div style={{marginBottom:"5px"}}  key={index}>
          <div 
          
            style={{ backgroundImage: `url(${product.img})` }}
            key={index}
            className="product"
          >
            </div>
            <div  style={{
    // backgroundColor: index % 2 === 0 ? "#c9e9d2d6" : "#FFE3E3",  
    backgroundColor: "#ffffff", 
    borderRadius: "10px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "132px",
    height: "66px",
   
  }}> 
            <p style={{fontFamily:"Dancing Script",textAlign:"center",lineHeight:"normal",padding:"0px 4px 4px 4px"}}>{product.name[language]}</p>
            <p style={{fontFamily:"Dancing Script",textAlign:"center",padding:"4px 0 0 0"}}>{product.price[language]}</p>
          </div>
            </div>
        ))
      ) : (
        <div>
        
        <p style={{display:"grid", gridTemplateColumns:"1fr",fontSize:"29px", margin:"59px -160px 72px 100px",color:"#ffffff"}}>{language === "en" ? "No products found" : "لا توجد منتجات"}</p>
        </div>
      )}
    </div>
  </>
);

}

export default Products



















