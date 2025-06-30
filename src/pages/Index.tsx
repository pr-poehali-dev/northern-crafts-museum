import MuseumHeader from "@/components/MuseumHeader";
import ExhibitCard from "@/components/ExhibitCard";
import EventCalendar from "@/components/EventCalendar";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Index = () => {
  const featuredExhibits = [
    {
      title: "Хохломская роспись",
      description:
        "Традиционная роспись деревянной посуды золотом по чёрному фону",
      technique: "Роспись",
      region: "Нижегородская обл.",
      imageUrl: "/placeholder.svg",
      isInteractive: true,
    },
    {
      title: "Вологодское кружево",
      description:
        "Изящное кружево, плетёное на коклюшках по старинным образцам",
      technique: "Плетение",
      region: "Вологодская обл.",
      imageUrl: "/placeholder.svg",
      isInteractive: true,
    },
    {
      title: "Каргопольская игрушка",
      description: "Традиционная глиняная игрушка с архаичными образами",
      technique: "Керамика",
      region: "Архангельская обл.",
      imageUrl: "/placeholder.svg",
      isInteractive: false,
    },
  ];

  return (
    <div className="min-h-screen bg-museum-beige">
      <MuseumHeader />

      {/* Главный баннер */}
      <section className="relative py-20 bg-gradient-to-r from-museum-cream to-museum-beige">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-serif font-bold text-museum-darkRed mb-6">
            Добро пожаловать в мир русских ремёсел
          </h1>
          <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
            Откройте для себя богатое культурное наследие северо-запада России
            через интерактивные экспозиции, мастер-классы и уникальные экспонаты
          </p>
          <div className="flex gap-4 justify-center">
            <Button
              size="lg"
              className="bg-museum-red hover:bg-museum-darkRed text-white"
            >
              <Icon name="Eye" size={20} className="mr-2" />
              Виртуальный тур
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-museum-red text-museum-red hover:bg-museum-cream"
            >
              <Icon name="Calendar" size={20} className="mr-2" />
              Записаться на экскурсию
            </Button>
          </div>
        </div>
      </section>

      {/* Избранные экспонаты */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-museum-darkRed mb-4">
              Избранные экспонаты
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Изучайте традиционные ремёсла через интерактивные экспозиции с
              подробными описаниями техник
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {featuredExhibits.map((exhibit, index) => (
              <ExhibitCard key={index} {...exhibit} />
            ))}
          </div>

          <div className="text-center">
            <Button
              size="lg"
              variant="outline"
              className="border-museum-red text-museum-red hover:bg-museum-cream"
            >
              <Icon name="Archive" size={20} className="mr-2" />
              Посмотреть все экспонаты
            </Button>
          </div>
        </div>
      </section>

      {/* События и мастер-классы */}
      <section className="py-16 bg-museum-cream">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-serif font-bold text-museum-darkRed mb-6">
                Мастер-классы и события
              </h2>
              <p className="text-gray-600 mb-8">
                Погрузитесь в мир традиционных ремёсел на наших мастер-классах.
                Изучайте древние техники под руководством опытных мастеров.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Icon name="Users" size={20} className="text-museum-red" />
                  <span>Группы до 12 человек</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Clock" size={20} className="text-museum-red" />
                  <span>Продолжительность 2-3 часа</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Award" size={20} className="text-museum-red" />
                  <span>Сертификат об участии</span>
                </div>
              </div>
            </div>

            <EventCalendar />
          </div>
        </div>
      </section>

      {/* Футер */}
      <footer className="bg-museum-darkRed text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-serif font-bold mb-4">Контакты</h3>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Icon name="MapPin" size={16} />
                  <span className="text-sm">
                    г. Архангельск, ул. Музейная, 15
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Phone" size={16} />
                  <span className="text-sm">+7 (8182) 123-456</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Mail" size={16} />
                  <span className="text-sm">info@remesla-museum.ru</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-serif font-bold mb-4">
                Время работы
              </h3>
              <div className="space-y-2 text-sm">
                <div>Пн-Пт: 10:00 - 18:00</div>
                <div>Сб-Вс: 10:00 - 17:00</div>
                <div className="text-museum-gold">Понедельник - выходной</div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-serif font-bold mb-4">
                Следите за нами
              </h3>
              <div className="flex space-x-4">
                <Button
                  size="icon"
                  variant="ghost"
                  className="text-white hover:text-museum-gold"
                >
                  <Icon name="Facebook" size={20} />
                </Button>
                <Button
                  size="icon"
                  variant="ghost"
                  className="text-white hover:text-museum-gold"
                >
                  <Icon name="Instagram" size={20} />
                </Button>
                <Button
                  size="icon"
                  variant="ghost"
                  className="text-white hover:text-museum-gold"
                >
                  <Icon name="Youtube" size={20} />
                </Button>
              </div>
            </div>
          </div>

          <div className="border-t border-museum-red mt-8 pt-8 text-center text-sm opacity-80">
            © 2024 Музей "Ремёсла северо-запада России". Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
