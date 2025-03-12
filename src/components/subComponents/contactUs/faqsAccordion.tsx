import * as React from 'react';
import { styled } from '@mui/material/styles';
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion';
import MuiAccordionSummary, {
    AccordionSummaryProps,
    accordionSummaryClasses,
} from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faqsData } from '@/data/faqsData';






export default function FaqsAccordion() {
    const [expanded, setExpanded] = React.useState<string | false>(false);

    const handleChange =
        (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
            setExpanded(isExpanded ? panel : false);
        };

    const Accordion = styled((props: AccordionProps) => (
        <MuiAccordion disableGutters elevation={0} square {...props} />
    ))(({ theme }) => ({
        borderBottom: `none`,
        // '&:not(:last-child)': {
        //     borderBottom: 0,
        // },
        marginBottom: "1.3rem",
        '&::before': {
            display: 'none',
        },
    }));

    const AccordionSummary = styled((props: AccordionSummaryProps & { expanded: boolean }) => {
        return <MuiAccordionSummary
            {...props}
        />
    })(({ theme, expanded }) => ({
        paddingTop: "8px",
        paddingBottom: "8px",
        backgroundColor: expanded ? "black" : "lightGray", // Access 'expanded' instead of props.id
        flexDirection: 'row-reverse',
        [`& .${accordionSummaryClasses.expandIconWrapper}.${accordionSummaryClasses.expanded}`]: {
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


    return (
        <div className='relative z-0'>
            {faqsData.map((item, index) => (
                <Accordion defaultExpanded={index === 0} expanded={expanded === `panel-${index}`} sx={{ boxShadow: "none" }} className='border-b relative z-0' key={index + 1} onChange={handleChange(`panel-${index}`)}>
                    <AccordionSummary
                        expanded={expanded === `panel-${index}`}
                        aria-controls={`panel-${index}`}
                        id={`panel-${index}`}
                    >
                        <Typography className={`uppercase ${expanded === `panel-${index}` ? "text-white" : "text-black"} flex items-center gap-x-3 justify-between w-full`}> <span className='fw_600 text-sm'>{item.ques}</span>
                            <FontAwesomeIcon icon={expanded === `panel-${index}` ? faMinus : faPlus} />
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography className='text-zinc-500'>
                            {item.ans}
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            ))}

        </div>
    );
}
