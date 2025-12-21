import { BadgeCheckIcon } from "lucide-react";

import { Item, ItemContent, ItemMedia, ItemTitle } from "@/components/ui/item";

interface PointItemProps {
  text: string;
}
const PointItem = ({ text }: PointItemProps) => {
  return(
    <Item variant="outline" size="sm">
      <ItemMedia>
        <BadgeCheckIcon className="size-5 text-primary" />
      </ItemMedia>
      <ItemContent>
        <ItemTitle className="break-keep">{text}</ItemTitle>
      </ItemContent>
    </Item>
  );
};
export default PointItem;
