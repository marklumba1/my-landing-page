import { Theme } from "../_types/common.types";

const getFontClassByTheme = (theme: Theme | undefined): string =>  theme === "dark" ? `text-white` : `text-black`;

export default getFontClassByTheme