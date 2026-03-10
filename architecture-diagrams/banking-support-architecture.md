# Banking Support — Architecture Diagram

Open this file in [Mermaid Live Editor](https://mermaid.live) or in VS Code with a Mermaid extension, then take a screenshot to upload to your portfolio.

```mermaid
flowchart TB
    subgraph Client["Client"]
        User[User]
        Browser[Browser]
        User --> Browser
    end

    subgraph GCP["Google Cloud Run (us-east5)"]
        subgraph App["Banking Support App"]
            Streamlit[Streamlit UI]
            Streamlit --> Workflow
            Workflow[LangGraph Workflow]
            Workflow --> Validate[validate_input]
            Validate --> Classifier[Classifier Agent]
            Classifier --> Route{Route}
            Route -->|positive_feedback| PosAgent[Positive Feedback Agent]
            Route -->|negative_feedback| NegAgent[Negative Feedback Agent]
            Route -->|query| QueryAgent[Query Handler Agent]
            PosAgent --> Response[Response to User]
            NegAgent --> DB1[(support_tickets)]
            NegAgent --> Response
            QueryAgent --> DB1
            QueryAgent --> Response
        end
    end

    Browser -->|HTTPS| Streamlit
    Response --> Streamlit
```

## Component summary

| Component | Role |
|-----------|------|
| **Streamlit UI** | Dashboard: user input, classification display, ticket logs, prompt traces |
| **LangGraph Workflow** | Orchestrates validate_input → classifier → routing to specialized agents |
| **Classifier Agent** | Categorizes message: positive feedback / negative feedback / query |
| **Positive Feedback Agent** | Generates thank-you message via LLM |
| **Negative Feedback Agent** | Creates ticket in DB, returns empathetic message with ticket ID |
| **Query Handler Agent** | Looks up ticket status in DB, returns status to user |
| **support_tickets** | Database table for ticket ID, status, and related fields |
