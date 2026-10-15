/**
 * Contenido del sitio — volcado desde la web oficial de Gabriel Salguero Mezcua
 * (gabrielsalgueromezcua.com: portada y currículum cultural).
 *
 * Todo el texto y los datos editables viven aquí.
 */

export interface NavItem {
	label: string;
	href: string;
}

export interface Book {
	title: string;
	year: string;
	description: string;
	details: string[];
	cover: { src: string; alt: string };
}

export interface CurriculumEntry {
	date: string;
	title: string;
	body: string;
}

export interface Link {
	label: string;
	href: string;
}

export const site = {
	name: 'Gabriel Salguero Mezcua',
	tagline: 'Página Web Oficial',
	title: 'Gabriel Salguero Mezcua | Página Web Oficial',
	description:
		'Página web oficial de Gabriel Salguero Mezcua. Pintor, poeta y escritor granadino: libros, poética y currículum cultural.',
} as const;

export const nav: NavItem[] = [
	{ label: 'Inicio', href: '#inicio' },
	{ label: 'Sobre el autor', href: '#autor' },
	{ label: 'Obras', href: '#obras' },
	{ label: 'Poética', href: '#poetica' },
	{ label: 'Currículum', href: '#curriculum' },
];

export const frontispiece = {
	metaLeft: 'Página Web Oficial',
	metaRight: 'Granada — Alpujarra granadina',
	heading: 'Pintor, poeta y escritor granadino.',
	lead: 'Bienvenido a la página web oficial de Gabriel Salguero Mezcua.',
	portrait: {
		src: '/images/retrato.png',
		alt: 'Retrato de Gabriel Salguero Mezcua',
		caption: 'Gabriel Salguero Mezcua',
	},
	stats: ['Centro Andaluz de las Letras', 'Ateneo de Granada', 'Fundación O.N.C.E.'],
} as const;

export const about = {
	label: 'Sobre el Autor',
	title: 'Una vida de creación en diversos campos de la cultura',
	meta: 'Granada (España) — Alpujarra granadina',
	quote:
		'Nacido en los años cincuenta del pasado siglo XX en la ciudad de Granada (España), aunque enraizado en la Alpujarra granadina.',
	body: 'Mediado el año 2010, y una vez que se vio obligado a dejar atrás una intensa y dilatada actividad profesional (por razones de la evolución de una grave dolencia que conllevaba una importante discapacidad visual), inicia un periodo de creatividad en diversos campos de la cultura que siempre le han interesado y que siempre tuvo que mantener apartados: literatura —poesía, relato y microrrelato—, pintura —óleo y acuarela—, fotografía e incluso algo de canción y escultura. Por estas, sus andanzas por el mundo de la cultura, ha recibido diversos reconocimientos en diferentes lugares.',
	press: {
		image: { src: '/images/ideal.png', alt: 'Artículo de prensa en el Diario Ideal sobre la firma de libros de Trazos de pensamiento' },
		caption: 'Diario Ideal — 26 de abril de 2016',
	},
	ctas: [
		{ label: 'Ver currículum cultural', href: '#curriculum' },
		{ label: 'Ver libros', href: '#obras' },
	] satisfies Link[],
} as const;

export const works = {
	label: 'Mis Libros',
	heading: 'Obras Publicadas',
	meta: '2015 — 2023',
	items: [
		{
			title: 'Trazos de pensamiento. Microrrelatos',
			year: '2015',
			description:
				'Como su propio nombre indica, en este libro de micro-rrelatos se esbozan con ligeros trazos un sinfín de imágenes, algunas de ellas reflejo fiel de crudas realida-des cotidianas y siempre con un objetivo común: tocar alguna que otra conciencia con una lectura adaptada al tiempo que le quiera o pueda dedicar el lector.',
			details: [
				'Ediciones Dauro',
				'200 microrrelatos',
				'Finalista Premios Tiflos 2013',
			],
			cover: {
				src: '/images/libro-trazos.jpg',
				alt: 'Portada de Trazos de pensamiento. Microrrelatos',
			},
		},
		{
			title: 'Por los rincones del tiempo. Antología poética',
			year: '2023',
			description:
				'Con esta antología que aquí les presento pretendo recoger esta parte de mi andar por los rincones y los entresijos de la poesía, camino nacido a mis catorce años y que ya por aquel entonces —obligado por esas circunstancias que a veces nos visitan a lo largo de nuestra vida— hube de abandonar en uno de sus recodos, y que ya en el año dos mil catorce —y ya alcanzadas mis primeras sesenta primaveras— pude retomar. También, para quien quiera escucharlo, lo hago con el deseo de que estos versos recorran las miradas (tu mirada) y en ellas (en ella) busquen y encuentren el silencio del diálogo, el silencio o el grito de la palabra.',
			details: [
				'Aliar Ediciones',
				'Antología poética',
				'Portada: cuadro del autor (óleo, 120×100 cm)',
			],
			cover: {
				src: '/images/libro-rincones.jpg',
				alt: 'Portada de Por los rincones del tiempo. Antología poética',
			},
		},
	] satisfies Book[],
} as const;

export const poetics = {
	label: 'Poética & Oficio',
	quote:
		'Tras verme obligado a dejar atrás una intensa y dilatada vida profesional, por causa de la grave dolencia que afecta a mi mirada, inicio el andar (a veces en soledad, a veces acompañado) por algunos de los senderos de la cultura que siempre me han llamado y que he mantenido apartados, y por los que siempre he deseado caminar (relato, microrrelato, poesía, pintura, fotografía, canción, escultura…). A veces, algunos de los recodos del camino (a su paso por Andalucía, Aragón, Extremadura, Madrid) me han ofrecido algún que otro regalo.',
	body: 'He participado en diversos eventos culturales: recitales poéticos, ferias del libro, tertulias, radio y prensa escrita (Diario Ideal, Cadena Ser, Cope, Onda Cero, Radio Salobreña, revistas, TV, ponente en coloquios…). Algunas de las entidades a las que pertenezco: Centro Andaluz de las Letras (CAL) — Junta de Andalucía, Ateneo de Granada y Fundación O.N.C.E.',
	attribution: 'Gabriel Salguero Mezcua',
	cta: { label: 'Ver currículum completo →', href: '#curriculum' },
} as const;

export const curriculum = {
	label: 'Currículum Cultural',
	heading: 'Trayectoria & Reconocimientos',
	meta: '2011 — 2024',
	intro:
		'Recitales poéticos, ferias del libro, tertulias, radio y prensa escrita, premios, donaciones y exposiciones a lo largo de más de una década de andar cultural.',
	items: [
		{
			date: 'Granada — 05/12/2024',
			title: 'Poeta invitado. “Día Internacional del Voluntariado”',
			body: 'Plataforma del Voluntariado (72 organizaciones). Lugar: Delegación del Gobierno de la Junta de Andalucía. Invitado a cerrar el acto con mi poema: “Postal de atardecer en el viejo barrio”.',
		},
		{
			date: 'Granada — 04/12/2024',
			title: 'Poeta invitado. “Día de la Bandera de Andalucía”',
			body: 'Junta de Andalucía — C.P.A. San Ildefonso. Poema: “A la amada”.',
		},
		{
			date: 'Motril (Granada) — 03/12/2024',
			title: 'Poema donado a la ciudad de Motril',
			body: 'Acto de inauguración en la vía pública del poema donado a la ciudad de Motril, situado sobre una pilastra rodeada de césped. La Señora Alcaldesa anuncia a los presentes que el poema pasa a formar parte del: “Patrimonio Inmaterial de la Ciudad”. Poema: “Motril”.',
		},
		{
			date: 'Granada — 07/10/2024',
			title: 'Monitor. Taller de Poesía “Por los rincones de la poesía”',
			body: 'Curso 2024/2025. Junta de Andalucía — C.P.A. San Ildefonso.',
		},
		{
			date: 'Sevilla — Noviembre 2024',
			title: 'Segundo premio (Poesía)',
			body: '“XIX concurso literario de Relatos Cortos, poesía y Microrrelatos”. Consejo Territorial de la ONCE de Andalucía, Ceuta y Melilla. Poema: “Edad Media. Cantar de Juglaría. La venganza”.',
		},
		{
			date: 'Granada — Septiembre 2024',
			title: 'Cuadro donado a SUPO-ONCE',
			body: 'Sorteado con motivo del día de Santa Lucía (patrona de los ciegos y de la ONCE). Título: “La primavera” (óleo, 116×100 cm).',
		},
		{
			date: 'Granada — 26/04/2024',
			title: 'Presentación del poemario “Por los rincones del tiempo. Antología poética”',
			body: 'Aliar Ediciones. Portada: cuadro del que soy autor (óleo, 120×100 cm). Lugar: I.E.S. Padre Suárez.',
		},
		{
			date: 'Granada — 21/03/2024',
			title: 'Poeta invitado. “WORLD POETRY DAY 2024”',
			body: 'Celebración del Día Mundial de la Poesía UNESCO. Ayuntamiento de Granada. Granada Ciudad UNESCO de la Literatura. Universidad de Granada. Centro García Lorca. Lugar: Jardín de la Casa de Los Porras — Universidad de Granada. Cierro mi participación con uno de mis poemas que he versionado en balada: “Nana para Granada”.',
		},
		{
			date: 'Granada — 15/12/2023',
			title: 'Poema expuesto. Cuarto Real de Santo Domingo',
			body: 'Ayuntamiento de Granada — Cuarto Real de Santo Domingo. Exposición con motivo de la celebración de la “Cabalgata de Reyes en Granada” (19/12/2023). Uno de mis poemas, “Navidad en Granada”, acompaña para la ocasión a siete poemas de los/las siguientes poetas: Federico García Lorca, Luis Rosales, Elena Martín Vivaldi, Manuel Benítez Carrasco, Manuel Galindo Góngora, Mari Luz Escribano y Fernando de Villena.',
		},
		{
			date: 'Granada — 05/12/2023',
			title: 'Poeta invitado. “Día Internacional del Voluntariado”',
			body: 'Plataforma del Voluntariado (72 organizaciones). Lugar: Delegación del Gobierno de la Junta de Andalucía. Invitado a cerrar el acto con mi poema: “El mendigo y las miradas”.',
		},
		{
			date: 'Sevilla — 30/10/2023',
			title: 'Firma de libros. Feria del Libro de Sevilla',
			body: 'Caseta: Asociación de Editores de Andalucía.',
		},
		{
			date: 'Granada — 20/09/2023',
			title: 'Publicado el poemario “Por los rincones del tiempo. Antología poética”',
			body: 'Aliar Ediciones.',
		},
		{
			date: 'Granada — 05/12/2022',
			title: 'Poeta invitado. “Día Internacional del Voluntariado”',
			body: 'Plataforma del Voluntariado (72 organizaciones). Lugar: Delegación del Gobierno de la Junta de Andalucía. Invitado a cerrar el acto con mi poema: “Corazón con corazón”.',
		},
		{
			date: 'Motril (Granada) — 18/08/2022',
			title: 'Poeta invitado. Onda Cero',
			body: '86 aniversario del asesinato de Federico García Lorca. Entrevista y lectura de mis poemas.',
		},
		{
			date: 'Motril (Granada) — Primavera 2022',
			title: 'Acto institucional de donación de un poema a la ciudad de Motril',
			body: 'Lugar: Ayuntamiento de Motril — Salón de Plenos. Poema donado: “Motril”.',
		},
		{
			date: 'Granada — 16/03/2022',
			title: 'Tres poemas cedidos a Fundación AguaGranada',
			body: 'La entidad colabora en la recuperación de las choperas de la vega de Granada. Proyecto: “LIFE WOOD FOR FUTURE”, junto con otras instituciones como la Universidad de Granada.',
		},
		{
			date: 'Granada — 25/02/2022',
			title: 'Poeta invitado con motivo del “Día de Andalucía”',
			body: 'Junta de Andalucía — C.P.A. San Ildefonso. Lectura de algunos de mis poemas.',
		},
		{
			date: 'Yegen (Granada) — 16/02/2022',
			title: 'Poeta invitado. “35 aniversario del fallecimiento de Gerald Brenan”',
			body: 'Recito uno de mis poemas dedicado a Gerald Brenan y a Juliana. Lugar: Plaza de Yegen relacionada con el evento (está presente un descendiente de Juliana). Poema: “Yegen. Novela novelada”.',
		},
		{
			date: 'Granada — 17/12/2021',
			title: 'Poeta invitado. Junta de Andalucía — C.P.A. San Ildefonso',
			body: 'Lectura de poemas.',
		},
		{
			date: 'Serón (Almería) — 11/12/2021',
			title: 'Poema cedido al Conjunto Hispano-Alemán de Observatorios Astronómicos de Calar Alto',
			body: 'Sierra de los Filabres (el más grande del continente europeo). Poema: “Calar Alto”.',
		},
		{
			date: 'Granada — 08/10/2021',
			title: 'Poeta invitado. AguaGranada. Lecturas poéticas',
			body: 'Actividad enmarcada en la “39 Edición de la Feria del Libro”. Lugar: Aljibe del Rey.',
		},
		{
			date: 'Granada — 08/10/2021',
			title: 'Invitado. “Gala de Talentos”. ONCE',
			body: '',
		},
		{
			date: 'Sevilla — 25/06/2020',
			title: 'Primer premio (Relato)',
			body: '“XVII concurso de Relatos Cortos, Poesía y Microrrelatos”. Consejo Territorial de la ONCE de Andalucía, Ceuta y Melilla. Relato premiado: “El círculo”.',
		},
		{
			date: 'Granada — Navidad 2019',
			title: 'Exposición de mi obra',
			body: 'Pintura (óleo y acuarela), fotografía, poesía y escultura. Lugar: ONCE. Delegación de Andalucía Oriental.',
		},
		{
			date: 'Pinos Puente (Granada) — 18/05/2019',
			title: 'Primer premio (Poesía)',
			body: 'Ayuntamiento de Pinos Puente. “XLII Certamen Literario de Relato y Poesía Castillejo-Benigno Vaquero” (ámbito nacional). Poemario: “El payaso” (publicado).',
		},
		{
			date: 'Granada — 12/05/2019',
			title: 'Firma de libros. Feria del Libro de Granada',
			body: 'Caseta: La Biblioteca del Paciente.',
		},
		{
			date: 'Granada — 03/05/2019',
			title: 'Pregonero. “Fiesta de la Cruz de mayo”',
			body: 'S.A.S. — Hospital General Virgen de las Nieves. La Biblioteca del Paciente. Cruz levantada con libros, y con seis de mis poemas y microrrelatos derramados sobre el césped. Recibe del Ayuntamiento el: “Premio a la Calidad Humana”. Lugar: en uno de los jardines exteriores del recinto hospitalario.',
		},
		{
			date: 'Sevilla — 30/10/2018',
			title: 'Primer premio (Microrrelatos)',
			body: '“XVI concurso de Relatos Cortos, Poesía y Microrrelatos”. Consejo Territorial de la ONCE de Andalucía, Ceuta y Melilla. Microrrelato: “Sombras negras”.',
		},
		{
			date: 'Motril (Granada) — 28/09/2018',
			title: 'Poema donado al monumento a los policías nacionales caídos en democracia',
			body: 'Acto de inauguración del monumento de piedra levantado en homenaje a los policías nacionales caídos en democracia, monumento del que forma parte el poema. Con mi versión en balada del poema cierro el acto. Poema: “Siempre”.',
		},
		{
			date: 'Granada — Agosto 2018',
			title: 'Finalista (publicado). “XXII Concurso de Narraciones Breves”',
			body: 'Diario Ideal y El Corte Inglés. Relato: “Sandalias descalzas”.',
		},
		{
			date: 'Salobreña (Granada) — 17/08/2018',
			title: 'Poeta invitado. “82 aniversario del asesinato de Federico”',
			body: 'Radio Salobreña. Entrevista y lectura de poemas.',
		},
		{
			date: 'Nivar (Granada) — 13/07/2018',
			title: 'Poeta invitado. “XIII Veladas de música y poesía”',
			body: 'Diputación Provincial de Granada. Ayuntamiento de Nivar. Intervienen: viernes 13/07/2018, poesía: Gabriel Salguero Mezcua, música: Coral de la Vega de Granada; viernes 20/07/2018, poesía: Ángeles Mora Fragoso (Premio Nacional de Poesía 2016), música: Carlos Andreoli y Ramón Maschio; viernes 27/07/2018, poetas y músicos locales.',
		},
		{
			date: 'Málaga — 17/05/2018',
			title: 'Poema cedido al Caminito del Rey',
			body: 'Diputación de Málaga. Poema: “Caminito y alma”.',
		},
		{
			date: 'Quero (Toledo) — 02/03/2018',
			title: 'Nombrado “Embajador del idioma español en el mundo”',
			body: 'Museo de la Palabra — Fundación César Egido Serrano.',
		},
		{
			date: 'Sevilla — 27/11/2017',
			title: 'Primer premio (Poesía)',
			body: '“XV concurso literario de Relatos Cortos, poesía y microrrelatos”. Consejo Territorial de la ONCE de Andalucía, Ceuta y Melilla. Poema: “Ojos apagados” (ha sido referido y publicado en Facebook por doña Ángeles Mora).',
		},
		{
			date: 'Navalmoral de la Mata (Cáceres) — Nov. 2016',
			title: 'Finalista (publicado). “XVIII Certamen de Relatos Breves de Navidad”',
			body: 'Ayuntamiento de Navalmoral de la Mata. Radio Navalmoral — COPE. A.I.E. Almaraz-Trillo (ámbito nacional). Relato premiado: “El abuelo escritor”.',
		},
		{
			date: 'Granada — 25/04/2016',
			title: 'Firma de libros. Feria del Libro de Granada',
			body: 'Con motivo de la edición del libro “Trazos de pensamiento”. Caseta: Ediciones Dauro. Artículo de prensa publicado al día siguiente, 26/04/2016, en el Diario Ideal.',
		},
		{
			date: 'La Taha-Pitres (Granada) — Abril 2016',
			title: 'Escritor invitado. “III Jornadas literarias — Hazañas quijotescas”',
			body: 'Ayuntamiento de La Taha-Pitres. Guadalinfo (Alpujarra granadina).',
		},
		{
			date: 'Sevilla — 2016',
			title: 'Accésit. “III Certamen Fotográfico Mayores por el Medio Ambiente — RECAPACICLA”',
			body: 'Junta de Andalucía (212 fotografías presentadas). Fotografía: “La farola” (expuesta en las 8 capitales andaluzas).',
		},
		{
			date: 'Granada — 25/01/2016',
			title: 'Poeta invitado. Tertulia “Poesía y café”',
			body: 'ONCE — Delegación de Andalucía Oriental, Granada.',
		},
		{
			date: 'Granada — 10/12/2015',
			title: 'Presentación del libro “Trazos de pensamiento”',
			body: 'Ediciones Dauro (contiene 200 microrrelatos; quedó entre los diez finalistas en los “Premios Tiflos 2013”, en la modalidad de cuento). Lugar: Cuarto Real de Santo Domingo — Ayuntamiento de Granada.',
		},
		{
			date: 'Granada — Mayo-junio 2015',
			title: 'Exposición colectiva de pintura',
			body: 'Ayuntamiento de Granada. Plaza del Carmen. “XIV Convivencia de personas mayores” — “Corpus Christi” (expongo óleos y acuarelas).',
		},
		{
			date: 'Granada — Sep./oct. 2015',
			title: 'Exposición de pintura, fotografía y poesía',
			body: 'S.A.S. — Junta de Andalucía. Lugar: sala de exposiciones del Hospital General Virgen de las Nieves.',
		},
		{
			date: 'Pinos Puente (Granada) — 30/05/2015',
			title: 'Finalista (Poesía)',
			body: 'Ayuntamiento de Pinos Puente. “XXXIX Certamen Literario de Relato y Poesía Castillejo-Benigno Vaquero” (ámbito nacional). Poemario: “Poemas perdidos” (publicado).',
		},
		{
			date: 'Granada — 19/06/2014',
			title: 'Exposición colectiva de pintura',
			body: 'Ayuntamiento de Granada. Plaza del Carmen. “XIII Convivencia de personas mayores” — “Corpus Christi” (expongo óleos).',
		},
		{
			date: 'Granada — Enero 2014',
			title: 'Fotografía publicada. OFECUM',
			body: 'Revista cultural nº 135. Motivo: Conjunto Monumental de Carmona (Sevilla).',
		},
		{
			date: 'Granada — 22/11/2014',
			title: 'Poeta invitado. “III Encuentro de poetas andaluces de ahora”',
			body: 'Lugar: Carmen de los Mártires — Ayuntamiento de Granada. Recito dos de mis poemas: “Las dos fronteras” y “El mendigo y las miradas”.',
		},
		{
			date: 'Madrid — 2014',
			title: 'Microrrelato seleccionado y publicado en libro',
			body: 'Concursan más de 4.000 microrrelatos (ámbito internacional). “I Concurso de microrrelatos otoño e invierno”. Diversidad Literaria. Microrrelato: “Gris en el calendario”.',
		},
		{
			date: 'Madrid — 2014',
			title: 'Finalista. Radio Nacional de España — Fundación “la Caixa”',
			body: '“VI Concurso de Relatos Escritos por Personas Mayores” (ámbito nacional). Presentados 1.582 relatos (de los seis miembros del jurado, dos son Premio Planeta). Premio recibido en CaixaForum Madrid. Relato: “El último libro”.',
		},
		{
			date: 'Madrid — 09/01/2014',
			title: 'Poema seleccionado y publicado en libro',
			body: 'Presentados 1.450 poemas (ámbito internacional). “II Concurso de Poesía Versos en el Aire”. Diversidad Literaria. Poema: “Pena al viento”.',
		},
		{
			date: 'Granada — 19/12/2013',
			title: 'Lectura de mis relatos y poemas',
			body: 'Ayuntamiento de Granada. Lugar: Teatro Municipal Maestro Francisco Alonso.',
		},
		{
			date: 'Madrid — 2013',
			title: 'Finalista. “XXIV Edición Premios Tiflos de Cuento”',
			body: 'O.N.C.E. Participación abierta, de ámbito internacional (394 libros presentados). Título: “Trazos de pensamiento” (publicado en 2015 por Ediciones Dauro).',
		},
		{
			date: 'Zaragoza — 2013',
			title: 'Finalista. Fundación Juan Bonal',
			body: '“IV Edición del Concurso de Relatos Solidarios lo Vives, lo Cuentas” (ámbito internacional). Presentados 192 relatos de Argentina, Venezuela, Alemania, Bélgica y Nueva York, y de 31 provincias españolas. Relato: “La vida en blanco y negro”.',
		},
		{
			date: 'Granada — 2013',
			title: 'Segundo premio. “IV Certamen Literario Intergeneracional de Relato Corto Miguel Guirao”',
			body: 'OFECUM. Relato: “Trazos de una vida” (publicado).',
		},
		{
			date: 'Sevilla — 2012',
			title: 'Finalista. “I Concurso de Habilidades Musicales”',
			body: 'Consejo Territorial de la ONCE de Andalucía, Ceuta y Melilla. Fado cantado junto a Minha Lua: “Sodade”.',
		},
		{
			date: 'Sevilla — 2011',
			title: 'Primer premio. “IX Concurso de Relatos Breves”',
			body: 'Consejo Territorial de la ONCE de Andalucía, Ceuta y Melilla. Relato: “Melancolía a los ochenta”.',
		},
	] satisfies CurriculumEntry[],
} as const;

export const footer = {
	copyright: 'Gabriel Salguero Mezcua © 2026',
	colophon: 'Página Web Oficial — Granada, España',
	links: [
		{ label: 'Libros', href: '#obras' },
		{ label: 'Currículum', href: '#curriculum' },
		{ label: 'Poética', href: '#poetica' },
	] satisfies Link[],
} as const;
