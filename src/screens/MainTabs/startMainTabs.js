import { Navigation } from 'react-native-navigation'
import Icon from 'react-native-vector-icons/Ionicons'

function StartTabs() {
    const returnMenu = (icon) => {
        return {
            visible: true,
            leftButtons: [
                {
                    id: 'menuButton',
                    icon: icon,
                }
            ]
        }
    }

    const sideMenu = (props) => {
        return {
            id: "sideMenu",
            enabled: false,
            left: {
                component: {
                    id: "awesome-places.SideDrawer",
                    name: "awesome-places.SideDrawer"
                }
            },
            center: {
                bottomTabs: buttonTabs(props)
            }
        }
    }

    const buttonTabs = (props) => {
        return {
            children:[
                {
                    stack: {
                        children: [{
                            component: {
                                id: 'awesome-places.SharePlaceScreen',
                                name: 'awesome-places.SharePlaceScreen',
                                options: {
                                    topBar: {
                                      title: {
                                        text: "share place"
                                      }
                                    }
                                }
                            }
                        }],
                        options: {
                            bottomTab: {
                                title: 'Share',
                                text: 'Share',
                                icon: props.icons[0],
                                testID: 'SHARE_TAB_BAR_BUTTON',
                                selectedIconColor: 'magenta'
                            },
                            topBar: returnMenu(props.icons[2])
                        }
                    }
                },
                {
                    stack: {
                        children: [{
                            component: {
                                id: 'awesome-places.FindPlaceScreen',
                                name: 'awesome-places.FindPlaceScreen',
                                options: {
                                    topBar: {
                                      title: {
                                        text: "find place"
                                      }
                                    }
                                }
                            }
                        }],
                        options: {
                            bottomTab: {
                                title: 'Find',
                                text: 'Find',
                                icon: props.icons[1],
                                testID: 'SHARE_TAB_BAR_BUTTON',
                                selectedIconColor: 'magenta'
                            },
                            topBar: returnMenu(props.icons[2])
                        }
                    }
                },
            ],
        }
    }

    Promise.all([
        Icon.getImageSource("md-map", 30),
        Icon.getImageSource("md-share-alt", 30),
        Icon.getImageSource("md-menu", 30)
    ]).then((sources) => {
        const mainView = {
            root: {
                sideMenu: sideMenu({icons: sources})
            }
        }

        Navigation.setRoot(mainView)  
        Navigation.events().registerNavigationButtonPressedListener(({buttonId, componentId}) => {
            if(buttonId === 'menuButton') {
                Navigation.mergeOptions('awesome-places.SideDrawer', {
                    sideMenu: {
                        left: {
                            visible: true,
                            enabled: true
                        }
                    }
                });
            }
        });
    }).catch((err) => {
        throw err
    }); 
}
    
export default StartTabs

