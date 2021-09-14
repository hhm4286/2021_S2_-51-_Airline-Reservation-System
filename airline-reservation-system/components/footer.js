import Link from 'next/link'

export default function Footer () {
    return (
        <div class="container">
        <footer class="py-3 my-4">
        <ul class="nav justify-content-center border-bottom pb-3 mb-3">
            <li class="nav-item">
                <Link href="/">
                    <a class="nav-link px-2 text-muted">Home</a>
                </Link>
            </li>
            <li class="nav-item">
                <Link href="/bookings">
                    <a class="nav-link px-2 text-muted">Booking</a>
                </Link>
            </li>
            <li class="nav-item">
                <Link href="/transport">
                    <a class="nav-link px-2 text-muted">Transport</a>
                </Link>
            </li>
            <li class="nav-item">
                <Link href="/covid">
                    <a class="nav-link px-2 text-muted">Covid-19</a>
                </Link>
            </li>
        </ul>
        <p class="text-center text-muted">&copy; 2021 Skyhub</p>
        </footer>
        </div>
    )
}