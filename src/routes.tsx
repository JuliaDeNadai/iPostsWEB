import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';
import Home from './pages/Home/home';

function Router() {
  return (
    <BrowserRouter basename={"/iPosts"}>
      
      <Routes>
        <Route path="/" element={<Home />}/>

      </Routes>
      
    </BrowserRouter>
  )
}

export default Router