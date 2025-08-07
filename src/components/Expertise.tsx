import React from "react";
import { useInView } from "react-intersection-observer";
import { motion, Variants } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPython,
  faDocker,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import Chip from "@mui/material/Chip";
import "../assets/styles/Expertise.scss";
import { faBookOpen, faRobot } from "@fortawesome/free-solid-svg-icons";

const labelsML = [
  "TensorFlow",
  "PyTorch",
  "Scikit-learn",
  "XGBoost",
  "Random Forest",
  "ARIMA & Prophet",
  "Feature Engineering",
  "Model Monitoring",
  "A/B Testing",
  "MLflow",
];

const labelsNLP = [
  "GPT-4o, Gemini, LLaMA, BERT",
  "HuggingFace Transformers",
  "LangChain (RAG)",
  "Vector Search (Pinecone, Qdrant)",
  "Whisper, WavLM (audio)",
  "Text Classification",
  "Chatbot Development",
  "Prompt Engineering",
  "Semantic Search",
];

const labelsMLOps = [
  "AWS (S3, EC2, Lambda, SageMaker, Redshift)",
  "Docker",
  "Kubernetes",
  "FastAPI",
  "CI/CD (GitHub Actions, Jenkins)",
  "Airflow",
  "ETL Optimization",
  "Auto-Scaling",
  "Spark & PySpark",
  "SQL & APIs",
];

const labelsTools = [
  "Python",
  "Power BI",
  "DSPy",
  "Jupyter",
  "VS Code",
  "GitHub",
  "Confluence",
  "Jira",
  "R (basic)",
  "C++, C",
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.42, 0, 0.58, 1] },
  },
};

function Expertise() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <div className="container" id="expertise">
      <motion.div
        ref={ref}
        className="skills-container"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <h1>Expertise</h1>
        <motion.div className="skills-grid">
          {/* Machine Learning */}
          <motion.div className="skill" variants={itemVariants}>
            <FontAwesomeIcon icon={faPython} size="3x" />
            <h3>Machine Learning & Deep Learning</h3>
            <p>
              Building scalable ML pipelines with real-world impact. Skilled in time-series forecasting,
              feature engineering, A/B testing, and performance monitoring across NLP, recommendation, and fraud domains.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Tools & Techniques:</span>
              {labelsML.map((label, i) => (
                <Chip key={i} className="chip" label={label} />
              ))}
            </div>
          </motion.div>

          {/* NLP & LLMs */}
          <motion.div className="skill" variants={itemVariants}>
            <FontAwesomeIcon icon={faRobot} size="3x" />
            <h3>Natural Language Processing & LLMs</h3>
            <p>
              Deployed advanced LLM applications like RAG-powered Q&A systems and chatbots using GPT-4o, BERT, and LangChain.
              Strong grasp on prompt engineering, vector search, and semantic optimization.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Technologies:</span>
              {labelsNLP.map((label, i) => (
                <Chip key={i} className="chip" label={label} />
              ))}
            </div>
          </motion.div>

          {/* MLOps & Deployment */}
          <motion.div className="skill" variants={itemVariants}>
            <FontAwesomeIcon icon={faDocker} size="3x" />
            <h3>MLOps & Cloud Deployment</h3>
            <p>
              Deploying robust pipelines with Docker, Kubernetes, and SageMaker. Experience with monitoring, drift alerts,
              and auto-scaling ML systems on AWS cloud.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Infrastructure & DevOps:</span>
              {labelsMLOps.map((label, i) => (
                <Chip key={i} className="chip" label={label} />
              ))}
            </div>
          </motion.div>

          {/* Tools & Frameworks */}
          <motion.div className="skill" variants={itemVariants}>
            <FontAwesomeIcon icon={faGithub} size="3x" />
            <h3>Tools, Languages & Platforms</h3>
            <p>
              Day-to-day workflow includes coding in Python, visualizing in Power BI, writing in Jupyter, 
              and collaborating via GitHub, Jira, and Confluence.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Dev Tools:</span>
              {labelsTools.map((label, i) => (
                <Chip key={i} className="chip" label={label} />
              ))}
            </div>
          </motion.div>

          {/* Research & Publications */}
          <motion.div className="skill" variants={itemVariants}>
            <FontAwesomeIcon icon={faBookOpen} size="3x" />
            <h3>Research & Multimodal AI</h3>
            <p>
              Published ICMI 2023 research on Veterans interview feedback sytem using LLMs(Gemini, GPT) with few-shot technology, achieving improved classification accuracy.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Research Areas:</span>
              <Chip label="Multimodal Learning" className="chip" />
              <Chip label="Audio + Text Fusion" className="chip" />
              <Chip label="LLM Integration (Gemini, GPT)" className="chip" />
              <Chip label="Semantic Embeddings" className="chip" />
              <Chip label="Speech Processing" className="chip" />
              <Chip
                label="ICMI 2023 Publication"
                className="chip"
                component="a"
                href="https://doi.org/10.1145/3686215.3688371"
                target="_blank"
                clickable
              />
            </div>
          </motion.div>

        </motion.div>
      </motion.div>
    </div>
  );
}

export default Expertise;
