import { createMuiTheme, ThemeOptions, Theme } from '@material-ui/core/styles';

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

export default function(options: ThemeOptions): Theme {
  return createMuiTheme({
    calendar: {
      chip: {
        height: 36,
        width: 36,
        borderRadius: "50%"
      },
      header: {
        padding: "20px 70px"
      }
    },
    ...options
  });
}
