import React from 'react'
import { useLocation, matchPath} from "react-router-dom"

export default function UseRouteMatch(path){
    const location = useLocation();
  return matchPath(location.pathname(), {path})
}
