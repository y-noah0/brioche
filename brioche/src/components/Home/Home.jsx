import About from "./About/About";
import Navigation from "./Nav/Navigation";
import Drinks from "./Drinks/drinks";
import Header from "./Header/Header";
import Contact from "./Contacts/contacts";
import Description from "./Description/Description";


function Home(){
    return(
        <>
            <Navigation />
            <Header />
            <Description />
            <Drinks />
            <Contact />
            <About />
        </>
    )
}

export default Home;