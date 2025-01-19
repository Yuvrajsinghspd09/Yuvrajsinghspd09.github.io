import React from "react";
import { Code } from "lucide-react";

const TechnicalSkills = () => {
  return (
    <div className="bento-card col-span-2">
      <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
        <Code className="w-6 h-6 text-purple-400" />
        Technical Skills
      </h2>
      <div className="grid grid-cols-2 gap-6">
        <div>
          <h3 className="text-lg font-semibold text-purple-300 mb-3">Languages</h3>
          <div className="flex flex-wrap gap-2">
            {["Python", "C++", "C"].map((skill) => (
              <span key={skill} className="px-3 py-1 bg-purple-900/30 rounded-full text-purple-300 text-sm">
                {skill}
              </span>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-blue-300 mb-3">Frameworks</h3>
          <div className="flex flex-wrap gap-2">
            {["Scikit", "Pandas", "Numpy", "TensorFlow", "Keras"].map((skill) => (
              <span key={skill} className="px-3 py-1 bg-blue-900/30 rounded-full text-blue-300 text-sm">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechnicalSkills;