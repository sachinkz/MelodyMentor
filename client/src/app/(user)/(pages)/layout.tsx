import Navbar from "@/components/user/Navbar/Navbar"



export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div>
            <Navbar onStartPage={false}/>
            {children}
        </div>

    )
}