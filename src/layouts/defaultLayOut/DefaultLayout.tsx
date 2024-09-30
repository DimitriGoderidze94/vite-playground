
import { Footer, Header } from "../../common";
import style from "./defaultLayout.module.scss"

function DefaultLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Header />
            <main className={style.main}>
                {children}
            </main>
            <Footer />
        </>
    )
}

export default DefaultLayout;