import "./schoolProjects.css";
import timeline2 from "../images/timeline2.png"; 
import diagram2 from "../images/diagram2.png";

export const ThreadLibrary = () => {
  return (
    <div className="project-container">
      <h2>Thread Library</h2>

      <div className="content">
        <p className="takeaways">
          Takeaways: I gained an intimate understanding of concurrent programming
          through building the foundations and abstractions of an operating system
          thread library.
        </p>
        <p className="description">
          Description: I developed a custom thread library in C++ that supports
          multithreading operations, mutexes, condition variables, and efficient
          CPU management on a multiprocessor. My library provides a CPU class (for
          initialization, interrupts, and context switching), a thread class (for
          creation, joining, and yielding), and synchronization primitives like
          mutexes and condition variables (for mutual exclusion and proper
          ordering). The project also involved solving concurrency issues such as
          race conditions and deadlocks.
        </p>
        <p className="tech">Technologies/Concepts: C++, Concurrency, Multithreading</p>
        <div className="images-container">
          <img src={diagram2} alt="Diagram" className="diagram move-up" />
          <img src={timeline2} alt="Timeline" className="timeline move-up" />
        </div>
      </div>
    </div>
  );
};
