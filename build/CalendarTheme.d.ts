import { ThemeOptions, Theme } from '@material-ui/core/styles';
declare module '@material-ui/core/styles' {
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
export default function (options: ThemeOptions): Theme;
