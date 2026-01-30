import CustomInput from "@/components/custom-input";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function Profile() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <div className="space-y-2.5">
    
        <CustomInput label="Name"/>
        <CustomInput label="Email"/>
        <CustomInput label="Username"/>
        <CustomInput label="Name"/>
        <CustomInput label="Name"/>
        <CustomInput label="Name"/>
     
      
      </div>
     
    </div>
  );
}
