import BackgroundHeader from "./BackgroundHeader";
import Footer from "./Footer";
import Header from "./Header";
import ItemList from "./ItemList";
import ItemsContextProvider from "../contexts/ItemsContextProvider";
import Sidebar from "./Sidebar";

export default function App() {
  return (
    <>
      <BackgroundHeader />
      <main>
        <ItemsContextProvider>
          <Header />
          <ItemList />
          <Sidebar />
        </ItemsContextProvider>
      </main>
      <Footer />
    </>
  );
}
