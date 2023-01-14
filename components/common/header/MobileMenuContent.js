import "react-pro-sidebar/dist/css/styles.css";
import { ProSidebar, SidebarHeader, SidebarFooter, Menu, MenuItem, SubMenu, SidebarContent } from "react-pro-sidebar";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import { signOut, useSession } from "next-auth/react";

const MobileMenuContent = () => {
  const route = useRouter();

  const { data: session, status } = useSession();

  return (
    <ProSidebar>
      <SidebarHeader>
        <div className="sidebar-header">
          <Link href="/" className="sidebar-header-inner">
            <Image width={40} height={40} className="nav_logo_img img-fluid mt20" src="/assets/images/header-logo2.png" alt="header-logo.png" />
            <span className="brand-text">Dream Way</span>
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
            <Link href="/lands" className={route.pathname === "/lands" ? "ui-active" : undefined}>
              Lands
            </Link>
          </MenuItem>
          <MenuItem>
            <Link href="/flats" className={route.pathname === "/lands" ? "ui-active" : undefined}>
              Flats
            </Link>
          </MenuItem>
          <MenuItem>
            <Link href="/notice-board" className={route.pathname === "/notice-board" ? "ui-active" : undefined}>
              Notice Board
            </Link>
          </MenuItem>
          {status === "authenticated" && (
            <MenuItem>
              <Link href="/my-property" className={route.pathname === "/my-property" ? "ui-active" : undefined}>
                My Property
              </Link>
            </MenuItem>
          )}
          {status === "authenticated" && (
            <MenuItem>
              <Link href="/wishlist" className={route.pathname === "/Wishlist" ? "ui-active" : undefined}>
                Wishlist
              </Link>
            </MenuItem>
          )}
          <MenuItem>
            <Link href="/contact" className={route.pathname === "/contact" ? "ui-active" : undefined}>
              Contact
            </Link>
          </MenuItem>
          <MenuItem>
            {status === "authenticated" ? (
              <button onClick={() => signOut()}>
                <span className="flaticon-user me-2"></span>
                Log Out
              </button>
            ) : (
              <Link href="/login" className={route.pathname === "/login" ? "ui-active" : undefined}>
                <span className="flaticon-user"></span> Login
              </Link>
            )}
          </MenuItem>
        </Menu>
      </SidebarContent>
    </ProSidebar>
  );
};

export default MobileMenuContent;
