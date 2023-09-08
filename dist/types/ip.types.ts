export type IconPackId =
  | "fi-arrow-left"
  | "fi-arrow-right"
  | "fi-chevron-down";

export type IconPackKey =
  | "FiArrowLeft"
  | "FiArrowRight"
  | "FiChevronDown";

export enum IconPack {
  FiArrowLeft = "fi-arrow-left",
  FiArrowRight = "fi-arrow-right",
  FiChevronDown = "fi-chevron-down",
}

export const ICON_PACK_CODEPOINTS: { [key in IconPack]: string } = {
  [IconPack.FiArrowLeft]: "61697",
  [IconPack.FiArrowRight]: "61698",
  [IconPack.FiChevronDown]: "61699",
};
