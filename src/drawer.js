import {createDrawerNavigator,DrawerItems,SafeAreaView} from 'react-navigation'
export default createDrawerNavigator(
    {//Route Config
        
    },
    {
        drawerWidth:400,
        contentComponent:CustomDrawerContentComponent,

    }
);
const CustomDrawerContentComponent = (props) => (
    <ScrollView>
      <SafeAreaView style={styles.container} forceInset={{ top: 'always', horizontal: 'never' }}>
        <DrawerItems {...props} />
      </SafeAreaView>
    </ScrollView>
  );

  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
  });