import React, { useContext, useState } from 'react'
import Slider from '@mui/material/Slider';
import Box from '@mui/material/Box';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { BeerContext } from '../../../contexts/BeerContextsProvider';

function valuetext(value) {
    return `${value}`;
}

export default function VolumeFilter() {

    const { alcoholVolume, setToggleVolume, toggleVolume, setAlcoholVolume } = useContext(BeerContext);
    const [noneDisable, setNoneDisable] = useState(false);
    const [greaterDisable, setGreaterDisable] = useState(false);
    const [lowerDisable, setLowerDisable] = useState(false);

    const handleChange = (event) => {
        const { value, name } = event.target;
        if (name === 'none') {
            setGreaterDisable(true);
            setLowerDisable(true);
            setAlcoholVolume(null)
        }
        else if (name === 'abv_gt') {
            setNoneDisable(true);
            setLowerDisable(true);
        }
        else if (name === 'abv_lt') {
            setNoneDisable(true);
            setGreaterDisable(true);
        }
        else if(name==='reset') {
            setGreaterDisable(false);
            setLowerDisable(false);
            setNoneDisable(false);
            setAlcoholVolume(null)

        }

        if(name!=='reset' || name!=='none'){
            setToggleVolume(value);
        }
       

    };

    return (
        <div className="row my-4">
            <div className="col-3">
                <p>
                    Alcohol by Volume
                </p>
            </div>
            <div className="col-4">
                <ToggleButtonGroup
                    color="primary"
                    value={toggleVolume}
                    exclusive
                    onClick={(e) => handleChange(e)}
                >
                    <ToggleButton value="" name="none" disabled={noneDisable} >None</ToggleButton>
                    <ToggleButton value="abv_gt" name="abv_gt" disabled={greaterDisable}>Greater Than</ToggleButton>
                    <ToggleButton value="abv_lt" name="abv_lt" disabled={lowerDisable}>Lower Than</ToggleButton>
                    <ToggleButton value="" name="reset" >Reset</ToggleButton>
                </ToggleButtonGroup>
            </div>
            <div className="col-4">
                <Box >
                    <Slider
                        disabled={!noneDisable}
                        aria-label="Minimum SRM"
                        defaultValue={alcoholVolume}
                        getAriaValueText={valuetext}
                        valueLabelDisplay="auto"
                        step={1}
                        onChange={(e) => setAlcoholVolume(e.target.value)}
                        min={0}
                        max={100}

                    />
                </Box>
            </div>
        </div>
    )
}
