import { useNavigate } from "react-router";

const Page404 = () => {
    const navigate = useNavigate();

    // Adding a generic page to handle invalid paths
    return (
        <div className="page-404">
            <h1 style={{ paddingTop: '2rem' }}>Page Not Found</h1>
            <button className="btn btn-success" style={{ marginTop: '2rem' }} onClick={ () => navigate("/") }>Go Home</button>
        </div>
    )

}

export default Page404;