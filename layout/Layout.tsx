import { AppProvider } from "context/AppContext"
import AppTheme from "./Basic"

const Layout = ({ children }: { children: any }) => {

    return (
        <AppProvider>
            <AppTheme>
                {children}
            </AppTheme>
        </AppProvider>
    )
}

export default Layout;