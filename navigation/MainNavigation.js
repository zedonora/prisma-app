import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import TabNavigation from "./TabNavigation";
import PhotoNavigation from "./PhotoNavigation";
import MessageNavigation from "./MessageNavigation";
import { stackStyles } from "./config";
const MainNavigation = createStackNavigator(
	{
		PhotoNavigation,
		TabNavigation,
		MessageNavigation
	},
	{
		headerMode: "none",
		mode: "modal",
		defaultNavigationOptions: {
			headerTitleAlign: "center",
			headerStyle: { ...stackStyles }
		}
	}
);
export default createAppContainer(MainNavigation);
