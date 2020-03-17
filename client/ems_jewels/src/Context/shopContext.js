import React, { useEffect, useState } from "react";
import {createClient} from 'contentful';

export const ShopContext = React.createContext();
export const ShopProvider = ({ children }) => {
const [products, setProducts] = useState([]);
   const client = createClient({
       space: process.env.REACT_APP_SPACEID,
       accessToken:process.env.REACT_APP_ACCESS_TOKEN
       
   })

   useEffect(() => {
    client.getEntries()
    .then((res) => {
        console.log(res, 'contentful')
    })
    .catch(error => {
        console.log(error)
    })
  }, []);

    return (
      <ShopContext.Provider
        value={
            [products, setProducts]
         }
      >
        {/* <MarketContext.Provider value={[marketProfile, setMarketProfile]}>
        <VendorContext.Provider value={[vendorProfile, setVendorProfile]}> */}
          {children}
        {/* </VendorContext.Provider>
        </MarketContext.Provider> */}
      </ShopContext.Provider>
    );
  };