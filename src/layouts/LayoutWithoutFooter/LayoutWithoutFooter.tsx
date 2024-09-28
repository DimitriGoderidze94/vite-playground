
import { Header } from "../../common";

function LayoutWithoutFooter({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Header />
            <main>
                {children}
            </main>
        </>
    )
}

export default LayoutWithoutFooter;