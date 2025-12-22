import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CreateOrderPage from './CreateOrderPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CreateOrderPage />} />
      </Routes>
    </Router>
  );
}

export default App;
