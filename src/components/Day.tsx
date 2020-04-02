import * as React from "react";
import { combine } from "../utils";
import { IconButton, Typography } from "@material-ui/core";
import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";

interface DayProps {
  filled?: boolean;
  outlined?: boolean;
  highlighted?: boolean;
  disabled?: boolean;
  startOfRange?: boolean;
  endOfRange?: boolean;
  onClick?: () => void;
  onHover?: () => void;
  value: number | string;
}

const useStyles = makeStyles((theme: Theme) => {
  const borderRadius = theme.calendar?.chip?.borderRadius ?? "50%";

  return createStyles({
    leftBorderRadius: {
      borderRadius: `${borderRadius} 0 0 ${borderRadius}`
    },
    rightBorderRadius: {
      borderRadius: `0 ${borderRadius} ${borderRadius} 0`
    },
    buttonContainer: {
      display: "flex"
    },
    dayButton: {
      height: theme.calendar?.chip?.height ?? 36,
      width: theme.calendar?.chip?.width ?? 36,
      padding: 0,
      borderRadius: borderRadius
    },
    buttonText: {
      lineHeight: 1.6
    },
    outlined: {
      border: `1px solid ${theme.palette.primary.dark}`
    },
    filled: {
      "&:hover": {
        backgroundColor: theme.palette.primary.dark
      },
      backgroundColor: theme.palette.primary.dark
    },
    highlighted: {
      backgroundColor: theme.palette.primary.light
    },
    contrast: {
      color: theme.palette.primary.contrastText
    }
  });
});

const Day = (props: DayProps) => {
  const { value } = props;
  const classes = useStyles();

  return (
    <div
      className={combine(
        classes.buttonContainer,
        props.startOfRange && classes.leftBorderRadius,
        props.endOfRange && classes.rightBorderRadius,
        !props.disabled && props.highlighted && classes.highlighted
      )}
    >
      <IconButton
        className={combine(
          classes.dayButton,
          !props.disabled && props.outlined && classes.outlined,
          !props.disabled && props.filled && classes.filled
        )}
        disabled={props.disabled}
        onClick={props.onClick}
        onMouseOver={props.onHover}
      >
        <Typography
          className={combine(
            classes.buttonText,
            !props.disabled && props.filled && classes.contrast
          )}
          variant="body2"
        >
          {value}
        </Typography>
      </IconButton>
    </div>
  );
};

export default Day;
