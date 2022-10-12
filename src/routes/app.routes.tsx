import { Routes, Route, Navigate } from "react-router-dom";
import { Index } from "../pages";


export const AppRoutes:React.FC  = () => {
    return(
        <Routes>
          <Route path="/" element={<Index />}/>

          <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    )
}