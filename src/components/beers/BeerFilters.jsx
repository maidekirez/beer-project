import React from 'react';
import Slider from '@mui/material/Slider';
import Box from '@mui/material/Box';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

function valuetext(value) {
    return `${value}`;
}

export default function BeerFilters() {
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
    const [alignment, setAlignment] = React.useState('web');

    const handleChange = (event, newAlignment) => {
        setAlignment(newAlignment);
    };

    return (
        <div>
            <div className="container my-5">
                <div className="row ">
                    <div className="col-12">
                        <div className="row my-4">
                            <div className="col-3">
                                <p>
                                    Alcohol by Volume
                                </p>
                            </div>
                            <div className="col-4">
                                <ToggleButtonGroup
                                    color="primary"
                                    value={alignment}
                                    exclusive
                                    onChange={handleChange}
                                >
                                    <ToggleButton value="web">None</ToggleButton>
                                    <ToggleButton value="android">Greater Than</ToggleButton>
                                    <ToggleButton value="ios">Lower Than</ToggleButton>
                                </ToggleButtonGroup>
                            </div>
                            <div className="col-4">
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
                    </div>
                    <div className="col-12">
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


                    </div>
                    <div className="col-12">
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


                    </div>
                </div>
            </div>
        </div>
    )
}
