import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import AdminLogin from './pages/Admin/AdminLogin';
import AdminDashboard from './pages/Admin/AdminDashboard';
import StudentLogin from './pages/Student/StudentLogin';
import StudentDashboard from './pages/Student/StudentDashboard';
import RequireAuth from './components/RequireAuth';
import PersistLogin from './components/PersistLogin';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />

        <Route path='admin'>
          <Route index element={<AdminLogin />} />
          <Route element={<PersistLogin />}>
            <Route element={<RequireAuth role={'admin'} />}>
              <Route path='dashboard' element={<AdminDashboard />} />
            </Route>
          </Route>
        </Route>

        <Route path='student'>
          <Route index element={<StudentLogin />} />
          <Route element={<PersistLogin />}>
            <Route element={<RequireAuth role={'student'} />}>
              <Route path='dashboard' element={<StudentDashboard />} />
            </Route>
          </Route>
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
