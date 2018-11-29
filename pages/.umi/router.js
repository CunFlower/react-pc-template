import React from 'react';
import { Router as DefaultRouter, Route, Switch } from 'react-router-dom';
import dynamic from 'umi/dynamic';
import renderRoutes from 'umi/_renderRoutes';


let Router = require('dva/router').routerRedux.ConnectedRouter;

let routes = [
  {
    "path": "/",
    "component": require('../../layouts/index.js').default,
    "routes": [
      {
        "path": "/dashboard/analysis",
        "exact": true,
        "component": require('../dashboard/analysis.js').default
      },
      {
        "path": "/dashboard/monitor",
        "exact": true,
        "component": require('../dashboard/monitor.js').default
      },
      {
        "path": "/dashboard/workplace",
        "exact": true,
        "component": require('../dashboard/workplace.js').default
      },
      {
        "path": "/",
        "exact": true,
        "component": require('../index.js').default
      },
      {
        "path": "/login/login",
        "exact": true,
        "component": require('../login/login.js').default
      },
      {
        "component": () => React.createElement(require('E:/my-react/react-pc-template/node_modules/_umi-build-dev@1.2.6@umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'pages', hasRoutesInConfig: false })
      }
    ]
  },
  {
    "component": () => React.createElement(require('E:/my-react/react-pc-template/node_modules/_umi-build-dev@1.2.6@umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'pages', hasRoutesInConfig: false })
  }
];
window.g_plugins.applyForEach('patchRoutes', { initialValue: routes });

export default function() {
  return (
<Router history={window.g_history}>
      { renderRoutes(routes, {}) }
    </Router>
  );
}
