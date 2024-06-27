import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Typography from '@mui/material/Typography';
import React, { useEffect, useRef } from 'react';

const TreeCheckbox = ({ title, checked, indeterminate, onChange }) => {
    const ref = useRef(null);

    useEffect(() => {
        if (ref.current) {
            ref.current.indeterminate = indeterminate;
        }
    }, [indeterminate]);

    return (
        <FormControlLabel control={<Checkbox ref={ref} checked={checked} onChange={onChange} color="secondary" />} label={<Typography variant="h6" gutterBottom>{title}</Typography>} />
    );
};

export default TreeCheckbox;
