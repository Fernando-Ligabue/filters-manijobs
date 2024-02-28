import { Routes, Route } from 'react-router-dom';

import Home from './Home';
import SingleJob from './SingleJob';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/jobs/:id" element={<SingleJob />} />
        <Route path="*" element={<div>Page not found</div>} />
      </Routes>
    </>
  )

}

export default App
