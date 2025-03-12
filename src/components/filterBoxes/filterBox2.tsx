import * as React from 'react';
import { styled } from '@mui/material/styles';
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion';
import MuiAccordionSummary, {
    AccordionSummaryProps,
    accordionSummaryClasses,
} from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import RangeSlider from 'react-range-slider-input';
import 'react-range-slider-input/dist/style.css';


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
        {...props}
    />
))(({ theme }) => ({
    width: "100%",
    flexDirection: 'row-reverse',
    padding: "14px 0px 14px 0px",
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

interface Filterbox2Props {
    selectedCategory: string
    setSelectedCategory: (value: string) => void;
    price: string
    setPrice: (value: string) => void;
    size: string
    setSize: (value: string) => void;
    colors: string[];
    setColors: (value: string[]) => void;
    brands: string[];
    setBrands: (value: string[]) => void;
}


export const Filterbox2: React.FC<Filterbox2Props> = ({ selectedCategory, setSelectedCategory, price, setPrice, size, setSize, colors, setColors, brands, setBrands }): JSX.Element => {
    const [expanded, setExpanded] = React.useState<string[]>(["filter1", "filter2", "filter3", "filter4", "filter5",]);

    const isExpandedAcc = (val: string) => expanded.find(v => v === val)
    const handleChange =
        (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
            if (isExpandedAcc(panel)) {
                setExpanded(expanded.filter(v => v !== panel))
            } else {
                setExpanded([...expanded, panel]);
            }
        };
    const isColorExist = (item: string) => colors.find((v: string) => v === item)
    const isBrandExist = (item: string) => brands.find((v: string) => v === item)
    const priceValue = () => {
        let a = price.split("-")
        let b = [parseInt(a[0]), parseInt(a[1])]
        return b as [number, number]
    }
    return (
        <div className="w-full">
            <Accordion defaultExpanded sx={{ boxShadow: "none" }} className='border-b p-0' onChange={handleChange('filter1')}>
                <AccordionSummary
                    aria-controls="panel1-content"
                    id="panel1-header"
                >
                    <div
                        className='text-black flex items-center gap-x-3 justify-between w-full'
                    >
                        <p className='fw_600 text-sm'>Product Categories</p>
                        <FontAwesomeIcon icon={isExpandedAcc('filter1') ? faMinus : faPlus} />
                    </div>
                </AccordionSummary>
                <AccordionDetails>
                    <ul>
                        {["cases", "Chargers", "Cables", "Glasses"].map((item: string, index: number) => (<li onClick={() => { setSelectedCategory(item) }} key={index + 1} className={`py-2 cursor-pointer text-sm fw_400 hover:text-black duration-300 ${selectedCategory === item ? "text-black" : "text-zinc-500"}`}>{item}</li>))}
                    </ul>
                </AccordionDetails>
            </Accordion>
            <Accordion defaultExpanded sx={{ boxShadow: "none" }} className='border-b p-0' onChange={handleChange('filter2')}>
                <AccordionSummary
                    aria-controls="panel1-content"
                    id="panel1-header"
                >
                    <div
                        className='text-black flex items-center gap-x-3 justify-between w-full'
                    >
                        <p className='fw_600 text-sm'>Filter By Price</p>
                        <FontAwesomeIcon icon={isExpandedAcc('filter2') ? faMinus : faPlus} />
                    </div>
                </AccordionSummary>
                <AccordionDetails>
                    <div>
                        <RangeSlider min={1} max={1000} value={priceValue()} onInput={(value: number[]) => setPrice(value[0].toString() + "-" + value[1].toString())} />
                        <div className='flex items-center justify-between mt-6'>
                            <div className='flex items-center gap-x-2'>
                                <p className='text-sm text-zinc-700'>Price:</p>
                                <p className='text-zinc-700 fw_400 text-sm'>{priceValue().map((v) => "$" + v).join(" - ")}</p>
                            </div>
                            <button className='bg-zinc-100 rounded-sm text-xs fw_600 text-black h-8 w-16'>Filter</button>
                        </div>
                    </div>
                </AccordionDetails>
            </Accordion>
            <Accordion defaultExpanded sx={{ boxShadow: "none" }} className='border-b p-0' onChange={handleChange('filter3')}>
                <AccordionSummary
                    aria-controls="panel1-content"
                    id="panel1-header"
                >
                    <div
                        className='text-black flex items-center gap-x-3 justify-between w-full'
                    >
                        <p className='fw_600 text-sm'>Filter By Color</p>
                        <FontAwesomeIcon icon={isExpandedAcc('filter3') ? faMinus : faPlus} />
                    </div>
                </AccordionSummary>
                <AccordionDetails>
                    <ul>
                        {["Green", "Yellow", "Red", "Zinc", "Blue"].map((item: string, index: number) => (<li onClick={() => isColorExist(item) ? setColors(colors.filter((v: string) => v !== item)) : setColors([...colors, item])} key={index + 1} className={`py-2 cursor-pointer text-sm fw_400 hover:text-black duration-300 flex items-center gap-x-3 group  ${isColorExist(item) ? "text-black" : "text-zinc-500"}`}>
                            <div className={`p-1 rounded-full border group-hover:border-${item.toLowerCase()}-500 ${isColorExist(item) ? `border-${item.toLowerCase()}-500` : ""}`}>
                                <div className={`h-5 w-5 rounded-full bg-${item.toLowerCase()}-500`}></div>
                            </div>
                            {item}</li>))}
                    </ul>
                </AccordionDetails>
            </Accordion>

            <Accordion defaultExpanded sx={{ boxShadow: "none" }} className='border-b p-0' onChange={handleChange('filter4')}>
                <AccordionSummary
                    aria-controls="panel1-content"
                    id="panel1-header"
                >
                    <div
                        className='text-black flex items-center gap-x-3 justify-between w-full'
                    >
                        <p className='fw_600 text-sm'>Filter By Size</p>
                        <FontAwesomeIcon icon={isExpandedAcc('filter4') ? faMinus : faPlus} />
                    </div>
                </AccordionSummary>
                <AccordionDetails>
                    <ul className='flex-wrap flex gap-2 pb-4'>
                        {["Xl", "L", "M", "S", "XS"].map((item: string, index: number) => (<li onClick={() => { setSize(item) }} key={index + 1} className={`py-2 w-16 border cursor-pointer text-xs fw_600 duration-300 flex items-center justify-center rounded-md ${size === item ? "text-white bg-black" : "text-black"}`}>
                            {item}</li>))}
                    </ul>
                </AccordionDetails>
            </Accordion>

            <Accordion defaultExpanded sx={{ boxShadow: "none" }} className='border-b p-0' onChange={handleChange('filter5')}>
                <AccordionSummary
                    aria-controls="panel1-content"
                    id="panel1-header"
                >
                    <div
                        className='text-black flex items-center gap-x-3 justify-between w-full'
                    >
                        <p className='fw_600 text-sm'>Filter By Brand</p>
                        <FontAwesomeIcon icon={isExpandedAcc('filter5') ? faMinus : faPlus} />
                    </div>
                </AccordionSummary>
                <AccordionDetails>
                    <ul>
                        {["Apple", "Sumsang", "Vivo", "Infinix"].map((item: string, index: number) => (<li onClick={() => isBrandExist(item) ? setBrands(brands.filter((v: string) => v !== item)) : setBrands([...brands, item])} key={index + 1} className={`py-2 text-sm flex items-center gap-x-2 justify-between`}>
                            <div className="flex items-center gap-x-3">
                                <input type="checkbox" checked={isBrandExist(item) ? true : false} className="cursor-pointer w-4 h-4" />
                                <span className="text-zinc-500 fw_400 cursor-pointer text-sm">{item}</span>
                            </div>

                        </li>))}
                    </ul>
                </AccordionDetails>
            </Accordion>
        </div>
    )
}