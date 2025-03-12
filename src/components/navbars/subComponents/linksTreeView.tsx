import * as React from "react";
import Box from "@mui/material/Box";
import { SimpleTreeView } from "@mui/x-tree-view/SimpleTreeView";
import { TreeItem } from "@mui/x-tree-view/TreeItem";
import { linkType, subLinkType1, subLinkType2 } from "@/Types/navbarProsTypes";
import Link from "next/link";

interface LinkTreeViewProps {
  navLink: linkType;
  productBaseUrl: string
}

export const LinksTreeView: React.FC<LinkTreeViewProps> = ({
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
              fontFamily: "PoppinsSemiBold600",
              fontWeight: "600",
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
          <div className="py-0 pl-4">
            {navLink.subLinks && navLink.subLinks?.map(
              (subLink: subLinkType1 | subLinkType2, index: number) =>
                "categoryName" in subLink ? (
                  <TreeItem
                    key={index + 1}
                    itemId={`${subLink.categoryName}-nested`}
                    label={subLink.categoryName}
                  >
                    <div className="pl-4">
                      {subLink.links &&
                        subLink.links.length > 0 &&
                        subLink.links.map((link: subLinkType2, ind: number) => (
                          <Link
                            href={productBaseUrl + link.link}
                            key={ind + 1}
                            className="border-none outline-none shadow-none text-black text-sm fw_400"
                          >

                            <div className={`py-4 ${index !== subLink.links.length - 1 ? "border-b" : ""}`}>
                              <p className="one_lines_elipsis text-sm text-zinc-600">{link.label}</p>
                            </div> {/* <TreeItem
                              className={`py-0 px-0 border-b`}
                              itemId={`${link.label}-nested-${ind + 1}`}
                              label={link.label}
                            /> */}
                          </Link>
                        ))}
                    </div>
                  </TreeItem>
                ) : (
                  <Link
                    href={productBaseUrl + subLink.link}
                    className="border-none outline-none shadow-none text-black text-sm fw_400"
                  >
                    <TreeItem
                      className={`py-3 px-0 ${navLink.subLinks && navLink.subLinks.length - 1 !== index && "border-b"
                        }`}
                      key={index + 1}
                      itemId={subLink.label}
                      label={subLink.label}
                    />
                  </Link>
                )
            )}
          </div>
        </TreeItem>
      </SimpleTreeView>
    </Box> : <div></div>
  );
};
