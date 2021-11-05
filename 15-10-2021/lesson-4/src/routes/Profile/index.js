import { Switch, Route } from "react-router-dom";

import { ProfileNav } from "./components";
import { Favorites, Help, UserInfo } from "./routes";

export const Profile = () => {
  return (
    <div>
      <ProfileNav />

      <Switch>
        <Route path="/profile/favorites" component={Favorites} />
        <Route path="/profile/help" component={Help} />
        <Route path="/" component={UserInfo} />
      </Switch>
    </div>
  );
};
