import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

interface ExhibitCardProps {
  title: string;
  description: string;
  technique: string;
  region: string;
  imageUrl: string;
  isInteractive?: boolean;
}

const ExhibitCard = ({
  title,
  description,
  technique,
  region,
  imageUrl,
  isInteractive = false,
}: ExhibitCardProps) => {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow border-museum-beige">
      <div className="relative">
        <div className="h-48 bg-gradient-to-br from-museum-beige to-museum-cream flex items-center justify-center">
          <Icon
            name="Image"
            size={48}
            className="text-museum-gold opacity-50"
          />
        </div>
        {isInteractive && (
          <Badge className="absolute top-3 right-3 bg-museum-red text-white">
            <Icon name="Play" size={12} className="mr-1" />
            Интерактивно
          </Badge>
        )}
      </div>

      <CardHeader className="pb-3">
        <CardTitle className="text-lg font-serif text-museum-darkRed">
          {title}
        </CardTitle>
        <div className="flex gap-2">
          <Badge
            variant="outline"
            className="text-xs border-museum-gold text-museum-red"
          >
            {technique}
          </Badge>
          <Badge
            variant="outline"
            className="text-xs border-museum-gold text-museum-red"
          >
            {region}
          </Badge>
        </div>
      </CardHeader>

      <CardContent className="pt-0">
        <p className="text-sm text-gray-600 mb-4">{description}</p>
        <Button
          className="w-full bg-museum-red hover:bg-museum-darkRed text-white"
          size="sm"
        >
          <Icon name="Eye" size={16} className="mr-2" />
          Подробнее
        </Button>
      </CardContent>
    </Card>
  );
};

export default ExhibitCard;
