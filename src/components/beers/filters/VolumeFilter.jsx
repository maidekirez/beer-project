import React,{useContext} from 'react'
import Slider from '@mui/material/Slider';
import Box from '@mui/material/Box';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { BeerContext } from '../../../contexts/BeerContextsProvider';

function valuetext(value) {
    return `${value}`;
}

export default function VolumeFilter() {

    const {alcoholVolume}=useContext(BeerContext);
    const [alignment, setAlignment] = React.useState('web');

    const handleChange = (event, newAlignment) => {
        setAlignment(newAlignment);
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
                        defaultValue={alcoholVolume}
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
