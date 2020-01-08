import React,{ useRef } from 'react'
import Toolbar from './Toolbar'
import Content from './Content'
import { Fab } from '@material-ui/core';
import Add from '@material-ui/icons/Add';

function Dashboard(props) {

    const uploadInput = useRef(null);

    function onFileUpload(e){

        const file = e.target.files[0];

        const data = new FormData();

        data.append('file',file);

        fetch('http://localhost:5000/addpost',{
            method : 'POST',
            headers : {
                Authorization : localStorage.getItem('accessToken')
            },
            body : data
        }).then(()=>{
            //se ejecuta despues de cargar la foto
            window.location.reload();
        })

    }

    return (
        <div style={{position : 'relative',height : '100vh'}}>
            <Toolbar />
            <Content>
                {props.children}
            </Content>
            <Fab 
            onClick={()=>uploadInput.current.click()}
            style={{position : 'fixed',right : 25,bottom : 25}}
            variant="round" 
            color="primary">
                <Add />
            </Fab>
            <input 
            ref={uploadInput}
            accept="image/*"
            onChange={onFileUpload}
            multiple={false}
            hidden
            type="file"
            />
        </div>
    )
}

export default Dashboard;