
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import { Phone } from "lucide-react";
import { cn } from "@/lib/utils";

interface BasicContactCardProps {
  name: string;
  phone?: string;
  avatarUrl?: string;
  className?: string;
}

const BasicContactCard = ({
  name,
  phone,
  avatarUrl,
  className,
}: BasicContactCardProps) => {
  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase();
  };

  return (
    <Card className={cn("p-3 flex items-center gap-3", className)}>
      <Avatar className="h-10 w-10">
        <AvatarImage src={avatarUrl} alt={name} />
        <AvatarFallback className="bg-primary/10 text-primary">
          {getInitials(name)}
        </AvatarFallback>
      </Avatar>
      
      <div className="flex-1">
        <h3 className="font-medium">{name}</h3>
        
        {phone && (
          <div className="flex items-center gap-1 mt-1 text-sm text-muted-foreground">
            <Phone className="h-3 w-3" />
            <span>{phone}</span>
          </div>
        )}
      </div>
    </Card>
  );
};

export default BasicContactCard;
