import { createContext } from "react";

const UserContext = createContext({
    LogginUser : "Default User",
});

export default UserContext;