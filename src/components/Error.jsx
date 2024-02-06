import { useRouteError } from "react-router";

const Error = () => {

    const err = useRouteError();

    return (
        <>
        <h1>Oopss!! Something went wrong.</h1>
        <h2 className="error">{err.status} : {err.statusText}</h2>
        </>
    )
}

export default Error;