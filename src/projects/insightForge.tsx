import "./schoolProjects.css";
import architectureImage from "../images/InsightForge.png";

const LIVE_APP_URL =
  "https://insightforge-862638372242.northamerica-northeast1.run.app/";

export const InsightForge = () => {
  return (
    <div className="project-container">
      <h2>InsightForge</h2>
      <div className="content">
        <p className="takeaways">
          Takeaways: Built an end-to-end BI chat app that combines RAG over
          user data with intent classification and LLM-generated visualization
          code executed in a sandbox, deployed on Google Cloud Run.
        </p>
        <p className="description">
          Description: InsightForge is a Streamlit application that lets users
          upload a CSV and then ask questions or request visualizations. On
          session start, the app discovers the schema and builds a RAG knowledge
          base from the data. User messages are classified by intent: general
          questions are answered via RAG and conversation memory; visualization
          requests trigger LLM-generated code (using the session CSV and schema)
          that runs in a sandbox, with the resulting figure or error shown in the
          UI.
        </p>
        <p className="tech">
          Technologies/Concepts: Python, Streamlit, LangChain, RAG, OpenAI,
          Pandas, Plotly, Google Cloud Run
        </p>
        <p className="description">
          <strong>Live app:</strong>{" "}
          <a href={LIVE_APP_URL} target="_blank" rel="noopener noreferrer">
            {LIVE_APP_URL}
          </a>
        </p>
        <div className="images-container">
          <img src={architectureImage} alt="InsightForge architecture" className="architecture-diagram" />
        </div>
      </div>
    </div>
  );
};
