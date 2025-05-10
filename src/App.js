import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, AuthProvider, CartProvider } from './contexts';
import { Header, Footer } from './components';
import { Home, Products, Cart, Login, Dashboard } from './pages';
import ProtectedRoute from './components/ProtectedRoute';

const App = () => {
  return (
    <Router>
      <ThemeProvider>
        <AuthProvider>
          <CartProvider>
            <Header />
            <main>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/products" element={<Products />} />
                <Route path="/login" element={<Login />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/dashboard" element={
                  <ProtectedRoute>
                    <Dashboard />
                  </ProtectedRoute>
                } />
              </Routes>
            </main>
            <Footer />
          </CartProvider>
        </AuthProvider>
      </ThemeProvider>
    </Router>
  );
};

export default App;