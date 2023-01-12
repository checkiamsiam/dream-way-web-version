import "react-pro-sidebar/dist/css/styles.css";
import { ProSidebar, SidebarHeader, SidebarFooter, Menu, MenuItem, SubMenu, SidebarContent } from "react-pro-sidebar";
import Link from "next/link";
import { useRouter } from "next/router";

const MobileMenuContent = () => {
  const route = useRouter();

  const properties = [{ id: 1, name: "Lands", routerPath: "/lands" }, { id: 2, name: "Flats", routerPath: "/flats" }, ,];
  return (
    <ProSidebar>
      <SidebarHeader>
        <div className="sidebar-header">
          <Link href="/" className="sidebar-header-inner">
            <img className="nav_logo_img img-fluid mt20" src="/assets/images/header-logo2.png" alt="header-logo.png" />
            <span className="brand-text">FindHouse</span>
          </Link>
          {/* End .logo */}

          <div className="fix-icon" data-bs-dismiss="offcanvas" aria-label="Close">
            <span className="flaticon-close"></span>
          </div>
          {/* Mobile Menu close icon */}
        </div>

        {/* End logo */}
      </SidebarHeader>

      <SidebarContent>
        <Menu>
          <MenuItem>
            <Link href="/" className={route.pathname === "/" ? "ui-active" : undefined}>
              Home
            </Link>
          </MenuItem>

          <SubMenu
            title="Properties"
            className={
              properties.some((page) => page.routerPath === route.pathname || page.routerPath + "/[id]" === route.pathname) ? "ui-active" : undefined
            }
          >
            {properties.map((val, i) => (
              <MenuItem key={i}>
                <Link href={val.routerPath} className={route.pathname === val.routerPath ? "ui-active" : undefined}>
                  {val.name}
                </Link>
              </MenuItem>
            ))}
          </SubMenu>

          <MenuItem>
            <Link href="/notice-board" className={route.pathname === "/notice-board" ? "ui-active" : undefined}>
              Notice Board
            </Link>
          </MenuItem>
          <MenuItem>
            <Link href="/my-property" className={route.pathname === "/my-property" ? "ui-active" : undefined}>
              My Property
            </Link>
          </MenuItem>
          <MenuItem>
            <Link href="/contact" className={route.pathname === "/contact" ? "ui-active" : undefined}>
              Contact
            </Link>
          </MenuItem>
          <MenuItem>
            <Link href="/login" className={route.pathname === "/login" ? "ui-active" : undefined}>
              <span className="flaticon-user"></span> Login
            </Link>
          </MenuItem>

          <MenuItem>
            <Link href="/register" className={route.pathname === "/register" ? "ui-active" : undefined}>
              <span className="flaticon-edit"></span> Register
            </Link>
          </MenuItem>
        </Menu>
      </SidebarContent>
    </ProSidebar>
  );
};

export default MobileMenuContent;
