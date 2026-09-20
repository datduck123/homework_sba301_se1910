import { NavLink, Outlet } from "react-router-dom";

export default function DashboardLayout() {
  const subCls = ({ isActive }) => (isActive ? "subnav-item active" : "subnav-item");

  return (
    <section className="dashboard-section">
      <div className="d-flex justify-content-between align-items-center mb-3 pb-2 border-bottom">
        <h1 className="h2 fw-bold mb-0">Member Dashboard</h1>
      </div>
      <div className="subnav mb-4">
        <NavLink to="." end className={subCls}>
          Overview
        </NavLink>
        <NavLink to="profile" className={subCls}>
          Profile
        </NavLink>
        <NavLink to="orders" className={subCls}>
          Orders
        </NavLink>
      </div>
      <div className="dashboard-content card p-4 shadow-sm border-0 bg-white">
        <Outlet />
      </div>
    </section>
  );
}

export const DashboardHome = () => (
  <div>
    <h3 className="h5 fw-bold text-primary mb-2">Dashboard Overview</h3>
    <p className="text-secondary mb-0">
      Welcome back to your MiniStore control center. Manage your personal details, review past purchase history, and tracking preferences.
    </p>
  </div>
);

export const ProfilePage = () => (
  <div>
    <h3 className="h5 fw-bold text-primary mb-2">User Profile</h3>
    <p className="text-secondary mb-1"><strong>Name:</strong> Software Engineering Student</p>
    <p className="text-secondary mb-1"><strong>Email:</strong> student@fpt.edu.vn</p>
    <p className="text-secondary mb-0"><strong>Status:</strong> Verified Member</p>
  </div>
);

export const OrdersPage = () => (
  <div>
    <h3 className="h5 fw-bold text-primary mb-2">Order History</h3>
    <ul className="list-unstyled mb-0">
      <li className="py-2 border-bottom d-flex justify-content-between">
        <span>#ORD-9801: MacBook Air M3</span>
        <span className="badge bg-success text-white">Delivered</span>
      </li>
      <li className="py-2 d-flex justify-content-between">
        <span>#ORD-9802: iPhone 15</span>
        <span className="badge bg-info text-dark">Processing</span>
      </li>
    </ul>
  </div>
);
