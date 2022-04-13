import ProductsProvider from "./Context/ProductsContext/ProductsProvider";
import AppRoute from "./Router/AppRouter";
function App() {
  return (
    <>
      <ProductsProvider>
        <AppRoute/>
      </ProductsProvider>
    </>
  );
}

export default App;
