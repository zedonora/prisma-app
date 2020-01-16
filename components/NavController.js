import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { useIsLoggedIn, useLogIn, useLogOut } from "../AuthContext";
import AuthNavigation from "../navigation/AuthNavigation";
export default () => {
	const isLoggedIn = useIsLoggedIn();
	const logIn = useLogIn();
	const logOut = useLogOut();
	console.log(isLoggedIn);

	return (
		<View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
			{isLoggedIn === "true" ? (
				<TouchableOpacity onPress={logOut}>
					<Text>Log Out</Text>
				</TouchableOpacity>
			) : (
				<AuthNavigation />
			)}
		</View>
	);
};
