function Tab({ selectedCategory, category, handleTabClick }) {
    if (selectedCategory === category._id) {
        return (
            <button className="border px-2 py-1 rounded-md bg-[#edeef1]" onClick={() => handleTabClick(category._id)}>
              {category.name}
            </button>
          );
    }
  return (
    <button className="border px-2 py-1 rounded-md border-[#edeef1]" onClick={() => handleTabClick(category._id)}>
      {category.name}
    </button>
  );
}
export default Tab;
