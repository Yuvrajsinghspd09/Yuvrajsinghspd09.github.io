import React from "react";
import { Mail, Github, Linkedin, Cpu } from "lucide-react";

const Connect = () => {
  return (
    <div className="bento-card">
      <h2 className="text-2xl font-bold mb-6">Let's Connect</h2>
      <div className="flex flex-col space-y-4">
        <a href="mailto:singhyuvrajf1@gmail.com" 
           className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-800 transition-colors">
          <Mail className="w-5 h-5 text-blue-400" />
          <span className="text-gray-300">Email</span>
        </a>
        <a href="https://github.com/Yuvrajsinghspd09" target="_blank" rel="noopener noreferrer" 
           className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-800 transition-colors">
          <Github className="w-5 h-5 text-purple-400" />
          <span className="text-gray-300">GitHub</span>
        </a>
        <a href="https://www.linkedin.com/in/yuvraj-singh09/" target="_blank" rel="noopener noreferrer"
           className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-800 transition-colors">
          <Linkedin className="w-5 h-5 text-blue-400" />
          <span className="text-gray-300">LinkedIn</span>
        </a>
        <a href="https://www.kaggle.com/yuvrajsinghspd09" target="_blank" rel="noopener noreferrer"
           className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-800 transition-colors">
          <Cpu className="w-5 h-5 text-green-400" />
          <span className="text-gray-300">Kaggle</span>
        </a>
      </div>
    </div>
  );
};

export default Connect;