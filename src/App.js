import './App.css';
import {Route, BrowserRouter} from "react-router-dom";
import {Header} from "./components/Header";
import {Slider} from "./components/Slider";
import {Services} from "./components/Services";
import {Parallax} from "./components/Parallax";
import {Pricing} from "./components/Pricing";
import {Testimonials} from "./components/Testimonials";
import {Clients} from "./components/Clients";
import {Footer} from "./components/Footer";
import {Products} from "./components/Products";
import {PromoSection} from "./components/PromoSection";
import {Work} from "./components/Work";
import {Features} from "./components/Features";
import {About} from "./components/About";
import {Team} from "./components/Team";

function App() {
  return (
    <div>
        <BrowserRouter>
            <Header/>
            <Route exact path="/" component={()=><div>
                <Slider/>
                <Services/>
                <Products/>
                <Clients/>
                <Testimonials/>
                <Pricing/>
                <PromoSection/>
                <Work/>
                <Footer/>
            </div>}/>
            <Route path="/pricing" component={()=><div>
                <Parallax caruselTitle="PRODUCT PRICING" text="This is pricing page"/>
                <Pricing/>
                <Testimonials/>
                <Clients/>
                <Footer/>
            </div>}/>
            <Route path="/about"   component={()=><div>
                <Parallax caruselTitle="ABOUT US" text="This is about page"/>
                <Features/>
                <About/>
                <Services/>
                <Testimonials/>
                <Team/>
                <Footer/>
            </div>}/>
            <Route path="/products" component={()=><div>
                <Parallax caruselTitle="PRODUCTS" text="This is products page"/>
                <Products/>
                <Clients/>
                <PromoSection/>
                <Footer/>
            </div>}/>
            <Route path="/contact-us" component={
                ()=><div>Страница с контактами</div>
            }/>
        </BrowserRouter>
    </div>
  );
}

export default App;
