import React from 'react';
import {
  StyleSheet,
  TouchableHighlight,
  View,
  ScrollView,
  Platform
} from 'react-native';
import {NavigationActions} from 'react-navigation';
import {RkText} from 'react-native-ui-kitten';
import {MainRoutes} from '../../config/routes';
import {KittenTheme} from '../../config/theme';



export class SideMenu extends React.Component {

  constructor(props) {
    super(props);
    this._navigateAction = this._navigate.bind(this);
  }

  _navigate(route) {
    let resetAction = NavigationActions.reset({
      index: 0,
      actions: [
        NavigationActions.navigate({routeName: route.id})
      ]
    });
    this.props.navigation.dispatch(resetAction)
  }

  render() {
    let menu = MainRoutes.map((route, index) => {
      return (
        <TouchableHighlight
          style={styles.container}
          key={route.id}
          onPress={() => this._navigateAction(route)}>
          <View style={styles.content}>
            <RkText style={styles.icon} rkType='moon primary xlarge'>{route.icon}</RkText>
            <RkText>{route.title}</RkText>
          </View>
        </TouchableHighlight>
      )
    });

    return (
      <ScrollView style={styles.root}>
        <View style={[styles.container,styles.content]}>
          <RkText style={styles.icon}>UI Kitten</RkText>
        </View>
        {menu}
      </ScrollView>
    )
  }
}


let styles = StyleSheet.create({
  container: {
    height: 80,
  },
  root: {
    marginTop: Platform.OS === 'ios' ? 20 : 0,
  },
  content:{
    flex:1,
    flexDirection:'row',
    alignItems:'center',
    borderTopWidth:1,
    borderColor:KittenTheme.colors.border.underline
  },
  icon:{
    marginHorizontal:16,
  }
});