import { TextField } from '@material-ui/core';
import React from 'react'
import { useInput } from '../../../mainProvider';

function TimeSelect() {

    const { smokingData, dispatch } = useInput();


    const date = new Date()
    var hh = ("00" + date.getHours().toString())
    hh = hh.slice(hh.length-2)
    var mm = ("00" + date.getMinutes().toString())
    mm = mm.slice(mm.length-2)



    return (
        <div>
          <TextField
              id="outlined-read-only-input"
              label="Time"
              defaultValue={hh + `:` + mm}
              InputProps={{
                readOnly: true,
              }}
              variant="outlined"
            />
        </div>
    )
}

export default TimeSelect
