import { Input } from "./ui/input";
import { Label } from "./ui/label";

export default function CustomInput({
  label,
  ...props
}: React.ComponentProps<"input"> & { label?: string }) {
  return (
    <div className="space-y-2">
      {label && <Label className="">{label}</Label>}
      <Input className="rounded-full" {...props} />
    </div>
  );
}
