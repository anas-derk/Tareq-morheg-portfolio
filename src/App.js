import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";

const Home = lazy(() => import("./Pages/Home/index"));
const Windows11Form = lazy(() => import("./Pages/Windows11Loader/index"));
const Desktop = lazy(() => import("./Pages/Desktop/index"));
const PageNotFound = lazy(() => import("./Pages/404/index"));

function App() {
  return (
    <div className="App">
      <Suspense>
        <Routes>
          <Route path="/" element={<Home pageTitle="Tareq Morheg - Home" />}></Route>
          <Route path="/windows11-loader" element={<Windows11Form pageTitle="Tareq Morheg - Windows 11 Loader" />}></Route>
          <Route path="/desktop" element={<Desktop pageTitle="Tareq Morheg - Desktop" />}></Route>
          <Route path="*" element={<PageNotFound pageTitle="Page Not Found" />}></Route>
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;