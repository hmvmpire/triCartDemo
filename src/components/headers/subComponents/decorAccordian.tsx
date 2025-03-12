import * as React from 'react';
import { styled } from '@mui/material/styles';
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion';
import MuiAccordionSummary, {
    AccordionSummaryProps,
    accordionSummaryClasses,
} from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { faChevronDown, faCoins } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import details3Desc from '../../../static/category3HeaderBg.jpg'
import Image from 'next/image';

const Accordion = styled((props: AccordionProps) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
    borderBottom: `1px solid ${theme.palette.divider}`,
    // '&:not(:last-child)': {
    //     borderBottom: 0,
    // },
    '&::before': {
        display: 'none',
    },
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
    <MuiAccordionSummary
        expandIcon={<FontAwesomeIcon icon={faChevronDown} />}
        {...props}
    />
))(({ theme }) => ({
    paddingTop: "8px",
    paddingBottom: "8px",
    backgroundColor: "white",
    flexDirection: 'row-reverse',
    [`& .${accordionSummaryClasses.expandIconWrapper}.${accordionSummaryClasses.expanded}`]:
    {
        transform: 'rotate(180deg)',
    },
    [`& .${accordionSummaryClasses.content}`]: {
        marginLeft: theme.spacing(1),
    },
    ...theme.applyStyles('dark', {
        backgroundColor: "white",
    }),
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2),
    // borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

export default function DecorAccordian() {
    const [expanded, setExpanded] = React.useState<string | false>(false);

    const handleChange =
        (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
            setExpanded(isExpanded ? panel : false);
        };
    return (
        <div>
            <Accordion expanded={expanded === 'panel1'} sx={{ boxShadow: "none" }} className='border-b' onChange={handleChange('panel1')}>
                <AccordionSummary
                    //   expandIcon={<ArrowDownwardIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                >
                    <Typography className='uppercase text-black flex items-center gap-x-3'> <span className='fw_600 text-sm pl-3'>Shipping & Return</span></Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography className='text-zinc-500'>
                        Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel2'} sx={{ boxShadow: "none" }} className='border-b' onChange={handleChange('panel2')}>
                <AccordionSummary
                    //   expandIcon={<ArrowDropDownIcon />}
                    aria-controls="panel2-content"
                    id="panel2-header"
                >
                    <Typography className='uppercase text-black flex items-center gap-x-3'> <span className='fw_600 text-sm pl-3'>Care & Sustainability</span></Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography className='text-zinc-500'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, nostrud ipsum consectetur sed do, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel3'} sx={{ boxShadow: "none" }} className='border-b' onChange={handleChange('panel3')}>
                <AccordionSummary
                    //   expandIcon={<ArrowDropDownIcon />}
                    aria-controls="panel2-content"
                    id="panel2-header"
                >
                    <Typography className='uppercase text-black flex items-center gap-x-3'> <span className='fw_600 text-sm pl-3'>Description</span></Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography className='text-zinc-500'>
                        Crafted with high-quality materials, this chair is built to last and withstand daily use. The ergonomic design ensures optimal support for your back, making it perfect for long hours of sitting. Whether you’re looking to upgrade your home office or add a stylish touch to your living room, this chair is the perfect choice. With its versatile design and neutral color options, it seamlessly blends in with any decor. Elevate your space with our chic and functional chair today.
                        <Image src={details3Desc} alt="details3Desc" className='w-full h-72 object-cover my-4' />
                        <div className='flex items-start justify-between'>
                            <ul className='list-disc flex flex-col gap-y-2 pl-4'>
                                <li className='text-xs'>
                                    Designed by Golden
                                </li>
                                <li className='text-xs'>
                                    Fiber and down seat cushion
                                </li>
                                <li className='text-xs'>
                                    Made in USA of Domestic and Imported Materials
                                </li>
                            </ul>
                            <div className='bg-DECOR_PRIMARY-LIGHT text-2xl flex items-center justify-center w-20 h-20 px-2 py-2'>
                                <FontAwesomeIcon icon={faCoins} />
                            </div>
                        </div>
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </div>
    );
}
