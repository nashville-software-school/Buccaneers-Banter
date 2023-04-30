import Link from 'next/link'
import { useRouter } from 'next/router'

const Navbar = () => {
    const router = useRouter()

    const handleLogout = () => {
        // remove the user id from local storage or session storage
        localStorage.removeItem('pirateId')
        // redirect to the login page
        router.push('/logout')
    }

    return (
        <nav>
            <div className="">
                <Link className="brand" href="/">
                    Bucaneer's Banter
                </Link>
            </div>
            <div className="logout">
                <button
                    className="bg-red-500 hover:bg-red-700 font-bold py-0.5 px-3 rounded"
                    onClick={handleLogout}
                >
                    Logout
                </button>
            </div>
        </nav>
    )
}

export default Navbar
