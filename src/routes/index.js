import { Switch, Route } from 'react-router-dom';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUP';

import Dashbord from '../pages/Dashbord';
import Profile from '../pages/Profile';

export default function routes () {}
return ( 
<Switch>
  <Route path="/" exact componente={SignIn}  />
  <Route path="/" exact componente={SignUp}  />
</Switch>
);
}
