import { groupProject } from "../data/dashboardData";

function ProjectSummary() {
  return (
    <section className="card">
      <h2>Group Project Summary</h2>
      <dl className="profile-list">
        <dt>Project</dt>
        <dd>{groupProject.name}</dd>
        <dt>Target Users</dt>
        <dd>{groupProject.targetUsers}</dd>
      </dl>
      <h3>Core Features</h3>
      <ol className="feature-list">
        {groupProject.coreFeatures.map((feature) => (
          <li key={feature}>{feature}</li>
        ))}
      </ol>
    </section>
  );
}

export default ProjectSummary;
