import Nav from "./nav";

export default function ServicesLayout({ children }: any) {
    return <>
        <div style={{ backgroundColor: "red", color: "white", padding: "10px" }}>
            Layout exclusivo dos services!
            <Nav></Nav>
        </div>
        {children}
    </>;
}