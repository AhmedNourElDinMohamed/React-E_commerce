import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../../redux/authSlice";

export const Navbar = () => {
  const cartCounter = useSelector((state) => state.addToCartStore.counter);
  const loginStatus = useSelector((state) => state.loginStore.login);
  const dispatch = useDispatch();
  const loginAuth = () => {
    dispatch(logout());
  };
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div className="container px-4 px-lg-5">
          <Link className="navbar-brand" to="/">
            E-Commerce
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ms-lg-4">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/shop">
                  Shop
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/counter">
                  counter
                </Link>
              </li>
              {loginStatus ? (
                <li className="nav-item">
                  <Link onClick={loginAuth} className="nav-link" to="/">
                    Logout
                  </Link>
                </li>
              ) : (
                <>
                  <li className="nav-item">
                    <Link className="nav-link" to="/signup">
                      Signup
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/signin">
                      Signin
                    </Link>
                  </li>
                </>
              )}
            </ul>

            <Link className="btn btn-outline-warning ms-3" to="/cart">
              <i className="bi-cart-fill me-1"></i>
              Cart
              <span className="badge bg-danger text-dark ms-1 rounded-pill">
                {cartCounter}
              </span>
            </Link>
          </div>
        </div>
      </nav>
      {/* <div className="container p-4 px-lg-5 mb-5 bg-secondary">
        <div className="text-center text-white">
          <h1 className="display-4 fw-bolder">Shop</h1>
          <p className="lead fw-normal text-white-50 mb-0">
            With this shop hompeage template
          </p>
        </div>
      </div> */}
    </header>
  );
};
