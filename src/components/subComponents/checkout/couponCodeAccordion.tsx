import * as React from 'react';
import { styled } from '@mui/material/styles';
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion';
import MuiAccordionSummary, {
    AccordionSummaryProps,
    accordionSummaryClasses,
} from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import 'react-range-slider-input/dist/style.css';


const Accordion = styled((props: AccordionProps) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
    borderBottom: `none`,
    '&:not(:last-child)': {
        borderBottom: 0,
    },
    '&::before': {
        display: 'none',
    },
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
    <MuiAccordionSummary
        {...props}
    />
))(({ theme }) => ({
    width: "100%",
    flexDirection: 'row-reverse',
    padding: "0px 0px 0px 0px",
    [`& .${accordionSummaryClasses.expandIconWrapper}.${accordionSummaryClasses.expanded}`]:
    {
        transform: 'rotate(180deg)',
    },
    ...theme.applyStyles('dark', {
        backgroundColor: "red",
    }),
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: "0px 0px 14px 0px",

    // borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

export const CouponCodeAccordion = () => {
    return (
        <Accordion sx={{ boxShadow: "none" }} className='border-b p-0'>
            <AccordionSummary
                aria-controls="panel1-content"
                id="panel1-header"
            >
                <div
                    className='flex items-center gap-x-1 w-full'
                >
                    <p className='fw_600 text-sm text-zinc-500'>Have a coupon?</p>
                    <p className='fw_600 text-xs uppercase text-black'>Enter Your Code</p>
                </div>
            </AccordionSummary>
            <AccordionDetails>
                <div className='border border-zinc-200 p-3 sm:p-5 flex flex-col gap-y-4 justify-center'>
                    <div className="flex items-center gap-x-1">
                        <input type="text" placeholder="Coupon Code" className="px-3 text-sm border h-10 w-52 sm:w-60 text-black fw_400 bg-none outline-none shadow-none" />
                        <button className="bg-zinc-800 text-white text-xs uppercase h-10 w-24 fw_600 hover:bg-black duration-300">Apply</button>
                    </div>
                </div>
            </AccordionDetails>
        </Accordion>
    )
}