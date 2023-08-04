import {useState} from 'react';
import dayjs from 'dayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';

const TimePickerComponent = () => {
  const [value, setValue] = useState(dayjs('2022-04-17T12:00'));


  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['TimePicker', 'Timepicker']}>
        <TimePicker
          label="Controlled picker"
          value={value}
          onChange={(newValue) => {
            setValue(newValue.$d)
            const date = dayjs(newValue.$d)
            const formattedDate = date.format('h:mm A')
            console.log(formattedDate)
            }}
        />
      </DemoContainer>
    </LocalizationProvider>

  )}

  export default TimePickerComponent;