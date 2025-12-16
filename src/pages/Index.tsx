import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
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
      <nav className="sticky top-0 z-50 bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex items-center justify-between h-16">
            <span className="font-bold text-[#1d4356]">Психоаналитическая диагностика</span>
            <div className="hidden md:flex gap-6">
              <button onClick={() => scrollToSection('audience')} className="text-sm text-[#1d4356] hover:opacity-70">Для кого</button>
              <button onClick={() => scrollToSection('format')} className="text-sm text-[#1d4356] hover:opacity-70">Формат</button>
              <button onClick={() => scrollToSection('schedule')} className="text-sm text-[#1d4356] hover:opacity-70">Расписание</button>
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

      <header className="bg-[#1d4356] text-white py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-6xl">
          <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
            Уровни психической организации личности<br />в концепции психоаналитической диагностики
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            Онлайн-курс повышения квалификации для психологов-консультантов и психотерапевтов
          </p>
          <div className="flex flex-col md:flex-row md:items-center gap-4 text-lg mb-8">
            <div className="flex items-center gap-2">
              <Icon name="Calendar" size={20} />
              <span>9 занятий, старт 03.02</span>
            </div>
            <div className="flex items-center gap-2">
              <Icon name="Clock" size={20} />
              <span>19:00–20:30</span>
            </div>
            <div className="flex items-center gap-2">
              <Icon name="GraduationCap" size={20} />
              <span>Удостоверение 72 часа</span>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button onClick={() => scrollToSection('signup')} size="lg" className="bg-white text-[#1d4356] hover:bg-white/90">
              Оставить заявку
            </Button>
            <Button onClick={() => scrollToSection('program')} size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10">
              Программа курса
            </Button>
          </div>
        </div>
      </header>

      <section id="audience" className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1d4356] mb-8">Для кого этот курс</h2>
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <Card className="bg-white">
              <CardHeader>
                <CardTitle className="flex items-start gap-3 text-[#1d4356]">
                  <Icon name="Users" size={24} className="flex-shrink-0 mt-1" />
                  <span>Психологи-консультанты и психотерапевты</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  С высшим образованием по психологии или ДПО, которые начинают практику в психоаналитическом подходе
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white">
              <CardHeader>
                <CardTitle className="flex items-start gap-3 text-[#1d4356]">
                  <Icon name="BookOpen" size={24} className="flex-shrink-0 mt-1" />
                  <span>Обучающиеся психологии</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Желающие разобраться в психоаналитической диагностике для последующего применения в практике
                </p>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-white">
            <CardHeader>
              <CardTitle className="text-[#1d4356]">Цели обучения</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
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

      <section id="format" className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1d4356] mb-8">Формат обучения</h2>
          <Card className="bg-white mb-6">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-semibold text-lg text-[#1d4356] mb-4">Занятия</h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <Icon name="Video" size={18} className="flex-shrink-0 mt-1" />
                      <span>7 вебинаров в прямом эфире</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Users" size={18} className="flex-shrink-0 mt-1" />
                      <span>2 практических супервизионных занятия</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Clock" size={18} className="flex-shrink-0 mt-1" />
                      <span>1 раз в неделю, 19:00–20:30</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-[#1d4356] mb-4">Материалы</h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <Icon name="FileText" size={18} className="flex-shrink-0 mt-1" />
                      <span>2 домашних задания с обратной связью</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="MessageSquare" size={18} className="flex-shrink-0 mt-1" />
                      <span>Чат участников</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="FileDown" size={18} className="flex-shrink-0 mt-1" />
                      <span>Презентации и конспекты</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="PlayCircle" size={18} className="flex-shrink-0 mt-1" />
                      <span>Записи вебинаров (кроме практики) доступны 6 месяцев</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="mt-6 pt-6 border-t">
                <p className="text-sm text-muted-foreground">
                  Итоговое тестирование до 15 апреля. По итогам выдается удостоверение о повышении квалификации на 72 часа.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="skills" className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1d4356] mb-8">Чему вы научитесь</h2>
          <Card className="bg-white">
            <CardContent className="p-8">
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Icon name="Target" size={20} className="text-[#1d4356] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-[#1d4356]">Точная диагностика уровня личностной организации</p>
                    <p className="text-sm text-muted-foreground mt-1">Определять невротический, пограничный, психотический и нарциссический уровни</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Icon name="Shield" size={20} className="text-[#1d4356] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-[#1d4356]">Снижение рисков в терапии</p>
                    <p className="text-sm text-muted-foreground mt-1">Предотвращать ретравматизацию и обрыв терапевтического процесса</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Icon name="Map" size={20} className="text-[#1d4356] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-[#1d4356]">Выбор терапевтической стратегии</p>
                    <p className="text-sm text-muted-foreground mt-1">Понимание тактики работы с первых сессий на основе диагностических критериев</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Icon name="Heart" size={20} className="text-[#1d4356] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-[#1d4356]">Экологичность терапевтического процесса</p>
                    <p className="text-sm text-muted-foreground mt-1">Работа с переносом и контрпереносом с учетом структуры личности клиента</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Icon name="Lightbulb" size={20} className="text-[#1d4356] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-[#1d4356]">Практические навыки</p>
                    <p className="text-sm text-muted-foreground mt-1">Разбор реальных случаев в супервизионном формате, отработка на практических примерах</p>
                  </div>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="schedule" className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1d4356] mb-4">Расписание занятий</h2>
          <p className="text-muted-foreground mb-8">Занятия проходят 1 раз в неделю с 19:00 до 20:30. Старт — 03.02</p>
          <Card className="bg-white">
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left p-4 font-semibold text-[#1d4356]">Занятие</th>
                      <th className="text-left p-4 font-semibold text-[#1d4356]">Дата</th>
                      <th className="text-left p-4 font-semibold text-[#1d4356]">День недели</th>
                      <th className="text-left p-4 font-semibold text-[#1d4356]">Время</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { n: 1, date: '03.02', day: 'Вторник' },
                      { n: 2, date: '10.02', day: 'Вторник' },
                      { n: 3, date: '18.02', day: 'Среда' },
                      { n: 4, date: '25.02', day: 'Среда' },
                      { n: 5, date: '04.03', day: 'Среда' },
                      { n: 6, date: '10.03', day: 'Вторник' },
                      { n: 7, date: '18.03', day: 'Среда' },
                      { n: 8, date: '25.03', day: 'Среда' },
                      { n: 9, date: '01.04', day: 'Среда' }
                    ].map((item) => (
                      <tr key={item.n} className="border-b last:border-0 hover:bg-muted/50">
                        <td className="p-4">{item.n}</td>
                        <td className="p-4 font-medium">{item.date}</td>
                        <td className="p-4 text-muted-foreground">{item.day}</td>
                        <td className="p-4 text-muted-foreground">19:00–20:30</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="program" className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1d4356] mb-8">Программа курса</h2>
          
          <Card className="bg-white mb-8">
            <CardHeader>
              <CardTitle className="text-[#1d4356]">Краткое содержание</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Невротический уровень организации личности</li>
                <li>• Пограничный уровень (2 занятия): концепция, критерии, отличие от ПРЛ</li>
                <li>• Психотический уровень организации</li>
                <li>• Нарциссическая личность</li>
                <li>• Психоаналитическая типология в литературе и кино</li>
                <li>• 2 практических супервизионных занятия с разбором случаев</li>
                <li>• Интеграция знаний и завершение курса</li>
              </ul>
            </CardContent>
          </Card>

          <h3 className="text-2xl font-semibold text-[#1d4356] mb-6">Подробная программа</h3>
          
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="bg-white border rounded-lg px-6">
              <AccordionTrigger className="text-left hover:no-underline">
                <div className="flex items-start gap-4">
                  <span className="text-[#d3544f] font-bold text-xl">01</span>
                  <div>
                    <h4 className="font-semibold text-lg text-[#1d4356]">Невротический уровень организации личности</h4>
                    <p className="text-sm text-muted-foreground mt-1">03.02, вторник, 19:00–20:30</p>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pl-12 pt-4">
                <p className="text-muted-foreground">
                  Классические представления о невротической организации. Диагностические признаки: защитные механизмы, качество объектных отношений, тревога и вина. Проявления в терапевтическом альянсе. Контрперенос и технические особенности работы.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="bg-white border rounded-lg px-6">
              <AccordionTrigger className="text-left hover:no-underline">
                <div className="flex items-start gap-4">
                  <span className="text-[#d3544f] font-bold text-xl">02</span>
                  <div>
                    <h4 className="font-semibold text-lg text-[#1d4356]">Пограничный уровень. Часть 1</h4>
                    <p className="text-sm text-muted-foreground mt-1">10.02, вторник, 19:00–20:30</p>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pl-12 pt-4">
                <p className="text-muted-foreground">
                  Концепция пограничной организации личности. Защиты и объектные отношения пограничного уровня. Диффузная идентичность. Расщепление, проективная идентификация, примитивная идеализация. Кейсы из практики.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="bg-white border rounded-lg px-6">
              <AccordionTrigger className="text-left hover:no-underline">
                <div className="flex items-start gap-4">
                  <span className="text-[#d3544f] font-bold text-xl">03</span>
                  <div>
                    <h4 className="font-semibold text-lg text-[#1d4356]">Пограничный уровень. Часть 2</h4>
                    <p className="text-sm text-muted-foreground mt-1">18.02, среда, 19:00–20:30</p>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pl-12 pt-4">
                <p className="text-muted-foreground">
                  Различие пограничной организации и ПРЛ. Координаты MISERY (Н. Мак-Вильямс). Ориентиры DSM-5-TR. Терапевтическая тактика и особенности работы. Управление переносом и контрпереносом. Примеры клинических случаев.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="bg-white border rounded-lg px-6">
              <AccordionTrigger className="text-left hover:no-underline">
                <div className="flex items-start gap-4">
                  <span className="text-[#d3544f] font-bold text-xl">04</span>
                  <div>
                    <h4 className="font-semibold text-lg text-[#1d4356]">Психотический уровень организации личности</h4>
                    <p className="text-sm text-muted-foreground mt-1">25.02, среда, 19:00–20:30</p>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pl-12 pt-4">
                <p className="text-muted-foreground">
                  Психотическая организация: критерии и феноменология. Нарушение тестирования реальности. Защиты психотического уровня. Диагностические признаки в терапевтическом контакте. Ограничения и возможности психотерапии. Междисциплинарное взаимодействие.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="bg-white border rounded-lg px-6">
              <AccordionTrigger className="text-left hover:no-underline">
                <div className="flex items-start gap-4">
                  <span className="text-[#d3544f] font-bold text-xl">05</span>
                  <div>
                    <h4 className="font-semibold text-lg text-[#1d4356]">Нарциссическая личность</h4>
                    <p className="text-sm text-muted-foreground mt-1">04.03, среда, 19:00–20:30</p>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pl-12 pt-4">
                <p className="text-muted-foreground">
                  Нарциссическая организация личности: структура и динамика. Грандиозность, зависть, стыд. Типы нарциссизма (явный и скрытый). Нарциссический перенос и контрперенос. Технические особенности работы и риски в терапии.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6" className="bg-white border rounded-lg px-6">
              <AccordionTrigger className="text-left hover:no-underline">
                <div className="flex items-start gap-4">
                  <span className="text-[#d3544f] font-bold text-xl">06</span>
                  <div>
                    <h4 className="font-semibold text-lg text-[#1d4356]">Психоаналитическая типология в литературе и кино</h4>
                    <p className="text-sm text-muted-foreground mt-1">10.03, вторник, 19:00–20:30</p>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pl-12 pt-4">
                <p className="text-muted-foreground">
                  Иллюстрация уровней личностной организации через анализ персонажей литературы и кино. Обсуждение защит, мотиваций, динамики отношений. Закрепление диагностических навыков на культурных примерах.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-7" className="bg-white border rounded-lg px-6">
              <AccordionTrigger className="text-left hover:no-underline">
                <div className="flex items-start gap-4">
                  <span className="text-[#d3544f] font-bold text-xl">07</span>
                  <div>
                    <h4 className="font-semibold text-lg text-[#1d4356]">Практическое занятие 1: Супервизия случаев</h4>
                    <p className="text-sm text-muted-foreground mt-1">18.03, среда, 19:00–20:30</p>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pl-12 pt-4">
                <p className="text-muted-foreground">
                  Разбор клинических случаев, представленных участниками. Диагностика уровня организации личности в реальных ситуациях. Обсуждение стратегий работы, переноса и контрпереноса. Запись не публикуется.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-8" className="bg-white border rounded-lg px-6">
              <AccordionTrigger className="text-left hover:no-underline">
                <div className="flex items-start gap-4">
                  <span className="text-[#d3544f] font-bold text-xl">08</span>
                  <div>
                    <h4 className="font-semibold text-lg text-[#1d4356]">Практическое занятие 2: Супервизия случаев</h4>
                    <p className="text-sm text-muted-foreground mt-1">25.03, среда, 19:00–20:30</p>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pl-12 pt-4">
                <p className="text-muted-foreground">
                  Продолжение практического разбора случаев участников. Углубленная работа с диагностическими критериями. Отработка навыков в супервизионном формате. Запись не публикуется.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-9" className="bg-white border rounded-lg px-6">
              <AccordionTrigger className="text-left hover:no-underline">
                <div className="flex items-start gap-4">
                  <span className="text-[#d3544f] font-bold text-xl">09</span>
                  <div>
                    <h4 className="font-semibold text-lg text-[#1d4356]">Интеграция знаний и завершение курса</h4>
                    <p className="text-sm text-muted-foreground mt-1">01.04, среда, 19:00–20:30</p>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pl-12 pt-4">
                <p className="text-muted-foreground">
                  Систематизация пройденного материала. Ответы на вопросы участников. Обсуждение сложных диагностических ситуаций. Рекомендации для дальнейшей работы и развития профессиональных навыков.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      <section id="pricing" className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1d4356] mb-4">Стоимость обучения</h2>
          <p className="text-muted-foreground mb-8">Стоимость зависит от даты оплаты</p>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl">
            <Card className="bg-white border-2 border-[#d3544f]">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-2xl text-[#1d4356]">Ранняя регистрация</CardTitle>
                    <CardDescription className="mt-2">Оплата до 25 января</CardDescription>
                  </div>
                  <Icon name="Tag" size={32} className="text-[#d3544f]" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-4xl font-bold text-[#d3544f] mb-4">15 000 ₽</div>
                <ul className="space-y-2 text-sm text-muted-foreground">
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
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-2xl text-[#1d4356]">Стандартная цена</CardTitle>
                    <CardDescription className="mt-2">Оплата до 1 февраля</CardDescription>
                  </div>
                  <Icon name="Ticket" size={32} className="text-[#1d4356]" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-4xl font-bold text-[#1d4356] mb-4">20 000 ₽</div>
                <ul className="space-y-2 text-sm text-muted-foreground">
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

          <Card className="bg-white mt-6 max-w-4xl">
            <CardContent className="p-6">
              <p className="text-sm text-muted-foreground">
                <Icon name="Award" size={18} className="inline mr-2" />
                По завершении курса и прохождении итогового тестирования (до 15 апреля) выдается удостоверение о повышении квалификации установленного образца на 72 часа.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="teacher" className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1d4356] mb-8">Преподаватель</h2>
          <Card className="bg-white max-w-4xl">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-2">
                <span className="text-[#d3544f]">Екатерина Степанова</span>
              </h3>
              <p className="text-muted-foreground mb-6">Практикующий психолог, супервизор, преподаватель</p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Icon name="Briefcase" size={20} className="text-[#1d4356] flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-[#1d4356]">Опыт работы</p>
                    <p className="text-muted-foreground">Более 8 лет в практической психологии и психотерапии</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Icon name="Users" size={20} className="text-[#1d4356] flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-[#1d4356]">Направления работы</p>
                    <p className="text-muted-foreground">Индивидуальная и семейная терапия с взрослыми и подростками</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Icon name="Award" size={20} className="text-[#1d4356] flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-[#1d4356]">Квалификация</p>
                    <p className="text-muted-foreground">Супервизор РПА, преподаватель НОЦ СМТ</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Icon name="Brain" size={20} className="text-[#1d4356] flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-[#1d4356]">Подход</p>
                    <p className="text-muted-foreground">Интегративный с опорой на психоаналитический метод</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="faq" className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1d4356] mb-8">Часто задаваемые вопросы</h2>
          <Accordion type="single" collapsible className="space-y-4 max-w-4xl">
            <AccordionItem value="faq-1" className="bg-white border rounded-lg px-6">
              <AccordionTrigger className="text-left hover:no-underline text-[#1d4356]">
                Какие требования к участникам курса?
              </AccordionTrigger>
              <AccordionContent className="pt-4">
                <p className="text-muted-foreground">
                  Курс предназначен для специалистов с высшим образованием по психологии или дополнительным профессиональным образованием в области психологии. Базовое знакомство с психоаналитической теорией приветствуется, но не обязательно.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="faq-2" className="bg-white border rounded-lg px-6">
              <AccordionTrigger className="text-left hover:no-underline text-[#1d4356]">
                Подходит ли курс начинающим специалистам?
              </AccordionTrigger>
              <AccordionContent className="pt-4">
                <p className="text-muted-foreground">
                  Да, курс подходит для психологов, которые начинают практику в психоаналитическом подходе. Материал структурирован от базовых концепций к практическому применению.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="faq-3" className="bg-white border rounded-lg px-6">
              <AccordionTrigger className="text-left hover:no-underline text-[#1d4356]">
                Как проходят занятия и доступны ли записи?
              </AccordionTrigger>
              <AccordionContent className="pt-4">
                <p className="text-muted-foreground">
                  Занятия проводятся онлайн в формате вебинаров с возможностью задавать вопросы в прямом эфире. Записи вебинаров публикуются в течение 2 дней и доступны 6 месяцев. Практические супервизионные занятия не записываются для соблюдения конфиденциальности.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="faq-4" className="bg-white border rounded-lg px-6">
              <AccordionTrigger className="text-left hover:no-underline text-[#1d4356]">
                Что если я пропущу занятие?
              </AccordionTrigger>
              <AccordionContent className="pt-4">
                <p className="text-muted-foreground">
                  Записи вебинаров доступны для просмотра в удобное время в течение 6 месяцев. Пропуск занятия не влияет на получение удостоверения при условии прохождения итогового тестирования.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="faq-5" className="bg-white border rounded-lg px-6">
              <AccordionTrigger className="text-left hover:no-underline text-[#1d4356]">
                Предусмотрены ли домашние задания?
              </AccordionTrigger>
              <AccordionContent className="pt-4">
                <p className="text-muted-foreground">
                  Да, в курсе предусмотрено 2 промежуточных домашних задания на отработку навыков диагностики. Каждое задание проверяется преподавателем с предоставлением обратной связи.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="faq-6" className="bg-white border rounded-lg px-6">
              <AccordionTrigger className="text-left hover:no-underline text-[#1d4356]">
                Как проходит итоговое тестирование?
              </AccordionTrigger>
              <AccordionContent className="pt-4">
                <p className="text-muted-foreground">
                  Итоговое тестирование проводится в онлайн-формате до 15 апреля. После успешного прохождения выдается удостоверение о повышении квалификации на 72 часа.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="faq-7" className="bg-white border rounded-lg px-6">
              <AccordionTrigger className="text-left hover:no-underline text-[#1d4356]">
                Что включает удостоверение на 72 часа?
              </AccordionTrigger>
              <AccordionContent className="pt-4">
                <p className="text-muted-foreground">
                  Удостоверение о повышении квалификации установленного образца на 72 часа выдается после прохождения курса и итогового тестирования. Документ соответствует требованиям законодательства РФ.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="faq-8" className="bg-white border rounded-lg px-6">
              <AccordionTrigger className="text-left hover:no-underline text-[#1d4356]">
                Можно ли представить свой случай на супервизии?
              </AccordionTrigger>
              <AccordionContent className="pt-4">
                <p className="text-muted-foreground">
                  Да, на двух практических занятиях участники могут представить свои клинические случаи для разбора в супервизионном формате. Это помогает отработать навыки диагностики на реальных примерах.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      <section id="signup" className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <Card className="bg-white">
            <CardContent className="p-8 md:p-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#1d4356] mb-4">Оставить заявку</h2>
              <p className="text-muted-foreground mb-8">
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

      <footer className="py-8 bg-white border-t">
        <div className="container mx-auto px-4 max-w-6xl text-center text-muted-foreground">
          <p>© 2025 Курс повышения квалификации по психоаналитической диагностике</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
