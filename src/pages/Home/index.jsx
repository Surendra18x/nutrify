import ProductList from "./Components/ProductList";
import SearchBar from "./Components/SearchBar";
import useProductList from "../../services/openFoodFactsAPI";
import { CategoryFilter } from "./Components/CategoryFilter";

export const Home = () => {
  const {
    products,
    isLoading,
    searchProducts,
    input,
    setInput,
    searchByBarcode,
    barcode,
    setBarcode,
    setIsLoading,
    setPage,
    hasMore,
    Categories,
    selectedCategory,
    setSelectedCategory,
  } = useProductList();

  return (
    <>
      <div className="min-h-screen">
        <header className="flex justify-between gap-8 px-32 py-16 bg-[url('https://static.vecteezy.com/system/resources/previews/047/022/332/non_2x/fresh-ingredients-arranged-around-black-wooden-surface-free-photo.jpeg')] bg-center mb-5">
          <div className="flex flex-col gap-4">
            <h1 className="m-0 text-[90px] text-white">
              Nutri<span className="text-[#28a745]">Fy</span>
            </h1>
            <p className="text-[#DADADA] text-xl mt-0">Know what you are eating...</p>
            <p className="text-white text-lg font-bold mt-0 font-[Orienta,sans-serif]">“The doctor of the future will no longer treat <br/>the human frame with drugs, but rather will cure <br/> and prevent disease with nutrition.”<br/>
            <span className="text-[#99c7f8] font-medium font-[Orienta,sans-serif]">– Thomas Edison</span> </p>
          </div>
          <div>
            <div className="flex flex-col gap-4 w-[40vh]">
              <SearchBar
                text={input}
                setText={setInput}
                onSubmit={() => searchProducts(input)}
                placeholder={"Search by product name..."}
              />
              <SearchBar
                text={barcode}
                setText={setBarcode}
                onSubmit={() => searchByBarcode(barcode)}
                placeholder={"Search by barcode..."}
              />

              <CategoryFilter
                Categories={Categories}
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
              />
            </div>
          </div>
        </header>
        <div>
        <ProductList
          products={products}
          isLoading={isLoading}
          setPage={setPage}
          hasMore={hasMore}
        />
        </div>
      </div>

      <footer className="flex flex-col justify-center text-white p-6 w-full bg-[#87CEFA]">
        <div className="flex justify-center items-center">
          A collaborative, free and open database of food products from around
          the world.
        </div>
      </footer>
    </>
  );
};
