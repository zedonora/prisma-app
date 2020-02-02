import React from "react";
import { TouchableOpacity, Image } from "react-native";
import { withNavigation } from "react-navigation";
import styled from "styled-components/native";
import PropTypes from "prop-types";
import constants from "../constants";

const SquarePhoto = ({ navigation, files = [], id }) => (
	<TouchableOpacity onPress={() => navigation.navigate("Detail", { id })}>
		<Image
			source={{ uri: files[0].url }}
			style={{ width: constants.width / 3, height: constants.height / 6 }}
		/>
	</TouchableOpacity>
);

SquarePhoto.prototypes = {
	files: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.string.isRequired,
			url: PropTypes.string.isRequired
		})
	).isRequired,
	id: PropTypes.string.isRequired
};

export default withNavigation(SquarePhoto);
