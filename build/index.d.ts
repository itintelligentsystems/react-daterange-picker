import * as React from "react";
import { DateRange, DefinedRange } from "./types";
import Menu from "./components/Menu";
import "./CalendarTheme";
interface DateRangePickerProps {
    open: boolean;
    initialDateRange?: DateRange;
    definedRanges?: DefinedRange[];
    minDate?: Date | string;
    maxDate?: Date | string;
    onChange: (dateRange: DateRange) => void;
    translation?: React.ComponentPropsWithoutRef<typeof Menu>['translation'];
    dateFormat: string;
}
export { DateRange, DefinedRange } from "./types";
export declare const DateRangePicker: (props: DateRangePickerProps) => JSX.Element | null;
