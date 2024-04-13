import { LazyRouteFunction, RouteObject } from 'react-router-dom';

export type LazyComponentType = ReturnType<LazyRouteFunction<RouteObject>>;
