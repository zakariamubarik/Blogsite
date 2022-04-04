import {createContext} from "react"

export const AboutContext = createContext();

function AboutContextProvider({children}){
const about= {
    name:"Dj Target",
    hobbies:["listening to music", "reading"],
    bio: "I am a dj"
}

    return(
        <AboutContext.Provider value={{about}}>{children}</AboutContext.Provider>
    )
}

export default AboutContextProvider