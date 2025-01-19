import React from "react";

const Welcome = () => {
  return (
    <div className="bento-card col-span-2">
      <h2 className="text-sm text-purple-400 mb-2">welcome</h2>
      <h1 className="text-4xl font-bold mb-4">
        Hi, I'm <span className="text-blue-400">Yuvraj Singh</span>
      </h1>
      <p className="text-gray-300 text-lg">
        ML Enthusiast passionate about creating innovative solutions using Machine Learning, Deep Learning, Data Analysis, Artificial Intelligence, Natural Language Processing, and Large Language Models
      </p>
      <div className="mt-4 flex flex-wrap items-center gap-2">
        <span className="px-3 py-1 bg-purple-900/50 rounded-full text-purple-300 text-sm">Python</span>
        <span className="px-3 py-1 bg-blue-900/50 rounded-full text-blue-300 text-sm">TensorFlow</span>
        <span className="px-3 py-1 bg-green-900/50 rounded-full text-green-300 text-sm">Deep Learning</span>
        <span className="px-3 py-1 bg-red-900/50 rounded-full text-red-300 text-sm">Data Analysis</span>
        <span className="px-3 py-1 bg-yellow-900/50 rounded-full text-yellow-300 text-sm">AI</span>
        <span className="px-3 py-1 bg-indigo-900/50 rounded-full text-indigo-300 text-sm">NLP</span>
        <span className="px-3 py-1 bg-pink-900/50 rounded-full text-pink-300 text-sm">LLMs</span>
      </div>
    </div>
  );
};

export default Welcome;