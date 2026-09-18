import { architectureSteps } from "../data/dashboardData";

function ArchitectureFlow() {
  return (
    <section className="card architecture-card">
      <h2>React Rendering Mental Model</h2>
      <div className="flow">
        {architectureSteps.map((step, index) => (
          // Fragment-style: render node, then arrow after every node except the last
          <>
            <span key={step} className="flow-node">{step}</span>
            {index < architectureSteps.length - 1 && (
              <span key={step + "-arrow"} className="flow-arrow">→</span>
            )}
          </>
        ))}
      </div>
    </section>
  );
}

export default ArchitectureFlow;
