import React, { Suspense } from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Header from "../src/Componets/Header";
import "./App.css";
const HomePage = React.lazy(() => import("./Pages/HomePage"));
const NextPage = React.lazy(() => import("./Pages/NextPage"));
const ArticleMobaileScreen = React.lazy(() => import("./Componets/MobaileScreen/ArticleMobaileScreen"));
const NewsMobaileCard = React.lazy(() => import("./Componets/MobaileScreen/NewsMobaileCard"));
const ArticlePageRoute = React.lazy(() => import("./Componets/Other/NewsAriticalPage"))
const DetailPage = React.lazy(() => import("./Componets/MobaileScreen/DetailPage"))
function App() {
  const currentPathname = window.location.pathname;
  const pathSegments = currentPathname.split('/');
  const lastIndex = pathSegments.pop() || 'defaultIndex';
  const path = `/ArticlePage/${lastIndex}`;

  return (
    <div className="App">
      <BrowserRouter>
        <Header
          isAuth={''}
          userCredits={''}
          setIsAuth={''}
        />
        <Suspense
          fallback={
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "75vh",
              }}
            >
              loading ....
            </div>
          }
        >
          <Routes>
            <Route path={path} element={<ArticlePageRoute />} />
            <Route path="/HomePage" element={<HomePage />} />
            <Route path="/NewsPage" element={<NextPage />} />
            <Route path="/HomePageM" element={<ArticleMobaileScreen />} />
            <Route path="/NewsPageM" element={<NewsMobaileCard />} />
            <Route path="/details/:id" element={<DetailPage />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
