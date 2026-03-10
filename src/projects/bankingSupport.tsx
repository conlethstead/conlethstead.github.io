import "./schoolProjects.css";
import architectureImage from "../images/BankingSupport.png";

const LIVE_APP_URL = "https://bankingsupport-480269463222.us-east5.run.app";

export const BankingSupport = () => {
  return (
    <div className="project-container">
      <h2>Banking Support</h2>
      <div className="content">
        <p className="takeaways">
          Takeaways: Designed and implemented a multi-agent GenAI system with
          LangGraph for banking customer support—classification, personalized
          responses, and ticket tracking—with evaluation, logging, and a
          Streamlit UI deployed on Google Cloud Run.
        </p>
        <p className="description">
          Description: A multi-agent AI assistant for banking customer support
          that classifies incoming messages into feedback (positive/negative) or
          queries, then routes to specialized agents: a Feedback Handler (thank-you
          messages or new ticket creation) and a Query Handler (ticket status from
          the support database). The workflow is orchestrated with LangGraph,
          with prompt traces and ticket logs available in the dashboard.
        </p>
        <p className="tech">
          Technologies/Concepts: Python, LangGraph, OpenAI, Streamlit, SQL,
          Google Cloud Run
        </p>
        <p className="description">
          <strong>Live app:</strong>{" "}
          <a href={LIVE_APP_URL} target="_blank" rel="noopener noreferrer">
            {LIVE_APP_URL}
          </a>
        </p>
        <div className="images-container">
          <img src={architectureImage} alt="Banking Support architecture" className="architecture-diagram" />
        </div>
      </div>
    </div>
  );
};
