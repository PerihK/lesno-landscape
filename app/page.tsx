import Contact from './garden-brief';
import {Navigation,Collection} from './experience';
import GardenStudy from './garden-study';
const Arrow = () => <span aria-hidden="true">↗</span>;
export default function Home() {
return <>
<a className="skip-link" href="#main">Перейти к содержимому</a>
<header className="header wrap">
<a href="#" className="brand" aria-label="Лесно — на главную">лесно<span className="brand-dot">®</span></a>
<span className="brand-caption">ЛАНДШАФТНОЕ<br/>БЮРО</span>
<Navigation/>
</header>
<main id="main">
<section className="hero wrap" aria-labelledby="hero-title">
<div className="eyebrow hero-eyebrow"><span><i/> ЕКАТЕРИНБУРГ И УРАЛ</span><span>ПРИРОДА. АРХИТЕКТУРА. ВЫ.</span></div>
<div className="hero-heading"><h1 id="hero-title">Место, где<br/>вы <em>ближе к себе.</em></h1><div className="hero-intro"><p>Создаём сады, в которых хочется<br className="desktop-break"/> замедлиться. И остаться.</p><a href="#garden-study" className="round-link"><span>Исследовать лесной сад</span><span className="round-arrow">↓</span></a></div></div>
<div className="hero-picture"><picture><source media="(max-width: 640px)" srcSet="/images/forest-mobile.webp"/><img src="/images/forest-1600.webp" alt="Лесной сад с каменной дорожкой, злаками и деревянным павильоном среди сосен" width="1536" height="1024" fetchPriority="high"/></picture><div className="photo-shade"/><span className="image-marker">ЛЕСНОЙ САД / КОНЦЕПЦИЯ</span><div className="hero-caption"><div><span className="eyebrow">ЧАСТНЫЙ САД · КОНЦЕПЦИЯ</span><h2>Тишина соснового леса</h2></div><a href="#garden-study" className="white-circle" aria-label="Исследовать лесной сад"><Arrow/></a></div><span className="vertical-caption">ЛАНДШАФТ, КОТОРЫЙ ЧУВСТВУЕШЬ</span></div>
<div className="hero-foot"><div className="place-identity"><span className="place-city">Екатеринбург · восточный склон Урала</span><span className="place-coordinates" aria-label="Екатеринбург: 56 градусов 50 минут северной широты, 60 градусов 36 минут восточной долготы">56°50′ С. Ш. &nbsp; / &nbsp; 60°36′ В. Д.</span></div><span className="place-note">Отсюда — наш взгляд на сад.<br/>Лес, камень и смена сезонов.</span></div>
</section>
<GardenStudy/>
<section id="approach" className="approach wrap section-space"><div className="section-label"><span className="tiny-dot"/> 01 / ФИЛОСОФИЯ</div><div className="approach-content"><h2>Хороший сад не спорит<br/>с природой.<br/><em>Он продолжает её.</em></h2><div className="approach-bottom"><p>Шелест злаков. Тёплый камень под ногами. Свет, пробивающийся сквозь сосны. Для нас ландшафт начинается с ощущений — и с вашего ритма жизни.</p><p>Мы соединяем чистые архитектурные линии с живой природой Урала. Сохраняем характер участка и находим место для простых, важных вещей.</p></div><div className="principles"><span>01 &nbsp; Чувствовать место</span><span>02 &nbsp; Беречь природу</span><span>03 &nbsp; Думать о будущем</span></div></div></section>
<Collection/>
<section id="process" className="process wrap section-space"><div className="process-heading"><div><div className="section-label"><span className="tiny-dot"/> 03 / ОТ ЗАМЫСЛА К САДУ</div><h2>Сначала — место.<br/><em>Потом — линии.</em></h2></div><p className="process-intro">Четыре последовательных шага.<br/>Каждый оставляет ясный результат.</p></div><ol className="process-sequence">{[['01','Прочитать место','Слушаем вас. Изучаем свет, рельеф, почву и деревья. Находим то, что важно сохранить.','Карта участка и ваши сценарии'],['02','Найти образ','Соединяем ваши привычки с характером места. Выбираем композицию, материалы и растения.','Концепция и ключевые виды'],['03','Продумать детали','Переводим образ в точные решения: отметки высот, посадки, дорожки, воду и свет.','Рабочий проект'],['04','Дать саду жизнь','Сопровождаем реализацию замысла. Помогаем саду прижиться и меняем уход вместе с сезонами.','Воплощение и рекомендации']].map(([number,title,description,result]) => <li className="process-stage" key={number}><span className="stage-number">{number}<span aria-hidden="true"> /</span></span><h3>{title}</h3><p>{description}</p><div className="stage-result"><span>РЕЗУЛЬТАТ</span>{result}</div></li>)}</ol></section>
<Contact/>
<footer className="footer"><div className="wrap"><div className="footer-top"><span className="eyebrow">ЛАНДШАФТНОЕ БЮРО · ЕКАТЕРИНБУРГ</span><a href="#projects">Вернуться к садам <Arrow/></a></div><div className="footer-wordmark" aria-hidden="true">лесно<span>®</span></div><div className="footer-bottom"><span>© Лесно, 2026</span><span>Концепция ландшафтного бюро</span><a href="#">Наверх ↑</a></div></div></footer>
</main></>;
}
