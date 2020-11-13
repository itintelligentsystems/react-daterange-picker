import React from "react";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { pt } from "date-fns/locale";
import {
  addDays,
  startOfWeek,
  endOfWeek,
  addWeeks,
  startOfMonth,
  endOfMonth,
  addMonths
} from "date-fns";
import { DateRangePicker } from ".";
import { DefinedRange } from "./types";
import './CalendarTheme';

export default { title: "DateRangePicker" };

const DEFAULT_DATE_FORMAT = 'yyyy-MM-dd';

export const justDateRange = () => (
  <DateRangePicker open={true} onChange={() => {}} dateFormat={DEFAULT_DATE_FORMAT}/>
);

const theme = createMuiTheme({
  palette: {
    primary: { main: "#EF6915", dark: "#D97709" }
  },
  calendar: { chip: { height: 30, width: 30, borderRadius: "20%" }, header: {padding: "10px 70px"} }
});

export const withTheme = () => {
  return (
    <ThemeProvider theme={theme}>
      <DateRangePicker open={true} onChange={() => {}} dateFormat={DEFAULT_DATE_FORMAT}/>
    </ThemeProvider>
  );
};

const getDefaultRanges = (date: Date): DefinedRange[] => [
  {
    label: "Hoje",
    startDate: date,
    endDate: date
  },
  {
    label: "Ontem",
    startDate: addDays(date, -1),
    endDate: addDays(date, -1)
  },
  {
    label: "Essa Semana",
    startDate: startOfWeek(date),
    endDate: endOfWeek(date)
  },
  {
    label: "Semana Passada",
    startDate: startOfWeek(addWeeks(date, -1)),
    endDate: endOfWeek(addWeeks(date, -1))
  },
  {
    label: "Ultimos 7 Dias",
    startDate: addWeeks(date, -1),
    endDate: date
  },
  {
    label: "Esse Mês",
    startDate: startOfMonth(date),
    endDate: endOfMonth(date)
  },
  {
    label: "Mês Passado ",
    startDate: startOfMonth(addMonths(date, -1)),
    endDate: endOfMonth(addMonths(date, -1))
  }
];

export const withTranslation = () => {
  return (
    <DateRangePicker
      open={true}
      onChange={() => {}}
      translation={{
        endDate: "Data Final",
        startDate: "Data Inicial",
        months: [
          "JAN",
          "FER",
          "MAR",
          "ABR",
          "MAI",
          "JUN",
          "JUL",
          "AGO",
          "SET",
          "OUT",
          "NOV",
          "DEZ"
        ],
        weekDays: ["DOM", "SEG", "TER", "QUAR", "QUIN", "SEX", "SAB"],
        locale: pt
      }}
      definedRanges={getDefaultRanges(new Date())}
      dateFormat={DEFAULT_DATE_FORMAT}
    />
  );
};
