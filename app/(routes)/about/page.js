import GuestLayout from "@/app/_components/Layout/GuestLayout";
import Image from "next/image";
import AboutImage from "@/app/_assets/images/thumbs/about-us.jpg";

export default function About() {
    return (
        <GuestLayout>
            <section id={"content-wrap"} className={"site-page"}>
                <div className={"row"}>
                    <div className={"col-twelve"}>
                        <section>
                            <div className={"content-media"}>
                                <Image src={AboutImage.src} alt={"About Us"} width={1200} height={600} />
                            </div>
                            <div className={"primary-content"}>
                                <h1 className="entry-title add-bottom">Learn More About Us.</h1>
                                <p className="lead">Lorem ipsum Nisi cillum reprehenderit minim sunt dolore dolor
                                    eiusmod eu aliquip ad ut sint dolore laborum voluptate ullamco dolore aliquip enim.
                                    Excepteur cillum cupidatat fugiat nostrud cupidatat dolor sunt sint sit nisi est eu
                                    exercitation incididunt adipisicing</p>

                                <p>Duis ex ad cupidatat tempor Excepteur cillum cupidatat fugiat nostrud cupidatat dolor
                                    sunt sint sit nisi est eu exercitation incididunt adipisicing veniam velit id fugiat
                                    enim mollit amet anim veniam dolor dolor irure velit commodo cillum sit nulla
                                    ullamco magna amet magna cupidatat qui labore cillum sit in tempor veniam consequat
                                    non laborum adipisicing aliqua ea nisi sint ut quis proident ullamco ut dolore culpa
                                    occaecat ut laboris in sit minim cupidatat ut dolor voluptate enim veniam consequat
                                    occaecat fugiat in adipisicing in amet Ut nulla nisi non ut enim aliqua laborum
                                    mollit quis nostrud sed sed.</p>

                                <p>Lorem ipsum Cillum sit sunt dolore non aute enim pariatur deserunt magna
                                    reprehenderit veniam officia ullamco eiusmod laborum commodo veniam elit proident
                                    enim sit cillum ex aliquip dolore labore sint ut deserunt officia veniam consectetur
                                    in in quis eu consectetur non sint Duis mollit Ut magna irure.</p>
                                <div className="row block-1-2 block-tab-full">
                                    <div className="bgrid">
                                        <h3>Who.</h3>
                                        <p>Lorem ipsum Nisi amet fugiat eiusmod et aliqua ad qui ut nisi Ut aute anim
                                            mollit fugiat qui sit ex occaecat et eu mollit nisi pariatur fugiat deserunt
                                            dolor veniam reprehenderit aliquip magna nisi consequat aliqua veniam in
                                            aute ullamco Duis laborum ad non pariatur sit.</p>
                                    </div>

                                    <div className="bgrid">
                                        <h3>When.</h3>
                                        <p>Lorem ipsum Nisi amet fugiat eiusmod et aliqua ad qui ut nisi Ut aute anim
                                            mollit fugiat qui sit ex occaecat et eu mollit nisi pariatur fugiat deserunt
                                            dolor veniam reprehenderit aliquip magna nisi consequat aliqua veniam in
                                            aute ullamco Duis laborum ad non pariatur sit.</p>
                                    </div>

                                    <div className="bgrid">
                                        <h3>What.</h3>
                                        <p>Lorem ipsum Nisi amet fugiat eiusmod et aliqua ad qui ut nisi Ut aute anim
                                            mollit fugiat qui sit ex occaecat et eu mollit nisi pariatur fugiat deserunt
                                            dolor veniam reprehenderit aliquip magna nisi consequat aliqua veniam in
                                            aute ullamco Duis laborum ad non pariatur sit.</p>
                                    </div>

                                    <div className="bgrid">
                                        <h3>How.</h3>
                                        <p>Lorem ipsum Nisi amet fugiat eiusmod et aliqua ad qui ut nisi Ut aute anim
                                            mollit fugiat qui sit ex occaecat et eu mollit nisi pariatur fugiat deserunt
                                            dolor veniam reprehenderit aliquip magna nisi consequat aliqua veniam in
                                            aute ullamco Duis laborum ad non pariatur sit.</p>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </section>
        </GuestLayout>
    )
}