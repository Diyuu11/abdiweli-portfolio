import React from "react";

const Header = () => {
  return (
    <header className="text-center my-4 pt-5">
      <img src="../src/assets/profile.png" alt="Abdiweli" className="rounded-circle" width="120" height="120" />
      <h1 className="display-4 fw-bold mt-3">Abdiweli Mohamed</h1>
      <p className="lead">Project Management | Policy & Governance | Gender & Development</p>
      <div className="d-flex justify-content-center gap-3">
        <a href="https://linkedin.com" className="btn btn-outline-light">LinkedIn</a>
      
        <a href="mailto:you@example.com" className="btn btn-outline-light">Email</a>
      </div>
    </header>
  );
};

export default Header;