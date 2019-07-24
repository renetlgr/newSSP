import React, { Component } from 'react'
import FullWidthTabs from "../../common/FullWidthTabs/fullWidthTabs";
import Services from "./common/services";

let labelTabs = ['Services','Tickets'];
let githubCard = {img: 'https://png.icons8.com/ios-filled/github/000000/100', 
                  title:'Github', 
                  description:"GitHub  It offers all of the distributed version control and source code management (SCM) functionality of Git as well as adding its own features. It provides access control and several collaboration features such as bug tracking, feature requests, task management, and wikis for every project."            
                 }
let servicesList = [githubCard];
let tabFunctionalities = [<Services servicesList={servicesList} isAdmin={false}/>,<div>Tickets!!</div>]

class ServicesClient extends Component {
    render() {
        return (
            <>
                <FullWidthTabs labelTabs={labelTabs} tabFunctionalities={tabFunctionalities}/>
            </>
        )
    }
}

export default ServicesClient;