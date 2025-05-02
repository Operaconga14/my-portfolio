import { Route, Routes } from "react-router-dom";
import Header from "./Header";
import Footer from './Footer';
import Home from "../pages/Home";

export default function DefaultLayout()
{
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
            <Footer />
        </>
    )
} 