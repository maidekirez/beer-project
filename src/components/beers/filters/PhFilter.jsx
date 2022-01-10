import React, { useContext } from 'react';
import Slider from '@mui/material/Slider';
import Box from '@mui/material/Box';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { BeerContext } from '../../../contexts/BeerContextsProvider';

function valuetext(value) {
    return `${value}`;
}

export default function PhFilter() {
    const { phChecked, setPhCehcked, pHData, setPHData } = useContext(BeerContext);
    const minDistance = 0;
    const handleChangePH = (event, newValue, activeThumb) => {
        if (!Array.isArray(newValue)) {
            return;
        }

        if (activeThumb === 0) {
            setPHData([Math.min(newValue[0], pHData[1] - minDistance), pHData[1]]);
        } else {
            setPHData([pHData[0], Math.max(newValue[1], pHData[0] + minDistance)]);
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
                    onClick={() => setPhCehcked(prev => !prev)}
                />
            </div>
            <div className="col-6">
                <Box >
                    <Slider
                        min={0}
                        max={7}
                        getAriaLabel={() => 'Minimum distance'}
                        value={pHData}
                        onChange={handleChangePH}
                        valueLabelDisplay="auto"
                        getAriaValueText={valuetext}
                        disableSwap
                        disabled={phChecked}
                    />
                </Box>
            </div>
        </div>
    )
}
