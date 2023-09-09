export type IconPackId =
  | "fi-arrow-left"
  | "fi-arrow-right"
  | "fi-chevron-down"
  | "fi-info"
  | "fi-x-circle"
  | "fi-x";

export type IconPackKey =
  | "FiArrowLeft"
  | "FiArrowRight"
  | "FiChevronDown"
  | "FiInfo"
  | "FiXCircle"
  | "FiX";

export enum IconPack {
  FiArrowLeft = "fi-arrow-left",
  FiArrowRight = "fi-arrow-right",
  FiChevronDown = "fi-chevron-down",
  FiInfo = "fi-info",
  FiXCircle = "fi-x-circle",
  FiX = "fi-x",
}

export const ICON_PACK_CODEPOINTS: { [key in IconPack]: string } = {
  [IconPack.FiArrowLeft]: "61697",
  [IconPack.FiArrowRight]: "61698",
  [IconPack.FiChevronDown]: "61699",
  [IconPack.FiInfo]: "61700",
  [IconPack.FiXCircle]: "61701",
  [IconPack.FiX]: "61702",
};
