import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Open from './Open';
import SignIn from './SignIn';
import Edit from './Edit';
import Accounts from './Accounts';
import Mockup from './Mockup';
import Error from './Error';


function BankRoutes() {
  return (
    <Routes>
      <Route path="/2-Bank/" element={<> <Open /> </>} />
      <Route path="/2-Bank/sign-in" element={<> <SignIn /> </>} />
      <Route path="/2-Bank/edit" element={<> < Edit /> </>} />
      <Route path="/2-Bank/user" element={<> < Accounts /> </>} />
      <Route path="/2-Bank/mockup" element={<> < Mockup /> </>} />
      <Route path="/2-Bank/error" element={<> < Error /> </>} />
    </Routes>
  );
}

export default BankRoutes;