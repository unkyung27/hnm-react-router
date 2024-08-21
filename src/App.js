import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './component/Navbar';
import Login from './page/Login';
import ProductAll from './page/ProductAll';
import ProductDetail from './page/ProductDetail';

// 1. 전체상품페이지, 상세페이지, 로그인페이지
// 2. 전체 상품을 볼 수 있음
// 3. 로그인버튼 클릭 시 로그인페이지
// 4. 상세페이지 클릭 시 1)로그인O->상세페이지 / 2)로그인X->로그인페이지
// 5. 로그아웃 클릭 시 로그인페이지
// 6. 로그인버튼<->로그아웃버튼
// 7. 상품검색
function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<ProductAll />} />
        <Route path="/login" element={<Login />} />
        <Route path="/product/:id" element={<ProductDetail />} />
      </Routes>
    </div>
  );
}

export default App;
