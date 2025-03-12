import { FC } from "react";

interface CompHeadingProps {
  title: string;
  rightContent: JSX.Element | null;
  justify?: string;
  headingSize?: string
}

export const CompHeading: FC<CompHeadingProps> = ({
  title,
  rightContent,
  justify,
  headingSize
}): JSX.Element => {
  return (
    <div
      className={`flex ${rightContent === null ? justify ? justify : "justify-center md:justify-start" : "flex-col md:flex-row justify-between"
        } items-center gap-x-5 flex-wrap gap-y-4 shrink`}
    >
      <h1 className={`${headingSize ? headingSize : "text-xl sm:text-2xl md:text-3xl"} tracking-widest fw_600 text-black`}>{title}</h1>
      {rightContent}
    </div>
  );
};
