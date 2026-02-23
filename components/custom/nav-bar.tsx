import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const NavBar = ({
  title = "TEST",
  component,
}: {
  title: string;
  component?: React.ReactNode;
}) => {
  return (
    <div className="flex items-center justify-between">
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <p className="text-xl text-white">{title}</p>
      <div>{component}</div>
    </div>
  );
};

export default NavBar;
