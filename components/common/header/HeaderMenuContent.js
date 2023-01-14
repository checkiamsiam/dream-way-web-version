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
                    href="/lands"
                    className={
                        router.pathname === '/lands' ? 'ui-active' : undefined
                    }
                >
                    <span className="title">Lands</span>
                </Link>
            </li>

            <li>
                <Link
                    href="/flats"
                    className={
                        router.pathname === '/flats' ? 'ui-active' : undefined
                    }
                >
                    <span className="title">Flats</span>
                </Link>
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

            {status === 'authenticated' && (
                <>
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
                </>
            )}

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
