import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Productlist from "./pages/productlist/";
import Productcard from "./pages/productcard";
import ProductList from "./pages/Productimg";
import Productdetailpage from "./pages/productdetailpage";
import Comparisonlist from "./pages/comparisonlist/index";
import { QueryClient, QueryClientProvider } from "react-query";
const queryClient = new QueryClient();
{
}
function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/card" element={<Productlist />} />
            <Route path="/productcard" element={<Productcard />} />
            <Route path="/" element={<ProductList />} />
            <Route path="/productdetailpage" element={<Productdetailpage />} />
            <Route path="/comparelist" element={<Comparisonlist />} />
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </>
  );
}

export default App;
