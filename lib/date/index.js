import { format, parseISO } from "date-fns";

export function prettyPrintDate(dateStr) {
    return format(parseISO(dateStr), "EEE, dd LLL yyyy");
}