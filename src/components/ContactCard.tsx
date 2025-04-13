
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Phone, Mail, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";

interface ContactCardProps {
  name: string;
  position?: string;
  phone?: string;
  email?: string;
  address?: string;
  avatarUrl?: string;
  className?: string;
}

const ContactCard = ({
  name,
  position,
  phone,
  email,
  address,
  avatarUrl,
  className,
}: ContactCardProps) => {
  // Получаем инициалы для аватара
  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase();
  };

  return (
    <Card className={cn("max-w-md w-full", className)}>
      <CardHeader className="flex flex-row items-center gap-4 pb-2">
        <Avatar className="h-16 w-16">
          <AvatarImage src={avatarUrl} alt={name} />
          <AvatarFallback className="text-lg bg-primary text-primary-foreground">
            {getInitials(name)}
          </AvatarFallback>
        </Avatar>
        <div>
          <h3 className="text-xl font-semibold">{name}</h3>
          {position && <p className="text-muted-foreground">{position}</p>}
        </div>
      </CardHeader>
      <CardContent className="space-y-3">
        {phone && (
          <div className="flex items-center gap-3">
            <Phone className="h-5 w-5 text-muted-foreground" />
            <span>{phone}</span>
          </div>
        )}
        {email && (
          <div className="flex items-center gap-3">
            <Mail className="h-5 w-5 text-muted-foreground" />
            <span>{email}</span>
          </div>
        )}
        {address && (
          <div className="flex items-center gap-3">
            <MapPin className="h-5 w-5 text-muted-foreground" />
            <span>{address}</span>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default ContactCard;
