
import { Footer, Header } from "../../common";

function DefaultLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Header />
            <main>
                {children}
            </main>
            <Footer />
        </>
    )
}

export default DefaultLayout;