import Link from 'next/link'

const navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg sticky-top navbar-light bg-light">
      <div className="container-fluid">
        <Link href="/"><a className="navbar-brand" href="#"><i className="fas fa-newspaper"></i> Narad News</a></Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link href="/news/business"><a className="nav-link" href="#"><i className="fas fa-business-time"></i> Business</a></Link>
            </li>
            <li className="nav-item">
              <Link href="/news/sports"><a className="nav-link" href="#"><i className="fas fa-volleyball-ball"></i> Sports</a></Link>
            </li>
            <li className="nav-item">
              <Link href="/news/entertainment"><a className="nav-link" href="#"><i className="fas fa-tv"></i> Entertainment</a></Link>
            </li>
            <li className="nav-item">
              <Link href="/news/sci-tech"><a className="nav-link" href="#"><i className="fas fa-microchip"></i> Science and Technolagy</a></Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default navbar;
