import { useEffect, useState } from "react";

const ProductPage = () => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("");
  const [brand, setBrand] = useState("");
  const [priceRange, setPriceRange] = useState("");
  const [sortOrder, setSortOrder] = useState("");
  const [sortByDate, setSortByDate] = useState("");

  // Pagination States
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(8); // Number of items per page

  useEffect(() => {
    fetch("https://scic-job-task-server-side-ten.vercel.app/products")
      .then((res) => res.json())
      .then((result) => {
        setProducts(result);
      });
  }, []);

  const filteredProducts = products
    .filter((item) => item.name.toLowerCase().includes(searchTerm.toLowerCase()))
    .filter((item) => (category ? item.category === category : true))
    .filter((item) => (brand ? item.brand === brand : true))
    .filter((item) => {
      if (priceRange === "0-50") return item.price <= 50;
      if (priceRange === "50-100") return item.price > 50 && item.price <= 100;
      if (priceRange === "100-500") return item.price > 100 && item.price <= 500;
      return true;
    });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortOrder === "asc") return a.price - b.price;
    if (sortOrder === "desc") return b.price - a.price;
    if (sortByDate === "newest") return new Date(b.createdAt) - new Date(a.createdAt);
    return 0;
  });

  // Calculate pagination
  const indexOfLastProduct = currentPage * itemsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - itemsPerPage;
  const currentProducts = sortedProducts.slice(indexOfFirstProduct, indexOfLastProduct);
  const totalPages = Math.ceil(sortedProducts.length / itemsPerPage);

  return (
    <div className="contain px-2">
      <div className="mb-4 mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full gap-3 border-2 p-1 rounded-lg border-blue-600">
        <input
          type="text"
          placeholder="Search by product name..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="p-2 border rounded-md outline-none"
        />
        <select
          className="p-2 border rounded-md"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="">All Categories</option>
          <option value="Accessories">Accessories</option>
          <option value="Mobile">Mobile</option>
          <option value="Laptop">Laptop</option>
        </select>
        <select
          className="p-2 border rounded-md"
          value={brand}
          onChange={(e) => setBrand(e.target.value)}
        >
          <option value="">All Brands</option>
          <option value="NextGen">NextGen</option>
          <option value="TechCorp">TechCorp</option>
          <option value="GizmoPro">GizmoPro</option>
        </select>
        <select
          className="p-2 border rounded-md"
          value={priceRange}
          onChange={(e) => setPriceRange(e.target.value)}
        >
          <option value="">All Price Ranges</option>
          <option value="0-50">$0 - $50</option>
          <option value="50-100">$50 - $100</option>
          <option value="100-500">$100 - $500</option>
        </select>
        <select
          className="p-2 border rounded-md"
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
        >
          <option value="">Sort by Price</option>
          <option value="asc">Low to High</option>
          <option value="desc">High to Low</option>
        </select>
        <select
          className="p-2 border rounded-md"
          value={sortByDate}
          onChange={(e) => setSortByDate(e.target.value)}
        >
          <option value="">Sort by Date</option>
          <option value="newest">Newest First</option>
        </select>
      </div>
      <div className="w-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {currentProducts.map((item) => (
          <div className="bg-gray-100 border rounded-md shadow-sm p-2" key={item._id}>
            <div className="w-full h-44">
              <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
            </div>
            <h1 className="font-bold text-lg mt-2">Name: {item.name}</h1>
            <h1 className="">Description: {item.description}</h1>
            <h1 className="">Price: {item.price}$</h1>
            <h1 className="">Category: {item.category}</h1>
            <h1 className="">Rating: {item.ratings}</h1>
            <h1 className="">Date: {item.createdAt}</h1>
          </div>
        ))}
      </div>
      <div className="flex justify-center mb-5 mt-3">         
        <div className="pagination-controls mt-4">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="p-2 border rounded-md mr-2 bg-blue-600 text-white"           
          >
            Previous
          </button>
          <span>
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
            className="p-2 border rounded-md ml-2 bg-blue-600 text-white"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
