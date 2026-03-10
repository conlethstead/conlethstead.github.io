# InsightForge — Architecture Diagram

Open this file in [Mermaid Live Editor](https://mermaid.live) or in VS Code with a Mermaid extension, then take a screenshot to upload to your portfolio.

```mermaid
flowchart TB
    subgraph Client["Client"]
        User[User]
        Browser[Browser]
        User --> Browser
    end

    subgraph GCP["Google Cloud Run (northamerica-northeast1)"]
        subgraph App["InsightForge App"]
            Streamlit[Streamlit UI]
            Upload[CSV Upload / Path]
            Streamlit --> Upload
            Upload --> Schema[Schema Discovery]
            Schema --> Chunks[Build RAG Chunks]
            Chunks --> Session[(Session State)]
            Streamlit --> Session
            UserMsg[User Message]
            Streamlit --> UserMsg
            UserMsg --> Classifier[Intent Classifier]
            Classifier --> Intent{Intent}
            Intent -->|general| RAG[RAG Pipeline]
            RAG --> Retriever[Retriever]
            Retriever --> Session
            RAG --> LLM1[LLM]
            LLM1 --> Memory[Conversation Memory]
            Memory --> Answer[Answer]
            Intent -->|visualization| VizCode[Viz Code Generator]
            VizCode --> Schema
            VizCode --> LLM2[LLM]
            LLM2 --> Sandbox[Run Code in Sandbox]
            Sandbox --> Plotly[Plotly / Figure]
            Sandbox --> Answer
            Answer --> Streamlit
        end
    end

    Browser -->|HTTPS| Streamlit
```

## Component summary

| Component | Role |
|-----------|------|
| **Streamlit UI** | Chat interface; CSV upload; schema/chunks in session state; pipeline log viewer |
| **Schema Discovery** | Infers column names and types from the session CSV |
| **RAG Chunks** | Session data chunked for retrieval (knowledge base) |
| **Intent Classifier** | Classifies user message as general question vs visualization request |
| **RAG Pipeline** | Retriever → context + prompt → LLM → answer; uses conversation memory |
| **Viz Code Generator** | LLM generates Python code (e.g. Plotly) using CSV path and schema |
| **Sandbox** | Executes generated code safely; returns figure or error |
| **Conversation Memory** | Maintains chat context for follow-up questions |
