import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Header from "./partials/Header";
import Main from "./partials/Main";
import Footer from "./partials/Footer";

import GalleryPage from "./pages/GalleryPage";
import BookDetailsPage from "./pages/BookDetailsPage";

export default function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />

        <Main>
          <Routes>
            <Route path="/" element={<GalleryPage />} />
            <Route
              path="/books/:id"
              element={<BookDetailsPage />}
            />
          </Routes>
        </Main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}