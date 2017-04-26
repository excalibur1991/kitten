import React from 'react';
import {StackNavigator} from 'react-navigation'
import _ from 'lodash';
import Styles from '../config/styles';
import * as Screens from '../screens';
import {FontIcons} from '../assets/fontIcons';

export const MainRoutes = [
  {
    id: 'LoginMenu',
    title: 'Login',
    icon: FontIcons.login,
    screen: Screens.LoginMenu,
    children: []
  },
  {
    id: 'NavigationMenu',
    icon: FontIcons.navigation,
    title: 'Navigation',
    screen: Screens.NavigationMenu,
    children: [
      {
        id: 'GridV1',
        title: 'Grid Menu V1',
        screen: Screens.GridV1,
        children: []
      },
      {
        id: 'GridV2',
        title: 'Grid Menu V2',
        screen: Screens.GridV2,
        children: []
      },
      {
        id: 'List',
        title: 'List Menu',
        screen: Screens.ListMenu,
        children: []
      },
    ]
  },
  {
    id: 'SocialMenu',
    title: 'Social',
    icon: FontIcons.profile,
    screen: Screens.SocialMenu,
    children: []
  },
  {
    id: 'ArticlesMenu',
    title: 'Articles',
    icon: FontIcons.article,
    screen: Screens.ArticleMenu,
    children: []
  },
  {
    id: 'MessagingMenu',
    title: 'Messaging',
    icon: FontIcons.mail,
    screen: Screens.MessagingMenu,
    children: []
  },
  {
    id: 'DashboardsMenu',
    title: 'Dashboards',
    icon: FontIcons.dashboard,
    screen: Screens.DashboardMenu,
    children: []
  },
  {
    id: 'WalkthroughMenu',
    title: 'Walkthrough',
    icon: FontIcons.mobile,
    screen: Screens.WalkthroughMenu,
    children: []
  },
  {
    id: 'EcommerceMenu',
    title: 'Ecommerce',
    icon: FontIcons.card,
    screen: Screens.EcommerceMenu,
    children: []
  },
  {
    id: 'OtherMenu',
    title: 'Other',
    icon: FontIcons.other,
    screen: Screens.OtherMenu,
    children: []
  }
];

let main = {};
let flatRoutes = {};
(MainRoutes).map(function (route, index) {

  let wrapToRoute = (route) => {
    return {screen: route.screen, title: route.title}
  };

  flatRoutes[route.id] = wrapToRoute(route);
  main[route.id] = wrapToRoute(route);
  for (let child of route.children) {
    flatRoutes[child.id] = wrapToRoute(child);
  }
});

const DrawerRoutes = Object.keys(main).reduce((routes, name) => {
  let stack_name = name;
  routes[stack_name] = {
    name: stack_name,
    screen: StackNavigator(flatRoutes, {
      initialRouteName: name,
      navigationOptions: {
        headerStyle: Styles.appHeader,
        headerTitleStyle: Styles.appHeaderTitle
      },
      cardStyle: Styles.card
    })
  };
  return routes;
}, {});

export const AppRoutes = DrawerRoutes;
export const LoginRoutes = _.find(MainRoutes, {id: 'LoginMenu'}).children;
export const NavigationRoutes = _.find(MainRoutes, {id: 'NavigationMenu'}).children;
export const SocialRoutes = _.find(MainRoutes, {id: 'SocialMenu'}).children;
export const ArticleRoutes = _.find(MainRoutes, {id: 'ArticlesMenu'}).children;
export const MessagingRoutes = _.find(MainRoutes, {id: 'MessagingMenu'}).children;
export const DashboardRoutes = _.find(MainRoutes, {id: 'DashboardsMenu'}).children;
export const WalkthroughRoutes = _.find(MainRoutes, {id: 'WalkthroughMenu'}).children;
export const EcommerceRoutes = _.find(MainRoutes, {id: 'EcommerceMenu'}).children;
export const OtherRoutes = _.find(MainRoutes, {id: 'OtherMenu'}).children;


export const SideMenuComponent = (props) => (
  <Screens.SideMenu {...props}/>
);
