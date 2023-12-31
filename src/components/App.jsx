import { Suspense, lazy } from 'react';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import Loader from './Loader/Loader';
import { Route, Routes } from 'react-router-dom';
import { NavLayout } from './Navigation/NavLayout';
import { getCurrentThunk } from 'redux/Thunks/authThunk';
import { PublicRoute } from 'Guards/PublicRoute';
import { PrivateRoute } from 'Guards/PrivateRoute';

const Home = lazy(() => import('../pages/Home/Home'));
const Register = lazy(() => import('../pages/Register/Register'));
const Login = lazy(() => import('../pages/Login/Login'));
const ContactsPage = lazy(() => import('../pages/Contact/ContactsPage'));

export default function App() {  
  const dispatch = useDispatch();

  useEffect(()=>{    
    dispatch(getCurrentThunk());
  },[dispatch])

  return (   
      <Suspense fallback={<Loader />}>        
        <Routes>
          <Route path="/" element={<NavLayout />}>
            <Route index element={<PublicRoute><Home /></PublicRoute>} />
            <Route path="register" element={<PublicRoute><Register /></PublicRoute>} />
            <Route path="login" element={<PublicRoute><Login /></PublicRoute>} />
            <Route path="contacts" element={<PrivateRoute><ContactsPage /></PrivateRoute>} />
            <Route path="*" element={<PublicRoute><Home /></PublicRoute>} />
          </Route>
        </Routes>       
      </Suspense>
    
  );  
}
