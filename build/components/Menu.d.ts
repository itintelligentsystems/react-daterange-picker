import React from "react";
import { WithStyles, Theme } from '@material-ui/core/styles';
import { DateRange, DefinedRange, Setter, NavigationAction } from "../types";
declare const styles: (theme: Theme) => Record<"calendarHeader" | "headerItem" | "headerDivider", import("@material-ui/styles").CSSProperties | import("@material-ui/styles").CreateCSSProperties<{}> | ((props: {}) => import("@material-ui/styles").CreateCSSProperties<{}>)>;
interface MenuProps extends WithStyles<typeof styles> {
    dateRange: DateRange;
    ranges: DefinedRange[];
    minDate: Date;
    maxDate: Date;
    firstMonth: Date;
    secondMonth: Date;
    setFirstMonth: Setter<Date>;
    setSecondMonth: Setter<Date>;
    setDateRange: Setter<DateRange>;
    helpers: {
        inHoverRange: (day: Date) => boolean;
    };
    handlers: {
        onDayClick: (day: Date) => void;
        onDayHover: (day: Date) => void;
        onMonthNavigate: (marker: symbol, action: NavigationAction) => void;
    };
    translation?: {
        startDate?: string;
        endDate?: string;
        months?: [string, string, string, string, string, string, string, string, string, string, string, string];
        weekDays?: [string, string, string, string, string, string, string];
        locale?: object;
    };
    dateFormat: string;
}
declare const _default: React.ComponentType<Pick<React.PropsWithChildren<MenuProps>, "dateRange" | "ranges" | "minDate" | "maxDate" | "firstMonth" | "secondMonth" | "setFirstMonth" | "setSecondMonth" | "setDateRange" | "helpers" | "handlers" | "translation" | "dateFormat" | "children"> & import("@material-ui/core").StyledComponentProps<"calendarHeader" | "headerItem" | "headerDivider">>;
export default _default;
