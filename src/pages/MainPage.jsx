import Header from "../components/Header";
import Introduce from "../components/Introduce";
import Gallery from "../components/Gallery";
import Footer from "../components/Footer";
export default function MainPage(){
    return(
        <div className="w-screen h-screen overflow-x-hidden">
            <Header />
            <Introduce />
            <Gallery />
            <Footer />
        </div>
    )
}