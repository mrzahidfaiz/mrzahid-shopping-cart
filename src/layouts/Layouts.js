import Navigation from "../components/Navigation/Navigation";

const Layouts = ({children}) => {
    return (
        <>
        <Navigation />
        {children}
        </>
    )
}

export default Layouts;