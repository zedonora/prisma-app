import { createMaterialTopTabNavigator } from "react-navigation-tabs";
import SelectPhoto from "../screens/Photo/SelectPhoto";
import TakePhoto from "../screens/Photo/TakePhoto";
import UploadPhoto from "../screens/Photo/UploadPhoto";
import { createStackNavigator } from "react-navigation-stack";
import { stackStyles } from "./config";
import styles from "../styles";
const PhotoTabs = createMaterialTopTabNavigator(
	{
		Select: {
			screen: SelectPhoto,
			navigaationOptions: {
				tabBarLabel: "Select"
			}
		},
		Take: {
			screen: TakePhoto,
			navigaationOptions: {
				tabBarLabel: "Take"
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
				title: "Choose Photo",
				headerBackTitle: null
			}
		},
		Upload: {
			screen: UploadPhoto,
			navigaationOptions: {
				title: "Upload"
			}
		}
	},
	{
		defaultNavigationOptions: {
			headerStyle: {
				...stackStyles
			},
			headerTintColor: styles.blackColor
		}
	}
);
