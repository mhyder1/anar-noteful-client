import React from 'react';

const AppContext= React.createContext({

    notes : [],
    folders: [],
    handleDelete:()=>{},
    addFolder:()=>{},
    addNote:()=>{}
})

export default AppContext;