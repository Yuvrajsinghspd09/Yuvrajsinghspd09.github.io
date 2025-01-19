import React from "react";
import { GitFork } from "lucide-react";

const OpenSourceContributions = () => {
  return (
    <div className="bento-card col-span-3">
      <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
        <GitFork className="w-6 h-6 text-orange-400" />
        Open Source Contributions
      </h2>
      <div className="grid grid-cols-2 gap-6">
        {/* Nextcloud Summary Bot */}
        <div className="p-6 bg-card-hover rounded-lg hover:scale-105 transition-all duration-300">
          <h3 className="text-xl font-bold mb-2">
            <span className="text-blue-300">Nextcloud</span> / 
            <span className="text-purple-300">Summary Bot</span>
          </h3>
          <ul className="list-disc ml-4 text-gray-300">
            <li className="mb-2">Implemented Job Persistence using SQLAlchemyJobStore with SQLite</li>
            <li className="mb-2">Enhanced Reliability through improved APScheduler implementation</li>
            <li>Optimized Database Performance using SQLAlchemy</li>
          </ul>
        </div>

        {/* CERN Open Data Portal */}
        <div className="p-6 bg-card-hover rounded-lg hover:scale-105 transition-all duration-300">
          <h3 className="text-xl font-bold mb-2">
            <span className="text-red-300">CERN</span> / 
            <span className="text-purple-300">cernopendata-portal</span>
          </h3>
          <ul className="list-disc ml-4 text-gray-300">
            <li className="mb-2">Improved logging output structure for better readability and maintainability</li>
            <li className="mb-2">Added an optional "availability" field to dataset records with multiple status options</li>
            <li>Enhanced data accessibility and user experience through better field management</li>
          </ul>
        </div>

        {/* Nextcloud Translate2 */}
        <div className="p-6 bg-card-hover rounded-lg hover:scale-105 transition-all duration-300">
          <h3 className="text-xl font-bold mb-2">
            <span className="text-blue-300">Nextcloud</span> / 
            <span className="text-purple-300">translate2</span>
          </h3>
          <ul className="list-disc ml-4 text-gray-300">
            <li className="mb-2">Implemented persistent model loading for faster processing</li>
            <li className="mb-2">Added thread locking for safe concurrent translations</li>
            <li>Enhanced configuration handling and logging system</li>
          </ul>
        </div>

        {/* CERN-IT-INNOVATION */}
        <div className="p-6 bg-card-hover rounded-lg hover:scale-105 transition-all duration-300">
          <h3 className="text-xl font-bold mb-2">
            <span className="text-red-300">CERN-IT-INNOVATION</span> / 
            <span className="text-purple-300">quantum-gates</span>
          </h3>
          <ul className="list-disc ml-4 text-gray-300">
            <li className="mb-2">Fixed behavior of _preprocess_circuit method in the simulator</li>
            <li className="mb-2">Ensures input circuit (t_qiskit_circ) remains unmodified during preprocessing</li>
            <li>Introduced proper handling of raw_data to avoid in-place changes</li>
          </ul>
        </div>

        {/* Aiven */}
        <div className="p-6 bg-card-hover rounded-lg hover:scale-105 transition-all duration-300">
          <h3 className="text-xl font-bold mb-2">
            <span className="text-blue-300">Aiven</span> / 
            <span className="text-purple-300">CLI Cookbook</span>
          </h3>
          <ul className="list-disc ml-4 text-gray-300">
            <li className="mb-2">Enabled single-key command copying to simplify user interaction and enhance usability</li>
            <li>Created a structured issue template to improve feedback clarity and collaboration</li>
          </ul>
        </div>

        {/* Weaviate */}
        <div className="p-6 bg-card-hover rounded-lg hover:scale-105 transition-all duration-300">
          <h3 className="text-xl font-bold mb-2">
            <span className="text-green-300">Weaviate</span> / 
            <span className="text-purple-300">t2v-transformers-models</span>
          </h3>
          <ul className="list-disc ml-4 text-gray-300">
            <li className="mb-2">Enhanced Meta Endpoint to include model_path in responses</li>
            <li className="mb-2">Improved Model Tracking for complex setups</li>
            <li>Pull request under review for implementation</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default OpenSourceContributions;