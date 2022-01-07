import React from 'react'
import Slider from '@mui/material/Slider';
import Box from '@mui/material/Box';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

function valuetext(value) {
    return `${value}`;
}
export default function SrmFilter() {

    return (
        <div className="row my-4">
            <div className="col-3">
                <FormControlLabel
                    value="start"
                    control={<Checkbox />}
                    label="SRM"
                    labelPlacement="start"
                    
                />
            </div>
            <div className="col-6">
                <Box >
                    <Slider

                        aria-label="Minimum SRM"
                        defaultValue={30}
                        getAriaValueText={valuetext}
                        valueLabelDisplay="auto"
                        step={1}

                        min={0}
                        max={100}

                    />
                </Box>
            </div>
        </div>
    )
}
