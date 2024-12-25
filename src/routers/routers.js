import { Children, lazy } from 'react'
import { createBrowserRouter } from 'react-router'

const MainLayout = lazy(() => import("@pages/Layout/MainLayout"));
const HomePage = lazy(() => import("@components/HomePage/HomePage"));
const UserPage = lazy(() => import("@pages/UserPage/UserPage"));
const AccountInfo = lazy(() => import("@components/UserPage/AccountInfo/AccountInfo"))
const AccountAddress = lazy(() => import("@components/UserPage/AccountAddress/AccountAddress"))


const PersistentLogin = lazy(() => import('@components/Middleware/PersistentLogin'))
export const routers = [
    {
        path: '/',
        Component: PersistentLogin, 
        children: [
            {
                path: '',
                Component: MainLayout,
                children: [
                    {
                        index: true,
                        Component: HomePage,
                    },
                    {
                        path: "blog", // Không cần dấu `/`
                        Component: HomePage,
                    },
                    {
                        path: "user",
                        Component: UserPage,
                        children: [
                            {
                                index: true,
                                Component: AccountInfo
                            },
                            {
                                path: 'all-address',
                                Component: AccountAddress
                            }
                        ]
                    },
                ],
            },
        ]
    }
]

const browserRouter = createBrowserRouter(routers);

export default browserRouter