import React from 'react';
import Slider from '@mui/material/Slider';
import Box from '@mui/material/Box';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

function valuetext(value) {
    return `${value}`;
}

export default function PhFilter() {
    const [valuePH, setValuePH] = React.useState([0, 1]);
    const minDistance = 0;
    const handleChangePH = (event, newValue, activeThumb) => {
        if (!Array.isArray(newValue)) {
            return;
        }

        if (activeThumb === 0) {
            setValuePH([Math.min(newValue[0], valuePH[1] - minDistance), valuePH[1]]);
        } else {
            setValuePH([valuePH[0], Math.max(newValue[1], valuePH[0] + minDistance)]);
        }
    };
    return (
        <div className="row my-4">
        <div className="col-3">
            <FormControlLabel
                value="start"
                control={<Checkbox />}
                label="PH"
                labelPlacement="start"
            />
        </div>
        <div className="col-6">
            <Box >
                <Slider
                    min={0}
                    max={7}
                    getAriaLabel={() => 'Minimum distance'}
                    value={valuePH}
                    onChange={handleChangePH}
                    valueLabelDisplay="auto"
                    getAriaValueText={valuetext}
                    disableSwap
                />
            </Box>
        </div>
    </div>
    )
}
