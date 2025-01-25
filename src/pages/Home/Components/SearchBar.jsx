import React,{useState} from 'react';



const SearchBar = ({
  text,
  setText,
  placeholder,
  onSubmit,
  buttonText = "Search",
}) => {
  const handleChange = (e) => {
    const value = e.target.value;
    setText(value);
  };

  const onKeyPress = (e) => {
    if (e.key === "Enter") {
      onSubmit();
    }
  };

  return (
    <div className="flex justify-center items-center gap-2.5">
      <input
        type="text"
        placeholder={placeholder}
        value={text}
        onChange={handleChange}
        onKeyDown={onKeyPress}
        className="w-full p-1 sm:p-4 md:p-3 border border-[#ccc] rounded-md text-base transition-colors duration-300 focus:border-[#007bff] focus:outline-none"
      />
      <button className="bg-[#007bff] max-w-[90px] text-white p-3 px-5 border-none rounded-md cursor-pointer text-base transition-colors duration-300 hover:bg-[#0056b3] sm:max-w-[120px] md:max-w-[150px] lg:max-w-[180px]" onClick={onSubmit}>
        {buttonText}
      </button>
    </div>
  );
};

export default SearchBar;
