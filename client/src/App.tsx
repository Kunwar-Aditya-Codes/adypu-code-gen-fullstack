import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import AdminLogin from './pages/Admin/AdminLogin';
import AdminDashboard from './pages/Admin/AdminDashboard';
import StudentLogin from './pages/Student/StudentLogin';
import StudentDashboard from './pages/Student/StudentDashboard';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />

        <Route path='admin'>
          <Route index element={<AdminLogin />} />
          <Route path='dashboard' element={<AdminDashboard />} />
        </Route>

        <Route path='student'>
          <Route index element={<StudentLogin />} />
          <Route path='dashboard' element={<StudentDashboard />} />
        </Route>

        <Route
          path='*'
          element={
            <h1 className='text-8xl font-bold text-white text-center'>
              404 Page Not Found!
            </h1>
          }
        />
      </Route>
    </Routes>
  );
}

export default App;
