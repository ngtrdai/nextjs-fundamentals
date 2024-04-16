import GuestLayout from "@/app/_components/Layout/GuestLayout";
import GoogleMap from "@/app/_components/GoogleMap/GoogleMap";
import ContactForm from "@/app/(routes)/contact/_components/ContactForm";
import ContentIntro from "@/app/_components/ContentIntro/ContentIntro";

export default function Contact() {
    return (
        <GuestLayout>
            <section id={"content-wrap"} className={"site-page"}>
                <div className={"row"}>
                    <div className={"col-twelve"}>
                        <section>
                            <div className={"content-media"}>
                                <GoogleMap embedUrl={"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.1215084391033!2d106.63880547599831!3d10.802004689348342!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3175294fe7593643%3A0x75fc2555a7f3e79!2zRXRvd24sIMSQLiBD4buZbmcgSMOyYSwgUGjGsOG7nW5nIDEzLCBUw6JuIELDrG5oLCBUaMOgbmggcGjhu5EgSOG7kyBDaMOtIE1pbmgsIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1712656408301!5m2!1svi!2s"} />
                            </div>
                            <div className={"primary-content"}>
                                <ContentIntro title={"Get In Touch With Us."}
                                              lead={"Lorem ipsum Deserunt est dolore Ut Excepteur nulla occaecat magna occaecat Excepteur nisi esse veniam dolor consectetur minim qui nisi esse deserunt commodo ea enim ullamco non voluptate consectetur minim aliquip Ut incididunt amet ut cupidatat."}
                                >
                                    <p>Duis ex ad cupidatat tempor Excepteur cillum cupidatat fugiat nostrud cupidatat
                                        dolor sunt sint sit nisi est eu exercitation incididunt adipisicing veniam velit
                                        id fugiat enim mollit amet anim veniam dolor dolor irure velit commodo cillum
                                        sit nulla ullamco magna amet magna cupidatat qui labore cillum sit in tempor
                                        veniam consequat non laborum adipisicing aliqua ea nisi sint ut quis proident
                                        ullamco ut dolore culpa occaecat ut laboris in sit minim cupidatat ut dolor
                                        voluptate enim veniam consequat occaecat fugiat in adipisicing in amet Ut nulla
                                        nisi non ut enim aliqua laborum mollit quis nostrud sed sed.</p>
                                </ContentIntro>
                                <div className={"row"}>
                                    <div className={"col-six tab-full"}>
                                        <h3>Where to Find Us</h3>
                                        <p>1600 Amphitheatre Parkway<br/>Mountain View, CA<br/>94043 US</p>
                                    </div>
                                    <div className={"col-six tab-full"}>
                                        <h3>Contact Info</h3>
                                        <p>someone@abstractwebsite.com<br/>info@abstractwebsite.com<br/>Phone: (+63) 555
                                            1212</p>
                                    </div>
                                </div>
                                <ContactForm />
                            </div>
                        </section>
                    </div>
                </div>
            </section>
        </GuestLayout>
    );
}