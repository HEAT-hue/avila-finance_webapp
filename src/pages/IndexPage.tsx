// jshint esversion:6
import { Routes, Route } from "react-router-dom";
import { DashboardPage, RegisterPage, LoginPage, HomePage } from "./subroutes";

function IndexPage() {
    return (
        <>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/dashboard" element={<DashboardPage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/login" element={<LoginPage />} />
            </Routes>
        </>
    );
}

export { IndexPage };