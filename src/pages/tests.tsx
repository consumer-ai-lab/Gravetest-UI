import { useParams } from "react-router-dom"

export default function TestsPage(){
    const {testId} = useParams();
    console.log(testId);
    return (
        <div>
            Tests Page.
        </div>
    )
}