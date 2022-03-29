/** import semua pages yang akan kita tampilkan */
import Student from './pages/student';
import Book from './pages/Book';
import Nilai from './pages/Nilai';
import Balok from './pages/Balok';
import Penjualan from './pages/Penjualan';
import Navbar from './components/Navbar';

import {BrowserRouter, Routes, Route} from "react-router-dom";

export default function App(){
  return(
    <BrowserRouter baseName="/my-react">
    {/* BrowserRouter -> element yang digunakan untuk mengatur 
    tampilan pada halaman web berdasarkan path atau URL yang ditentukan oleh user*/}
    <Navbar/>
    <Routes>
      {/* Routes -> grouping path-path atau URL yang didefinisikan */}
      <Route path="/balok" element={<Balok/>}/>
      <Route path="/book" element={<Book/>}/>
      <Route path="/nilai" element={<Nilai/>}/>
      <Route path="/student" element={<Student/>}/>
      <Route path="/penjualan" element={<Penjualan/>}/>
    </Routes>
    </BrowserRouter>
  )
}