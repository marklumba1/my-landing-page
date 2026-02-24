import { Alignment, Columns } from "../_types/common.types";

export const columnMapMD: Record<Columns, string> = {
  1: "md:grid-cols-1",
  2: "md:grid-cols-2",
  3: "md:grid-cols-3",
};

 export const justifyAlignmentMap: Record<Alignment, string> = {
    "start" : "justify-start",
    "center" : "justify-center",
    "end" : "justify-end"
  }

 export const textAlignmentMap: Record<Alignment, string> = {
    "start" : "text-start",
    "center" : "text-center",
    "end" : "text-end"
  }

