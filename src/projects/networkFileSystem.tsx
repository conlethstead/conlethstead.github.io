import "./schoolProjects.css";
import hierarchy from "../images/hierarchy.png";
import concurrent from "../images/concurrent.png";


export const NetworkFileSystem = () => {
  return (
    <div className="project-container">
      <h2>Multithreaded Network File System</h2>
      <div className="content">
        <p className="takeaways">
          Takeaways: Learned how to maintain persistent data structures through
          building atomic actions, culminating in the deployment of a network
          file system.
        </p>
        <p className="description">
          Description: I built a multithreaded network file server that supports Create,
          Read, Write, and Delete (CRID) operations on files and directories
          organized in a persistent, hierarchical structure, requiring
          consistency through crashes and outages. The file server uses
          client-server networking for handling concurrent requests. It ensures
          atomicity by completing complex operations fully or not at all,
          maintains consistency through specific ordering of disk writes, and
          optimizes performance by minimizing disk I/Os and efficiently managing
          resources.
        </p>
        <p className="tech">
          Technologies/Concepts: C++, Multithreading, Networking, Atomicity
        </p>
        <div className="images-container">
          <img src={hierarchy} alt="Hierarchy" className="hierarchy" />
          <img src={concurrent} alt="Concurrent" className="concurrent" />
        </div>
      </div>
    </div>
  );
};
