import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Index = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen bg-[rgb(var(--background))]">
      <header className="bg-[rgb(var(--primary))] text-[rgb(var(--primary-foreground))] py-12 md:py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
            Уровни психической организации личности<br />в концепции психоаналитической диагностики
          </h1>
          <div className="flex flex-col md:flex-row md:items-center gap-4 text-lg mt-6">
            <div className="flex items-center gap-2">
              <Icon name="Calendar" size={20} />
              <span>Старт: 14 января 2025</span>
            </div>
            <div className="flex items-center gap-2">
              <Icon name="Clock" size={20} />
              <span>9 занятий по 2 часа</span>
            </div>
            <div className="flex items-center gap-2">
              <Icon name="GraduationCap" size={20} />
              <span>72 часа / Удостоверение</span>
            </div>
          </div>
        </div>
      </header>

      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-[rgb(var(--primary))] mb-8">Для кого этот курс</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="hover-scale">
              <CardHeader>
                <CardTitle className="flex items-start gap-3">
                  <Icon name="Users" size={24} className="text-[rgb(var(--primary))] flex-shrink-0 mt-1" />
                  <span>Психологи-консультанты и психотерапевты</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  С высшим образованием по психологии или ДПО, которые начинают практику в психоаналитическом подходе
                </p>
              </CardContent>
            </Card>

            <Card className="hover-scale">
              <CardHeader>
                <CardTitle className="flex items-start gap-3">
                  <Icon name="BookOpen" size={24} className="text-[rgb(var(--primary))] flex-shrink-0 mt-1" />
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

          <div className="mt-12 bg-card p-8 rounded-lg border">
            <h3 className="text-2xl font-semibold text-[rgb(var(--primary))] mb-6">Что даст курс</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Icon name="CheckCircle2" size={20} className="text-[rgb(var(--primary))] flex-shrink-0 mt-1" />
                <span>Структурированные знания об уровнях личностной организации</span>
              </li>
              <li className="flex items-start gap-3">
                <Icon name="CheckCircle2" size={20} className="text-[rgb(var(--primary))] flex-shrink-0 mt-1" />
                <span>Понимание диагностических критериев психоаналитического подхода</span>
              </li>
              <li className="flex items-start gap-3">
                <Icon name="CheckCircle2" size={20} className="text-[rgb(var(--primary))] flex-shrink-0 mt-1" />
                <span>Умение определять уровень психического функционирования клиента (невротический, пограничный, психотический, нарциссический)</span>
              </li>
              <li className="flex items-start gap-3">
                <Icon name="CheckCircle2" size={20} className="text-[rgb(var(--primary))] flex-shrink-0 mt-1" />
                <span>Понимание стратегии работы уже на первых сессиях</span>
              </li>
              <li className="flex items-start gap-3">
                <Icon name="CheckCircle2" size={20} className="text-[rgb(var(--primary))] flex-shrink-0 mt-1" />
                <span>Укрепление навыков диагностики на практических примерах и в супервизионном формате</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-card">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-[rgb(var(--primary))] mb-4">Программа курса</h2>
          <p className="text-muted-foreground mb-8">9 онлайн-занятий: 7 вебинаров и 2 супервизионных практикума</p>
          
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="bg-background border rounded-lg px-6">
              <AccordionTrigger className="text-left hover:no-underline">
                <div className="flex items-start gap-4">
                  <span className="text-[rgb(var(--accent))] font-bold text-xl">01</span>
                  <div>
                    <h3 className="font-semibold text-lg">Невротический уровень организации личности</h3>
                    <p className="text-sm text-muted-foreground mt-1">14 января, 19:00–20:30</p>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pl-12 pt-4">
                <p className="text-muted-foreground">
                  Классические представления о невротической организации. Диагностические признаки: защитные механизмы, качество объектных отношений, тревога и вина. Проявления в терапевтическом альянсе. Контрперенос и технические особенности работы.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="bg-background border rounded-lg px-6">
              <AccordionTrigger className="text-left hover:no-underline">
                <div className="flex items-start gap-4">
                  <span className="text-[rgb(var(--accent))] font-bold text-xl">02</span>
                  <div>
                    <h3 className="font-semibold text-lg">Пограничный уровень. Часть 1</h3>
                    <p className="text-sm text-muted-foreground mt-1">21 января, 19:00–20:30</p>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pl-12 pt-4">
                <p className="text-muted-foreground">
                  Концепция пограничной организации личности. Защиты и объектные отношения пограничного уровня. Диффузная идентичность. Расщепление, проективная идентификация, примитивная идеализация. Кейсы из практики.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="bg-background border rounded-lg px-6">
              <AccordionTrigger className="text-left hover:no-underline">
                <div className="flex items-start gap-4">
                  <span className="text-[rgb(var(--accent))] font-bold text-xl">03</span>
                  <div>
                    <h3 className="font-semibold text-lg">Пограничный уровень. Часть 2</h3>
                    <p className="text-sm text-muted-foreground mt-1">28 января, 19:00–20:30</p>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pl-12 pt-4">
                <p className="text-muted-foreground">
                  Различие пограничной организации и ПРЛ. Координаты MISERY (Н. Мак-Вильямс). Ориентиры DSM-5-TR. Терапевтическая тактика и особенности работы. Управление переносом и контрпереносом. Примеры клинических случаев.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="bg-background border rounded-lg px-6">
              <AccordionTrigger className="text-left hover:no-underline">
                <div className="flex items-start gap-4">
                  <span className="text-[rgb(var(--accent))] font-bold text-xl">04</span>
                  <div>
                    <h3 className="font-semibold text-lg">Психотический уровень организации личности</h3>
                    <p className="text-sm text-muted-foreground mt-1">4 февраля, 19:00–20:30</p>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pl-12 pt-4">
                <p className="text-muted-foreground">
                  Психотическая организация: критерии и феноменология. Нарушение тестирования реальности. Защиты психотического уровня. Диагностические признаки в терапевтическом контакте. Ограничения и возможности психотерапии. Междисциплинарное взаимодействие.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="bg-background border rounded-lg px-6">
              <AccordionTrigger className="text-left hover:no-underline">
                <div className="flex items-start gap-4">
                  <span className="text-[rgb(var(--accent))] font-bold text-xl">05</span>
                  <div>
                    <h3 className="font-semibold text-lg">Нарциссическая личность</h3>
                    <p className="text-sm text-muted-foreground mt-1">11 февраля, 19:00–20:30</p>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pl-12 pt-4">
                <p className="text-muted-foreground">
                  Нарциссическая организация личности: структура и динамика. Грандиозность, зависть, стыд. Типы нарциссизма (явный и скрытый). Нарциссический перенос и контрперенос. Технические особенности работы и риски в терапии.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6" className="bg-background border rounded-lg px-6">
              <AccordionTrigger className="text-left hover:no-underline">
                <div className="flex items-start gap-4">
                  <span className="text-[rgb(var(--accent))] font-bold text-xl">06</span>
                  <div>
                    <h3 className="font-semibold text-lg">Психоаналитическая типология в литературе и кино</h3>
                    <p className="text-sm text-muted-foreground mt-1">18 февраля, 19:00–20:30</p>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pl-12 pt-4">
                <p className="text-muted-foreground">
                  Иллюстрация уровней личностной организации через анализ персонажей литературы и кино. Обсуждение защит, мотиваций, динамики отношений. Закрепление диагностических навыков на культурных примерах.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-7" className="bg-background border rounded-lg px-6">
              <AccordionTrigger className="text-left hover:no-underline">
                <div className="flex items-start gap-4">
                  <span className="text-[rgb(var(--accent))] font-bold text-xl">07</span>
                  <div>
                    <h3 className="font-semibold text-lg">Практическое занятие 1: Супервизия случаев</h3>
                    <p className="text-sm text-muted-foreground mt-1">25 февраля, 19:00–20:30</p>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pl-12 pt-4">
                <p className="text-muted-foreground">
                  Разбор клинических случаев, представленных участниками. Диагностика уровня организации личности в реальных ситуациях. Обсуждение стратегий работы, переноса и контрпереноса. Запись не публикуется.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-8" className="bg-background border rounded-lg px-6">
              <AccordionTrigger className="text-left hover:no-underline">
                <div className="flex items-start gap-4">
                  <span className="text-[rgb(var(--accent))] font-bold text-xl">08</span>
                  <div>
                    <h3 className="font-semibold text-lg">Практическое занятие 2: Супервизия случаев</h3>
                    <p className="text-sm text-muted-foreground mt-1">4 марта, 19:00–20:30</p>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pl-12 pt-4">
                <p className="text-muted-foreground">
                  Продолжение практического разбора случаев участников. Углубленная работа с диагностическими критериями. Отработка навыков в супервизионном формате. Запись не публикуется.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-9" className="bg-background border rounded-lg px-6">
              <AccordionTrigger className="text-left hover:no-underline">
                <div className="flex items-start gap-4">
                  <span className="text-[rgb(var(--accent))] font-bold text-xl">09</span>
                  <div>
                    <h3 className="font-semibold text-lg">Интеграция знаний и завершение курса</h3>
                    <p className="text-sm text-muted-foreground mt-1">11 марта, 19:00–20:30</p>
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

          <div className="mt-8 bg-muted p-6 rounded-lg">
            <h3 className="font-semibold text-lg mb-3">Дополнительно в курсе:</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-start gap-2">
                <Icon name="FileText" size={18} className="flex-shrink-0 mt-1" />
                <span>2 промежуточных домашних задания с обратной связью от преподавателя</span>
              </li>
              <li className="flex items-start gap-2">
                <Icon name="Video" size={18} className="flex-shrink-0 mt-1" />
                <span>Записи всех вебинаров (кроме практических занятий) доступны 6 месяцев</span>
              </li>
              <li className="flex items-start gap-2">
                <Icon name="FileDown" size={18} className="flex-shrink-0 mt-1" />
                <span>Презентации и конспекты материалов после каждого занятия</span>
              </li>
              <li className="flex items-start gap-2">
                <Icon name="MessageSquare" size={18} className="flex-shrink-0 mt-1" />
                <span>Чат участников для обсуждения и обмена опытом</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-[rgb(var(--primary))] mb-8">Стоимость обучения</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl">
            <Card className="border-2 border-[rgb(var(--accent))] hover-scale">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-2xl">Ранняя регистрация</CardTitle>
                    <CardDescription className="mt-2">Оплата до 25 января</CardDescription>
                  </div>
                  <Icon name="Tag" size={32} className="text-[rgb(var(--accent))]" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-4xl font-bold text-[rgb(var(--accent))] mb-4">15 000 ₽</div>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={16} className="flex-shrink-0 mt-1" />
                    <span>Экономия 5 000 ₽</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={16} className="flex-shrink-0 mt-1" />
                    <span>Доступ ко всем материалам</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={16} className="flex-shrink-0 mt-1" />
                    <span>Удостоверение 72 часа</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover-scale">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-2xl">Стандартная цена</CardTitle>
                    <CardDescription className="mt-2">Оплата до 1 февраля</CardDescription>
                  </div>
                  <Icon name="Ticket" size={32} className="text-[rgb(var(--primary))]" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-4xl font-bold text-[rgb(var(--primary))] mb-4">20 000 ₽</div>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={16} className="flex-shrink-0 mt-1" />
                    <span>Полная программа курса</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={16} className="flex-shrink-0 mt-1" />
                    <span>Доступ ко всем материалам</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={16} className="flex-shrink-0 mt-1" />
                    <span>Удостоверение 72 часа</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="mt-8 bg-muted p-6 rounded-lg max-w-4xl">
            <p className="text-sm text-muted-foreground">
              <Icon name="Award" size={18} className="inline mr-2" />
              По завершении курса и прохождении итогового тестирования (до 15 апреля) выдается удостоверение о повышении квалификации установленного образца на 72 часа.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-card">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-[rgb(var(--primary))] mb-8">Преподаватель</h2>
          <Card className="max-w-4xl">
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-2">
                    <span className="text-[rgb(var(--accent))]">Екатерина Степанова</span>
                  </h3>
                  <p className="text-muted-foreground mb-6">Практикующий психолог, супервизор, преподаватель</p>
                  
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Icon name="Briefcase" size={20} className="text-[rgb(var(--primary))] flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold">Опыт работы</p>
                        <p className="text-muted-foreground">Более 8 лет в практической психологии и психотерапии</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Icon name="Users" size={20} className="text-[rgb(var(--primary))] flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold">Направления работы</p>
                        <p className="text-muted-foreground">Индивидуальная и семейная терапия с взрослыми и подростками</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Icon name="Award" size={20} className="text-[rgb(var(--primary))] flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold">Квалификация</p>
                        <p className="text-muted-foreground">Супервизор РПА, преподаватель НОЦ СМТ</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Icon name="Brain" size={20} className="text-[rgb(var(--primary))] flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold">Подход</p>
                        <p className="text-muted-foreground">Интегративный с опорой на психоаналитический метод</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-[rgb(var(--primary))] mb-8">Часто задаваемые вопросы</h2>
          <Accordion type="single" collapsible className="space-y-4 max-w-4xl">
            <AccordionItem value="faq-1" className="bg-card border rounded-lg px-6">
              <AccordionTrigger className="text-left hover:no-underline">
                Какие требования к участникам курса?
              </AccordionTrigger>
              <AccordionContent className="pt-4">
                <p className="text-muted-foreground">
                  Курс предназначен для специалистов с высшим образованием по психологии или дополнительным профессиональным образованием в области психологии. Приветствуется базовое знакомство с психоаналитической теорией, но не обязательно.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="faq-2" className="bg-card border rounded-lg px-6">
              <AccordionTrigger className="text-left hover:no-underline">
                Как проходят занятия?
              </AccordionTrigger>
              <AccordionContent className="pt-4">
                <p className="text-muted-foreground">
                  Занятия проводятся онлайн в формате вебинаров с возможностью задавать вопросы в прямом эфире. Два занятия — практические супервизионные, где участники могут представить свои случаи для разбора. Все вебинары (кроме практических) записываются и остаются доступными 6 месяцев.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="faq-3" className="bg-card border rounded-lg px-6">
              <AccordionTrigger className="text-left hover:no-underline">
                Что если я не смогу присутствовать на занятии?
              </AccordionTrigger>
              <AccordionContent className="pt-4">
                <p className="text-muted-foreground">
                  Записи вебинаров публикуются в течение 2 дней после проведения и доступны для просмотра в удобное время в течение 6 месяцев. Исключение — практические супервизионные занятия, их записи не публикуются в целях конфиденциальности.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="faq-4" className="bg-card border rounded-lg px-6">
              <AccordionTrigger className="text-left hover:no-underline">
                Есть ли домашние задания?
              </AccordionTrigger>
              <AccordionContent className="pt-4">
                <p className="text-muted-foreground">
                  Да, предусмотрено 2 промежуточных домашних задания на отработку навыков диагностики. Каждое задание проверяется преподавателем с предоставлением обратной связи.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="faq-5" className="bg-card border rounded-lg px-6">
              <AccordionTrigger className="text-left hover:no-underline">
                Как получить удостоверение?
              </AccordionTrigger>
              <AccordionContent className="pt-4">
                <p className="text-muted-foreground">
                  Для получения удостоверения о повышении квалификации на 72 часа необходимо пройти итоговое тестирование до 15 апреля. Удостоверение выдается в соответствии с требованиями законодательства РФ.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="faq-6" className="bg-card border rounded-lg px-6">
              <AccordionTrigger className="text-left hover:no-underline">
                Можно ли оплатить курс частями?
              </AccordionTrigger>
              <AccordionContent className="pt-4">
                <p className="text-muted-foreground">
                  Указанная стоимость предполагает 100% оплату. Для уточнения возможности рассрочки свяжитесь с организаторами через форму заявки.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-[rgb(var(--primary))] text-[rgb(var(--primary-foreground))]">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Оставить заявку</h2>
          <p className="text-lg mb-8 opacity-90">
            Заполните форму, и мы свяжемся с вами для уточнения деталей регистрации
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-[rgb(var(--primary-foreground))]">Имя и фамилия</Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Иван Иванов"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-[rgb(var(--primary-foreground))]">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="example@mail.ru"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone" className="text-[rgb(var(--primary-foreground))]">Телефон</Label>
              <Input
                id="phone"
                type="tel"
                placeholder="+7 (___) ___-__-__"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                required
                className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="message" className="text-[rgb(var(--primary-foreground))]">Комментарий (необязательно)</Label>
              <Textarea
                id="message"
                placeholder="Расскажите о вашем опыте и интересах..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={4}
                className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
              />
            </div>

            <Button type="submit" size="lg" className="w-full md:w-auto bg-[rgb(var(--accent))] hover:bg-[rgb(var(--accent))]/90 text-white">
              Отправить заявку
              <Icon name="Send" size={18} className="ml-2" />
            </Button>
          </form>
        </div>
      </section>

      <footer className="py-8 bg-card border-t">
        <div className="container mx-auto px-4 max-w-6xl text-center text-muted-foreground">
          <p>© 2025 Курс повышения квалификации по психоаналитической диагностике</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
