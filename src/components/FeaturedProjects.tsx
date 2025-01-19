import React from "react";
import { Code, ExternalLink } from "lucide-react";

const FeaturedProjects = () => {
  return (
    <div className="bento-card col-span-3">
      <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
        <Code className="w-6 h-6 text-purple-400" />
        Featured Projects
      </h2>
      <div className="grid grid-cols-2 gap-6">
        {/* NewsGuardian */}
        <div className="p-6 bg-card-hover rounded-lg hover:scale-105 transition-all duration-300 transform scale-85">
          <h3 className="text-xl font-bold mb-3 text-blue-300">NewsGuardian</h3>
          <p className="text-gray-300 mb-4">
            A tool for Reddit news discovery, summarization, and credibility analysis. Evaluates writing style, recency, poster reliability, and assigns trust scores.
          </p>
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="px-2 py-1 bg-blue-900/30 rounded-full text-blue-300 text-xs">PyTorch</span>
            <span className="px-2 py-1 bg-blue-900/30 rounded-full text-blue-300 text-xs">Transformers</span>
            <span className="px-2 py-1 bg-blue-900/30 rounded-full text-blue-300 text-xs">NLTK</span>
            <span className="px-2 py-1 bg-blue-900/30 rounded-full text-blue-300 text-xs">Reddit API</span>
          </div>
          <a href="https://github.com/Yuvrajsinghspd09/NewsGuardian" target="_blank" rel="noopener noreferrer"
             className="flex items-center text-blue-400 hover:text-blue-300">
            <ExternalLink className="w-4 h-4 mr-2" />
            View Project
          </a>
        </div>

        {/* ZenDeskify */}
        <div className="p-6 bg-card-hover rounded-lg hover:scale-105 transition-all duration-300 transform scale-85">
          <h3 className="text-xl font-bold mb-3 text-blue-300">ZenDeskify</h3>
          <p className="text-gray-300 mb-4">
            An intelligent IT Support Ticket System analyzing 100,000+ tickets. Features priority ranking, resolution time prediction, and IT owner assignment using ML and LLM models.
          </p>
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="px-2 py-1 bg-blue-900/30 rounded-full text-blue-300 text-xs">Python</span>
            <span className="px-2 py-1 bg-blue-900/30 rounded-full text-blue-300 text-xs">Pandas</span>
            <span className="px-2 py-1 bg-blue-900/30 rounded-full text-blue-300 text-xs">Scikit-learn</span>
            <span className="px-2 py-1 bg-blue-900/30 rounded-full text-blue-300 text-xs">Transformers</span>
            <span className="px-2 py-1 bg-blue-900/30 rounded-full text-blue-300 text-xs">Streamlit</span>
          </div>
          <a href="https://github.com/Yuvrajsinghspd09/ZenDeskify" target="_blank" rel="noopener noreferrer"
             className="flex items-center text-blue-400 hover:text-blue-300">
            <ExternalLink className="w-4 h-4 mr-2" />
            View Project
          </a>
        </div>

        {/* Invoice Similarity Checker */}
        <div className="p-6 bg-card-hover rounded-lg hover:scale-105 transition-all duration-300 transform scale-85">
          <h3 className="text-xl font-bold mb-3 text-purple-300">Invoice Similarity Checker</h3>
          <p className="text-gray-300 mb-4">
            An invoice comparison tool using NLP and computer vision techniques. Extracts text and structural features from PDFs, performs preprocessing and similarity analysis.
          </p>
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="px-2 py-1 bg-purple-900/30 rounded-full text-purple-300 text-xs">OpenCV</span>
            <span className="px-2 py-1 bg-purple-900/30 rounded-full text-purple-300 text-xs">PyPDF2</span>
            <span className="px-2 py-1 bg-purple-900/30 rounded-full text-purple-300 text-xs">scikit-learn</span>
            <span className="px-2 py-1 bg-purple-900/30 rounded-full text-purple-300 text-xs">spaCy</span>
          </div>
          <a href="https://github.com/Yuvrajsinghspd09/Document-Similarity-Matching" target="_blank" rel="noopener noreferrer"
             className="flex items-center text-purple-400 hover:text-purple-300">
            <ExternalLink className="w-4 h-4 mr-2" />
            View Project
          </a>
        </div>

        {/* ASL Recognizer */}
        <div className="p-6 bg-card-hover rounded-lg hover:scale-105 transition-all duration-300 transform scale-85">
          <h3 className="text-xl font-bold mb-3 text-green-300">ASL Recognizer</h3>
          <p className="text-gray-300 mb-4">
            A real-time American Sign Language recognition system using computer vision and deep learning to translate hand gestures into text, making communication more accessible.
          </p>
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="px-2 py-1 bg-green-900/30 rounded-full text-green-300 text-xs">TensorFlow</span>
            <span className="px-2 py-1 bg-green-900/30 rounded-full text-green-300 text-xs">MediaPipe</span>
            <span className="px-2 py-1 bg-green-900/30 rounded-full text-green-300 text-xs">OpenCV</span>
            <span className="px-2 py-1 bg-green-900/30 rounded-full text-green-300 text-xs">Deep Learning</span>
          </div>
          <a href="https://github.com/Yuvrajsinghspd09/ASL-Recognizer" target="_blank" rel="noopener noreferrer"
             className="flex items-center text-green-400 hover:text-green-300">
            <ExternalLink className="w-4 h-4 mr-2" />
            View Project
          </a>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProjects;