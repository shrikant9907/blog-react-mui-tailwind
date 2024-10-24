import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


// Web + Mobile 

const accordionStyles = { borderRadius: "14px !important", overflow: "hidden", marginBottom: "30px !important", boxShadow: "0 0 5px rgba(0,0,0, 0.1)" }
const accordionSummaryStyles = { background: "#efefef" }

export default function CustomAccordion() {
  return (
    <div className='mt-5'>
      <Accordion sx={accordionStyles} >
        <AccordionSummary
          sx={accordionSummaryStyles}
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <div className='font-semibold ml-4'>Accordion 1</div>
        </AccordionSummary>
        <AccordionDetails>
          <div className='p-5'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}