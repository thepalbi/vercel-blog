import { format, toDate } from "date-fns";

export function prettyPrintDate(dateStr) {
    return format(toDate(dateStr), "EEE, dd LLL yyyy");
}