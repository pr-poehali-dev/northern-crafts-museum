import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

interface Event {
  id: number;
  title: string;
  date: string;
  time: string;
  type: "master-class" | "exhibition" | "lecture";
  availableSpots?: number;
  ageRange?: string;
}

const EventCalendar = () => {
  const events: Event[] = [
    {
      id: 1,
      title: "Мастер-класс по гончарному делу",
      date: "15 июля",
      time: "14:00",
      type: "master-class",
      availableSpots: 8,
      ageRange: "6-18 лет",
    },
    {
      id: 2,
      title: 'Выставка "Узоры Русского Севера"',
      date: "20 июля",
      time: "10:00",
      type: "exhibition",
    },
    {
      id: 3,
      title: "Мастер-класс по резьбе по дереву",
      date: "25 июля",
      time: "16:00",
      type: "master-class",
      availableSpots: 12,
      ageRange: "6-18 лет",
    },
  ];

  const getEventIcon = (type: string) => {
    switch (type) {
      case "master-class":
        return "Palette";
      case "exhibition":
        return "Gallery";
      case "lecture":
        return "BookOpen";
      default:
        return "Calendar";
    }
  };

  const getEventColor = (type: string) => {
    switch (type) {
      case "master-class":
        return "bg-museum-gold";
      case "exhibition":
        return "bg-museum-red";
      case "lecture":
        return "bg-museum-beige text-museum-darkRed";
      default:
        return "bg-gray-500";
    }
  };

  return (
    <Card className="border-museum-beige">
      <CardHeader>
        <CardTitle className="flex items-center text-museum-darkRed font-serif">
          <Icon name="Calendar" size={24} className="mr-3 text-museum-red" />
          Календарь событий
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {events.map((event) => (
          <div
            key={event.id}
            className="flex items-center justify-between p-4 rounded-lg bg-museum-cream"
          >
            <div className="flex items-center space-x-4">
              <div className={`p-2 rounded-full ${getEventColor(event.type)}`}>
                <Icon
                  name={getEventIcon(event.type) as any}
                  size={16}
                  className="text-white"
                />
              </div>
              <div>
                <h4 className="font-medium text-museum-darkRed">
                  {event.title}
                </h4>
                <p className="text-sm text-gray-600">
                  {event.date} в {event.time}
                </p>
                <div className="flex gap-2 mt-1">
                  {event.availableSpots && (
                    <Badge variant="outline" className="text-xs">
                      Осталось {event.availableSpots} мест
                    </Badge>
                  )}
                  {event.ageRange && (
                    <Badge
                      variant="outline"
                      className="text-xs bg-museum-gold text-white"
                    >
                      {event.ageRange}
                    </Badge>
                  )}
                </div>
              </div>
            </div>
            <Button
              size="sm"
              className="bg-museum-red hover:bg-museum-darkRed text-white"
            >
              {event.type === "master-class" ? "Записаться" : "Подробнее"}
            </Button>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default EventCalendar;
