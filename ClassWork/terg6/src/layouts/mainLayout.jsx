import Footer from "./footer"
import Header from "./header"

export default function MainLayout({ children }) {
    return (
        <div class="flex flex-col min-h-[100vh]">
            <Header />
            <div class="grow p-4">
                <div class="max-w-[1000px] mx-auto ">{children}</div>
            </div>
            <Footer />
        </div>
    )
}
