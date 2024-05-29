import React from "react"
import { FireCMSCloudApp } from "@firecms/cloud";
import appConfig from "./index";

function App() {
    return <FireCMSCloudApp
        projectId={"hw-base-template-41212"}
        appConfig={appConfig}
    />;
}

export default App
