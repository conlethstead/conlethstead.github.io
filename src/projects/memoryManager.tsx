import "./schoolProjects.css";
import memorySystem from "../images/memorySystem.png";
import memoryManager from "../images/MMU.png";

export const MemoryManager = () => {
  return (
    <div className="project-container">
      <h2>Memory Manager</h2>
      <div className="content">
        <p className="takeaways">
          Takeaways: I learned how to optimize slow and expensive operations
          through caching, utilizing shadow page tables and state diagrams to
          abstract memory contraints.
        </p>
        <p className="description">
          Description: I implemented a virtual memory management
          system for an operating system. It includes functionalities for handling
          memory allocation, page faults, and process management like creating and
          destroying. Key components include shadow page tables for tracking page
          states, an eviction clock algorithm for page replacement, and mechanisms
          for copy-on-write and pinning memory. The system interfaces with
          simulated hardware to manage physical memory, swap space, and file I/O,
          ensuring efficient and correct memory operations.
        </p>
        <p className="tech">
          Technologies/Concepts: C++, Shadowing, Caching
        </p>
        <div className="images-container">
          <img src={memorySystem} alt="Memory System" className="memory-system" />
          <img src={memoryManager} alt="Memory Manager" className="memory-manager" />
        </div>
      </div>
    </div>
  );
};
