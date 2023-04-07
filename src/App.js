import logo from "./logo.svg";
import "./App.css";
import Home from "./LayOuts/Home/Home";
import { Route, Routes } from "react-router-dom";
import About from "./Components/About/About";
import Public from "./LayOuts/Home/Public";
import Contact from "./Components/Contact/Contact";
import MessengerCustomerChat from "react-messenger-customer-chat";
import Menu from "./Components/Menus/Menu";
import Cart from "./Components/Cart/Cart";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Public />}>
          <Route index element={<Home />} />
          <Route path="/gift-mart/HOME" element={<Home />} />
          <Route path="/gift-mart/ABOUT" element={<About />} />
          <Route path="/gift-mart/CONTACT" element={<Contact />} />
          <Route path="/gift-mart/Book" element={<Contact />} />
          <Route path="/gift-mart/PRODUCTS" element={<Menu/>} />
          <Route path="/gift-mart/CART" element={<Cart/>} />
        </Route>
      </Routes>
      <MessengerCustomerChat pageId="109320323737961" appId="536269208637866" />
    </>
  );
}

export default App;
