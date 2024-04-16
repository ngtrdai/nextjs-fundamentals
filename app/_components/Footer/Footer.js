import Link from "next/link";

export default function Footer() {
    return (
        <footer>
            <div className={"footer-main"}>
                <div className="row">
                    <div className="col-four tab-full mob-full footer-info">
                        <h4>About Our Site</h4>
                        <p>
                            Lorem ipsum Ut velit dolor Ut labore id fugiat in ut fugiat nostrud qui in dolore commodo eu
                            magna Duis cillum dolor officia esse mollit proident Excepteur exercitation nulla. Lorem
                            ipsum
                            In reprehenderit commodo aliqua irure labore.
                        </p>
                    </div>
                    <div className="col-two tab-1-3 mob-1-2 site-links">
                        <h4>Site Links</h4>
                        <ul>
                            <li><Link href="#">About Us</Link></li>
                            <li><Link href="#">Blog</Link></li>
                            <li><Link href="#">FAQ</Link></li>
                            <li><Link href="#">Terms</Link></li>
                            <li><Link href="#">Privacy Policy</Link></li>
                        </ul>
                    </div>
                    <div className="col-two tab-1-3 mob-1-2 social-links">
                        <h4>Social</h4>
                        <ul>
                            <li><Link href="#">Facebook</Link></li>
                            <li><Link href="#">Twitter</Link></li>
                            <li><Link href="#">Instagram</Link></li>
                            <li><Link href="#">LinkedIn</Link></li>
                        </ul>
                    </div>
                    <div className="col-four tab-1-3 mob-full footer-subscribe">
                        <h4>Subscribe</h4>
                        <p>Keep yourself updated. Subscribe to our newsletter.</p>
                        <div className="subscribe-form">
                            <form id="mc-form" className="group" noValidate={true}>
                                <input type="email" defaultValue="" name="EMAIL" className="email" id="mc-email"
                                    placeholder="Type &amp; press enter" required={true}/>
                                <input type="submit" name="subscribe" value="subscribe"/>
                                <label htmlFor="mc-email" className="subscribe-message"></label>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className={"footer-bottom"}>
                <div className={"row"}>
                    <div className={"col-twelve"}>
                        <div className={"copyright"}>
                            <span>© Copyright Abstract 2016</span>
                            <span>Design by <a href="http://www.styleshout.com/">styleshout</a></span>
                        </div>
                        <div id={"go-top"}>
                            <Link className="smoothscroll"
                                  title="Back to Top" href="#">
                                <i className="icon icon-arrow-up"></i>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}