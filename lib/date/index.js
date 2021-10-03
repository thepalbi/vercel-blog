import {format} from "date-fns";

export function prettyPrintDate(dateStr) {
    return format(new Date(dateStr), "EEE, dd LLL yyyy");
}