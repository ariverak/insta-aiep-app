import React from 'react'
import Toolbar from './Toolbar'
import Content from './Content'

function Dashboard(props) {
    return (
        <div>
            <Toolbar />
            <Content>
                {props.children}
            </Content>
        </div>
    )
}

export default Dashboard;