import "./HomeStyle.css"



export const CategoryFilter = ({Categories,selectedCategory,setSelectedCategory}) => {
    
    const handleCategoryChange = (category) => {
        setSelectedCategory(category)
    }

    return(
        <div className="flex justify-center items-center flex-col my-5">
            <select
            value={selectedCategory}
            onChange={(e) => handleCategoryChange(e.target.value)}
            className="w-full max-w-[400px] p-2.5 text-[16px] border border-gray-300 rounded-lg bg-gray-100 text-gray-800 outline-none transition focus:border-blue-500 sm:w-[90%] sm:text-[14px] xs:w-full xs:text-[12px]"
            >
                <option value="">All Categories</option>
                {Categories.map((category) => (
                    <option value={category} className="text-[16px] text-gray-800">
                        {category}
                    </option>
                ))}
            </select>
        </div>
    )

    
}
