import React from "react"
import { FireCMSCloudApp } from "@firecms/cloud";
import appConfig from "./index";

function App() {
    return <FireCMSCloudApp
        projectId={"tulsacustomwebsites"}
        appConfig={appConfig}
    />;
}

export default App
