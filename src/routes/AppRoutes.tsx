import Header from "@/components/header/Header";
import { AdminLayout } from "@/layout/Layout";
import ContactRequestPage from "@/pages/admin/contact-request/ContactRequestPage";
import FeedbackPage from "@/pages/admin/feedback/FeedbackPage";
import QrPage from "@/pages/admin/qr/QrPage";
import UserManagementPage from "@/pages/admin/user-management/UserManagementPage";
import LoginPage from "@/pages/auth/login/LoginPage";
import ContactPage from "@/pages/contact/ContactPage";
import HomePage from "@/pages/home/HomePage";
import Index from "@/pages/super-admin/Index";
import { Navigate, Route, Routes } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";

const AppRoutes = () => {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/login" element={<LoginPage />} />

                {/* Admin Routes (Protected) */}
                <Route
                    path="/admin"
                    element={
                        <ProtectedRoute allowedRoles={["admin"]}>
                            <AdminLayout />
                        </ProtectedRoute>
                    }
                >
                    <Route index element={<ContactRequestPage />} />
                    <Route
                        path="user-management"
                        element={<UserManagementPage />}
                    />
                    <Route path="qr" element={<QrPage />} />
                    <Route
                        path="contact-request"
                        element={<ContactRequestPage />}
                    />
                    <Route path="feedback" element={<FeedbackPage />} />
                </Route>

                {/* Super Admin Route (Protected) */}
                <Route
                    path="/super-admin"
                    element={
                        <ProtectedRoute allowedRoles={["super-admin"]}>
                            <Index />
                        </ProtectedRoute>
                    }
                />

                {/* Redirect unknown routes */}
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </>
    );
};

export default AppRoutes;
