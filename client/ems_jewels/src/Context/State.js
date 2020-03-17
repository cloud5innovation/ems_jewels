import React from "react";
import { AuthProvider } from './authContext';
import {UserContext} from './usersContext'

function ProviderComposer({ contexts, children }) {
  return contexts.reduceRight(
    (kids, parent) =>
      React.cloneElement(parent, {
        children: kids
      }),
    children
  );
}

function ContextProvider({ children }) {
  return (
    <ProviderComposer
      contexts={[
        <AuthProvider />,
        
        <UserContext/>
      ]}
    >
      {children}
    </ProviderComposer>
  );
}

export { ContextProvider };