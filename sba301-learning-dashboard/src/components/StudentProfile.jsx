import { student } from "../data/dashboardData";

function StudentProfile() {
  return (
    <section className="card">
      <h2>Student Profile</h2>
      <dl className="profile-list">
        <dt>Name</dt>
        <dd>{student.name}</dd>
        <dt>Student ID</dt>
        <dd>{student.studentId}</dd>
        <dt>Group</dt>
        <dd>{student.group}</dd>
        <dt>Role</dt>
        <dd>{student.role}</dd>
      </dl>
    </section>
  );
}

export default StudentProfile;
