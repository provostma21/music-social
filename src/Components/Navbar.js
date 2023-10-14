import "./Style/Navbar.css";

export default function Navbar({ currentPage, handlePageChange }) {
  return (
    <ul className="nav navbar">
      <li className="nav-item">
        <a
          href="Home"
          onClick={() => handlePageChange("Home")}
          className={currentPage === "Home" ? "nav-link active" : "nav-link"}
        >
          Home
        </a>
      </li>
      <li className="nav-item">
        <a href=""></a>
      </li>
      <li className="nav-item">
        <a href=""></a>
      </li>
      <li className="nav-item">
        <a href=""></a>
      </li>
    </ul>
  );
}
