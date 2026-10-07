'use client';
import { useState } from 'react';

const places = [
  { name: 'Дом и терраса', title: 'Начать день на воздухе', copy: 'Терраса продолжает гостиную. Между домом и садом нет отдельной парадной зоны: деревянный настил сразу переходит в спокойную прогулочную петлю.', material: 'Дерево · тёплая поверхность у дома', point: [335, 390] },
  { name: 'Прогулочная петля', title: 'Один маршрут. Разные ощущения.', copy: 'Дорожка проходит по краю посадок, открывает лес и возвращает к дому. Широкие повороты помогают воспринимать пространство постепенно, без прямого коридора.', material: 'Мелкий гравий · мягкий рисунок пути', point: [285, 220] },
  { name: 'Тихая поляна', title: 'Оставить место пустым', copy: 'Открытая поляна — пауза между плотными посадками. Здесь можно поставить кресло, расстелить плед или просто смотреть на высокие сосны.', material: 'Луговое покрытие · свободный центр', point: [380, 185] },
  { name: 'Лесная граница', title: 'Сохранить то, что уже выросло', copy: 'Сосны задают масштаб сада. Новые посадки располагаются группами по краю, а не ровным бордюром. Рабочее решение уточняется после обследования деревьев и участка.', material: 'Сосны и подлесок · естественная граница', point: [155, 125] },
];
const seasons = [
  { name: 'Весна', accent: '#b3c091', text: 'Первые светлые побеги на фоне вечнозелёной структуры. После схода снега особенно хорошо читается рисунок дорожки.', detail: 'Структура / пробуждение / молодой лист' },
  { name: 'Лето', accent: '#6e8d5f', text: 'Самая плотная зелень. Тень сосен, открытая поляна и светлая дорожка образуют три разных пространства для прогулки.', detail: 'Тень / объём / прохлада леса' },
  { name: 'Осень', accent: '#b59a61', text: 'Злаки становятся золотистыми. Не все соцветия убираются сразу: их графика продолжает работать вместе с древесными стволами.', detail: 'Золото / фактура / сухие соцветия' },
  { name: 'Зима', accent: '#bac7c0', text: 'Цвет уступает место силуэту. Сосны, древесные группы и изгиб маршрута сохраняют композицию даже под снегом.', detail: 'Силуэт / хвоя / линия маршрута' },
];
export default function GardenStudy() {
  const [place, setPlace] = useState(0);
  const [season, setSeason] = useState(1);
  const current = places[place];
  return <section id="garden-study" className="garden-study section-space" aria-labelledby="garden-title">
    <div className="wrap">
      <div className="garden-heading"><div><div className="section-label">ПОДРОБНЕЕ / ЛЕСНОЙ САД</div><h2 id="garden-title">Тишина,<br/><em>продуманная в деталях.</em></h2></div><div className="garden-passport"><span>ЭСКИЗНАЯ КОНЦЕПЦИЯ</span><strong>16 соток</strong><p>Сосновый участок · один дом<br/>Четыре пространства · четыре сезона</p></div></div>
      <div className="garden-atlas">
        <div className="garden-map"><div className="atlas-label"><span>ПЛАН / ВИД СВЕРХУ</span><span>СЕВЕР ↑</span></div>
          <svg viewBox="0 0 600 500" role="img" aria-label={`Схема лесного сада. Выбрано: ${current.name}. Сезон: ${seasons[season].name}`}>
            <defs><pattern id="garden-grid" width="25" height="25" patternUnits="userSpaceOnUse"><path d="M25 0H0V25" fill="none" stroke="#81927c" strokeWidth=".4" opacity=".3"/></pattern><pattern id="garden-gravel" width="7" height="7" patternUnits="userSpaceOnUse"><circle cx="2" cy="2" r=".7" fill="#8d917e"/></pattern></defs>
            <rect x="30" y="25" width="540" height="450" fill="url(#garden-grid)"/>
            <path d="M95 62L509 62L526 373L444 436L89 436Z" fill="#e4e9da" stroke="#81927c" strokeWidth="1"/>
            <path d="M139 101Q232 76 276 119T433 108Q499 147 466 231T434 355L312 367Q266 302 198 283T125 170Z" fill={seasons[season].accent} className="garden-season-fill" opacity=".35"/>
            <path d="M325 372C278 340 235 313 218 258S174 193 226 151S360 106 421 142S465 248 432 298S397 332 400 373" fill="none" stroke="#f7f5eb" strokeWidth="29"/>
            <path d="M325 372C278 340 235 313 218 258S174 193 226 151S360 106 421 142S465 248 432 298S397 332 400 373" fill="none" stroke="url(#garden-gravel)" strokeWidth="27"/>
            {[ [138,108,33],[180,85,25],[117,194,27],[475,113,27],[489,263,30],[132,320,26],[465,323,25],[254,88,22] ].map(([x,y,r], i)=><g key={i}><circle cx={x} cy={y} r={r} fill={seasons[season].accent} stroke="#536b4b" strokeWidth=".8" className="garden-season-fill"/><circle cx={x} cy={y} r={r*.64} fill="none" stroke="#536b4b" strokeWidth=".5"/><path d={`M${x-5} ${y}h10M${x} ${y-5}v10`} stroke="#536b4b" strokeWidth=".8"/></g>)}
            <rect x="284" y="351" width="140" height="45" fill="#b6a387"/>
            {Array.from({length:14},(_,i)=><path key={i} d={`M${289+i*10} 351V396`} stroke="#8d7e68" strokeWidth=".6"/>)}
            <rect x="284" y="396" width="140" height="56" fill="#f7f8f4" stroke="#576452"/>
            <text x="353" y="430" textAnchor="middle" fill="#53634d" fontSize="11" letterSpacing="3">ДОМ</text>
            <path d="M315 452v23" stroke="#9b9f90" strokeWidth="15"/>
            {places.map((p,i)=><g key={i} role="button" tabIndex={0} aria-label={'0'+(i+1)+' '+p.name} aria-pressed={place===i} onClick={()=>setPlace(i)} onKeyDown={e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();setPlace(i);}}} className={place===i?'map-marker active':'map-marker'}><circle cx={p.point[0]} cy={p.point[1]} r={place===i?20:15} fill={place===i?'#243d2b':'#f7f8f4'} stroke="#243d2b"/><text x={p.point[0]} y={p.point[1]+4} textAnchor="middle" fill={place===i?'#fff':'#243d2b'} fontSize="12">0{i+1}</text></g>)}
          </svg>
          <div className="atlas-footer"><span>Дом / лес / свободная поляна</span><span>Схема без масштаба</span></div>
        </div>
        <div className="garden-reading"><div className="garden-places" role="group" aria-label="Пространства сада">{places.map((p,i)=><button key={p.name} type="button" aria-pressed={place===i} onClick={()=>setPlace(i)}><span>0{i+1}</span>{p.name}<span aria-hidden="true">↗</span></button>)}</div>
          <div className="garden-story" aria-live="polite"><span className="eyebrow">0{place+1} / ЛОГИКА ПРОСТРАНСТВА</span><h3>{current.title}</h3><p>{current.copy}</p><div className="garden-material">{current.material}</div></div>
        </div>
      </div>
      <div className="garden-seasons"><div><span className="section-label">ОДИН САД / ВЕСЬ ГОД</span><h3>Красота меняется.<br/><em>Структура остаётся.</em></h3></div><div><div className="season-switch" role="group" aria-label="Сезон сада">{seasons.map((s,i)=><button key={s.name} type="button" aria-pressed={season===i} onClick={()=>setSeason(i)}>{s.name}</button>)}</div><div aria-live="polite"><p>{seasons[season].text}</p><span className="season-detail">{seasons[season].detail}</span></div></div></div>
      <div className="garden-palette"><span>ПАЛИТРА МЕСТА</span><div><i className="material-stone"/>Светлый камень</div><div><i className="material-wood"/>Тёплое дерево</div><div><i className="material-gravel"/>Мелкий гравий</div><div><i className="material-green"/>Лесная зелень</div></div>
    </div>
  </section>;
}
