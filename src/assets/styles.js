import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    Header: {
      paddingHorizontal: 20,
      paddingTop: 40,
      backgroundColor: '#1E1A3C',
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'space-between'
    },
    Title: {
      fontWeight: 'bold', 
      fontSize: 27, 
      color: '#fff'
    },
    container: {
      flex: 1,
      backgroundColor: '#1E1A3C',
      paddingHorizontal: 20,
      paddingVertical: 20,
      
    },
    Body: {
      flex: 1
    },
    Form: {
      padding: 0,
      justifyContent: 'space-around',
      alignSelf: 'stretch',
      flexDirection: 'row',
      paddingTop: 13,
    },
    InputUpdate: {
      flex: 1,
      paddingLeft: 10,
      color: '#fff',
      fontSize: 18,
      fontWeight: 'bold'
    },
    Input: {
      width: 250,
      height: 50,
      backgroundColor: '#3E3364',
      borderRadius: 60,
      color: '#fff',
      borderColor: '#C0C0C0',
      borderWidth: 1,
      paddingVertical: 15,
      paddingHorizontal: 15,
      borderWidth: 1,
    },
    Button: {
      width: 60,
      justifyContent: 'center',
      borderWidth: 1,
      borderColor: '#C0C0C0',
      alignItems: 'center',
      backgroundColor: '#3E3364',
      borderRadius: 60,
    },
    FlatList: {
      flex: 1,
      marginTop: 5
    },
    ContainerView: {
      padding: 15,
      alignItems: 'center',
      flexDirection: 'row',
    },
    taskContainer: {
      flex: 1,
      backgroundColor: '#3E3364',
      borderRadius: 12,
      paddingVertical: 12,
      marginLeft: 14,
      alignItems: 'center',
      justifyContent: 'space-between',
      flexDirection: 'row',
    },
    Texto: {
      color: "#FFF",
      fontSize: 18,
      marginLeft: 10,
      fontWeight: "bold",
      maxWidth: '70%'
    },
    caixa: {
      transform:  [{ scaleX: 2 }, { scaleY: 2 }],
    },  
    Buttons: {
      display: 'flex',
      flexDirection: 'row',
      width: 80,
      justifyContent: 'space-around'
    },
    ContainerList: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center"
    },
    divider: {
      backgroundColor: "#919191",
      height: 1,
      flex: 1,
      alignSelf: "center"
    },
    titleHome: {
      fontSize: 38,
      fontWeight: "bold",
      color: "#000000",
      paddingHorizontal: 64
    },
    ViewAddList: {
      display: "flex",
      alignItems: 'center',
      marginVertical: 48
    },
    addList: {
      borderWidth: 2,
      borderColor: "#4040f0",
      width: 50,
      borderRadius: 4,
      padding: 16,
      alignItems: "center",
      justifyContent: "center"
    },
    add: {
      fontSize: 14,
      color: "#4040f0",
      marginTop: 8
    },
    listContainer: {
      paddingVertical: 32,
      paddingHorizontal: 16,
      borderRadius: 6,
      marginHorizontal: 12,
      alignItems: "center",
      width: 200
    },
    listTitle: {
      fontSize: 24,
      fontWeight: "700",
      color: "#fff",
      marginBottom: 18
    },
    count: {
      fontSize: 48,
      fontWeight: "200",
      color: "#fff",
    },
    subtitle: {
      fontSize: 12,
      fontWeight: "700",
      color: "#fff"
    }
});
  