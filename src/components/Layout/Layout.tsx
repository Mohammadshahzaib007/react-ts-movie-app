import React from 'react'

type Props = {
    children: React.ReactNode
}

function Layout(props: Props) {

    const { children } = props;


    return (
        <>
            <main>
                {children}
            </main>
        </>
    )
}

export default Layout
