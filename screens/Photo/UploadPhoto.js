import React, { useState } from "react";
import { Image, ActivityIndicator, Alert } from "react-native";
import axios from "axios";
import styled from "styled-components/native";
import useInput from "../../hooks/useInput";
import styles from "../../styles";
import constants from "../../constants";
import apolloClientOptions from "../../apollo";

const View = styled.View`
	flex: 1;
`;

const Container = styled.View`
	padding: 20px;
	flex-direction: row;
`;

const Form = styled.View`
	justify-content: flex-start;
`;

const STextInput = styled.TextInput`
	margin-bottom: 10px;
	border: 0px solid ${styles.lightGreyColor};
	border-bottom-width: 1px;
	padding-bottom: 10px;
	width: ${constants.width - 100};
`;

const Button = styled.TouchableOpacity`
	background-color: ${(props) => props.theme.blueColor};
	padding: 10px;
	border-radius: 4px;
	justify-content: center;
	align-items: center;
`;

const Text = styled.Text`
	color: white;
	font-weight: 600;
`;

export default ({ navigation }) => {
	const [loading, setLoading] = useState(false);
	const [fileUrl, setFileUrl] = useState("");
	const photo = navigation.getParam("photo");
	const captionInput = useInput("caption");
	const locationInput = useInput("location");
	const axiosUri = apolloClientOptions.uri.toString() + "/api/upload";
	const handleSubmit = async () => {
		if (captionInput.value === "" || locationInput.value === "") {
			Alert.alert("All fields are required");
		}
		const formData = new FormData();
		const name = photo.filename;
		formData.append("file", {
			name,
			type: "image/jpeg",
			uri: photo.uri
		});
		try {
			const {
				data: { path }
			} = await axios.post(axiosUri, formData, {
				headers: {
					"content-type": "multipart/form-data"
				}
			});
			setFileUrl(path);
		} catch (e) {
			console.log(e);
			Alert.alert("Can't upload", "Try later");
		}
	};

	return (
		<View>
			<Container>
				<Image
					source={{ uri: photo.uri }}
					style={{ height: 80, width: 80, marginRight: 30 }}
				/>
				<Form>
					<STextInput
						onChangeText={captionInput.onChange}
						value={captionInput.value}
						placeholder='Caption'
						multiline={true}
						placeholderTextColor={styles.darkGreyColor}
					/>
					<STextInput
						onChangeText={locationInput.onChange}
						value={locationInput.value}
						placeholder='Location'
						multiline={true}
						placeholderTextColor={styles.darkGreyColor}
					/>
					<Button onPress={handleSubmit}>
						{loading ? (
							<ActivityIndicator color='white' />
						) : (
							<Text>Upload</Text>
						)}
					</Button>
				</Form>
			</Container>
		</View>
	);
};
