import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const MuseumHeader = () => {
  const navItems = [
    { name: "Главная", icon: "Home" },
    { name: "Экспонаты", icon: "Archive" },
    { name: "Мастер-классы", icon: "Palette" },
    { name: "Новости", icon: "Newspaper" },
    { name: "Как добраться", icon: "MapPin" },
  ];

  return (
    <header className="bg-museum-cream border-b-2 border-museum-gold">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <img
              src="https://cdn.poehali.dev/files/fe246f51-53dc-4e9c-90a2-a0ec18214a39.jpg"
              alt="Логотип РЕМЕСЛА"
              className="h-16 w-auto"
            />
            <div>
              <p className="text-sm text-museum-red opacity-80 font-medium">
                Музей народного искусства
              </p>
              <p className="text-xs text-gray-500">Северо-Запад России</p>
            </div>
          </div>

          <nav className="hidden md:flex space-x-6">
            {navItems.map((item, index) => (
              <Button
                key={index}
                variant="ghost"
                className="text-museum-darkRed hover:bg-museum-beige hover:text-museum-red transition-colors"
              >
                <Icon name={item.icon as any} size={16} className="mr-2" />
                {item.name}
              </Button>
            ))}
          </nav>

          <Button className="md:hidden" variant="ghost" size="icon">
            <Icon name="Menu" size={24} className="text-museum-darkRed" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default MuseumHeader;
