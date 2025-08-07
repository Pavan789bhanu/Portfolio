import React from "react";
import '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss';

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Career & Education History</h1>
        <VerticalTimeline>

          {/* Job: Honda Research Institute */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Jan 2025 – May 2025"
            iconStyle={{ background: '#5000ca', color: 'white' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Data Scientist</h3>
            <h4 className="vertical-timeline-element-subtitle">Honda Research Institute – USA</h4>
            <p>
              Built a production-grade RAG system using GPT-4o, LLaMA-3, Pinecone, and LangChain, supporting 10K+ users.
              Developed ML pipelines for real-time feedback classification using SageMaker, FastAPI, and Docker.
              Delivered a 15% F1 boost and 20% precision increase with n-shot learning using GPT-3.5 and Gemini.
            </p>
          </VerticalTimelineElement>

          {/* Job: CGI */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="May 2024 – Dec 2024"
            iconStyle={{ background: '#5000ca', color: 'white' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Data Scientist</h3>
            <h4 className="vertical-timeline-element-subtitle">CGI – Dallas, TX</h4>
            <p>
              Deployed deep learning models using TensorFlow and Spark, improving efficiency by 15%.
              Conducted A/B testing to lift model accuracy and user engagement.
              Built data pipelines, dashboards, and insights from SQL, APIs, and web scraping, improving decision accuracy by 20%.
            </p>
          </VerticalTimelineElement>

          {/* Job: Fujitsu */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Jan 2022 – Jul 2023"
            iconStyle={{ background: '#5000ca', color: 'white' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Machine Learning Engineer</h3>
            <h4 className="vertical-timeline-element-subtitle">Fujitsu – Bangalore, India</h4>
            <p>
              Built scalable data pipelines processing 200M+ records using Spark & SQL.
              Fine-tuned TensorFlow/PyTorch models in SageMaker; boosted performance by 15%.
              Developed recommendation systems, improved retention by 22%, and streamlined deployment with Docker and Jenkins.
            </p>
          </VerticalTimelineElement>

          {/* Education: Masters */}
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="Master's Degree"
            iconStyle={{ background: '#0077b6', color: '#fff' }}
            icon={<FontAwesomeIcon icon={faGraduationCap} />}
          >
            <h3 className="vertical-timeline-element-title">Master of Science – Data Science</h3>
            <h4 className="vertical-timeline-element-subtitle">University of Colorado Boulder – Boulder, CO</h4>
            <p>
              Focused on applied machine learning and LLMs, building end-to-end GenAI systems using OpenAI, LangChain, Pinecone, and AWS. Gained expertise in RAG pipelines, prompt engineering, and scalable cloud deployment.
            </p>
          </VerticalTimelineElement>

          {/* Education: Bachelors */}
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="Bachelor's Degree"
            iconStyle={{ background: '#0077b6', color: '#fff' }}
            icon={<FontAwesomeIcon icon={faGraduationCap} />}
          >
            <h3 className="vertical-timeline-element-title">Bachelor of Technology – Information Technology</h3>
            <h4 className="vertical-timeline-element-subtitle">Sri Sivasubramaniya Nadar College of Engineering – Chennai, TN</h4>
            <p>
              Core coursework in algorithms, databases, and software systems. Participated in ML-focused academic projects.
            </p>
          </VerticalTimelineElement>

        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;
