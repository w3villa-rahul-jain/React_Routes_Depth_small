import React from "react";
import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <div>
      <nav>
        <Link to="/invoices">Invoices</Link>
        <Link to="/expanses">Expanses</Link>
      </nav>
    </div>
  );
}
