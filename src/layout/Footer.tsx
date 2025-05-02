export default function Footer()
{

    const fullYear = new Date().getFullYear()
    return (
        <footer className="py-3 bg-dark text-white">
            <div className="container text-center">
                <p className="mb-0">
                    &copy; {fullYear} Amire Joseph All rights reserved.
                </p>
                <div className="mb-0 d-flex justify-content-center">
                    <a href="" className="text-white mx-2">
                        <i className="bi-twitter bi"></i>
                    </a>
                    <a href="" className="text-white mx-2">
                        <i className="bi-linkedin bi"></i>
                    </a>
                    <a href="" className="text-white mx-2">
                        <i className="bi-github bi"></i>
                    </a>
                </div>
            </div>
        </footer>
    )
}