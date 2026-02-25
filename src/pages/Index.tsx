import { useState } from "react";
import Icon from "@/components/ui/icon";

const vacancies = [
  {
    title: "Разнорабочий / Грузчик",
    pay: "от 2 500 ₽ / смена",
    schedule: "Гибкий график",
    location: "Москва и МО",
    tags: ["Без опыта", "Еженедельная оплата", "Спецодежда"],
  },
  {
    title: "Подсобный рабочий на склад",
    pay: "от 3 000 ₽ / смена",
    schedule: "5/2 или 2/2",
    location: "Москва и МО",
    tags: ["Официальное оформление", "Питание", "Спецодежда"],
  },
  {
    title: "Разнорабочий на стройку",
    pay: "от 3 500 ₽ / смена",
    schedule: "Вахта / ежедневно",
    location: "Москва и МО",
    tags: ["Без опыта", "Проживание", "Питание"],
  },
];

const steps = [
  {
    num: "01",
    title: "Оставляете заявку",
    desc: "Заполните форму — это займёт 2 минуты. Укажите желаемый тип работы и контактные данные.",
  },
  {
    num: "02",
    title: "Звонок менеджера",
    desc: "Наш менеджер свяжется с вами в течение 30 минут и уточнит детали по вакансии.",
  },
  {
    num: "03",
    title: "Выход на объект",
    desc: "Вы приступаете к работе уже в день обращения. Первая оплата — в конце смены.",
  },
];

const benefits = [
  { icon: "Banknote", text: "Оплата от 2 500 ₽/смена" },
  { icon: "Clock", text: "Выход на работу в день обращения" },
  { icon: "ShieldCheck", text: "Официальное оформление" },
  { icon: "Utensils", text: "Бесплатное питание на объекте" },
  { icon: "Shirt", text: "Спецодежда от компании" },
  { icon: "MapPin", text: "Объекты по всей Москве и МО" },
];

export default function Index() {
  const [form, setForm] = useState({ name: "", phone: "", vacancy: "", comment: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="font-golos bg-white min-h-screen text-[#1a1a2e] overflow-x-hidden">

      {/* HEADER */}
      <header className="bg-[#0f1b3d] text-white px-6 py-4 flex items-center justify-between sticky top-0 z-50 shadow-lg">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-[#e85d04] rounded-sm flex items-center justify-center">
            <Icon name="Users" size={16} className="text-white" />
          </div>
          <span className="font-oswald text-lg font-semibold tracking-wide">МосОблПерсонал</span>
        </div>
        <a
          href="#apply"
          className="bg-[#e85d04] hover:bg-[#c94d03] text-white text-sm font-semibold px-5 py-2 rounded transition-all duration-200 hover:shadow-lg hover:shadow-orange-900/30"
        >
          Оставить заявку
        </a>
      </header>

      {/* HERO */}
      <section className="relative bg-[#0f1b3d] text-white overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg, transparent, transparent 40px, rgba(255,255,255,0.05) 40px, rgba(255,255,255,0.05) 41px), repeating-linear-gradient(90deg, transparent, transparent 40px, rgba(255,255,255,0.05) 40px, rgba(255,255,255,0.05) 41px)",
          }}
        />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#e85d04] opacity-10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/4" />

        <div className="relative max-w-6xl mx-auto px-6 py-20 md:py-28">
          <div className="max-w-2xl animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 text-sm mb-6">
              <span className="w-2 h-2 bg-[#e85d04] rounded-full animate-pulse" />
              Набор открыт · Вакансии в Москве и МО
            </div>
            <h1 className="font-oswald text-5xl md:text-6xl font-bold leading-tight mb-6">
              Работа для тех,<br />
              <span className="text-[#e85d04]">кто хочет зарабатывать</span><br />
              уже сегодня
            </h1>
            <p className="text-lg text-white/70 mb-8 leading-relaxed">
              Ежедневная занятость, еженедельная оплата, официальное оформление.
              Выходите на объект в день обращения — без опыта и долгих собеседований.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#apply"
                className="bg-[#e85d04] hover:bg-[#c94d03] text-white font-semibold px-8 py-4 rounded text-center transition-all duration-200 hover:shadow-xl hover:shadow-orange-900/40 hover:-translate-y-0.5"
              >
                Откликнуться на вакансию
              </a>
              <a
                href="#vacancies"
                className="border border-white/30 hover:border-white/60 text-white font-semibold px-8 py-4 rounded text-center transition-all duration-200"
              >
                Смотреть вакансии
              </a>
            </div>
          </div>
        </div>

        {/* Stats bar */}
        <div className="relative border-t border-white/10 bg-white/5">
          <div className="max-w-6xl mx-auto px-6 py-6 grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { val: "500+", label: "рабочих трудоустроено" },
              { val: "30%", label: "ниже рыночных цен" },
              { val: "В день", label: "выход на объект" },
              { val: "8 лет", label: "на рынке труда" },
            ].map((s) => (
              <div key={s.val} className="text-center">
                <div className="font-oswald text-3xl font-bold text-[#e85d04]">{s.val}</div>
                <div className="text-white/60 text-sm mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="bg-[#f7f7fb] py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-oswald text-3xl font-bold text-center mb-10 text-[#0f1b3d]">
            Почему выбирают нас
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {benefits.map((b) => (
              <div
                key={b.icon}
                className="bg-white rounded-lg p-5 flex items-center gap-4 shadow-sm border border-gray-100 hover:shadow-md hover:border-[#e85d04]/20 transition-all duration-200"
              >
                <div className="w-10 h-10 bg-[#0f1b3d]/5 rounded-lg flex items-center justify-center shrink-0">
                  <Icon name={b.icon as any} size={20} className="text-[#e85d04]" />
                </div>
                <span className="text-sm font-medium text-[#1a1a2e] leading-snug">{b.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VACANCIES */}
      <section id="vacancies" className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-end justify-between mb-10">
            <h2 className="font-oswald text-3xl font-bold text-[#0f1b3d]">
              Открытые вакансии
            </h2>
            <span className="text-sm text-[#e85d04] font-medium">{vacancies.length} вакансии</span>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {vacancies.map((v, i) => (
              <div
                key={i}
                className="border border-gray-200 rounded-xl p-6 hover:border-[#e85d04]/40 hover:shadow-lg transition-all duration-200 group"
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="font-oswald text-xl font-semibold text-[#0f1b3d] group-hover:text-[#e85d04] transition-colors duration-200 leading-tight">
                    {v.title}
                  </h3>
                </div>
                <div className="text-2xl font-oswald font-bold text-[#e85d04] mb-4">{v.pay}</div>
                <div className="space-y-2 mb-5 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <Icon name="Clock" size={14} className="text-gray-400" />
                    {v.schedule}
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="MapPin" size={14} className="text-gray-400" />
                    {v.location}
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mb-5">
                  {v.tags.map((tag) => (
                    <span key={tag} className="bg-[#f0f4ff] text-[#0f1b3d] text-xs px-3 py-1 rounded-full font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href="#apply"
                  className="block text-center bg-[#0f1b3d] hover:bg-[#e85d04] text-white text-sm font-semibold py-3 rounded-lg transition-all duration-200"
                >
                  Откликнуться
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STEPS */}
      <section className="bg-[#0f1b3d] text-white py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-oswald text-3xl font-bold text-center mb-12">
            Как начать работать
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((s, i) => (
              <div key={i} className="relative">
                {i < steps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-px bg-white/10 -ml-4 z-0" />
                )}
                <div className="relative z-10">
                  <div className="font-oswald text-5xl font-bold text-[#e85d04] opacity-80 mb-4">{s.num}</div>
                  <h3 className="font-oswald text-xl font-semibold mb-3">{s.title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* APPLY FORM */}
      <section id="apply" className="py-16 px-6 bg-[#f7f7fb]">
        <div className="max-w-xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="font-oswald text-3xl font-bold text-[#0f1b3d] mb-3">
              Оставить заявку
            </h2>
            <p className="text-gray-500 text-sm">Свяжемся с вами в течение 30 минут</p>
          </div>

          {submitted ? (
            <div className="bg-white rounded-2xl p-10 text-center shadow-md border border-gray-100">
              <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-5">
                <Icon name="CheckCircle" size={32} className="text-green-500" />
              </div>
              <h3 className="font-oswald text-2xl font-bold text-[#0f1b3d] mb-2">Заявка отправлена!</h3>
              <p className="text-gray-500 text-sm">Наш менеджер свяжется с вами в ближайшее время</p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="bg-white rounded-2xl p-8 shadow-md border border-gray-100 space-y-4"
            >
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Ваше имя</label>
                <input
                  type="text"
                  required
                  placeholder="Иван Иванов"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#0f1b3d] transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Номер телефона</label>
                <input
                  type="tel"
                  required
                  placeholder="+7 (___) ___-__-__"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#0f1b3d] transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Интересующая вакансия</label>
                <select
                  value={form.vacancy}
                  onChange={(e) => setForm({ ...form, vacancy: e.target.value })}
                  className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#0f1b3d] transition-colors text-gray-600"
                >
                  <option value="">Выберите вакансию</option>
                  {vacancies.map((v) => (
                    <option key={v.title} value={v.title}>{v.title}</option>
                  ))}
                  <option value="Любая">Любая подходящая</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Комментарий (необязательно)</label>
                <textarea
                  rows={3}
                  placeholder="Опыт работы, пожелания по графику..."
                  value={form.comment}
                  onChange={(e) => setForm({ ...form, comment: e.target.value })}
                  className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#0f1b3d] transition-colors resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-[#e85d04] hover:bg-[#c94d03] text-white font-semibold py-4 rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-orange-900/30 hover:-translate-y-0.5 font-oswald text-lg tracking-wide"
              >
                Отправить заявку
              </button>
              <p className="text-xs text-center text-gray-400">
                Нажимая кнопку, вы соглашаетесь с обработкой персональных данных
              </p>
            </form>
          )}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#0d1528] text-white/50 py-8 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 bg-[#e85d04] rounded-sm flex items-center justify-center">
              <Icon name="Users" size={14} className="text-white" />
            </div>
            <span className="font-oswald text-white/80 font-semibold">МосОблПерсонал</span>
          </div>
          <div>© 2024 МосОблПерсонал. Разнорабочие в Москве и МО</div>
          <a href="https://mos-personal.ru" className="hover:text-white transition-colors">mos-personal.ru</a>
        </div>
      </footer>
    </div>
  );
}
