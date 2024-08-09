import About from "./About/About";
import Navigation from "./Nav/Navigation";
import Drinks from "./Drinks/drinks";
import Header from "./Header/Header";
import Description from "./Description/Description";
import Footer from "../Footer/Footer";
import Gallery from "./Gallery/Gallery";



function Home(){
    return(
        <>
            <Navigation />
            <Header />
            <Description />
            <Drinks />
            <About />
            <Gallery/>
            <Footer />

        </>
    )
}

export default Home;