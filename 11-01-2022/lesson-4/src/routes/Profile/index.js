import { Switch, Route } from "react-router-dom";

import { ProfileNav } from "./components";
import { Favorites, Help, UserInfo } from "./routes";
import {useMemo} from "react";


export const Profile = (props) => {
  console.log(props);
  const navigation = useMemo(() => ([
    {
      to: `${props.parent}`,
      // to: '/profile/',
      title: "Info"
    },
    {
      to: `${props.parent}/favorites`,
      // to: `/profile/favorites`,
      title: "Favorites"
    },
    {
      to: `${props.parent}/help`,
      // to: `/profile/help`,
      title: "Help"
    }
  ]), [props.parent])

  return (
    <div>
      <ProfileNav navigation={navigation} />

      <Switch>
        <Route path={`${props.parent || 'profile'}/favorites`} component={Favorites} />
        <Route path={`${props.parent || 'profile'}/help`} component={Help} />
        {/*<Route path={`/profile/favorites`} component={Favorites} />*/}
        {/*<Route path={`/profile/help`} component={Help} />*/}
        <Route path="/" component={UserInfo} />
      </Switch>
    </div>
  );
};
