import Card from "./Card";
import Effect from "./Effect";
import Hooks from "./Hooks";

function App() {
  let pName = "Samsung S24 Ultra";

  // let data = [
  //   {
  //     title:"Samsung S24 Ultra",
  //     description : "This is s series of samsung",
  //     image : "https://www.celletronic.com/wp-content/uploads/2024/01/Samsung-Galaxy-S24-ULTRA-BLACK.jpg"
  //   },
  //   {
  //     title : "Iphone 15 Pro",
  //     description : "This is 15 series of apple",
  //     image : "https://tse4.mm.bing.net/th/id/OIP.nllcfnkWcA_a2ZRF7xtFDQHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
  //   },
  //   {
  //     title : "Google Pixel 9",
  //     description  : "This is pixel series of google",
  //     image : "https://static1.anpoimages.com/wordpress/wp-content/uploads/2024/08/google-pixel-9.png"
  //   },
  //   {
  //     title : "Poco",
  //     description : "This is Poco phone",
  //     image : "https://akm-img-a-in.tosshub.com/indiatoday/images/device/1683297893Poco-c51-blue-1-800x800_one_to_one.jpg?VersionId=93pTgPM4yvA0C8ms.2qZ_hR67OuKh6RV"
  //   },
  // ]

  return (
    <div className="container">
     {/* {
      data.map((item)=>{
        return (
          <Card title={item.title} description={item.description} image={item.image} />
        )
      })
     } */}
     <Hooks />
     <Effect />
    </div>
  )
}

export default App
