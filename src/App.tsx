
import { BrowserRouter, Routes, Route } from 'react-router';
import LayoutMain from './pages/layoutMain';
import PageComponents from './pages/page-components';
import PageHome from './pages/page-home';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<LayoutMain />}>
          <Route index element={<PageHome />} />
          <Route path="/components" element={<PageComponents />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}


