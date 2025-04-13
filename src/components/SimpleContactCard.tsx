
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Phone, Mail } from "lucide-react";
import { cn } from "@/lib/utils";

interface SimpleContactCardProps {
  name: string;
  phone?: string;
  email?: string;
  avatarUrl?: string;
  className?: string;
}

const SimpleContactCard = ({
  name,
  phone,
  email,
  avatarUrl,
  className,
}: SimpleContactCardProps) => {
  // Получаем инициалы для аватара
  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase();
  };

  return (
    <Card className={cn("max-w-sm w-full p-4 flex items-center gap-4", className)}>
      <Avatar className="h-12 w-12 border border-primary/50">
        <AvatarImage src={avatarUrl} alt={name} />
        <AvatarFallback className="bg-primary/10 text-primary">
          {getInitials(name)}
        </AvatarFallback>
      </Avatar>
      
      <div className="flex-1">
        <h3 className="font-medium text-base">{name}</h3>
        
        <div className="flex flex-col mt-1 gap-1 text-sm text-muted-foreground">
          {phone && (
            <div className="flex items-center gap-2">
              <Phone className="h-3.5 w-3.5" />
              <span>{phone}</span>
            </div>
          )}
          
          {email && (
            <div className="flex items-center gap-2">
              <Mail className="h-3.5 w-3.5" />
              <span>{email}</span>
            </div>
          )}
        </div>
      </div>
    </Card>
  );
};

export default SimpleContactCard;
