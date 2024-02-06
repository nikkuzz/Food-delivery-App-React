import UserContext from "../utils/UserContext";
import UserClass from "./UserClass";


const About = () => {
    return (
        <>
        <h1>About Us</h1>
        <h2>This is the about section!!</h2>
        <UserContext.Consumer>
            {({LogginUser}) => 
                (<h1 className="text-xl font-bold">{LogginUser}</h1>)
            } 
        </UserContext.Consumer> 

        <UserClass country={"India"} />
        </>
    )
}

export default About;