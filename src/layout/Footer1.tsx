export default function Footer1() {
  return (
    <div
      className="text-muted p-4 border-bottom-5 d-flex flex-column justify-content-center align-items-center"
      style={{ backgroundColor: "#ebebeb75" }}
    >
      <ul className="list-unstyled d-flex gap-3">
        <li>
          <a href="#" className="text-muted">
            <i className="bi bi-facebook"></i>
          </a>
        </li>
        <li>
          <a href="#" className="text-muted">
            <i className="bi bi-twitter"></i>
          </a>
        </li>
        <li>
          <a href="#" className="text-muted">
            <i className="bi bi-instagram"></i>
          </a>
        </li>
        <li>
          <a href="#" className="text-muted">
            <i className="bi bi-linkedin"></i>
          </a>
        </li>
      </ul>
      <div
        className="d-flex sm-flex-column"
        style={{ marginLeft: "30px", marginRight: "50px" }}
      >
        <ul className="list-unstyled flex-wrap d-flex gap-2">
          <li>
            <a href="#home" className="text-muted small">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="text-muted small">
              About
            </a>
          </li>
          <li>
            <a href="#skills" className="text-muted small">
              Skills
            </a>
          </li>
          <li>
            <a href="#projects" className="text-muted small">
              Projects
            </a>
          </li>
          <li>
            <a href="#experience" className="text-muted small">
              Experience
            </a>
          </li>
          <li>
            <a href="#contact" className="text-muted small">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
