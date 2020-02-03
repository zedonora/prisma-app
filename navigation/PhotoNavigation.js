import { createMaterialTopTabNavigator } from "react-navigation-tabs";
import SelectPhoto from "../screens/Photo/SelectPhoto";
import TakePhoto from "../screens/Photo/TakePhoto";
import UploadPhoto from "../screens/Photo/UploadPhoto";
import { createStackNavigator } from "react-navigation-stack";
import { stackStyles } from "./config";
import styles from "../styles";
const PhotoTabs = createMaterialTopTabNavigator(
	{
		Take: {
			screen: TakePhoto,
			navigaationOptions: {
				tabBarLabel: "Take"
			}
		},
		Select: {
			screen: SelectPhoto,
			navigaationOptions: {
				tabBarLabel: "Select"
			}
		}
	},
	{
		tabBarPosition: "bottom",
		tabBarOptions: {
			indicatorStyle: {
				backgroundColor: styles.blackColor,
				marginBottom: 20
			},
			labelStyle: {
				color: styles.blackColor,
				fontWeight: "600"
			},
			style: {
				paddingBottom: 20,
				...stackStyles
			}
		},
		defaultNavigationOptions: {
			headerTitleAlign: "center",
			headerStyle: { ...stackStyles }
		}
	}
);

export default createStackNavigator(
	{
		Tabs: {
			screen: PhotoTabs,
			navigaationOptions: {
				title: "Choose Photo"
			}
		},
		UploadPhoto
	},
	{
		defaultNavigationOptions: {
			headerStyle: {
				...stackStyles
			}
		}
	}
);
