import { useEffect, lazy, Suspense } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";

import Spinner from "./components/spinner/spinner.component";

import { checkUserSession } from './store/user/user.actions'

const Home = lazy(() => import("./routes/home/home.component"))
const Authentication = lazy(() => import("./routes/authentication/authentication.component"))
const CheckoutPage = lazy(() => import("./routes/checkout/checkout.component"))
const Navigation = lazy(() => import("./routes/navigation/navigation.component"))
const Shop = lazy(() => import("./routes/shop/shop.component"))

const App = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(checkUserSession())
  }, [])
  
  return (
    <Suspense fallback={<Spinner />}>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="shop/*" element={<Shop />} />
          <Route path="auth" element={<Authentication />} />
          <Route path="checkout" element={<CheckoutPage />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
