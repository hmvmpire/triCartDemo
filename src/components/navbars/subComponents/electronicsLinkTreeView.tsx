import * as React from "react";
import Box from "@mui/material/Box";
import { SimpleTreeView } from "@mui/x-tree-view/SimpleTreeView";
import { TreeItem } from "@mui/x-tree-view/TreeItem";
import { linkType, subLinkType1, subLinkType2 } from "@/Types/navbarProsTypes";
import Link from "next/link";
import { CategoryPropType } from "@/Types/categoryPropsTypes";

interface ElectronicsLinkTreeViewProps {
    navLink: CategoryPropType;
    productBaseUrl: string
}

export const ElectronicsLinkTreeView: React.FC<ElectronicsLinkTreeViewProps> = ({
    navLink, productBaseUrl
}): JSX.Element => {
    return (
        navLink && navLink.label ? <Box>
            <SimpleTreeView>
                <TreeItem
                    itemId={navLink.label}
                    label={navLink.label}
                    className="border-b text-sm"
                    sx={{
                        "& .Mui-selected": {
                            backgroundColor: "transparent !important", // Remove selected item background
                        },
                        "& .MuiTreeItem-label": {
                            fontSize: "0.875rem", // Decrease font size
                            fontFamily: "PoppinsRegular400",
                            padding: "10px 0 10px 0",
                            color: "black"
                        },
                        "& .MuiTreeItem-iconContainer": {
                            order: 1, // Move the icon container to the right
                        },
                        "& .MuiTreeItem-content": {
                            paddingLeft: "12px",
                            display: "flex",
                            justifyContent: "space-between", // Align label and icon
                        },
                    }}
                >
                    <div className="py-0 pl-10 flex flex-col">
                        {navLink.products.map(
                            (subLink, index: number) =>
                                <Link
                                    key={index + 1}
                                    href={productBaseUrl + subLink.link}
                                    className="border-none outline-none shadow-none fw_400"
                                >
                                    <div className={`py-4 ${index !== navLink.products.length - 1 ? "border-b" : ""}`}>
                                        <p className="one_lines_elipsis text-sm text-zinc-600">{subLink.label}</p>
                                    </div>
                                </Link>
                        )}
                    </div>
                </TreeItem>
            </SimpleTreeView>
        </Box> : <div></div>
    );
};
