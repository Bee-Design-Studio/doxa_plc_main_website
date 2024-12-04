import {Route, Routes} from "react-router";
import {Home} from "./Pages/Home.tsx";
import {ReactElement} from "react";
import {Team} from "./Pages/Team.tsx";
import {Work} from "./Pages/Work.tsx";
import Services from "./Pages/Services.tsx";
import {Prices} from "./Pages/Prices.tsx";
import About from "./Pages/About.tsx";
import Contact from "./Pages/Contact.tsx";

function App(): ReactElement {
    
    return (
        <Routes>
            <Route index element={<Home/>}/>
            <Route path='/services' element={<Services/>}/>
            <Route path='/prices' element={<Prices/>}/>
            <Route path='/team' element={<Team />} />
            <Route path='/works' element={<Work />} />
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='*' element={<Home/>}/>
        </Routes>
    )
}

export default App
