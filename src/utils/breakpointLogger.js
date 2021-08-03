const breakpoints = ["xs", "sm", "md", "lg", "xl"];

const breakpointLogger = (useMediaQuery, breakpoint) => {
  breakpoints.forEach(value => {
    if (useMediaQuery(theme => theme.breakpoints.only(value))) {
      if (breakpoint.current !== value) {
        console.log(value);
        breakpoint.current = value;
      }
    }
  });
};

export default breakpointLogger;
