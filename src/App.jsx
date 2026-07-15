import { Routes, Route } from "react-router-dom";

import PageConnexion from "./pages/auth/PageConnexion";
import PageAccueil from "./pages/PageAccueil";
import PageInscription from "./pages/auth/PageInscription";

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<PageAccueil />} />
            <Route path="/accueil" element={<PageAccueil />} />
            <Route path="/connexion" element={<PageConnexion />} />
            <Route path="/inscription" element={<PageInscription />} />
            
        </Routes>
    );
};

export default App



// // import { login } from "./api/authService";
// import PageConnexion from "./pages/Auth/PageConnexion"

// function App() {

//     // async function testLogin() {

//     //     try {

//     //         const response = await login({
//     //             email: "gabrielle@test.com",
//     //             password: "Gab"
//     //         });

//     //         console.log(response.data);

//     //     } catch (error) {

//     //         console.error(error);

//     //     }

//     // }

//     return (
//         <div>
//             <PageConnexion />
//         </div>
//     );
// }

// export default App;
