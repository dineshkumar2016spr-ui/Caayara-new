function Footer() {
    return (
        <footer>
            <div className="footer-content">
                <p>&copy; {new Date().getFullYear()} Your Company Name. All rights reserved.</p>
                <nav>
                    <ul>
                        <li><a href="/about.html">About</a></li>
                        <li><a href="/services.html">Services</a></li>
                        <li><a href="/repair.html">Repair</a></li>
                        <li><a href="/contact.html">Contact</a></li>
                    </ul>
                </nav>
            </div>
        </footer>
    );
}

export default Footer;