import { createContext, useContext } from "react";

const TemplateContext = createContext(null);

const TemplateProvider = ({ children }) => {

  return (
    <TemplateContext.Provider value={{}}>
      {children}
    </TemplateContext.Provider>
  );
};

const useTemplate = () => {
  const context = useContext(TemplateContext);
  if (!context) {
    throw new Error("useTemplate must be used within an TemplateProvider");
  }
  return context;
};

export { TemplateProvider, useTemplate };
