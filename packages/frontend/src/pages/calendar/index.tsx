import { Calendar as CalendarUI } from "@yamada-ui/calendar";
import { Box, Button, Center } from "@yamada-ui/react";
import "dayjs/locale/ja";

const Calendar = () => {
  return (
    <CalendarUI
      locale="ja"
      size="full"
      height="97%"
      today
      firstDayOfWeek="sunday"
      dayProps={{
        height: "14vh",
        width: "14vw",
        component: ({ date, isSelected }) => (
          <Box>
            <Center>{date.getDate()}</Center>
          </Box>
        ),
      }}
    />
  );
};

export default Calendar;
