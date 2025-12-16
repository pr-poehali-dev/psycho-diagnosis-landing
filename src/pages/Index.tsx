import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Index = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    status: "",
    message: ""
  });
  
  const [showDates, setShowDates] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#c7c6c6]">
      <nav className="sticky top-0 z-50 bg-white shadow-sm">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex items-center justify-between h-16">
            <span className="font-bold text-[#1d4356] text-lg">Психоаналитическая диагностика</span>
            <div className="hidden md:flex gap-6">
              <button onClick={() => scrollToSection('audience')} className="text-sm text-[#1d4356] hover:opacity-70">Для кого</button>
              <button onClick={() => scrollToSection('program')} className="text-sm text-[#1d4356] hover:opacity-70">Программа</button>
              <button onClick={() => scrollToSection('pricing')} className="text-sm text-[#1d4356] hover:opacity-70">Стоимость</button>
              <button onClick={() => scrollToSection('teacher')} className="text-sm text-[#1d4356] hover:opacity-70">Преподаватель</button>
              <button onClick={() => scrollToSection('faq')} className="text-sm text-[#1d4356] hover:opacity-70">FAQ</button>
            </div>
            <Button onClick={() => scrollToSection('signup')} className="bg-[#1d4356] hover:bg-[#1d4356]/90 text-white">
              Оставить заявку
            </Button>
          </div>
        </div>
      </nav>

      <header className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-[#1d4356] mb-6 leading-tight">
                Уровни психической организации личности в концепции психоаналитической диагностики
              </h1>
              <p className="text-xl text-[#111111] mb-8">
                Онлайн-курс повышения квалификации для психологов-консультантов и психотерапевтов
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  onClick={() => scrollToSection('signup')} 
                  size="lg" 
                  className="bg-[#1d4356] text-white hover:bg-[#1d4356]/90"
                >
                  Оставить заявку
                </Button>
                <Button 
                  onClick={() => scrollToSection('program')} 
                  size="lg" 
                  variant="outline" 
                  className="bg-white border-2 border-[#1d4356] text-[#1d4356] hover:bg-[#1d4356]/10"
                >
                  Программа курса
                </Button>
              </div>
            </div>

            <Card className="bg-white">
              <CardHeader>
                <CardTitle className="text-[#1d4356] flex items-center gap-2">
                  <Icon name="Calendar" size={24} className="text-[#1d4356]" />
                  Календарь курса
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3 text-[#111111]">
                  <div className="flex justify-between">
                    <span className="font-medium">Старт:</span>
                    <span>03.02</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Время:</span>
                    <span>19:00–20:30</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Период:</span>
                    <span>03.02–01.04</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Занятий:</span>
                    <span>9 занятий, 1 раз в неделю</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Тестирование:</span>
                    <span>до 15 апреля</span>
                  </div>
                </div>
                
                <button 
                  onClick={() => setShowDates(!showDates)}
                  className="text-[#d3544f] text-sm font-medium hover:opacity-70 flex items-center gap-1 mt-4"
                >
                  {showDates ? 'Скрыть даты' : 'Все даты'}
                  <Icon name={showDates ? "ChevronUp" : "ChevronDown"} size={16} />
                </button>

                {showDates && (
                  <div className="mt-4 pt-4 border-t space-y-2 text-sm text-[#111111]">
                    <div>03.02 — вторник</div>
                    <div>10.02 — вторник</div>
                    <div>18.02 — среда</div>
                    <div>25.02 — среда</div>
                    <div>04.03 — среда</div>
                    <div>10.03 — вторник</div>
                    <div>18.03 — среда</div>
                    <div>25.03 — среда</div>
                    <div>01.04 — среда</div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </header>

      <section className="py-12">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            <Card className="bg-white text-center">
              <CardContent className="p-6">
                <Icon name="Calendar" size={32} className="text-[#1d4356] mx-auto mb-3" />
                <p className="text-sm font-medium text-[#111111]">9 занятий</p>
              </CardContent>
            </Card>
            
            <Card className="bg-white text-center">
              <CardContent className="p-6">
                <Icon name="Video" size={32} className="text-[#1d4356] mx-auto mb-3" />
                <p className="text-sm font-medium text-[#111111]">7 вебинаров + 2 супервизии</p>
              </CardContent>
            </Card>
            
            <Card className="bg-white text-center">
              <CardContent className="p-6">
                <Icon name="FileText" size={32} className="text-[#1d4356] mx-auto mb-3" />
                <p className="text-sm font-medium text-[#111111]">2 ДЗ с обратной связью</p>
              </CardContent>
            </Card>
            
            <Card className="bg-white text-center">
              <CardContent className="p-6">
                <Icon name="PlayCircle" size={32} className="text-[#1d4356] mx-auto mb-3" />
                <p className="text-sm font-medium text-[#111111]">Записи 6 месяцев</p>
              </CardContent>
            </Card>
            
            <Card className="bg-white text-center">
              <CardContent className="p-6">
                <Icon name="Award" size={32} className="text-[#1d4356] mx-auto mb-3" />
                <p className="text-sm font-medium text-[#111111]">Удостоверение 72 часа</p>
              </CardContent>
            </Card>
            
            <Card className="bg-white text-center">
              <CardContent className="p-6">
                <Icon name="MessageSquare" size={32} className="text-[#1d4356] mx-auto mb-3" />
                <p className="text-sm font-medium text-[#111111]">Чат группы</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="audience" className="py-16">
        <div className="container mx-auto px-4 max-w-7xl">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1d4356] mb-12">Для кого этот курс</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-white">
              <CardContent className="p-8">
                <Icon name="Users" size={32} className="text-[#1d4356] mb-4" />
                <h3 className="text-xl font-semibold text-[#1d4356] mb-3">Психологи-консультанты и психотерапевты</h3>
                <p className="text-[#111111]">
                  С высшим образованием по психологии или ДПО, которые начинают практику в психоаналитическом подходе
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white">
              <CardContent className="p-8">
                <Icon name="BookOpen" size={32} className="text-[#1d4356] mb-4" />
                <h3 className="text-xl font-semibold text-[#1d4356] mb-3">Обучающиеся психологии</h3>
                <p className="text-[#111111]">
                  Желающие разобраться в психоаналитической диагностике для последующего применения в практике
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="format" className="py-16">
        <div className="container mx-auto px-4 max-w-7xl">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1d4356] mb-12">Формат обучения</h2>
          <Card className="bg-white">
            <CardContent className="p-8">
              <ul className="space-y-4 text-[#111111]">
                <li className="flex items-start gap-3">
                  <Icon name="CheckCircle2" size={20} className="text-[#1d4356] flex-shrink-0 mt-0.5" />
                  <span>Структурировать знания об уровнях личностной организации</span>
                </li>
                <li className="flex items-start gap-3">
                  <Icon name="CheckCircle2" size={20} className="text-[#1d4356] flex-shrink-0 mt-0.5" />
                  <span>Понять диагностические критерии психоаналитического подхода</span>
                </li>
                <li className="flex items-start gap-3">
                  <Icon name="CheckCircle2" size={20} className="text-[#1d4356] flex-shrink-0 mt-0.5" />
                  <span>Определять уровень психического функционирования клиента (невротический, пограничный, психотический, нарциссический)</span>
                </li>
                <li className="flex items-start gap-3">
                  <Icon name="CheckCircle2" size={20} className="text-[#1d4356] flex-shrink-0 mt-0.5" />
                  <span>Понимать стратегию работы уже на первых сессиях</span>
                </li>
                <li className="flex items-start gap-3">
                  <Icon name="CheckCircle2" size={20} className="text-[#1d4356] flex-shrink-0 mt-0.5" />
                  <span>Укрепить навыки диагностики на практических примерах и в супервизионном формате</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="program" className="py-16">
        <div className="container mx-auto px-4 max-w-7xl">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1d4356] mb-12">Программа курса</h2>
          
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="bg-white rounded-lg px-6 border-none">
              <AccordionTrigger className="text-left hover:no-underline py-6">
                <div className="flex items-start gap-4">
                  <span className="text-[#d3544f] font-bold text-xl">01</span>
                  <div>
                    <h4 className="font-semibold text-lg text-[#1d4356]">Невротический уровень организации личности</h4>
                    <p className="text-sm text-[#111111] mt-1">03.02, вторник</p>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pl-12 pt-2 pb-6">
                <p className="text-[#111111]">
                  Классические представления о невротической организации. Диагностические признаки: защитные механизмы, качество объектных отношений, тревога и вина. Проявления в терапевтическом альянсе.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="bg-white rounded-lg px-6 border-none">
              <AccordionTrigger className="text-left hover:no-underline py-6">
                <div className="flex items-start gap-4">
                  <span className="text-[#d3544f] font-bold text-xl">02</span>
                  <div>
                    <h4 className="font-semibold text-lg text-[#1d4356]">Пограничный уровень. Часть 1</h4>
                    <p className="text-sm text-[#111111] mt-1">10.02, вторник</p>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pl-12 pt-2 pb-6">
                <p className="text-[#111111]">
                  Концепция пограничной организации личности. Защиты и объектные отношения пограничного уровня. Диффузная идентичность. Расщепление, проективная идентификация, примитивная идеализация.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="bg-white rounded-lg px-6 border-none">
              <AccordionTrigger className="text-left hover:no-underline py-6">
                <div className="flex items-start gap-4">
                  <span className="text-[#d3544f] font-bold text-xl">03</span>
                  <div>
                    <h4 className="font-semibold text-lg text-[#1d4356]">Пограничный уровень. Часть 2</h4>
                    <p className="text-sm text-[#111111] mt-1">18.02, среда</p>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pl-12 pt-2 pb-6">
                <p className="text-[#111111]">
                  Различие пограничной организации и ПРЛ. Координаты MISERY (Н. Мак-Вильямс). Ориентиры DSM-5-TR. Терапевтическая тактика и особенности работы.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="bg-white rounded-lg px-6 border-none">
              <AccordionTrigger className="text-left hover:no-underline py-6">
                <div className="flex items-start gap-4">
                  <span className="text-[#d3544f] font-bold text-xl">04</span>
                  <div>
                    <h4 className="font-semibold text-lg text-[#1d4356]">Психотический уровень организации личности</h4>
                    <p className="text-sm text-[#111111] mt-1">25.02, среда</p>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pl-12 pt-2 pb-6">
                <p className="text-[#111111]">
                  Психотическая организация: критерии и феноменология. Нарушение тестирования реальности. Защиты психотического уровня. Диагностические признаки в терапевтическом контакте.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="bg-white rounded-lg px-6 border-none">
              <AccordionTrigger className="text-left hover:no-underline py-6">
                <div className="flex items-start gap-4">
                  <span className="text-[#d3544f] font-bold text-xl">05</span>
                  <div>
                    <h4 className="font-semibold text-lg text-[#1d4356]">Нарциссическая личность</h4>
                    <p className="text-sm text-[#111111] mt-1">04.03, среда</p>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pl-12 pt-2 pb-6">
                <p className="text-[#111111]">
                  Нарциссическая организация личности: структура и динамика. Грандиозность, зависть, стыд. Типы нарциссизма (явный и скрытый). Нарциссический перенос и контрперенос.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6" className="bg-white rounded-lg px-6 border-none">
              <AccordionTrigger className="text-left hover:no-underline py-6">
                <div className="flex items-start gap-4">
                  <span className="text-[#d3544f] font-bold text-xl">06</span>
                  <div>
                    <h4 className="font-semibold text-lg text-[#1d4356]">Психоаналитическая типология в литературе и кино</h4>
                    <p className="text-sm text-[#111111] mt-1">10.03, вторник</p>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pl-12 pt-2 pb-6">
                <p className="text-[#111111]">
                  Иллюстрация уровней личностной организации через анализ персонажей литературы и кино. Обсуждение защит, мотиваций, динамики отношений.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-7" className="bg-white rounded-lg px-6 border-none">
              <AccordionTrigger className="text-left hover:no-underline py-6">
                <div className="flex items-start gap-4">
                  <span className="text-[#d3544f] font-bold text-xl">07</span>
                  <div>
                    <h4 className="font-semibold text-lg text-[#1d4356]">Практическое занятие 1: Супервизия случаев</h4>
                    <p className="text-sm text-[#111111] mt-1">18.03, среда</p>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pl-12 pt-2 pb-6">
                <p className="text-[#111111]">
                  Разбор клинических случаев, представленных участниками. Диагностика уровня организации личности в реальных ситуациях. Запись не публикуется.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-8" className="bg-white rounded-lg px-6 border-none">
              <AccordionTrigger className="text-left hover:no-underline py-6">
                <div className="flex items-start gap-4">
                  <span className="text-[#d3544f] font-bold text-xl">08</span>
                  <div>
                    <h4 className="font-semibold text-lg text-[#1d4356]">Практическое занятие 2: Супервизия случаев</h4>
                    <p className="text-sm text-[#111111] mt-1">25.03, среда</p>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pl-12 pt-2 pb-6">
                <p className="text-[#111111]">
                  Продолжение практического разбора случаев участников. Углубленная работа с диагностическими критериями. Запись не публикуется.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-9" className="bg-white rounded-lg px-6 border-none">
              <AccordionTrigger className="text-left hover:no-underline py-6">
                <div className="flex items-start gap-4">
                  <span className="text-[#d3544f] font-bold text-xl">09</span>
                  <div>
                    <h4 className="font-semibold text-lg text-[#1d4356]">Интеграция знаний и завершение курса</h4>
                    <p className="text-sm text-[#111111] mt-1">01.04, среда</p>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pl-12 pt-2 pb-6">
                <p className="text-[#111111]">
                  Систематизация пройденного материала. Ответы на вопросы участников. Обсуждение сложных диагностических ситуаций. Рекомендации для дальнейшей работы.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      <section id="pricing" className="py-16">
        <div className="container mx-auto px-4 max-w-7xl">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1d4356] mb-12">Стоимость обучения</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="bg-white border-2 border-[#d3544f]">
              <CardContent className="p-8">
                <div className="mb-4">
                  <Icon name="Tag" size={32} className="text-[#d3544f] mb-4" />
                  <h3 className="text-2xl font-bold text-[#1d4356]">Ранняя регистрация</h3>
                  <p className="text-sm text-[#111111] mt-2">Оплата до 25 января</p>
                </div>
                <div className="text-4xl font-bold text-[#d3544f] mb-6">15 000 ₽</div>
                <ul className="space-y-3 text-sm text-[#111111]">
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={16} className="flex-shrink-0 mt-1 text-[#d3544f]" />
                    <span>Экономия 5 000 ₽</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={16} className="flex-shrink-0 mt-1 text-[#d3544f]" />
                    <span>Доступ ко всем материалам</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={16} className="flex-shrink-0 mt-1 text-[#d3544f]" />
                    <span>Удостоверение 72 часа</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white">
              <CardContent className="p-8">
                <div className="mb-4">
                  <Icon name="Ticket" size={32} className="text-[#1d4356] mb-4" />
                  <h3 className="text-2xl font-bold text-[#1d4356]">Стандартная цена</h3>
                  <p className="text-sm text-[#111111] mt-2">Оплата до 1 февраля</p>
                </div>
                <div className="text-4xl font-bold text-[#1d4356] mb-6">20 000 ₽</div>
                <ul className="space-y-3 text-sm text-[#111111]">
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={16} className="flex-shrink-0 mt-1 text-[#1d4356]" />
                    <span>Полная программа курса</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={16} className="flex-shrink-0 mt-1 text-[#1d4356]" />
                    <span>Доступ ко всем материалам</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={16} className="flex-shrink-0 mt-1 text-[#1d4356]" />
                    <span>Удостоверение 72 часа</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="teacher" className="py-16">
        <div className="container mx-auto px-4 max-w-7xl">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1d4356] mb-12">Преподаватель</h2>
          <Card className="bg-white max-w-4xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-2">
                <span className="text-[#d3544f]">Екатерина Степанова</span>
              </h3>
              <p className="text-[#111111] mb-6">Практикующий психолог, супервизор, преподаватель</p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Icon name="Briefcase" size={20} className="text-[#1d4356] flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-[#1d4356]">Опыт работы</p>
                    <p className="text-[#111111]">Более 8 лет в практической психологии и психотерапии</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Icon name="Users" size={20} className="text-[#1d4356] flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-[#1d4356]">Направления работы</p>
                    <p className="text-[#111111]">Индивидуальная и семейная терапия с взрослыми и подростками</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Icon name="Award" size={20} className="text-[#1d4356] flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-[#1d4356]">Квалификация</p>
                    <p className="text-[#111111]">Супервизор РПА, преподаватель НОЦ СМТ</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="faq" className="py-16">
        <div className="container mx-auto px-4 max-w-7xl">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1d4356] mb-12">Часто задаваемые вопросы</h2>
          <Accordion type="single" collapsible className="space-y-4 max-w-4xl mx-auto">
            <AccordionItem value="faq-1" className="bg-white rounded-lg px-6 border-none">
              <AccordionTrigger className="text-left hover:no-underline text-[#1d4356] py-6">
                Какие требования к участникам курса?
              </AccordionTrigger>
              <AccordionContent className="pt-2 pb-6">
                <p className="text-[#111111]">
                  Курс предназначен для специалистов с высшим образованием по психологии или дополнительным профессиональным образованием в области психологии. Базовое знакомство с психоаналитической теорией приветствуется, но не обязательно.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="faq-2" className="bg-white rounded-lg px-6 border-none">
              <AccordionTrigger className="text-left hover:no-underline text-[#1d4356] py-6">
                Подходит ли курс начинающим специалистам?
              </AccordionTrigger>
              <AccordionContent className="pt-2 pb-6">
                <p className="text-[#111111]">
                  Да, курс подходит для психологов, которые начинают практику в психоаналитическом подходе. Материал структурирован от базовых концепций к практическому применению.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="faq-3" className="bg-white rounded-lg px-6 border-none">
              <AccordionTrigger className="text-left hover:no-underline text-[#1d4356] py-6">
                Как проходят занятия и доступны ли записи?
              </AccordionTrigger>
              <AccordionContent className="pt-2 pb-6">
                <p className="text-[#111111]">
                  Занятия проводятся онлайн в формате вебинаров с возможностью задавать вопросы в прямом эфире. Записи вебинаров публикуются в течение 2 дней и доступны 6 месяцев. Практические супервизионные занятия не записываются для соблюдения конфиденциальности.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="faq-4" className="bg-white rounded-lg px-6 border-none">
              <AccordionTrigger className="text-left hover:no-underline text-[#1d4356] py-6">
                Что если я пропущу занятие?
              </AccordionTrigger>
              <AccordionContent className="pt-2 pb-6">
                <p className="text-[#111111]">
                  Записи вебинаров доступны для просмотра в удобное время в течение 6 месяцев. Пропуск занятия не влияет на получение удостоверения при условии прохождения итогового тестирования.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="faq-5" className="bg-white rounded-lg px-6 border-none">
              <AccordionTrigger className="text-left hover:no-underline text-[#1d4356] py-6">
                Предусмотрены ли домашние задания?
              </AccordionTrigger>
              <AccordionContent className="pt-2 pb-6">
                <p className="text-[#111111]">
                  Да, в курсе предусмотрено 2 промежуточных домашних задания на отработку навыков диагностики. Каждое задание проверяется преподавателем с предоставлением обратной связи.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="faq-6" className="bg-white rounded-lg px-6 border-none">
              <AccordionTrigger className="text-left hover:no-underline text-[#1d4356] py-6">
                Можно ли представить свой случай на супервизии?
              </AccordionTrigger>
              <AccordionContent className="pt-2 pb-6">
                <p className="text-[#111111]">
                  Да, на двух практических занятиях участники могут представить свои клинические случаи для разбора в супервизионном формате. Это помогает отработать навыки диагностики на реальных примерах.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      <section id="signup" className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <Card className="bg-white">
            <CardContent className="p-8 md:p-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#1d4356] mb-4">Оставить заявку</h2>
              <p className="text-[#111111] mb-8">
                Заполните форму, и мы свяжемся с вами для уточнения деталей регистрации
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-[#1d4356]">ФИО</Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Иванов Иван Иванович"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="border-[#1d4356]/20 focus:border-[#1d4356]"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-[#1d4356]">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="example@mail.ru"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="border-[#1d4356]/20 focus:border-[#1d4356]"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-[#1d4356]">Телефон</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+7 (___) ___-__-__"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                      className="border-[#1d4356]/20 focus:border-[#1d4356]"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="status" className="text-[#1d4356]">Ваш статус</Label>
                  <Select value={formData.status} onValueChange={(value) => setFormData({ ...formData, status: value })}>
                    <SelectTrigger className="border-[#1d4356]/20 focus:border-[#1d4356]">
                      <SelectValue placeholder="Выберите статус" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="psychologist">Практикующий психолог</SelectItem>
                      <SelectItem value="psychotherapist">Психотерапевт</SelectItem>
                      <SelectItem value="student">Обучающийся психологии</SelectItem>
                      <SelectItem value="other">Другое</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-[#1d4356]">Комментарий (необязательно)</Label>
                  <Textarea
                    id="message"
                    placeholder="Расскажите о вашем опыте и интересах..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={4}
                    className="border-[#1d4356]/20 focus:border-[#1d4356]"
                  />
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button type="submit" size="lg" className="bg-[#1d4356] hover:bg-[#1d4356]/90 text-white">
                    Отправить заявку
                    <Icon name="Send" size={18} className="ml-2" />
                  </Button>
                  <Button type="button" size="lg" variant="outline" className="border-2 border-[#1d4356] text-[#1d4356] hover:bg-[#1d4356]/10">
                    Задать вопрос
                    <Icon name="MessageCircle" size={18} className="ml-2" />
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="py-8 bg-white">
        <div className="container mx-auto px-4 max-w-7xl text-center text-[#111111]">
          <p>© 2025 Курс повышения квалификации по психоаналитической диагностике</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
