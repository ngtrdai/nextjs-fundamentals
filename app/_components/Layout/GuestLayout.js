import Header from "@/app/_components/Header/Header";
import Footer from "@/app/_components/Footer/Footer";
import "@/app/_assets/css/base.css"
import "@/app/_assets/css/main.css"


export default function GuestLayout({ children }) {
    return (
        <body id={"top"}>
            <Header />
            {children}
            <Footer />
        </body>
    )
}