import { useParams } from "react-router-dom";

const ProfilPatient = () => {

    const { patientId } = useParams();

    return (
        <div>
           <h1>Page du Patient {patientId }</h1> 
        </div>
    );

}

export default ProfilPatient;