
import { Item, ItemContent, ItemTitle } from "@/components/ui/item";

interface ProfileItemProps {
  title?: string;
  children: React.ReactNode;
}
const ProfileItem = ({ title, children }: ProfileItemProps) => {
  return(
    <Item className="p-0">
      <ItemContent>
        {
          title && <ItemTitle className="mb-1 font-bold break-keep">{title}</ItemTitle>
        }
        {children}
      </ItemContent>
    </Item>
  );
};
export default ProfileItem;
