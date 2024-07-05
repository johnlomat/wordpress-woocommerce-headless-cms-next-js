import React from "react";
import { removeDuplicateClasses } from "@/utils/helpers";

export const Section = ({
  children,
  className = "",
}: Readonly<{
  children: React.ReactNode;
  className?: string;
}>) => {
  return (
    <>
      <section
        className={removeDuplicateClasses(
          `${!className ? "" : `${className} `}relative py-[3.75rem] md:py-[5.625rem]`,
        )}
      >
        {children}
      </section>
    </>
  );
};

interface RowProps {
  children: React.ReactNode;
  className?: string;
  size?: "sm";
}

const sizeMap = {
  sm: "max-w-[46.875rem]",
};

export const Row: React.FC<Readonly<RowProps>> = ({
  children,
  className = "",
  size,
}) => {
  const sizeValue = size ? `${sizeMap[size]} ` : "";

  return (
    <>
      <div
        className={removeDuplicateClasses(
          `${!className ? "" : `${className} `}${sizeValue}container flex flex-col md:w-[70%] lg:w-full lg:flex-row`,
        )}
      >
        {children}
      </div>
    </>
  );
};

export const Col = ({
  children,
  className = "",
}: Readonly<{
  children: React.ReactNode;
  className?: string;
}>) => {
  return (
    <>
      <div
        className={removeDuplicateClasses(
          `${!className ? "" : `${className} `}px-0 md:px-[0.25rem]`,
        )}
      >
        {children}
      </div>
    </>
  );
};