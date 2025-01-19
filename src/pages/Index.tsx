import { useState, useEffect } from "react";
import { 
  Github, Mail, Award, Cpu, BookOpen, Code, 
  ExternalLink, Linkedin, Phone, GitFork, GitPullRequest 
} from "lucide-react";

const Index = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-[#121212] text-white">
      <div className="bento-grid">
        <div className="bento-card col-span-2">
          <h2 className="text-sm text-purple-400 mb-2">welcome</h2>
          <h1 className="text-4xl font-bold mb-4">
            Hi, I'm <span className="text-blue-400">Yuvraj Singh</span>
          </h1>
          <p className="text-gray-300 text-lg">
            ML Enthusiast passionate about creating innovative solutions using Machine Learning and Deep Learning
          </p>
          <div className="mt-4 flex items-center gap-2">
            <span className="px-3 py-1 bg-purple-900/50 rounded-full text-purple-300 text-sm">Python</span>
            <span className="px-3 py-1 bg-blue-900/50 rounded-full text-blue-300 text-sm">TensorFlow</span>
            <span className="px-3 py-1 bg-green-900/50 rounded-full text-green-300 text-sm">Deep Learning</span>
          </div>
        </div>

        <div className="bento-card">
          <h2 className="text-2xl font-bold mb-6">Let's Connect</h2>
          <div className="flex flex-col space-y-4">
            <a href="mailto:yuvrajsinghspd09@gmail.com" 
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

        {/* Open Source Contributions */}
        <div className="bento-card col-span-3">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <GitFork className="w-6 h-6 text-orange-400" />
            Open Source Contributions
          </h2>
          <div className="grid grid-cols-1 gap-6">
            <div className="p-6 bg-card-hover rounded-lg hover:scale-105 transition-all duration-300">
              <h3 className="text-xl font-bold mb-2">
                <span className="text-blue-300">Aiven</span> / 
                <span className="text-purple-300">CLI Cookbook</span>
              </h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                <li>Added "Copy to Clipboard": Enabled single-key command copying to simplify user interaction and enhance usability.</li>
                <li>Streamlined Contributions: Created a structured issue template to improve feedback clarity and collaboration.</li>
              </ul>
            </div>

            <div className="p-6 bg-card-hover rounded-lg hover:scale-105 transition-all duration-300">
              <h3 className="text-xl font-bold mb-2">
                <span className="text-red-300">CERN</span> / 
                <span className="text-purple-300">cernopendata-portal</span>
              </h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                <li>Improved logging output structure for better readability and maintainability.</li>
                <li>Added an optional "availability" field to dataset records with multiple status options.</li>
                <li>Enhanced data accessibility and user experience through better field management.</li>
              </ul>
            </div>

            <div className="p-6 bg-card-hover rounded-lg hover:scale-105 transition-all duration-300">
              <h3 className="text-xl font-bold mb-2">
                <span className="text-blue-300">Nextcloud</span> / 
                <span className="text-purple-300">Summary Bot</span>
              </h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                <li>Implemented Job Persistence using SQLAlchemyJobStore with SQLite.</li>
                <li>Enhanced Reliability through improved APScheduler implementation.</li>
                <li>Optimized Database Performance using SQLAlchemy.</li>
              </ul>
            </div>

            <div className="p-6 bg-card-hover rounded-lg hover:scale-105 transition-all duration-300">
              <h3 className="text-xl font-bold mb-2">
                <span className="text-green-300">Weaviate</span> / 
                <span className="text-purple-300">t2v-transformers-models</span>
              </h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                <li>Enhanced Meta Endpoint to include model_path in responses.</li>
                <li>Improved Model Tracking for complex setups.</li>
                <li>Pull request under review for implementation.</li>
              </ul>
            </div>

            <div className="p-6 bg-card-hover rounded-lg hover:scale-105 transition-all duration-300">
              <h3 className="text-xl font-bold mb-2">
                <span className="text-blue-300">Nextcloud</span> / 
                <span className="text-purple-300">translate2</span>
              </h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                <li>Implemented persistent model loading for faster processing.</li>
                <li>Added thread locking for safe concurrent translations.</li>
                <li>Enhanced configuration handling and logging system.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Featured Projects Section */}
        <div className="bento-card col-span-3">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Code className="w-6 h-6 text-purple-400" />
            Featured Projects
          </h2>
          <div className="grid grid-cols-2 gap-6">
            {/* NewsGuardian */}
            <div className="p-6 bg-card-hover rounded-lg hover:scale-105 transition-all duration-300">
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
            <div className="p-6 bg-card-hover rounded-lg hover:scale-105 transition-all duration-300">
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

            <div className="p-6 bg-card-hover rounded-lg hover:scale-105 transition-all duration-300">
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

            {/* Facial Emotion Analyzer */}
            <div className="p-6 bg-card-hover rounded-lg hover:scale-105 transition-all duration-300">
              <h3 className="text-xl font-bold mb-3 text-green-300">Facial Emotion Analyzer</h3>
              <p className="text-gray-300 mb-4">
                A facial emotion detection model identifying seven different emotions from images and webcam input using deep learning techniques.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-2 py-1 bg-green-900/30 rounded-full text-green-300 text-xs">TensorFlow</span>
                <span className="px-2 py-1 bg-green-900/30 rounded-full text-green-300 text-xs">Keras</span>
                <span className="px-2 py-1 bg-green-900/30 rounded-full text-green-300 text-xs">OpenCV</span>
                <span className="px-2 py-1 bg-green-900/30 rounded-full text-green-300 text-xs">Streamlit</span>
              </div>
              <a href="https://github.com/Yuvrajsinghspd09/Facial-Emotion-Analyzer" target="_blank" rel="noopener noreferrer"
                 className="flex items-center text-green-400 hover:text-green-300">
                <ExternalLink className="w-4 h-4 mr-2" />
                View Project
              </a>
            </div>

            {/* ASL Recognizer Model */}
            <div className="p-6 bg-card-hover rounded-lg hover:scale-105 transition-all duration-300">
              <h3 className="text-xl font-bold mb-3 text-yellow-300">ASL Recognizer Model</h3>
              <p className="text-gray-300 mb-4">
                A model recognizing individual alphabet signs in American Sign Language with 97% accuracy, showcasing proficiency in interpreting the ASL alphabet.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-2 py-1 bg-yellow-900/30 rounded-full text-yellow-300 text-xs">TensorFlow</span>
                <span className="px-2 py-1 bg-yellow-900/30 rounded-full text-yellow-300 text-xs">Keras</span>
                <span className="px-2 py-1 bg-yellow-900/30 rounded-full text-yellow-300 text-xs">Scikit-learn</span>
                <span className="px-2 py-1 bg-yellow-900/30 rounded-full text-yellow-300 text-xs">OpenCV</span>
              </div>
              <a href="https://github.com/Yuvrajsinghspd09/ASL-Recognizer-Model" target="_blank" rel="noopener noreferrer"
                 className="flex items-center text-yellow-400 hover:text-yellow-300">
                <ExternalLink className="w-4 h-4 mr-2" />
                View Project
              </a>
            </div>
          </div>
        </div>

        {/* Awards Card */}
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
      </div>
    </div>
  );
};

export default Index;
