import "./schoolProjects.css";
import account from "../images/account.png";
import post from "../images/post.png";
import login from "../images/login.png";

export const InstagramClone = () => {
  return (
    <div className="project-container">
      <h2>Instagram Clone</h2>
      <div className="content">
        <p className="takeaways">
          Takeaways: I learned how to create a full-stack application from
          scratch and deploy it to a cloud provider.
        </p>
        <p className="description">
          Description: This project is a web application that simulates a social
          media platform, allowing users to register, log in, create, view, and
          interact with posts. The backend is implemented in Python, utilizing
          Flask for handling API requests and SQL for database management. The
          frontend uses JavaScript for dynamic content and user interactions.
          This project was then deployed online via AWS.
        </p>
        <p className="tech">
          Technologies/Concepts: Python, Flask, SQL, JavaScript, AWS
        </p>
        <div className="insta-img-container">
            <img src={login} alt="Login" className="login" />
            <img src={account} alt="Account" className="account" />
            <img src={post} alt="Post" className="post" />
        </div>
      </div>
    </div>
  );
};
