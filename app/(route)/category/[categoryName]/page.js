import PerfumeSection from "./HelperComponent";

export async function generateMetadata({ params }) {
  const currCat = params.categoryName;
  let title ='';
  let description ='';
  if(currCat == "WOMEN'S-STYLE")
  {
     title = "Women 's Fragrance & Perfume Recommendations "
    description = "Find your perfect fragrance with Perfumetrics! Explore expert reviews and top women’s perfume picks to match every occasion and personality. Discover your signature scent today!"
    }
  else if (currCat != "WOMEN'S-STYLE")
  {
      title = "Men’s Perfumes: Masculine Fragrances, Reviews & Recommendations ";
      description = "Explore the best men’s perfumes at Perfumatrics! Discover masculine fragrances with expert reviews, top recommendations, and find your signature scent for any occasion"
  }
    return {
     title,
     description
  };
}


const page = ({params}) => {
  console.log("params",params);
  return (
    <div><PerfumeSection/></div>
  )
}

export default page