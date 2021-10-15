import { useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getIsAuth, initAuthAction } from "../store/user/reducer";
import { PublicRoute, PrivateRoute } from "../hocs";
import { Login, Profile, SignUp } from "./pages";
import { Homework } from "./homework";
import {
    ExerciseOne,
    ExerciseTwo,
    ExerciseThree,
    ExerciseFour
} from "./exercises";
import { auth } from "../firebase";

export const navigation = [
    {
        path: "/homework",
        component: Homework,
        title: "homework"
    },
    {
        path: "/ExerciseOne",
        component: ExerciseOne,
        title: "ExerciseOne"
    },
    {
        path: "/ExerciseTwo",
        component: ExerciseTwo,
        title: "ExerciseTwo"
    },
    {
        path: "/ExerciseThree",
        component: ExerciseThree,
        title: "ExerciseThree"
    },
    {
        path: "/ExerciseFour",
        component: ExerciseFour,
        title: "ExerciseFour"
    }
];

export const navAuth = [
    {
        path: "/login",
        component: Login,
        title: "Login"
    },
    {
        path: "/profile",
        component: Profile,
        title: "Profile"
    },
    {
        path: "/signup",
        component: SignUp,
        title: "Sign Up"
    }
];

export const ExercisesRoute = () => {
    const isAuth = useSelector(getIsAuth);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(initAuthAction);
    }, []);

    return (
        <Switch>
            {navigation.map(({ path, component }) => (
                <Route component={component} path={path} />
            ))}
            <PublicRoute
                auth={isAuth}
                path={"/login"}
                component={() => <Login />}
            />

            <PublicRoute auth={isAuth} path={"/signup"} component={SignUp} />
            <PrivateRoute auth={isAuth} path={"/profile"} component={Profile} />
        </Switch>
    );
};
