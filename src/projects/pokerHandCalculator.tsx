import "./schoolProjects.css";
import results from "../images/results.png";
import pokerHow from "../images/pokerHow.png";

export const PokerHandCalculator = () => {
  return (
    <div className="project-container">
      <h2>Poker Hand Calculator</h2>
      <div className="content">
        <p className="takeaways">
          Takeaway: I gained experience building a full-stack application,
          integrating Swift with various SDKs (Computer Vision,
          Probability/Strategy) to implement real-time data processing and
          deliver analytical insights.
        </p>
        <p className="description">
          Description: PokerPro is a real-time poker analytics and advice
          application that enhances a user's decision-making during gameplay.
          The application features a Swift-based front end for user interaction
          and a Main Handler that manages data flow, coordinates application
          logic, and drives decision-making. The Main Handler achieves this by
          integrating a Probability/Strategy SDK (PiedPoker) for odds
          calculation and strategy, a Card Detection (CV) SDK
          (playing-cards-detection-api) for image-based card recognition, and a
          PostgreSQL database hosted on AWS for storing and retrieving game
          data, providing users with real-time analysis and historical insights
          for improvement.
        </p>
        <p className="tech">Technologies/Concepts: Swift, PostgreSQL</p>
        <div className="images-container">
            <img src={pokerHow} alt="Poker How" className="pokerHow" />
            <img src={results} alt="Results" className="results" />
        </div>
      </div>
    </div>
  );
};

// import "./schoolProjects.css";
//
// return (
//     <div className="project-container">
//         <h2>Poker Hand Calculator</h2>
//         <div className="content">
//             <p className="takeaways">

//             </p>
//             <p className="description">

//             </p>
//             <p className="tech"></p>
//             <div className="images-container">

//             </div>
//         </div>
//     </div>
// );
