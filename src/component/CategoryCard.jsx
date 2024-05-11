import React from "react";

const CategoryCard = ({ icon, title, jobCount }) => {
  return (
    <div className="flex items-center bg-white rounded-[20px] p-2 md:p-4 shadow-md hover:bg-textcolor hover:text-white transition-colors duration-300">
      <img src={icon} alt={`${title} icon`} className="w-7 h-7 mr-2 md:mr-4" />
      <div>
        <h3 className="text-md md:text-lg font-semibold">{title}</h3>
        <p className="text-xs md:text-sm">{jobCount} jobs Available</p>
      </div>
    </div>
  );
};

export default CategoryCard;
