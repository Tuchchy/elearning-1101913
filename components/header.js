import Link from "next/link";

export default function Header() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link href="/" className="navbar-brand">
          SUT ACT+
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link href="/" className="nav-link active" aria-current="page">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/activitypage/activities" className="nav-link">
                Activities
              </Link>
            </li>
            <li className="nav-item">
              <Link href="#" className="nav-link">
                Self Learning
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/loginpage/login" className="nav-link">
                Login
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/profilepage/profile" className="nav-link">
                Profile
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
