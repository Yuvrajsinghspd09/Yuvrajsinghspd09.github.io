import React from "react";
import { BookOpen } from "lucide-react";

const Education = () => {
  return (
    <div className="bento-card">
      <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
        <BookOpen className="w-6 h-6 text-blue-400" />
        Education
      </h2>
      <div className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold text-blue-300">Netaji Subhas University of Technology</h3>
          <p className="text-gray-400">Bachelor of Technology – Electrical Engineering</p>
          <p className="text-sm text-gray-500">Nov 2022 - present</p>
        </div>
      </div>
    </div>
  );
};

export default Education;