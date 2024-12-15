
import { useState } from 'react'
import './App.css'
// import Categories from './components/Categories'
import Header from './components/Header'
import Landing from './components/Landing'
import Text from './components/Text'
// import Products from './components/Products'
const ProductsLazyLoading = React.lazy(() => import("./components/Products"));
const CategoriesLazyLoading = React.lazy(() => import("./components/Categories"));


function App() {
  const [selectedCategory, setSelectedCategory] = useState(null)
  const [searchText, setSearchText] = useState(""); // نص البحث
  const [language, setLanguage] = useState("en"); 
  const toggleLanguage = () => {
    setLanguage((prevLang) => (prevLang === "en" ? "ar" : "en"));}

  return (
    <>
      <Header toggleLanguage={toggleLanguage}  language={language} />
      <Landing/>
      <Text language={language}/>
      <React.Suspense fallback="loading...">
      <CategoriesLazyLoading selectedCategory ={selectedCategory} setSelectedCategory ={setSelectedCategory}
       language={language}/>
       
    </React.Suspense>
    <React.Suspense fallback="loading...">
      <ProductsLazyLoading searchText={searchText} setSearchText={setSearchText} selectedCategory = {selectedCategory} setSelectedCategory ={setSelectedCategory}  language={language}/>

    </React.Suspense>
    </>
  )
}

export default App
