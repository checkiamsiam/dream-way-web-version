import { signOut, useSession } from 'next-auth/react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const HeaderMenuContent = ({ float = '' }) => {
    const router = useRouter();

    const { data: session, status } = useSession();

    const properties = [
        { id: 1, name: 'Lands', routerPath: '/lands' },
        { id: 2, name: 'Flats', routerPath: '/flats' },
        ,
    ];

    return (
        <ul
            id="respMenu"
            className="ace-responsive-menu text-end d-lg-block d-none"
            data-menu-style="horizontal"
        >
            <li>
                <Link
                    href="/"
                    className={
                        router.pathname === '/' ? 'ui-active' : undefined
                    }
                >
                    <span className="title">Home</span>
                </Link>
            </li>

            <li className="dropitem">
                <a
                    href="#"
                    className={
                        properties.some(
                            (page) =>
                                page.routerPath === router.pathname ||
                                page.routerPath + '/[id]' === router.pathname
                        )
                            ? 'ui-active'
                            : undefined
                    }
                >
                    <span className="title">Properties</span>
                    <span className="arrow"></span>
                </a>
                <ul className="sub-menu ">
                    {properties.map((item) => (
                        <li key={item.id}>
                            <Link
                                href={item.routerPath}
                                className={
                                    router.pathname === item.routerPath ||
                                    item.routerPath + '/[id]' ===
                                        router.pathname
                                        ? 'ui-active'
                                        : undefined
                                }
                            >
                                {item.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </li>

            <li>
                <Link
                    href="/notice-board"
                    className={
                        router.pathname === '/notice-board'
                            ? 'ui-active'
                            : undefined
                    }
                >
                    <span className="title">Notice Board</span>
                </Link>
            </li>

            <li>
                <Link
                    href="/my-property"
                    className={
                        router.pathname === '/my-property'
                            ? 'ui-active'
                            : undefined
                    }
                >
                    <span className="title">My Property</span>
                </Link>
            </li>
            <li>
                <Link
                    href="/wishlist"
                    className={
                        router.pathname === '/wishlist'
                            ? 'ui-active'
                            : undefined
                    }
                >
                    <span className="title">Wishlist</span>
                </Link>
            </li>

            <li className="last">
                <Link
                    href="/contact"
                    className={
                        router.pathname === '/contact' ? 'ui-active' : undefined
                    }
                >
                    Contact
                </Link>
            </li>
            <li className="last">
                {status === 'authenticated' ? (
                    <button onClick={() => signOut()}>
                        <span className="flaticon-user me-2"></span>
                        Log Out
                    </button>
                ) : (
                    <Link
                        href="/login"
                        className={
                            router.pathname === '/login'
                                ? 'ui-active'
                                : undefined
                        }
                    >
                        <span className="flaticon-user"></span> Login
                    </Link>
                )}
            </li>
        </ul>
    );
};

export default HeaderMenuContent;
