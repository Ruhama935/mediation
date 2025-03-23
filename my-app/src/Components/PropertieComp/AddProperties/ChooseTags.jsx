import CheckIcon from '@mui/icons-material/Check';
import Box from '@mui/joy/Box';
import Checkbox from '@mui/joy/Checkbox';
import Chip from '@mui/joy/Chip';
import Typography from '@mui/joy/Typography';
import React, {useState, useEffect} from 'react';

export default function CheckboxChip(prop) {

  const {selected, setSelected} = prop;

  return (
    <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
      <div>
        <Typography level="title-lg" id="fav-movie" sx={{ mb: 2 }}>
          סמן
        </Typography>
        <Box
          role="group"
          aria-labelledby="fav-movie"
          sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
          {['מרפסת', 'ממ"ד', 'ממ"ד נפרד', 'מחסן', 'חניה', 'מעלית', 'חצר'].map((name) => {
            const checked = selected.includes(name);
            return (
              <Chip
                key={name}
                variant="plain"
                color={checked ? 'primary' : 'neutral'}
                startDecorator={ checked && <CheckIcon sx={{ zIndex: 1, pointerEvents: 'none' }} />}>
                <Checkbox
                  variant="outlined"
                  color={checked ? 'primary' : 'neutral'}
                  disableIcon
                  overlay
                  label={name}
                  checked={checked}
                  onChange={(event) => {
                    setSelected((names) =>
                      !event.target.checked
                        ? names.filter((n) => n !== name)
                        : [...names, name]
                    );
                  } }
                />
              </Chip>
            );
          })}
        </Box>
      </div>
    </Box>
  );
}
