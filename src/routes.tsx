import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';
import Home from './pages/Home/home';
import Timeline from './pages/Timeline';

function Router() {
  return (
    <BrowserRouter basename={"/iPosts"}>
      
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/timeline" element={<Timeline />}/>

      </Routes>
      
    </BrowserRouter>
  )
}

export default Router