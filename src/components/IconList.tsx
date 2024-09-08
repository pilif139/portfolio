import {IconType} from "react-icons";
import React from "react";
import Badge from "@/components/Badge";

type Props = {
  icons: {
    Icon: IconType;
    name?: string;
  }[] | undefined;
  infoAtBottom?: boolean;
}

export default function IconList({icons, infoAtBottom}: Props) {
  if(!icons) return null;
  return (
      <>
        {icons.map(({ Icon, name }, index) => (
            <Badge key={index} name={name} infoAtBottom={infoAtBottom}><Icon size={30} /></Badge>
        ))}
      </>
  );

}