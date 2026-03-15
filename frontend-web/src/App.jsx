import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import AgentLogin from './pages/AgentLogin';
import AdminLogin from './pages/AdminLogin';
import AdminLayout from './layout/AdminLayout';
import Dashboard from './pages/admin/Dashboard';
import Users from './pages/admin/Users';

function App() {
    return (
        <Router>
            <Routes>
                {/* Route Agent (Public) */}
                <Route path="/login" element={<AgentLogin />} />

                {/* Route Admin (Cachée/Spécifique) */}
                <Route path="/admin-secure-portal" element={<AdminLogin />} />

                {/* Dashboard Admin (Protégé - Layout) */}
                <Route path="/admin-dashboard" element={<AdminLayout />}>
                    <Route index element={<Dashboard />} />
                    <Route path="users" element={<Users />} />
                    <Route path="fleet" element={<div className="glass-card"><h1>Gestion Flotte</h1></div>} />
                    {/* Autres sous-routes à implémenter */}
                </Route>

                {/* Redirection par défaut */}
                <Route path="/" element={<Navigate to="/login" replace />} />

                {/* Fallback */}
                <Route path="*" element={<div className="glass-card"><h1>404</h1><p>Page non trouvée</p></div>} />
            </Routes>
        </Router>
    );
}

export default App;
