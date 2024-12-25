import { Route, BrowserRouter, Routes, RouterProvider } from 'react-router'
import routers  from './routers/routers'
import { Suspense } from 'react'
import SidebarProvider from './contexts/SidebarContext.Provider'
import Sidebar from './components/Sidebar/Sidebar'
import Loading from '@components/Loading/Loading'
import MainLayout from '@pages/Layout/MainLayout'
import browserRouter from './routers/routers'

function App() {
    return (
        <>
            <SidebarProvider>
                <Sidebar></Sidebar>
                <Suspense fallback={<div>Loading...</div>}>
                    <RouterProvider router={browserRouter}/>
                </Suspense>
            </SidebarProvider>
        </>
    )
}

export default App
