import React from 'react'
import Topbar from './Topbar';

type Props = {
    children: React.ReactNode
}

function Layout(props: Props) {

    const { children } = props;


    return (
        <>
        <Topbar />
            <main>
                {children}
            </main>
        </>
    )
}

export default Layout
