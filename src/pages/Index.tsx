import { useState } from "react";
import Icon from "@/components/ui/icon";

const BRAND_NAME = "Orion";
const BRAND_SUB = "CONSULTING";

type IconName = string;

const HERO_IMAGE = "https://cdn.poehali.dev/projects/03a1501e-da0c-41bd-b575-cb2d7ab65c2d/files/b8773f25-61c2-491b-863b-819138c5b374.jpg";
const TEAM_IMAGE = "https://cdn.poehali.dev/projects/03a1501e-da0c-41bd-b575-cb2d7ab65c2d/files/04b7089d-0e89-4c77-a46d-4d3f9630cc05.jpg";

const ACCOUNTING_SERVICES = [
  { icon: "BookOpen", title: "Бухгалтерский аутсорсинг", desc: "Полное ведение бухгалтерского учёта и отчётности вашей компании под ключ. Актуально для ООО, АО и ИП любых систем налогообложения." },
  { icon: "RotateCcw", title: "Восстановление учёта", desc: "Восстанавливаем бухгалтерский учёт за любой период. Устраняем ошибки прошлых периодов, готовим корректировочные декларации." },
  { icon: "Calculator", title: "Налоговое консультирование", desc: "Оптимизация налоговой нагрузки, налоговое планирование, анализ рисков, сопровождение налоговых проверок." },
  { icon: "Users", title: "Кадровый учёт и зарплата", desc: "Ведение кадрового делопроизводства, расчёт заработной платы, начисление взносов, сдача отчётности в фонды." },
  { icon: "FileText", title: "Сдача отчётности", desc: "Своевременная подготовка и сдача всех видов отчётности: НДС, налог на прибыль, 6-НДФЛ, РСВ, статистика." },
];

const LEGAL_SERVICES = [
  { icon: "Briefcase", title: "Корпоративное право", desc: "Юридическое сопровождение бизнеса: корпоративные договоры, уставные документы, протоколы, корпоративные споры." },
  { icon: "Scale", title: "Судебное представительство", desc: "Представление интересов в арбитражных судах, судах общей юрисдикции. Налоговые споры и административные дела." },
  { icon: "Building", title: "Регистрация и ликвидация", desc: "Регистрация ООО, ИП, АО. Реорганизация, ликвидация компаний. Внесение изменений в ЕГРЮЛ/ЕГРИП." },
  { icon: "Handshake", title: "Сопровождение сделок", desc: "Юридическое сопровождение M&A сделок, сделок с недвижимостью, due diligence, структурирование." },
  { icon: "FileSearch", title: "Правовая экспертиза", desc: "Экспертиза и разработка договоров, претензионная работа, правовые заключения для бизнеса." },
];

const CASES = [
  {
    tag: "Налоговые споры",
    title: "Оспаривание доначислений на 12 млн руб.",
    problem: "Налоговая инспекция доначислила НДС и налог на прибыль по итогам выездной проверки.",
    action: "Подготовили возражения на акт, собрали доказательную базу, представляли интересы в ФНС и арбитражном суде.",
    result: "Решение о доначислении отменено полностью. Экономия клиента — 12 300 000 руб.",
    resultTag: "Экономия 12,3 млн ₽",
  },
  {
    tag: "Бухгалтерский аутсорсинг",
    title: "Восстановление учёта за 3 года",
    problem: "Производственная компания обратилась с полностью утраченной первичной документацией за 3 года.",
    action: "Восстановили первичку через контрагентов, банки, перенесли остатки, сформировали корректные декларации.",
    result: "Учёт восстановлен в полном объёме. Риск блокировки счёта устранён.",
    resultTag: "0 штрафов",
  },
  {
    tag: "Корпоративное право",
    title: "Структурирование сделки M&A",
    problem: "Продажа доли в ООО с несколькими активами и скрытыми долгами.",
    action: "Провели due diligence, разработали схему сделки, подготовили документацию, сопровождали до регистрации.",
    result: "Сделка закрыта в срок 45 дней. Клиент защищён от рисков скрытых обязательств.",
    resultTag: "Сделка за 45 дней",
  },
];

const BLOG_POSTS = [
  {
    date: "15 мая 2026",
    tag: "Налоги",
    title: "НДС в 2026 году: ключевые изменения для малого бизнеса",
    excerpt: "С 1 января 2026 года вступили в силу изменения в порядке применения УСН с НДС. Разбираем, кого это коснётся и как подготовиться.",
  },
  {
    date: "02 мая 2026",
    tag: "Трудовое право",
    title: "Дистанционные сотрудники: как правильно оформить в 2026",
    excerpt: "Кадровое оформление удалённых работников по-прежнему вызывает вопросы. Рассказываем про актуальные требования ТК РФ.",
  },
  {
    date: "18 апреля 2026",
    tag: "Корпоративное право",
    title: "Ответственность директора за долги компании: судебная практика",
    excerpt: "Субсидиарная ответственность участников и директоров ООО становится всё более распространённой практикой. Как защититься.",
  },
];

const FAQ = [
  { q: "Сколько стоит бухгалтерский аутсорсинг?", a: "Стоимость зависит от системы налогообложения, количества операций и сотрудников. Минимальная стоимость для ИП без сотрудников на УСН — от 3 500 руб./мес. Для ООО — от 8 000 руб./мес. Точную стоимость рассчитаем бесплатно." },
  { q: "Как быстро вы можете приступить к работе?", a: "В большинстве случаев — в течение 1-2 рабочих дней после подписания договора. При срочной необходимости — в день обращения." },
  { q: "Работаете ли вы с компаниями из других регионов?", a: "Да, мы работаем с клиентами по всей России. Все документы передаются через защищённый личный кабинет или ЭДО. Встречи проводим по видеосвязи." },
  { q: "Что входит в юридическое сопровождение бизнеса?", a: "Ежемесячная проверка договоров, консультации по правовым вопросам, подготовка корпоративных документов, представление интересов в государственных органах." },
];

const TARIFFS = [
  {
    name: "Старт",
    subtitle: "ИП на УСН",
    price: "от 3 500 ₽",
    period: "в месяц",
    features: [
      "Ведение книги доходов и расходов",
      "Декларация по УСН",
      "Консультации — 2 ч/мес",
      "Сдача отчётности",
    ],
    highlight: false,
  },
  {
    name: "Бизнес",
    subtitle: "ООО на УСН / ОСН",
    price: "от 12 000 ₽",
    period: "в месяц",
    features: [
      "Полное ведение бухучёта",
      "Все виды отчётности",
      "Расчёт зарплаты до 5 сотрудников",
      "Консультации — 5 ч/мес",
      "Налоговая оптимизация",
    ],
    highlight: true,
  },
  {
    name: "Комплекс",
    subtitle: "Бухгалтерия + Юристы",
    price: "от 25 000 ₽",
    period: "в месяц",
    features: [
      "Всё из тарифа Бизнес",
      "Юридическое сопровождение",
      "Экспертиза договоров",
      "Кадровое делопроизводство",
      "Приоритетный ответ",
    ],
    highlight: false,
  },
];

const TEAM = [
  { name: "Андрей Волков", role: "Управляющий партнёр, юрист", exp: "18 лет опыта", spec: "Корпоративное право, налоговые споры" },
  { name: "Елена Морозова", role: "Главный бухгалтер", exp: "15 лет опыта", spec: "Налоговый учёт, аутсорсинг, ОСН/УСН" },
  { name: "Дмитрий Козлов", role: "Юрист по сделкам", exp: "10 лет опыта", spec: "M&A, корпоративное право, недвижимость" },
  { name: "Ольга Смирнова", role: "Налоговый консультант", exp: "12 лет опыта", spec: "Налоговое планирование, ВЭД, контролируемые сделки" },
];

function Calculator() {
  const [type, setType] = useState<"ip" | "ooo">("ooo");
  const [tax, setTax] = useState<"usn" | "osn">("usn");
  const [employees, setEmployees] = useState(3);
  const [operations, setOperations] = useState<"low" | "mid" | "high">("mid");

  const base = type === "ip" ? 3500 : 8000;
  const taxAdd = tax === "osn" ? 4000 : 0;
  const empAdd = Math.max(0, employees - (type === "ip" ? 0 : 2)) * 800;
  const opsAdd = operations === "mid" ? 2000 : operations === "high" ? 5000 : 0;
  const total = base + taxAdd + empAdd + opsAdd;

  return (
    <div className="bg-white p-8 border border-gray-100 shadow-sm">
      <div className="mb-6">
        <p className="section-label mb-2">Тип организации</p>
        <div className="flex gap-2">
          {(["ooo", "ip"] as const).map((t) => (
            <button key={t} onClick={() => setType(t)} className={`tab-btn ${type === t ? "active" : ""}`}>
              {t === "ooo" ? "ООО / АО" : "ИП"}
            </button>
          ))}
        </div>
      </div>
      <div className="mb-6">
        <p className="section-label mb-2">Система налогообложения</p>
        <div className="flex gap-2">
          {(["usn", "osn"] as const).map((t) => (
            <button key={t} onClick={() => setTax(t)} className={`tab-btn ${tax === t ? "active" : ""}`}>
              {t === "usn" ? "УСН" : "ОСН (НДС)"}
            </button>
          ))}
        </div>
      </div>
      <div className="mb-6">
        <p className="section-label mb-2">
          Количество сотрудников:{" "}
          <span className="text-navy font-semibold text-sm normal-case tracking-normal" style={{ color: "var(--navy)" }}>
            {employees}
          </span>
        </p>
        <input
          type="range" min={0} max={30} value={employees}
          onChange={e => setEmployees(Number(e.target.value))}
          className="w-full cursor-pointer"
          style={{ accentColor: "var(--gold)" }}
        />
        <div className="flex justify-between text-xs text-gray-400 mt-1 font-body">
          <span>0</span><span>15</span><span>30</span>
        </div>
      </div>
      <div className="mb-8">
        <p className="section-label mb-2">Объём операций в месяц</p>
        <div className="flex gap-2 flex-wrap">
          {(["low", "mid", "high"] as const).map((o) => (
            <button key={o} onClick={() => setOperations(o)} className={`tab-btn ${operations === o ? "active" : ""}`}>
              {o === "low" ? "До 50" : o === "mid" ? "50–200" : "200+"}
            </button>
          ))}
        </div>
      </div>
      <div className="p-6 flex items-center justify-between" style={{ backgroundColor: "var(--navy)" }}>
        <div>
          <p className="text-gray-400 text-xs font-body uppercase tracking-widest mb-1">Стоимость в месяц</p>
          <p className="font-display text-4xl font-light text-white">от {total.toLocaleString("ru-RU")} ₽</p>
        </div>
        <button className="btn-primary">Заказать</button>
      </div>
    </div>
  );
}

function BookingModal({ onClose }: { onClose: () => void }) {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({ name: "", phone: "", company: "", service: "", date: "", time: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="modal-overlay" onClick={(e) => e.target === e.currentTarget && onClose()}>
      <div className="modal-box">
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 transition-colors">
          <Icon name="X" size={20} />
        </button>
        {sent ? (
          <div className="text-center py-8">
            <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: "var(--gold-pale)" }}>
              <Icon name="CheckCircle" size={32} style={{ color: "var(--gold)" }} />
            </div>
            <h3 className="font-display text-2xl mb-2" style={{ color: "var(--navy)" }}>Заявка принята!</h3>
            <p className="text-gray-500 font-body text-sm mb-6">Наш специалист свяжется с вами в течение 30 минут для подтверждения времени.</p>
            <button onClick={onClose} className="btn-primary">Закрыть</button>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="mb-1">
              <span className="section-label">Запись на консультацию</span>
            </div>
            <h3 className="font-display text-2xl mb-6" style={{ color: "var(--navy)" }}>
              {step === 1 ? "Контактные данные" : "Выберите время"}
            </h3>
            {step === 1 ? (
              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-body font-medium text-gray-500 uppercase tracking-widest mb-1">Ваше имя *</label>
                  <input required className="form-input" placeholder="Иван Петров" value={form.name}
                    onChange={e => setForm({ ...form, name: e.target.value })} />
                </div>
                <div>
                  <label className="block text-xs font-body font-medium text-gray-500 uppercase tracking-widest mb-1">Телефон *</label>
                  <input required className="form-input" placeholder="+7 (___) ___-__-__" value={form.phone}
                    onChange={e => setForm({ ...form, phone: e.target.value })} />
                </div>
                <div>
                  <label className="block text-xs font-body font-medium text-gray-500 uppercase tracking-widest mb-1">Компания</label>
                  <input className="form-input" placeholder="ООО «Ваша компания»" value={form.company}
                    onChange={e => setForm({ ...form, company: e.target.value })} />
                </div>
                <div>
                  <label className="block text-xs font-body font-medium text-gray-500 uppercase tracking-widest mb-1">Тип консультации</label>
                  <select className="form-input" value={form.service} onChange={e => setForm({ ...form, service: e.target.value })}>
                    <option value="">Выберите направление</option>
                    <option>Бухгалтерский аутсорсинг</option>
                    <option>Налоговое консультирование</option>
                    <option>Юридические услуги</option>
                    <option>Регистрация / ликвидация</option>
                    <option>Другое</option>
                  </select>
                </div>
                <button type="button" onClick={() => { if (form.name && form.phone) setStep(2); }}
                  className="btn-primary w-full text-center mt-2">Далее →</button>
              </div>
            ) : (
              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-body font-medium text-gray-500 uppercase tracking-widest mb-1">Удобная дата *</label>
                  <input required type="date" className="form-input" value={form.date}
                    onChange={e => setForm({ ...form, date: e.target.value })}
                    min={new Date().toISOString().split("T")[0]} />
                </div>
                <div>
                  <label className="block text-xs font-body font-medium text-gray-500 uppercase tracking-widest mb-2">Удобное время</label>
                  <div className="grid grid-cols-3 gap-2">
                    {["10:00", "11:00", "12:00", "14:00", "15:00", "16:00", "17:00"].map(t => (
                      <button key={t} type="button" onClick={() => setForm({ ...form, time: t })}
                        className="py-2 text-sm font-body border transition-colors"
                        style={form.time === t
                          ? { backgroundColor: "var(--navy)", color: "var(--gold)", borderColor: "var(--navy)" }
                          : { borderColor: "#e5e7eb", color: "#4b5563" }}>
                        {t}
                      </button>
                    ))}
                  </div>
                </div>
                <div className="flex gap-3 mt-4">
                  <button type="button" onClick={() => setStep(1)} className="btn-outline-dark flex-1 text-center">← Назад</button>
                  <button type="submit" className="btn-primary flex-1 text-center">Записаться</button>
                </div>
              </div>
            )}
          </form>
        )}
      </div>
    </div>
  );
}

export default function Index() {
  const [activeTab, setActiveTab] = useState<"accounting" | "legal">("accounting");
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [showBooking, setShowBooking] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  const navLinks = [
    { href: "#services", label: "Услуги" },
    { href: "#about", label: "О компании" },
    { href: "#cases", label: "Кейсы" },
    { href: "#blog", label: "Блог" },
    { href: "#pricing", label: "Цены" },
    { href: "#contacts", label: "Контакты" },
  ];

  return (
    <div className="font-body" style={{ backgroundColor: "var(--cream)" }}>
      {showBooking && <BookingModal onClose={() => setShowBooking(false)} />}

      {/* HEADER */}
      <header className="fixed top-0 left-0 right-0 z-50" style={{ backgroundColor: "var(--navy)" }}>
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#" className="flex items-center gap-3">
            <div className="w-8 h-8 flex items-center justify-center border" style={{ borderColor: "var(--gold)" }}>
              <span className="font-display text-sm font-bold" style={{ color: "var(--gold)" }}>O</span>
            </div>
            <div>
              <span className="font-display text-lg font-semibold text-white leading-none">{BRAND_NAME}</span>
              <span className="block font-body tracking-widest" style={{ color: "var(--gold)", fontSize: "0.6rem" }}>{BRAND_SUB}</span>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map(l => (
              <a key={l.href} href={l.href} className="nav-link">{l.label}</a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <button onClick={() => setShowBooking(true)} className="hidden md:block btn-primary" style={{ padding: "0.6rem 1.25rem", fontSize: "0.75rem" }}>
              Записаться
            </button>
            <button onClick={() => setMobileMenu(!mobileMenu)} className="md:hidden text-white">
              <Icon name={mobileMenu ? "X" : "Menu"} size={22} />
            </button>
          </div>
        </div>

        {mobileMenu && (
          <div className="md:hidden px-6 pb-6 pt-2" style={{ backgroundColor: "var(--navy-dark)" }}>
            {navLinks.map(l => (
              <a key={l.href} href={l.href} onClick={() => setMobileMenu(false)}
                className="block py-3 border-b font-body text-sm text-white"
                style={{ borderColor: "rgba(200,168,90,0.2)" }}>{l.label}</a>
            ))}
            <button onClick={() => { setShowBooking(true); setMobileMenu(false); }} className="btn-primary w-full text-center mt-4">
              Записаться на консультацию
            </button>
          </div>
        )}
      </header>

      {/* HERO */}
      <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
        <div className="absolute inset-0">
          <img src={HERO_IMAGE} alt="Офис" className="w-full h-full object-cover" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(10,21,38,0.93) 0%, rgba(15,31,61,0.82) 50%, rgba(10,21,38,0.72) 100%)" }} />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-24">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="divider-gold" />
              <span className="section-label">Консалтинговое агентство с 2024 года</span>
            </div>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-light leading-tight mb-6 text-white">
              Юридическая и<br />
              <em style={{ color: "var(--gold)" }}>бухгалтерская</em><br />
              защита бизнеса
            </h1>
            <p className="font-body text-lg text-gray-300 mb-10 leading-relaxed max-w-xl">
              Берём на себя всё — от налогов и отчётности до судебных споров и корпоративных сделок. Работаем с ООО, АО и ИП по всей России.
            </p>
            <div className="flex flex-wrap gap-4">
              <button onClick={() => setShowBooking(true)} className="btn-primary">Получить консультацию</button>
              <a href="#pricing" className="btn-outline">Рассчитать стоимость</a>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 z-10" style={{ backgroundColor: "rgba(10,21,38,0.88)", backdropFilter: "blur(8px)" }}>
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4">
              {[
                { num: "2", label: "года на рынке" },
                { num: "200+", label: "клиентов" },
                { num: "98%", label: "дел выиграно" },
                { num: "3 млрд ₽", label: "сохранено клиентам" },
              ].map((s, i) => (
                <div key={i} className="stat-item py-6">
                  <p className="font-display text-3xl font-semibold mb-1" style={{ color: "var(--gold)" }}>{s.num}</p>
                  <p className="font-body text-xs text-gray-400 uppercase tracking-widest">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* УСЛУГИ */}
      <section id="services" className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="divider-gold" />
            <span className="section-label">Наши услуги</span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <h2 className="font-display text-4xl md:text-5xl font-light" style={{ color: "var(--navy)" }}>
              Полный спектр<br /><em>правовой и финансовой</em> защиты
            </h2>
            <div className="flex gap-2">
              <button onClick={() => setActiveTab("accounting")} className={`tab-btn ${activeTab === "accounting" ? "active" : ""}`}>Бухгалтерские</button>
              <button onClick={() => setActiveTab("legal")} className={`tab-btn ${activeTab === "legal" ? "active" : ""}`}>Юридические</button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {(activeTab === "accounting" ? ACCOUNTING_SERVICES : LEGAL_SERVICES).map((s, i) => (
              <div key={i} className="service-card">
                <div className="w-10 h-10 flex items-center justify-center mb-4" style={{ backgroundColor: "var(--gold-pale)" }}>
                  <Icon name={s.icon as IconName} size={20} style={{ color: "var(--gold)" }} />
                </div>
                <h3 className="font-display text-xl font-semibold mb-3" style={{ color: "var(--navy)" }}>{s.title}</h3>
                <p className="font-body text-sm text-gray-500 leading-relaxed mb-4">{s.desc}</p>
                <button onClick={() => setShowBooking(true)} className="text-xs font-body font-medium uppercase tracking-widest flex items-center gap-2 transition-colors" style={{ color: "var(--gold)" }}>
                  Узнать подробнее <Icon name="ArrowRight" size={14} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* О КОМПАНИИ */}
      <section id="about" className="py-24" style={{ backgroundColor: "var(--navy)" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="divider-gold" />
                <span className="section-label">О компании</span>
              </div>
              <h2 className="font-display text-4xl md:text-5xl font-light text-white mb-6">
                2 года защищаем<br />
                <em style={{ color: "var(--gold)" }}>интересы бизнеса</em>
              </h2>
              <p className="font-body text-gray-300 leading-relaxed mb-6">
                Орион Консалтинг основан в 2024 году. Мы объединили под одной крышей опытных бухгалтеров, налоговых консультантов и юристов — чтобы вы получали комплексную защиту без необходимости обращаться в несколько мест.
              </p>
              <p className="font-body text-gray-300 leading-relaxed mb-8">
                Наша миссия — освободить предпринимателей от административной нагрузки и правовых рисков, чтобы они могли сосредоточиться на развитии бизнеса.
              </p>
              <div className="space-y-2">
                {[
                  { icon: "Award", text: "Аттестат профбухгалтера ИПБ России" },
                  { icon: "Shield", text: "Адвокатское бюро №1 г. Москвы" },
                  { icon: "Star", text: "Рейтинг Право.ru-300" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <Icon name={item.icon as IconName} size={16} style={{ color: "var(--gold)" }} />
                    <span className="text-sm font-body text-gray-300">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img src={TEAM_IMAGE} alt="Команда" className="w-full object-cover" style={{ height: "420px" }} />
              <div className="absolute -bottom-6 -left-6 p-6" style={{ backgroundColor: "var(--gold)" }}>
                <p className="font-display text-4xl font-bold" style={{ color: "var(--navy-dark)" }}>200+</p>
                <p className="font-body text-xs font-semibold uppercase tracking-widest" style={{ color: "var(--navy)" }}>довольных клиентов</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-display text-3xl text-white mb-10 text-center">
              Наша <em style={{ color: "var(--gold)" }}>команда</em>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {TEAM.map((t, i) => (
                <div key={i} className="text-center p-6 border" style={{ borderColor: "rgba(200,168,90,0.2)" }}>
                  <div className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center" style={{ backgroundColor: "var(--navy-light)" }}>
                    <Icon name="User" size={28} style={{ color: "var(--gold)" }} />
                  </div>
                  <h4 className="font-display text-lg font-semibold text-white mb-1">{t.name}</h4>
                  <p className="font-body text-xs" style={{ color: "var(--gold)" }}>{t.role}</p>
                  <p className="font-body text-xs text-gray-400 mt-1">{t.exp}</p>
                  <p className="font-body text-xs text-gray-500 mt-2 leading-relaxed">{t.spec}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-20">
            <h3 className="font-display text-3xl text-white mb-10 text-center">
              Отзывы <em style={{ color: "var(--gold)" }}>клиентов</em>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { text: "Работаем с ЛексБух уже 5 лет. Никогда не было проблем с налоговой — все сдаётся в срок, всегда на связи. Рекомендую всем предпринимателям.", author: "Михаил Т.", company: "ООО «Технострой»" },
                { text: "Помогли выиграть дело против налоговой на 8 млн рублей. Работали чётко, без лишних слов — только результат. Спасибо команде юристов!", author: "Светлана К.", company: "ИП Кузнецова" },
                { text: "Передали весь бухгалтерский учёт на аутсорсинг полгода назад. Экономия — очевидна, уровень профессионализма — высокий. Очень довольны.", author: "Роман Д.", company: "ООО «Медиагрупп»" },
              ].map((r, i) => (
                <div key={i} className="p-6 border" style={{ borderColor: "rgba(200,168,90,0.2)", backgroundColor: "rgba(255,255,255,0.04)" }}>
                  <div className="flex mb-3">
                    {[...Array(5)].map((_, j) => <Icon key={j} name="Star" size={14} style={{ color: "var(--gold)" }} />)}
                  </div>
                  <p className="font-body text-sm text-gray-300 leading-relaxed mb-4 italic">«{r.text}»</p>
                  <div>
                    <p className="font-body text-sm font-semibold text-white">{r.author}</p>
                    <p className="font-body text-xs text-gray-500">{r.company}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* КЕЙСЫ */}
      <section id="cases" className="py-24" style={{ backgroundColor: "var(--cream)" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="divider-gold" />
            <span className="section-label">Наши кейсы</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-light mb-12" style={{ color: "var(--navy)" }}>
            Реальные задачи —<br /><em>измеримые результаты</em>
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {CASES.map((c, i) => (
              <div key={i} className="case-card">
                <span className="section-label block mb-4">{c.tag}</span>
                <h3 className="font-display text-xl font-semibold mb-6" style={{ color: "var(--navy)" }}>{c.title}</h3>
                <div className="space-y-4 mb-6">
                  {[
                    { label: "Задача", text: c.problem, icon: "AlertCircle" },
                    { label: "Решение", text: c.action, icon: "Zap" },
                    { label: "Результат", text: c.result, icon: "TrendingUp" },
                  ].map((item, j) => (
                    <div key={j} className="flex gap-3">
                      <div className="flex-shrink-0 mt-0.5">
                        <Icon name={item.icon as IconName} size={14} style={{ color: "var(--gold)" }} />
                      </div>
                      <div>
                        <p className="text-xs font-body font-semibold uppercase tracking-widest text-gray-400 mb-0.5">{item.label}</p>
                        <p className="font-body text-sm text-gray-600 leading-relaxed">{item.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="inline-block px-4 py-2 font-body text-xs font-bold uppercase tracking-widest" style={{ backgroundColor: "var(--gold-pale)", color: "var(--navy)" }}>
                  {c.resultTag}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* БЛОГ */}
      <section id="blog" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="divider-gold" />
                <span className="section-label">Экспертный блог</span>
              </div>
              <h2 className="font-display text-4xl md:text-5xl font-light" style={{ color: "var(--navy)" }}>
                Актуальные<br /><em>изменения и разборы</em>
              </h2>
            </div>
            <button className="btn-outline-dark self-start md:self-auto">Все статьи</button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {BLOG_POSTS.map((p, i) => (
              <div key={i} className="blog-card cursor-pointer">
                <div className="h-2" style={{ backgroundColor: "var(--gold)" }} />
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="section-label">{p.tag}</span>
                    <span className="font-body text-xs text-gray-400">{p.date}</span>
                  </div>
                  <h3 className="font-display text-xl font-semibold mb-3 leading-snug" style={{ color: "var(--navy)" }}>{p.title}</h3>
                  <p className="font-body text-sm text-gray-500 leading-relaxed mb-4">{p.excerpt}</p>
                  <span className="text-xs font-body font-semibold uppercase tracking-widest flex items-center gap-1" style={{ color: "var(--gold)" }}>
                    Читать далее <Icon name="ArrowRight" size={12} />
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="max-w-3xl mx-auto">
            <h3 className="font-display text-3xl font-light text-center mb-8" style={{ color: "var(--navy)" }}>
              Часто задаваемые <em>вопросы</em>
            </h3>
            {FAQ.map((f, i) => (
              <div key={i} className="faq-item">
                <button onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between py-5 text-left gap-4">
                  <span className="font-body font-medium text-sm" style={{ color: "var(--navy)" }}>{f.q}</span>
                  <Icon name={openFaq === i ? "Minus" : "Plus"} size={16} style={{ color: "var(--gold)", flexShrink: 0 } as React.CSSProperties} />
                </button>
                {openFaq === i && (
                  <div className="pb-5">
                    <p className="font-body text-sm text-gray-500 leading-relaxed">{f.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ЦЕНЫ */}
      <section id="pricing" className="py-24" style={{ backgroundColor: "var(--cream)" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="divider-gold" />
            <span className="section-label">Тарифы и цены</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-light mb-12" style={{ color: "var(--navy)" }}>
            Прозрачная<br /><em>стоимость услуг</em>
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-20">
            {TARIFFS.map((t, i) => (
              <div key={i} className="relative" style={{
                backgroundColor: t.highlight ? "var(--navy)" : "white",
                border: t.highlight ? "none" : "1px solid rgba(220,215,205,0.6)",
              }}>
                {t.highlight && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 text-xs font-body font-bold uppercase tracking-widest whitespace-nowrap" style={{ backgroundColor: "var(--gold)", color: "var(--navy)" }}>
                    Популярный
                  </div>
                )}
                <div className="p-8">
                  <span className="section-label block mb-1">{t.subtitle}</span>
                  <h3 className="font-display text-2xl font-semibold mb-4" style={{ color: t.highlight ? "white" : "var(--navy)" }}>{t.name}</h3>
                  <div className="mb-6">
                    <span className="font-display text-4xl font-light" style={{ color: t.highlight ? "var(--gold)" : "var(--navy)" }}>{t.price}</span>
                    <span className="font-body text-sm ml-2" style={{ color: t.highlight ? "rgba(255,255,255,0.6)" : "var(--text-muted)" }}>{t.period}</span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {t.features.map((f, j) => (
                      <li key={j} className="flex items-start gap-2">
                        <Icon name="Check" size={14} className="mt-0.5 flex-shrink-0" style={{ color: "var(--gold)" }} />
                        <span className="font-body text-sm" style={{ color: t.highlight ? "rgba(255,255,255,0.8)" : "var(--text-muted)" }}>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <button onClick={() => setShowBooking(true)} className={t.highlight ? "btn-primary w-full text-center" : "btn-outline-dark w-full text-center"}>
                    Выбрать тариф
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="divider-gold" />
                <span className="section-label">Онлайн-калькулятор</span>
              </div>
              <h3 className="font-display text-3xl font-light mb-4" style={{ color: "var(--navy)" }}>
                Рассчитайте стоимость<br /><em>за 1 минуту</em>
              </h3>
              <p className="font-body text-sm text-gray-500 leading-relaxed">
                Укажите параметры вашего бизнеса и получите предварительную оценку. Точная стоимость рассчитывается после консультации и аудита.
              </p>
            </div>
            <Calculator />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20" style={{ backgroundColor: "var(--navy-dark)" }}>
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-display text-4xl md:text-5xl font-light text-white mb-4">
            Готовы защитить<br />
            <em style={{ color: "var(--gold)" }}>ваш бизнес?</em>
          </h2>
          <p className="font-body text-gray-400 mb-8">Первая консультация — бесплатно. Ответим на все вопросы и предложим оптимальное решение.</p>
          <button onClick={() => setShowBooking(true)} className="btn-primary" style={{ padding: "1rem 2.5rem", fontSize: "0.9rem" }}>
            Записаться на бесплатную консультацию
          </button>
        </div>
      </section>

      {/* КОНТАКТЫ */}
      <section id="contacts" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="divider-gold" />
            <span className="section-label">Контакты</span>
          </div>
          <h2 className="font-display text-4xl font-light mb-12" style={{ color: "var(--navy)" }}>
            Свяжитесь с <em>нами</em>
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {[
              { icon: "MapPin", title: "Адрес", lines: ["г. Москва, ул. Ильинка 4,", "БЦ «Капитал», офис 502"] },
              { icon: "Phone", title: "Телефон", lines: ["+7 (495) 123-45-67", "+7 (800) 000-00-00 (бесплатно)"] },
              { icon: "Mail", title: "Email", lines: ["info@lexbukh.ru", "legal@lexbukh.ru"] },
            ].map((c, i) => (
              <div key={i} className="flex gap-4">
                <div className="w-12 h-12 flex items-center justify-center flex-shrink-0" style={{ backgroundColor: "var(--gold-pale)" }}>
                  <Icon name={c.icon as IconName} size={20} style={{ color: "var(--gold)" }} />
                </div>
                <div>
                  <p className="section-label mb-2">{c.title}</p>
                  {c.lines.map((l, j) => <p key={j} className="font-body text-sm text-gray-600">{l}</p>)}
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h3 className="font-display text-2xl font-light mb-6" style={{ color: "var(--navy)" }}>Оставьте заявку</h3>
              <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); setShowBooking(true); }}>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-body font-medium text-gray-500 uppercase tracking-widest mb-1">Имя</label>
                    <input className="form-input" placeholder="Ваше имя" />
                  </div>
                  <div>
                    <label className="block text-xs font-body font-medium text-gray-500 uppercase tracking-widest mb-1">Телефон</label>
                    <input className="form-input" placeholder="+7 (___) ___-__-__" />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-body font-medium text-gray-500 uppercase tracking-widest mb-1">Ваш вопрос</label>
                  <textarea className="form-input" rows={4} placeholder="Опишите задачу или вопрос..." />
                </div>
                <button type="submit" className="btn-primary">Отправить заявку</button>
              </form>
            </div>
            <div className="flex items-center justify-center min-h-64 relative overflow-hidden" style={{ backgroundColor: "#f3f4f6" }}>
              <div className="text-center relative z-10">
                <Icon name="MapPin" size={40} style={{ color: "var(--gold)", margin: "0 auto 12px" }} />
                <p className="font-body text-sm text-gray-400">г. Москва, ул. Ильинка 4</p>
                <p className="font-body text-xs text-gray-300">БЦ «Капитал», офис 502</p>
              </div>
              <div className="absolute inset-0 opacity-10"
                style={{ backgroundImage: "radial-gradient(circle at 1px 1px, rgba(0,0,0,0.3) 1px, transparent 0)", backgroundSize: "24px 24px" }} />
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ backgroundColor: "var(--navy-dark)" }}>
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 flex items-center justify-center border" style={{ borderColor: "var(--gold)" }}>
                  <span className="font-display text-sm font-bold" style={{ color: "var(--gold)" }}>O</span>
                </div>
                <div>
                  <span className="font-display text-lg font-semibold text-white">{BRAND_NAME}</span>
                  <span className="block font-body tracking-widest" style={{ color: "var(--gold)", fontSize: "0.6rem" }}>{BRAND_SUB}</span>
                </div>
              </div>
              <p className="font-body text-xs text-gray-500 leading-relaxed">Профессиональные бухгалтерские и юридические услуги для бизнеса с 2024 года.</p>
            </div>
            {[
              { title: "Услуги", links: ["Бухгалтерский аутсорсинг", "Налоговое консультирование", "Корпоративное право", "Судебное представительство", "Регистрация компаний"] },
              { title: "Компания", links: ["О нас", "Команда", "Кейсы", "Блог", "Контакты"] },
              { title: "Контакты", links: ["+7 (495) 123-45-67", "info@lexbukh.ru", "г. Москва, ул. Ильинка 4", "Пн–Пт: 9:00–19:00"] },
            ].map((col, i) => (
              <div key={i}>
                <p className="section-label mb-4">{col.title}</p>
                <ul className="space-y-2">
                  {col.links.map((l, j) => (
                    <li key={j}><span className="font-body text-xs text-gray-400 cursor-pointer hover:text-gray-200 transition-colors">{l}</span></li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="border-t flex flex-col md:flex-row items-center justify-between gap-4 pt-6" style={{ borderColor: "rgba(200,168,90,0.15)" }}>
            <p className="font-body text-xs text-gray-600">© 2024–2026 Orion Consulting. Все права защищены.</p>
            <p className="font-body text-xs text-gray-600">ООО «Orion Consulting» · ИНН 7701234567 · ОГРН 1087701234567</p>
          </div>
        </div>
      </footer>
    </div>
  );
}