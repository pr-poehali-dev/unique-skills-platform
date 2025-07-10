import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import Icon from "@/components/ui/icon";

const Index = () => {
  const categories = [
    {
      name: "Нумизматика",
      icon: "Coins",
      count: 47,
      color: "bg-primary/10 text-primary",
    },
    {
      name: "Экзотические растения",
      icon: "Leaf",
      count: 32,
      color: "bg-secondary/10 text-secondary",
    },
    {
      name: "Handmade украшения",
      icon: "Gem",
      count: 28,
      color: "bg-accent/10 text-accent",
    },
    {
      name: "Винтажные часы",
      icon: "Clock",
      count: 19,
      color: "bg-purple-100 text-purple-700",
    },
    {
      name: "Каллиграфия",
      icon: "PenTool",
      count: 15,
      color: "bg-pink-100 text-pink-700",
    },
    {
      name: "Минералы",
      icon: "Mountain",
      count: 23,
      color: "bg-blue-100 text-blue-700",
    },
  ];

  const topConsultants = [
    {
      name: "Анна Петрова",
      specialty: "Нумизматика",
      experience: "15 лет",
      rating: 4.9,
      sessions: 234,
      price: "2000 ₽/час",
      image: "/img/ac9b7f61-bb64-4827-9195-f0412d5a3d63.jpg",
    },
    {
      name: "Михаил Сергеев",
      specialty: "Экзотические растения",
      experience: "12 лет",
      rating: 4.8,
      sessions: 187,
      price: "1800 ₽/час",
      image: "/img/ac9b7f61-bb64-4827-9195-f0412d5a3d63.jpg",
    },
    {
      name: "Елена Волкова",
      specialty: "Handmade украшения",
      experience: "8 лет",
      rating: 4.9,
      sessions: 156,
      price: "1500 ₽/час",
      image: "/img/ac9b7f61-bb64-4827-9195-f0412d5a3d63.jpg",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-green-50">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-md sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="Sparkles" className="h-8 w-8 text-primary" />
              <h1 className="text-2xl font-bold">RareHobbies</h1>
            </div>
            <nav className="hidden md:flex items-center space-x-6">
              <a
                href="#"
                className="text-gray-600 hover:text-primary transition-colors"
              >
                Категории
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-primary transition-colors"
              >
                Эксперты
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-primary transition-colors"
              >
                Блог
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-primary transition-colors"
              >
                Поддержка
              </a>
            </nav>
            <div className="flex items-center space-x-3">
              <Button variant="outline" className="hidden sm:flex">
                <Icon name="MessageCircle" className="h-4 w-4 mr-2" />
                Чат
              </Button>
              <Button>
                <Icon name="CreditCard" className="h-4 w-4 mr-2" />
                Оплата
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent animate-fade-in">
              Консультации по редким хобби
            </h1>
            <p className="text-xl text-gray-600 mb-8 animate-fade-in">
              Делитесь уникальными навыками и получайте экспертные советы от
              мастеров своего дела
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 mb-12">
              <div className="relative w-full sm:w-96">
                <Icon
                  name="Search"
                  className="absolute left-3 top-3 h-5 w-5 text-gray-400"
                />
                <Input
                  placeholder="Найти эксперта или хобби..."
                  className="pl-10 h-12 text-lg"
                />
              </div>
              <Button size="lg" className="w-full sm:w-auto h-12">
                <Icon name="Search" className="h-5 w-5 mr-2" />
                Поиск
              </Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <div className="text-center animate-scale-in">
                <div className="bg-primary/10 rounded-full p-6 w-24 h-24 mx-auto mb-4 flex items-center justify-center">
                  <Icon name="Users" className="h-12 w-12 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">500+ экспертов</h3>
                <p className="text-gray-600">Мастера редких хобби</p>
              </div>
              <div className="text-center animate-scale-in">
                <div className="bg-secondary/10 rounded-full p-6 w-24 h-24 mx-auto mb-4 flex items-center justify-center">
                  <Icon name="Star" className="h-12 w-12 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">10000+ сессий</h3>
                <p className="text-gray-600">Проведено консультаций</p>
              </div>
              <div className="text-center animate-scale-in">
                <div className="bg-accent/10 rounded-full p-6 w-24 h-24 mx-auto mb-4 flex items-center justify-center">
                  <Icon name="Award" className="h-12 w-12 text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-2">4.9 рейтинг</h3>
                <p className="text-gray-600">Средняя оценка</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 px-4 bg-white/50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Категории хобби</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Исследуйте уникальные области знаний и найдите экспертов в самых
              необычных увлечениях
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-shadow cursor-pointer group"
              >
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className={`p-2 rounded-lg ${category.color}`}>
                        <Icon name={category.icon} className="h-6 w-6" />
                      </div>
                      <div>
                        <CardTitle className="text-lg">
                          {category.name}
                        </CardTitle>
                        <CardDescription>
                          {category.count} экспертов
                        </CardDescription>
                      </div>
                    </div>
                    <Icon
                      name="ArrowRight"
                      className="h-5 w-5 text-gray-400 group-hover:text-primary transition-colors"
                    />
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Top Consultants Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Топ консультантов</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Лучшие эксперты с высоким рейтингом и многолетним опытом
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {topConsultants.map((consultant, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <img
                      src={consultant.image}
                      alt={consultant.name}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div className="flex-1">
                      <CardTitle className="text-xl">
                        {consultant.name}
                      </CardTitle>
                      <CardDescription className="text-sm">
                        {consultant.specialty}
                      </CardDescription>
                      <div className="flex items-center space-x-2 mt-2">
                        <Badge variant="secondary">
                          {consultant.experience}
                        </Badge>
                        <div className="flex items-center space-x-1">
                          <Icon
                            name="Star"
                            className="h-4 w-4 text-yellow-400 fill-current"
                          />
                          <span className="text-sm font-medium">
                            {consultant.rating}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-sm text-gray-600">
                      <Icon name="Users" className="h-4 w-4 inline mr-1" />
                      {consultant.sessions} сессий
                    </div>
                    <div className="text-lg font-bold text-primary">
                      {consultant.price}
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <Button size="sm" className="flex-1">
                      <Icon name="MessageCircle" className="h-4 w-4 mr-2" />
                      Написать
                    </Button>
                    <Button size="sm" variant="outline" className="flex-1">
                      <Icon name="CreditCard" className="h-4 w-4 mr-2" />
                      Оплатить
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-purple-50 to-green-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Как это работает</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Простой процесс получения экспертных консультаций
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-primary/10 rounded-full p-6 w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-primary">1</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Найдите эксперта</h3>
              <p className="text-sm text-gray-600">
                Выберите специалиста в интересующей области
              </p>
            </div>
            <div className="text-center">
              <div className="bg-secondary/10 rounded-full p-6 w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-secondary">2</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Начните чат</h3>
              <p className="text-sm text-gray-600">
                Обсудите детали и договоритесь о встрече
              </p>
            </div>
            <div className="text-center">
              <div className="bg-accent/10 rounded-full p-6 w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-accent">3</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Оплатите</h3>
              <p className="text-sm text-gray-600">
                Безопасная оплата через платформу
              </p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 rounded-full p-6 w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-purple-700">4</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Получите знания</h3>
              <p className="text-sm text-gray-600">
                Онлайн-консультация с экспертом
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Готовы начать?</h2>
          <p className="text-lg mb-8 opacity-90">
            Присоединяйтесь к сообществу экспертов редких хобби
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Button size="lg" variant="secondary">
              <Icon name="UserPlus" className="h-5 w-5 mr-2" />
              Стать экспертом
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-white border-white hover:bg-white hover:text-primary"
            >
              <Icon name="Search" className="h-5 w-5 mr-2" />
              Найти консультанта
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Sparkles" className="h-6 w-6" />
                <h3 className="text-lg font-bold">RareHobbies</h3>
              </div>
              <p className="text-gray-400 text-sm">
                Платформа для консультаций по редким хобби и уникальным навыкам
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Платформа</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Как это работает
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Цены
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Безопасность
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Поддержка</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Центр помощи
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Контакты
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Отзывы
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Следите за нами</h4>
              <div className="flex space-x-3">
                <Icon
                  name="Github"
                  className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer transition-colors"
                />
                <Icon
                  name="Twitter"
                  className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer transition-colors"
                />
                <Icon
                  name="Instagram"
                  className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer transition-colors"
                />
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2024 RareHobbies. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
