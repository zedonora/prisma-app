import React from "react";
import { Ionicons } from "@expo/vector-icons";
import PropTypes from "prop-types";
import styles from "../styles";

const NavIcon = ({ name, color = styles.blackColor }) => (
	<Ionicons name={name} color={color} size={26} />
);

NavIcon.prototypes = {
	name: PropTypes.string.isRequired,
	color: PropTypes.string,
	size: PropTypes.number
};

export default NavIcon;
