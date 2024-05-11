import React from "react";
import CategoryCard from "./CategoryCard";

// Example icons
import MarketingIcon from "../assets/marketing.png";
import UIDesignIcon from "../assets/Ui-UX.png";
import FinanceIcon from "../assets/finance.png";
import WebDevIcon from "../assets/web.png";
import ProjectManagementIcon from "../assets/project.png";
import BusinessIcon from "../assets/bisiness.png";
import GraphicDesignIcon from "../assets/graphics.png";
import VideoEditIcon from "../assets/video.png";

const Categories = () => {
  const categories = [
    { icon: MarketingIcon, title: "Marketing & Communication", jobCount: "89" },
    { icon: UIDesignIcon, title: "UI/UX Design", jobCount: "106" },
    { icon: FinanceIcon, title: "Finance Management", jobCount: "230" },
    { icon: WebDevIcon, title: "Web Development", jobCount: "100" },
    {
      icon: ProjectManagementIcon,
      title: "Project Management",
      jobCount: "87",
    },
    { icon: BusinessIcon, title: "Business & Consulting", jobCount: "23" },
    { icon: GraphicDesignIcon, title: "Graphic Designer", jobCount: "85" },
    { icon: VideoEditIcon, title: "Video Editor", jobCount: "120" },
  ];

  return (
    <div className="bg-cream p-8">
      <p className="text-lg font-bold text-center text-textcolor mb-6">
        Choose Categories
      </p>
      <h2 className="text-2xl font-bold text-center mb-6">Choose Categories</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {categories.map((category, index) => (
          <CategoryCard
            key={index}
            icon={category.icon}
            title={category.title}
            jobCount={category.jobCount}
          />
        ))}
      </div>
    </div>
  );
};

export default Categories;
