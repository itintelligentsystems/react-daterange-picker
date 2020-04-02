declare module '@material-ui/core/styles/createMuiTheme' {
    interface ChipOptions {
        height?: number;
        width?: number;
        borderRadius?: number | string;
    }
    interface CalendarHeaderOptions {
        padding?: string;
    }
    interface CalendarOptions {
        chip?: ChipOptions;
        header?: CalendarHeaderOptions;
    }
    interface Theme {
        calendar?: CalendarOptions;
    }
    interface ThemeOptions {
        calendar?: CalendarOptions;
    }
}
declare const _default: import("@material-ui/core/styles/createMuiTheme").Theme;
export default _default;