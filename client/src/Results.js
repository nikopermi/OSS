import { useSearchParams } from "react-router-dom";

function Results() {
    const [searchParams, setSearchParams] = useSearchParams();
    return (
        <div>
            <h1>{searchParams.get('search')}</h1>
        </div>
    );
}

export default Results;