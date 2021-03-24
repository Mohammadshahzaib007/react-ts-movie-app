
import { Typography } from '@material-ui/core'
import React from 'react'

function FullScreenLoader() {
    return (
        <div style={{width: '100%', height: '90vh', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <Typography variant="h3">Loading....</Typography>
        </div>
    )
}

export default FullScreenLoader
