import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import Images from "../../assets/Images";
import "../CSS/Header.css";
import { useAuth } from "../../context/auth";
import toast from "react-hot-toast";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  console.log(location.pathname);

  const [auth, setAuth] = useAuth();

  const handleLogout = () => {
    setAuth({
      ...auth,
      user: null,
      token: "",
    });
    localStorage.removeItem("auth");
    toast.success("Logout Successfully", { duration: 1000 });
  };

  const onClickHandle = () => {
    if (isOpen === false) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  };

  const useMatchMedia = (mediaQuery, initialValue) => {
    const [isMatching, setIsMatching] = useState(initialValue);
    useEffect(() => {
      const watcher = window.matchMedia(mediaQuery);
      setIsMatching(watcher.matches);
      const listener = (matches) => {
        setIsMatching(matches.matches);
      };
      if (watcher.addEventListener) {
        watcher.addEventListener("change", listener);
      } else {
        watcher.addEventListener(listener);
      }
      return () => {
        if (watcher.removeEventListener) {
          return watcher.removeEventListener("change", listener);
        } else {
          return watcher.removeEventListener(listener);
        }
      };
    }, [mediaQuery]);

    return isMatching;
  };

  const isDesktopResolution = useMatchMedia("(max-width:992px)", true);

  return (
    <header>
      <div className="navbar">
        <div className="logo">
          <NavLink className={`a`} to={"/"}>
            <img src={Images.logo} alt="logo.png" />
          </NavLink>
        </div>

        {!isDesktopResolution && (
          <ul className="links" style={{ display: !isOpen ? "block" : "none" }}>
            <NavLink
              className={`a ${location?.pathname === "/" ? "active" : " "}`}
              style={{
                color: `${location?.pathname === "/" ? "#EB934f" : "#477769"}`,
              }}
              to={"/"}
            >
              HOME
            </NavLink>
            <NavLink
              className={`a ${
                location?.pathname === "/drafting" ? "active" : " "
              }`}
              style={{
                color: `${
                  location?.pathname === "/drafting" ? "#EB934f" : "#477769"
                }`,
              }}
              to={"/drafting"}
            >
              DRAFTING
            </NavLink>
            <NavLink
              className={`a ${
                location?.pathname === "/advocates" ? "active" : " "
              }`}
              style={{
                color: `${
                  location?.pathname === "/advocates" ? "#EB934f" : "#477769"
                }`,
              }}
              to={"/advocates"}
            >
              ADVOCATES
            </NavLink>
            <NavLink
              className={` a ${
                location?.pathname === "/about" ? "active" : " "
              }`}
              style={{
                color: `${
                  location?.pathname === "/about" ? "#EB934f" : "#477769"
                }`,
              }}
              to={"/about"}
            >
              ABOUT US
            </NavLink>
            <NavLink
              className={` a ${
                location?.pathname === "/help" ? "active" : " "
              }`}
              style={{
                color: `${
                  location?.pathname === "/help" ? "#EB934f" : "#477769"
                }`,
              }}
              to={"/help"}
            >
              Help
            </NavLink>
          </ul>
        )}

        {auth?.user === null
          ? !isDesktopResolution && (
              <div
                className="me-3 active_btn"
                style={{ display: !isOpen ? "block" : "none" }}
              >
                <NavLink className={"btn_link"} to="/register">
                  {" "}
                  <button
                    className={`btn me-2 border border-dark ${
                      location?.pathname === "/register" ? "btn-dark" : ""
                    }`}
                  >
                    <b>Sign-Up</b>
                  </button>
                </NavLink>

                <NavLink className={"btn_link"} to="/login">
                  <button
                    className={`btn border border-dark ${
                      location?.pathname === "/login" ? "btn-dark" : ""
                    }`}
                  >
                    <b>Login</b>
                  </button>
                </NavLink>
              </div>
            )
          : !isDesktopResolution && (
              <div style={{ display: !isOpen ? "block" : "none" }}>
                <span className="nav-item dropdown me-5">
                  <NavLink
                    className="btn_link nav-link dropdown-toggle"
                    to={"/profile"}
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    style={{ textTransform: "uppercase" }}
                  >
                    <button className="btn btn-dark text-light">
                      {auth?.user?.firstName}
                    </button>
                  </NavLink>

                  <ul className="dropdown-menu">
                    <li>
                      <NavLink
                        onClick={handleLogout}
                        to={"/login"}
                        className="dropdown-item"
                      >
                        Logout
                      </NavLink>
                    </li>
                  </ul>
                </span>
              </div>
            )}


        <div className="toggle_btn" onClick={onClickHandle}>
          {isDesktopResolution && (
            <i
              className={
                isOpen === false ? "fa-solid fa-bars" : "fa-solid fa-xmark"
              }
            ></i>
          )}
        </div>
      </div>

      {isDesktopResolution && (
        <div
          className="dropdown_menu"
          style={{ display: isOpen ? "block" : "none" }}
        >
          <NavLink className={"a"} to={"/"}>
            HOME
          </NavLink>
          <NavLink className={"a"} to={"/drafting"}>
            DRAFTING
          </NavLink>
          <NavLink className={"a"} to={"/simplifier"}>
            SIMPLIFIER
          </NavLink>
          <NavLink className={"a"} to={"/advocates"}>
            ADVOCATES
          </NavLink>
          <NavLink className={"a"} to={"/about"}>
            ABOUT US
          </NavLink>
          <NavLink className={"a"} to={"/help"}>
            Help
          </NavLink>
          {auth?.user === null ? (
            <div className="me-3 action_btn">
              <NavLink className={"btn_link a"} to="/register">
                {" "}
                <button
                  className={`btn me-2 border border-dark ${
                    location?.pathname === "/register" ? "btn-dark" : ""
                  }`}
                >
                  <b>Sign-Up</b>
                </button>
              </NavLink>

              <NavLink className={"btn_link a"} to="/login">
                <button
                  className={`btn border border-dark ${
                    location?.pathname === "/login" ? "btn-dark" : ""
                  }`}
                >
                  <b>Login</b>
                </button>
              </NavLink>
            </div>
          ) : (
            <>
              <span className="nav-item dropdown me-5">
                <NavLink
                  className="btn_link nav-link dropdown-toggle"
                  to={"/profile"}
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  style={{ textTransform: "uppercase" }}
                >
                  <button
                    className="btn btn-dark text-light"
                    style={{ width: "100px" }}
                  >
                    {auth?.user?.firstName}
                  </button>
                </NavLink>

                <ul className="dropdown-menu">
                  <li>
                    <NavLink
                      onClick={handleLogout}
                      to={"/login"}
                      className="dropdown-item"
                    >
                      Logout
                    </NavLink>
                  </li>
                </ul>
              </span>
            </>
          )}
        </div>
      )}
    </header>
  );
};

export default Header;
