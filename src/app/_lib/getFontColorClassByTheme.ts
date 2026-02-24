import { Theme } from "../_types/common.types";

const getFontColorClassByTheme = (theme: Theme | undefined): string =>  theme === "dark" ? `text-slate-200` : `text-black`;

export default getFontColorClassByTheme