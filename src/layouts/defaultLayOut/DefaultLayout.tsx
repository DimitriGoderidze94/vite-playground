
import { Footer, Header } from "../../common";
import style from "./defaultLayout.module.scss"

function DefaultLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className={`${style.page} container`}>
            <Header />
            <main className={style.main}>
                {children}
            </main>
            <Footer />
        </div>
    )
}

export default DefaultLayout;