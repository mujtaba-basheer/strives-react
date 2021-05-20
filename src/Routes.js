import React, { lazy, Suspense } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import { useSelector } from "react-redux";
const Home = lazy(() => import("./pages/Home"));
/* Login */
const Login = lazy(() => import("./pages/Login"));
const Register = lazy(() => import("./pages/Register"));
const ForgotPassword = lazy(() => import("./pages/ForgotPassword"));
/* User Details */
const MyAccount = lazy(() => import("./pages/User/MyAccount"));
const ChangePassword = lazy(() => import("./pages/User/ChangePassword"));
const ManageAddress = lazy(() => import("./pages/User/ManageAddress"));
const Wishlist = lazy(() => import("./pages/User/Wishlist"));
const Checkout = lazy(() => import("./pages/Checkout"));
const ExpressCheckout = lazy(() => import("./pages/ExpressCheckout"));
/* Product Pages */
const AllProduct = lazy(() => import("./pages/Product/AllProduct"));
const SingleProduct = lazy(() => import("./pages/Product/SingleProduct"));
const Cart = lazy(() => import("./pages/Cart"));
const MyOrders = lazy(() => import("./pages/User/MyOrders"));
const Category = lazy(() => import("./pages/Product/Category"));
const SingleCategory = lazy(() => import("./pages/Product/SingleCategory"));
const Collections = lazy(() => import("./pages/Product/Collections"));
const SingleCollection = lazy(() => import("./pages/Product/SingleCollection"));
const Occassions = lazy(() => import("./pages/Product/Occassions"));
const Festivals = lazy(() => import("./pages/Product/Festivals"));
/* Extra Pages */
const PrivacyPolicy = lazy(() => import("./pages/Extra/PrivacyPolicy"));
const TnC = lazy(() => import("./pages/Extra/TnC"));
const ThankYou = lazy(() => import("./pages/Extra/ThankYou"));
const OrderConfirmation = lazy(() => import("./pages/Extra/OrderConfirmation"));

/* let token = getToken(); */

const ProtectedRoute = ({ ...props }) => {
  const { userInfo } = useSelector((state) => state.userLogin);
  console.log(userInfo);
  return userInfo ? <Route {...props} /> : <Redirect to="/login" />;
};

const Routes = () => {
  return (
    <Router>
      <Suspense fallback={<div>Page is Loading...</div>}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/forgot" component={ForgotPassword} />
          <ProtectedRoute exact path="/my-account" component={MyAccount} />
          <ProtectedRoute exact path="/my-orders" component={MyOrders} />
          <ProtectedRoute
            exact
            path="/change-password"
            component={ChangePassword}
          />
          <ProtectedRoute
            exact
            path="/manage-address"
            component={ManageAddress}
          />
          <ProtectedRoute exact path="/wishlist" component={Wishlist} />
          <ProtectedRoute exact path="/checkout" component={Checkout} />
          <Route exact path="/express-checkout" component={ExpressCheckout} />
          <Route exact path="/cart" component={Cart} />
          <Route exact path="/products" component={AllProduct} />
          <Route exact path="/occassions/:categoryid" component={Occassions} />
          <Route exact path="/festivals/:categoryid" component={Festivals} />
          <Route exact path="/products/:id" component={SingleProduct} />
          <Route exact path="/collections" component={Collections} />
          <Route exact path="/collections/:id" component={SingleCollection} />
          {/* <Route exact path="/products/:id" component={SingleProduct} /> */}
          <Route exact path="/category/:categoryid" component={Category} />
          <Route
            exact
            path="/category/:categoryid/:subcategoryid"
            component={SingleCategory}
          />
          <Route exact path="/privacy-policy" component={PrivacyPolicy} />
          <Route exact path="/terms-and-conditions" component={TnC} />
          <Route exact path="/thankyou" component={ThankYou} />
          <Route exact path="/checkorder" component={OrderConfirmation} />
        </Switch>
      </Suspense>
    </Router>
  );
};

export default Routes;
