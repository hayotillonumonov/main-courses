// Styles
import './MainCoursesItem.css'

// Images
import img1 from "./images/python_hero.svg";
import img2 from "./images/pyton-suniy-intellekt.svg";
import img3 from "./images/android.svg";
import img4 from "./images/frontend-reactJS.svg";
import img5 from "./images/node.svg";
import img6 from "./images/frontend.svg";
import img7 from "./images/reactJS.svg";
import img8 from "./images/suniy-intellekt.svg";

const images = [
    { src: img1, name: "Pyton Backend", alt: "pyton imege" },
    { src: img2, name: "Python Sun'iy intellekt", alt: "Python Suniy intellekt image",},
    { src: img3, name: "Android", alt: "android imege" },
    { src: img4, name: "Frontend ReactJS", alt: "frontend imegE" },
    { src: img5, name: "JavaScript NodeJS", alt: "javaScript NodeJS imege" },
    { src: img6, name: "Frontend videolar", alt: "frontend videolar imege" },
    { src: img7, name: "ReactJS", alt: "ReactJS" },
    { src: img8, name: "Sun'iy intellekt videolar", alt: "sun'iy intellekt videolar imege"}
]


function MainCoursesItem() {
  return (
    <div className='courses-items'>
        {images.map((item)=>{
            return <div>
            <img src={item.src} alt={item.alt}/>
            <p>{item.name}</p>
            </div>
        })}
    </div>
  )
}

export default MainCoursesItem