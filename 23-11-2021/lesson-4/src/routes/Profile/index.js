import { Switch, Route } from "react-router-dom";

import { ProfileNav } from "./components";
import { Favorites, Help, UserInfo } from "./routes";
import {useMemo} from "react";


export const Profile = (props) => {

  const navigation = useMemo(() => ([
    {
      to: `${props.parent}`,
      title: "Info"
    },
    {
      to: `${props.parent}/favorites`,
      title: "Favorites"
    },
    {
      to: `${props.parent}/help`,
      title: "Help"
    }
  ]), [props.parent])

  return (
    <div>
      <ProfileNav navigation={navigation} />

      <Switch>
        <Route path={`${props.parent || 'profile'}/favorites`} component={Favorites} />
        <Route path={`${props.parent || 'profile'}/help`} component={Help} />
        <Route path="/" component={UserInfo} />
      </Switch>
    </div>
  );
};
