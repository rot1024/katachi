import React from "react";

export interface Props {
  className?: string;
}

const Calendar: React.FC<Props> = ({ className }) => {
  return <div className={className}></div>;
};

export default Calendar;
