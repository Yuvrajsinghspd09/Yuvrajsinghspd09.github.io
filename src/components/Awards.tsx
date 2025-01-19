import React from "react";
import { Award } from "lucide-react";

const Awards = () => {
  return (
    <div className="bento-card col-span-3">
      <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
        <Award className="w-6 h-6 text-yellow-400" />
        Honors & Awards
      </h2>
      <div className="p-6 bg-card-hover rounded-lg">
        <h3 className="text-xl font-bold mb-3 text-[#37A1D7]">American Express Campus Challenge 2024</h3>
        <p className="text-gray-300">
          Ranked in Top 20 for showcasing product mindset and data analytics skills to analyze match performances and
          provide insights.
        </p>
      </div>
    </div>
  );
};

export default Awards;