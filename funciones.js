// ===== DATOS DE PRODUCTOS (versión extendida para detalle y catálogo) =====
function asegurar4Imagenes(imagenes) {
    const arr = imagenes || [];
    while (arr.length < 4) {
        arr.push(arr.length > 0 ? arr[0] : 'https://via.placeholder.com/600x600/333/fff?text=Hornos+Roca');
    }
    return arr.slice(0, 4);
}

const productosDetalle = {
    // ========== HORNOS ==========
    'colosso': {
        id: 'colosso',
        tipo: 'horno',
        combustible: 'leña',
        origen: 'peruano',
        nombre: 'Horno Artesanal Colosso di Forgia 100 cm',
        categoria: 'Hornos a Leña',
        precio: 5170.00,
        precioStr: 'S/ 5,170.00',
        descripcion: 'El Colosso di Forgia 100 cm es un horno artesanal profesional de diseño italiano, concebido para pizzería y panadería exigente. Su cúpula maciza y aislamiento con fibra cerámica aseguran masa térmica y curva de calor estables; la chimenea frontal con regulador optimiza el tiro para resultados consistentes tanda tras tanda.',
        imagenes: asegurar4Imagenes([
            'https://lacarboneragrill.pe/cdn/shop/files/colosoDiForgia1_1066x.png?v=1783366960',
            'https://lacarboneragrill.pe/cdn/shop/files/colosoDiForgia2_720x.png?v=1783367010',
            'https://lacarboneragrill.pe/cdn/shop/files/nuevoColosso_720x.png?v=1783784136',
            'https://lacarboneragrill.pe/cdn/shop/files/newColosso_720x.png?v=1783971267'
        ]),
        caracteristicas: [
            'Profesional para pizza & pan: geometría de cúpula que favorece la radiación y la convección internas para cornisa crujiente y miga bien desarrollada.',
            'Construcción premium: ladrillo pastelón + fibra cerámica; acabado exterior en piedra de mármol.',
            'Chimenea frontal regulable: mejor evacuación de humos y control de temperatura.',
            'Mesa de apoyo: granito incluido para manipulación de bandejas.',
            'Configuraciones: solo leña (precio en página) o dual (leña + gas).',
            'Instalación: armado (Lima/provincias) o in situ en Lima según proyecto.',
            'Tiempo de fabricación: 10–15 días útiles (según carga y acabados).'
        ],
        especificacionesTecnicas: [
            { clave: 'Diámetro externo', valor: '100 cm (las cotizaciones se dan por medida externa).' },
            { clave: 'Espesor térmico ref.', valor: '11 cm (rango 70–100 cm).' },
            { clave: 'Diámetro útil estimado', valor: '≈78 cm.' },
            { clave: 'Chimenea', valor: 'frontal con regulador de tiro.' },
            { clave: 'Acabado exterior', valor: 'mármol.' },
            { clave: 'Opción dual (gas)', valor: 'trabaja con media presión (si es gas LP de red, punto entre 10–15 PSI). Para gas natural, la conexión debe realizarla el proveedor autorizado.' },
            { clave: 'Peso aprox.', valor: '500–600 kg (según acabados/estructura/mesa).' },
            { clave: 'Entrega a provincia', valor: 'equipo armado por agencia o visita de equipo técnico (coordinar).' }
        ],
        capacidadGastronomica: [
            'Pizzas: hasta 2 unidades de 30–32 cm simultáneas (con rotación).',
            'Panificación: admite 1 bandeja 60×40 cm o producción artesanal en pala/loza refractaria.',
            'Asados grandes: pavo y cortes voluminosos; manejo estable de baja y media temperatura.'
        ],
        comoElegir: [
            'Indica qué cocinarás (pizza, pan, asados) y kg/tanda o pizzas por tanda.',
            'Confírmanos la medida de tu base (o si requieres estructura metálica).',
            'Definimos contigo si va solo leña o dual, y si conviene armado o in situ.'
        ],
        faqs: [
            { pregunta: '¿El precio incluye dual o in situ?', respuesta: 'No. El precio de página es solo leña + armado. Dual o in situ tienen costo adicional.' },
            { pregunta: '¿Pueden instalarlo en provincia?', respuesta: 'Sí: se envía armado por agencia; también podemos coordinar fabricación in situ.' },
            { pregunta: '¿Se puede desviar la chimenea?', respuesta: 'Sí, con codos. Envíanos el plano/recorrido para dimensionarla.' },
            { pregunta: '¿Tiempo de fabricación?', respuesta: '10–15 días útiles.' },
            { pregunta: '¿Mantenimiento?', respuesta: 'Limpieza tras cada uso; ante agentes contaminantes, malla guinda suave y acabado con abrillantador 3M.' }
        ],
        informacionComercial: '',
        porqueElegir: '',
        opciones: [
            {
                nombreBoton: 'Colosso – 80 cm',
                nombreCompleto: 'Horno Artesanal Colosso di Forgia 80 cm',
                precioStr: 'S/ 4,730.00',
                descripcion: 'El Colosso di Forgia 80 cm mantiene la misma excelencia constructiva y rendimiento térmico que su hermano de 100 cm, pero en un formato más compacto. Ideal para espacios reducidos sin sacrificar la calidad profesional de la cocción a leña.',
                imagenes: asegurar4Imagenes([
                    'https://cdn.shopify.com/s/files/1/0521/0305/3481/files/colosso-80-1.png?v=1784154473',
                    'https://cdn.shopify.com/s/files/1/0521/0305/3481/files/colosso-80-2.png?v=1784154473',
                    'https://cdn.shopify.com/s/files/1/0521/0305/3481/files/colosso-80-3.png?v=1784154473',
                    'https://cdn.shopify.com/s/files/1/0521/0305/3481/files/colosso-80-4.png?v=1784154473'
                ])
            },
            {
                nombreBoton: 'Colosso – 100 cm',
                nombreCompleto: 'Horno Artesanal Colosso di Forgia 100 cm',
                precioStr: 'S/ 5,170.00',
                descripcion: 'El Colosso di Forgia 100 cm es un horno artesanal profesional de diseño italiano, concebido para pizzería y panadería exigente. Su cúpula maciza y aislamiento con fibra cerámica aseguran masa térmica y curva de calor estables; la chimenea frontal con regulador optimiza el tiro para resultados consistentes tanda tras tanda.',
                imagenes: asegurar4Imagenes([
                    'https://lacarboneragrill.pe/cdn/shop/files/colosoDiForgia1_1066x.png?v=1783366960',
                    'https://lacarboneragrill.pe/cdn/shop/files/colosoDiForgia2_720x.png?v=1783367010',
                    'https://lacarboneragrill.pe/cdn/shop/files/nuevoColosso_720x.png?v=1783784136',
                    'https://lacarboneragrill.pe/cdn/shop/files/newColosso_720x.png?v=1783971267'
                ])
            },
            {
                nombreBoton: 'Colosso – 120 cm',
                nombreCompleto: 'Horno Artesanal Colosso di Forgia 120 cm',
                precioStr: 'S/ 6,314.00',
                descripcion: 'El Colosso di Forgia 120 cm ofrece una capacidad superior y una mayor superficie de cocción, pensado para producciones más altas o para quienes desean un horno de gran tamaño sin perder la calidad y el diseño característico del modelo Colosso.',
                imagenes: asegurar4Imagenes([
                    'https://cdn.shopify.com/s/files/1/0521/0305/3481/files/colosso-120-1.png?v=1783980207',
                    'https://cdn.shopify.com/s/files/1/0521/0305/3481/files/colosso-120-3.png?v=1783980208',
                    'https://cdn.shopify.com/s/files/1/0521/0305/3481/files/colosso-120-2.png?v=1783980208',
                    'https://cdn.shopify.com/s/files/1/0521/0305/3481/files/colosso-120-4.png?v=1783980863'
                ])
            }
        ]
    },

    'nina-pacha': {
        id: 'nina-pacha',
        tipo: 'horno',
        combustible: 'leña',
        origen: 'peruano',
        nombre: 'Horno Pachamanquero Multifunción – Modelo Nina Pacha',
        categoria: 'Hornos a Leña',
        precio: 3709.00,
        precioStr: 'S/ 3,709.00',
        descripcion: 'El Nina Pacha es un horno pachamanquero multifunción que combina la tradición de la cocina andina con una construcción robusta y acabados de lujo. Diseñado para ofrecer máxima versatilidad y rendimiento térmico, es ideal tanto para celebraciones familiares como para entornos gastronómicos exigentes.',
        imagenes: asegurar4Imagenes([
            'https://lacarboneragrill.pe/cdn/shop/files/pachamanqueroNina2_1066x.png?v=1783786610',
            'https://lacarboneragrill.pe/cdn/shop/files/pachamanqueroNina01_1066x.png?v=1783786611',
            'https://lacarboneragrill.pe/cdn/shop/files/hornoPachamanquero01_720x.png?v=1783786610',
            'https://lacarboneragrill.pe/cdn/shop/files/PachamanqueroNina3_720x.png?v=1783786611'
        ]),
        ventajasTecnicas: [
            'Sistema dual: funciona a leña o gas LP (presión de trabajo 10 psi) con quemador tipo "chya" para un encendido rápido y control preciso del calor.',
            'Construcción de alta resistencia:',
            'Cuerpo en cemento refractario, que asegura una excelente retención y distribución del calor.',
            'Revestimiento interno en ladrillos refractarios, optimizando la inercia térmica para cocciones prolongadas y parejas.',
            'Enchapado exterior en mármol, que aporta elegancia y protección adicional contra el clima.',
            'Detalles y acabados en acero inoxidable que refuerzan la durabilidad y estética premium del equipo.',
            'Tapa de acero inoxidable con broches de seguridad, diseñada para un cierre firme y conservación del calor.',
            'Termómetro analógico con rango de 0 a 500 °C para un control preciso de la temperatura.',
            'Movilidad: cuatro ruedas industriales para facilitar el traslado.'
        ],
        funcionesVersatilidad: [
            'Horno pachamanquero para carnes, tubérculos y guarniciones al estilo tradicional.',
            'Parrilla para asados directos.',
            'Fogatera para reuniones al aire libre.',
            'Asador para chancho al palo con soporte y rejilla incluidos.'
        ],
        beneficiosGastronomicos: [
            'Capacidad para preparar hasta 34 kg de alimentos en una sola tanda.',
            'Cocción uniforme gracias a la combinación de calor envolvente por leña o gas y la cámara interna en ladrillo refractario.',
            'Flexibilidad para adaptarse a cocciones rápidas o lentas, según el método elegido.'
        ],
        fichaTecnica: [
            'Dimensiones externas: 70 cm (ancho) x 66 cm (fondo) x 61 cm (alto)',
            'Cavidad interna: 38.8 cm x 34 cm x 22.6 cm',
            'Espesor de paredes: 14cm',
            'Tamaño estructural: 55cm',
            'Garruchas: 16cm',
            'Revestimiento interno: Ladrillo refractario',
            'Enchapado exterior: Mármol',
            'Detalles: Acero inoxidable',
            'Tapa: Acero inoxidable con broches de seguridad',
            'Termómetro: Analógico (0 – 500 °C)',
            'Combustible: Leña o gas LP (10 psi)',
            'Quemador: Tipo chya',
            'Capacidad: 34 kg',
            'Movilidad: 4 ruedas industriales',
            'Uso recomendado: Gastronómico y residencial'
        ],
        porqueElegir: 'El Nina Pacha ofrece un balance perfecto entre tradición y tecnología. Su sólida construcción en cemento y ladrillo refractario, acabada con mármol y acero inoxidable, garantiza durabilidad, eficiencia térmica y una presentación impecable. Es la elección ideal para quienes buscan un horno versátil, elegante y de alto rendimiento. Fabricado por Hornos Roca, con calidad y tradición peruana.'
    },

    'nina': {
        id: 'nina',
        tipo: 'horno',
        combustible: 'leña',
        origen: 'peruano',
        nombre: 'Horno Artesanal – Modelo Nina – 100 cm',
        categoria: 'Hornos a Leña',
        precio: 4585.00,
        precioStr: 'S/ 4,585.00',
        descripcion: 'El Modelo Nina es un horno artesanal premium que combina la tradición de la cocina a leña con un diseño elegante y acabados de lujo. Su arco frontal de ladrillo y revestimiento exterior en mármol lo convierten en una pieza que realza cualquier espacio, ya sea en una terraza residencial o en un ambiente gastronómico profesional. Construido con materiales de alto rendimiento térmico, garantiza cocciones envolventes, uniformes y con el inconfundible sabor de la leña.',
        imagenes: asegurar4Imagenes([
            'https://lacarboneragrill.pe/cdn/shop/files/nuevoNina01_1066x.png?v=1784134987',
            'https://lacarboneragrill.pe/cdn/shop/files/nuevoNina02_1066x.png?v=1784134987',
            'https://lacarboneragrill.pe/cdn/shop/files/nuevoNina03_720x.png?v=1784134987',
            'https://cdn.shopify.com/s/files/1/0521/0305/3481/files/nuevoNina04.png?v=1784141121'
        ]),
        ventajasTecnicas: [
            'Cúpula en ladrillo pastelón (torta), diseñada para retener y distribuir el calor de forma uniforme.',
            'Piso de ladrillos refractarios de 1 1/2", resistente y con alta inercia térmica para cocción pareja.',
            'Aislamiento intermedio en fibra cerámica (hasta 1200 °C), que prolonga la temperatura interna durante horas.',
            'Espesor de paredes térmicas de 11 cm, para un aislamiento eficiente.',
            'Puerta de acero inoxidable con regulador de ventilación para control preciso de la combustión.',
            'Chimenea frontal con regulador de tiro para optimizar la salida de humos.',
            'Termómetro analógico 0–500 °C integrado para monitorear la temperatura interna.'
        ],
        beneficiosGastronomicos: [
            'Ideal para preparar pizzas, panes artesanales, carnes, tubérculos y guisos de larga cocción.',
            'Mantiene calor constante, reduciendo el consumo de combustible.',
            'Cocción envolvente que realza texturas y sabores auténticos.'
        ],
        fichaTecnica: [
            'Medida exterior: 100 cm de diámetro',
            'Medida interior útil: 78 cm de diámetro',
            'Espesor de paredes térmicas: 11 cm (con núcleo de fibra cerámica)',
            'Capacidad: Hasta 3 pizzas grandes o 8–9 kg de pan, carnes o tubérculos por tanda',
            'Aislamiento térmico: Fibra cerámica (hasta 1200 °C)',
            'Piso: Ladrillos refractarios de 1 1/2"',
            'Cúpula: Ladrillo pastelón (torta)',
            'Puerta: Acero inoxidable con regulador de ventilación',
            'Termómetro: Analógico 0–500 °C',
            'Chimenea: Frontal con regulador de tiro',
            'Tipo de instalación: Entregado armado o fabricación in situ',
            'Tiempo de fabricación: 10 a 15 días útiles',
            'Uso recomendado: Residencial o comercial'
        ],
        informacionComercial: 'Precio publicado corresponde al horno en presentación a leña, entregado totalmente armado en medida estándar de 100 cm. Podemos fabricarlo en cualquier medida según requerimiento del cliente. Presentación dual (leña + gas) y fabricación in situ tienen un costo adicional.',
        porqueElegir: 'El Modelo Nina ofrece el balance perfecto entre tradición y estética, con materiales premium y una construcción artesanal que asegura rendimiento y durabilidad. Su diseño con arco frontal y acabados en mármol lo convierten en un horno que no solo cocina de forma excepcional, sino que también añade un toque distintivo a cualquier espacio. Fabricado en Perú por Hornos Roca, con estándares de calidad premium.',
        opciones: [
            {
                nombreBoton: 'Nina – 80 cm',
                nombreCompleto: 'Horno Artesanal – Modelo Nina – 80 cm',
                precioStr: 'S/ 4,145.00',
                descripcion: 'El Modelo Nina 80 cm mantiene el diseño y la calidad del modelo original en un formato más compacto. Ideal para espacios reducidos sin renunciar a la estética y el rendimiento térmico de un horno artesanal premium.',
                imagenes: asegurar4Imagenes([
                    'https://cdn.shopify.com/s/files/1/0521/0305/3481/files/ninahorno-80-1.png?v=1784147423',
                    'https://cdn.shopify.com/s/files/1/0521/0305/3481/files/ninahorno-80-2.png?v=1784147423',
                    'https://cdn.shopify.com/s/files/1/0521/0305/3481/files/ninahorno-80-3.png?v=1784147438',
                    'https://cdn.shopify.com/s/files/1/0521/0305/3481/files/ninahorno-80-4.png?v=1784147440'
                ])
            },
            {
                nombreBoton: 'Nina – 100 cm',
                nombreCompleto: 'Horno Artesanal – Modelo Nina – 100 cm',
                precioStr: 'S/ 4,585.00',
                descripcion: 'El Modelo Nina es un horno artesanal premium que combina la tradición de la cocina a leña con un diseño elegante y acabados de lujo. Su arco frontal de ladrillo y revestimiento exterior en mármol lo convierten en una pieza que realza cualquier espacio, ya sea en una terraza residencial o en un ambiente gastronómico profesional. Construido con materiales de alto rendimiento térmico, garantiza cocciones envolventes, uniformes y con el inconfundible sabor de la leña.',
                imagenes: asegurar4Imagenes([
                    'https://lacarboneragrill.pe/cdn/shop/files/nuevoNina01_1066x.png?v=1784134987',
                    'https://lacarboneragrill.pe/cdn/shop/files/nuevoNina02_1066x.png?v=1784134987',
                    'https://lacarboneragrill.pe/cdn/shop/files/nuevoNina03_720x.png?v=1784134987',
                    'https://cdn.shopify.com/s/files/1/0521/0305/3481/files/nuevoNina04.png?v=1784141121'
                ])
            },
            {
                nombreBoton: 'Nina – 120 cm',
                nombreCompleto: 'Horno Artesanal – Modelo Nina – 120 cm',
                precioStr: 'S/ 5,457.00',
                descripcion: 'El Modelo Nina 120 cm amplía la capacidad y superficie de cocción del modelo original, ideal para quienes necesitan mayor producción o desean un horno de gran tamaño sin perder el estilo y la calidad que caracteriza a la gama Nina.',
                imagenes: asegurar4Imagenes([
                    'https://cdn.shopify.com/s/files/1/0521/0305/3481/files/nina-120-1.png?v=1784210883',
                    'https://cdn.shopify.com/s/files/1/0521/0305/3481/files/nina-120-2.png?v=1784210885',
                    'https://cdn.shopify.com/s/files/1/0521/0305/3481/files/nina-120-3.png?v=1784210883',
                    'https://cdn.shopify.com/s/files/1/0521/0305/3481/files/nina-120-4.png?v=1784210883'
                ])
            }
        ]
    },

    'ichu': {
        id: 'ichu',
        tipo: 'horno',
        combustible: 'leña',
        origen: 'peruano',
        nombre: 'Horno Artesanal – Modelo Ichu – 100 cm',
        categoria: 'Hornos a Leña',
        precio: 4330.00,
        precioStr: 'S/ 4,330.00',
        descripcion: 'El Modelo Ichu rinde homenaje a la tradición de los hornos de la sierra peruana. Su forma boleada, similar a un iglú, no es casual: está diseñada para envolver cada preparación en un calor parejo, evitando puntos fríos y logrando cocciones uniformes. Fabricado con materiales nacionales e importados de alta gama, su revestimiento en pepelma de mármol no solo ofrece un acabado de lujo, sino que resiste la intemperie y el paso del tiempo. Lleva los colores de nuestra bandera y se integra con naturalidad en hogares, casas de campo, playas o negocios gourmet, aportando autenticidad y eficiencia a cada plato.',
        imagenes: asegurar4Imagenes([
            'https://lacarboneragrill.pe/cdn/shop/files/modeloIchu5_720x.png?v=1783367134',
            'img/historia.png',
            'https://lacarboneragrill.pe/cdn/shop/files/modeloIchu3_1066x.png?v=1783367134',
            'https://lacarboneragrill.pe/cdn/shop/files/modeloIchu4_720x.png?v=1783367134'
        ]),
        ventajasTecnicas: [
            'Nuestro revestimiento de paredes tiene un ancho entre 11 cm, 19 cm y 25 cm por lado de pared segun el tamaño del horno y la necesidad de la elaboracion, dando hasta 8 a 10 horas de calor.',
            'Nuestro enchape es en pepelma de mármol que permite un acabado de lujo y también mayor resistencia a la intemperie o cambios climáticos, debido a que la roca ofrece mayor resistencia que los azulejos.',
            'Chimenea frontal oculta con regulador de tiro/damper para optimizar la combustión y la salida de humos.',
            'Aislamiento térmico de fibra cerámica (hasta 1260 °C), que mantiene la temperatura estable por horas.',
            'Cúpula boleada en ladrillo térmico, diseñada para distribuir el calor de manera uniforme (no teniendo un diseño triangular).',
            'Puerta con diseño único del modelo en acero inoxidable con sistema de regulación de ventilación para un control preciso del flujo de aire.',
            'Piso de ladrillos refractarios de 1 1/2", que asegura cocción pareja y base crujiente.',
            'Termómetro analógico americano 0–500 °C integrado para monitorear la temperatura interna.',
            'Opción de sistema híbrido (leña + gas) para combinar el sabor tradicional con la practicidad del gas, fusionando lo mejor de cada método para optimizar el rendimiento.'
        ],
        beneficiosGastronomicos: [
            'Cúpula boleada: el calor se distribuye de manera homogénea, logrando cocciones parejas en toda la cámara.',
            'Aislamiento en fibra cerámica: mantiene la temperatura estable por horas, conservando la humedad natural de los alimentos.',
            'Sistema híbrido (leña + gas): combina el sabor tradicional con la practicidad moderna, optimizando el rendimiento y el ahorro.',
            'Puerta de acero inoxidable: permite visualizar la cocción sin abrir, preservando cada grado de temperatura.',
            'Chimenea frontal con regulador: extrae los humos de forma eficiente, sin que interfieran en tu espacio.',
            'Termómetro analógico 0–500 °C / Americano: control preciso de la temperatura para cada receta.'
        ],
        fichaTecnica: [
            'Medida exterior: 100 cm de diámetro',
            'Medida interior útil: 78 cm de diámetro',
            'Espesor de paredes térmicas: 10 cm (con núcleo de fibra cerámica de 3 cm)',
            'Capacidad: Hasta 3 pizzas grandes/30 cm o 2 a 3 kg de pan, de 15kg a 18 kg de carnes o tubérculos por tanda (dependiendo de la bandeja en uso)',
            'Aislamiento térmico: Fibra cerámica (hasta 1260 °C)',
            'Piso: Ladrillos refractarios de 1 1/2"',
            'Cúpula: Ladrillo comprimido térmico tipo torta',
            'Puerta: Acero inoxidable con sistema de regulación de ventilación y fácil visión',
            'Termómetro: Analógico 0–500 °C / Americano',
            'Chimenea: Sistema frontal oculto con regulador damper en acero inoxidable',
            'Tipo de instalación: Entregado armado o fabricación in situ',
            'Tiempo de fabricación: 4 a 7 días útiles',
            'Uso recomendado: Residencial premium o comercial'
        ],
        informacionComercial: 'El Ichu está disponible en su versión estándar de 100 cm, completamente armado y listo para usar. Pero si lo deseas, podemos fabricarlo en cualquier medida que se adapte a tu espacio y necesidades. También ofrecemos la opción híbrida (leña + gas) para quienes buscan versatilidad y ahorro, y la fabricación in situ, para que el horno nazca directamente en tu hogar.',
        vidaUtil: [
            'Tiempo de vida útil uso comercial (5 años aprox.).',
            'Tiempo de vida útil uso familiar (8 a 10 años aprox.).',
            'El tiempo de vida depende mucho de la calidad de uso y mantenimientos periódicos, pudiendo este alargar el tiempo de vida del horno.',
            'Adobe (poder calorífico).'
        ],
        recomendaciones: [
            'Para uso familiar, el grosor de pared de 11 cm es suficiente. Para restaurantes y cocciones prolongadas, elige 19 o 25 cm, que aseguran más de 8 horas de calor.',
            'Los hornos de 1.30 a 2.00 m son ideales para negocios por su mayor productividad; los de 80 cm a 1.20 m, perfectos para el hogar.'
        ],
        porqueElegir: 'Elegir el Ichu es optar por la herencia culinaria peruana, reinterpretada con materiales de primera calidad y un diseño que prioriza el rendimiento térmico. Su cúpula boleada, su revestimiento de pepelma de mármol y sus opciones de combustión lo convierten en un equipo versátil, duradero y estéticamente impecable. No es solo un horno: es el aliado que transforma cada receta en una experiencia única.',
        opciones: [
            {
                nombreBoton: 'Ichu – 80 cm',
                nombreCompleto: 'Horno Artesanal – Modelo Ichu – 80 cm',
                precioStr: 'S/ 3,890.00',
                descripcion: 'Ideal para espacios reducidos, mantiene el mismo rendimiento térmico y acabado premium que sus hermanos mayores. Perfecto para hogares que buscan autenticidad sin ocupar demasiado lugar.',
                imagenes: asegurar4Imagenes([
                    'https://cdn.shopify.com/s/files/1/0521/0305/3481/files/ichu-80-1.png?v=1783977868',
                    'https://cdn.shopify.com/s/files/1/0521/0305/3481/files/ichu-80-2.png?v=1784047686',
                    'https://cdn.shopify.com/s/files/1/0521/0305/3481/files/ichu-80-3.png?v=1783977868',
                    'https://cdn.shopify.com/s/files/1/0521/0305/3481/files/ichu-80-4.png?v=1783977868'
                ])
            },
            {
                nombreBoton: 'Ichu – 100 cm',
                nombreCompleto: 'Horno Artesanal – Modelo Ichu – 100 cm',
                precioStr: 'S/ 4,330.00',
                descripcion: 'El Modelo Ichu rinde homenaje a la tradición de los hornos de la sierra peruana. Su forma boleada, similar a un iglú, no es casual: está diseñada para envolver cada preparación en un calor parejo, evitando puntos fríos y logrando cocciones uniformes. Fabricado con materiales nacionales e importados de alta gama, su revestimiento en pepelma de mármol no solo ofrece un acabado de lujo, sino que resiste la intemperie y el paso del tiempo. Lleva los colores de nuestra bandera y se integra con naturalidad en hogares, casas de campo, playas o negocios gourmet, aportando autenticidad y eficiencia a cada plato.',
                imagenes: asegurar4Imagenes([
                    'https://lacarboneragrill.pe/cdn/shop/files/modeloIchu5_720x.png?v=1783367134',
                    'img/historia.png',
                    'https://lacarboneragrill.pe/cdn/shop/files/modeloIchu3_1066x.png?v=1783367134',
                    'https://lacarboneragrill.pe/cdn/shop/files/modeloIchu4_720x.png?v=1783367134'
                ])
            },
            {
                nombreBoton: 'Ichu – 120 cm',
                nombreCompleto: 'Horno Artesanal – Modelo Ichu – 120 cm',
                precioStr: 'S/ 5,070.00',
                descripcion: 'Mayor capacidad y superficie de cocción, pensado para quienes reciben con frecuencia o necesitan producir en mayor volumen. La misma excelencia térmica, ahora con más espacio para crear.',
                imagenes: asegurar4Imagenes([
                    'https://cdn.shopify.com/s/files/1/0521/0305/3481/files/ichu-120-1.png?v=1783977868',
                    'https://cdn.shopify.com/s/files/1/0521/0305/3481/files/ichu-120-2.png?v=1783977868',
                    'https://cdn.shopify.com/s/files/1/0521/0305/3481/files/ichu-120-3.png?v=1783977868',
                    'https://cdn.shopify.com/s/files/1/0521/0305/3481/files/ichu-120-4.png?v=1783977868'
                ])
            }
        ]
    },

    'napolitano': {
        id: 'napolitano',
        tipo: 'horno',
        combustible: 'leña',
        origen: 'italiano',
        nombre: 'Horno Artesanal – Modelo Napolitano – 100 cm',
        categoria: 'Hornos a Leña',
        precio: 4420.00,
        precioStr: 'S/ 4,420.00',
        descripcion: 'El Modelo Napolitano está inspirado en la tradición italiana, diseñado para alcanzar temperaturas extremas en tiempo récord y ofrecer resultados auténticos. Su distintivo techo plano maximiza la acumulación y distribución del calor, logrando cocciones rápidas y uniformes. Fabricado con materiales de alto rendimiento térmico y acabados de nivel profesional, es ideal tanto para uso residencial premium como para negocios gastronómicos exigentes.',
        imagenes: asegurar4Imagenes([
            'https://cdn.shopify.com/s/files/1/0521/0305/3481/files/napolitano03.png?v=1784148310',
            'https://cdn.shopify.com/s/files/1/0521/0305/3481/files/napolitano04.png?v=1784148310',
            'https://cdn.shopify.com/s/files/1/0521/0305/3481/files/napolitano05.png?v=1784148310',
            'https://cdn.shopify.com/s/files/1/0521/0305/3481/files/napolitano06.png?v=1784148310'
        ]),
        ventajasTecnicas: [
            'Cúpula de techo plano, que facilita el alcance de temperaturas máximas en pocos minutos.',
            'Aislamiento térmico en fibra cerámica (hasta 1200 °C) para retención de calor prolongada.',
            'Piso de ladrillos refractarios de 1 1/2", ideal para bases crujientes y cocción uniforme.',
            'Puerta de acero inoxidable con regulador de ventilación para control preciso de la combustión.',
            'Chimenea frontal con regulador de tiro para optimizar el flujo de aire.',
            'Termómetro analógico 0–500 °C integrado para monitoreo constante.',
            'Acabados exteriores en piedra de mármol con detalles en acero inoxidable para mayor resistencia y estética.'
        ],
        beneficiosGastronomicos: [
            'Perfecto para pizzas estilo napolitano, panes artesanales y preparaciones al horno que requieren temperaturas elevadas.',
            'Cocción rápida que conserva jugosidad y textura.',
            'Ideal para servicios de alta demanda o para experiencias gourmet en casa.'
        ],
        fichaTecnica: [
            'Medida exterior: 100 cm de diámetro',
            'Medida interior útil: 78 cm de diámetro',
            'Espesor de paredes térmicas: 11 cm (con núcleo de fibra cerámica)',
            'Capacidad: Hasta 4 pizzas grandes o 8 panes artesanales por tanda',
            'Aislamiento térmico: Fibra cerámica (hasta 1200 °C)',
            'Piso: Ladrillos refractarios de 1 1/2"',
            'Cúpula: Techo plano',
            'Puerta: Acero inoxidable con regulador de ventilación',
            'Termómetro: Analógico 0–500 °C',
            'Chimenea: Frontal con regulador de tiro',
            'Acabado exterior: Piedra de mármol con detalles en acero inoxidable',
            'Tipo de instalación: Entregado armado o fabricación in situ',
            'Tiempo de fabricación: 10 a 15 días útiles',
            'Uso recomendado: Residencial premium o comercial'
        ],
        informacionComercial: 'Precio publicado corresponde al horno en presentación a leña, entregado totalmente armado en medida estándar de 100 cm. Podemos fabricarlo en cualquier medida según requerimiento del cliente. Presentación dual (leña + gas) y fabricación in situ tienen un costo adicional.',
        porqueElegir: 'El Modelo Napolitano ofrece el balance perfecto entre tradición y eficiencia, con un diseño pensado para la cocción más exigente y acabados que aportan distinción a cualquier espacio. Es la herramienta ideal para quienes buscan calidad, estética y resultados impecables. Fabricado en Perú por Hornos Roca, con estándares de calidad premium.',
        opciones: [
            {
                nombreBoton: 'Napolitano – 80 cm',
                nombreCompleto: 'Horno Artesanal – Modelo Napolitano – 80 cm',
                precioStr: 'S/ 3,980.00',
                descripcion: 'El Modelo Napolitano 80 cm conserva la esencia del diseño italiano en un formato más compacto. Ideal para quienes buscan un horno de alto rendimiento en espacios reducidos sin perder la capacidad de alcanzar altas temperaturas y cocinar con calidad profesional.',
                imagenes: asegurar4Imagenes([
                    'https://cdn.shopify.com/s/files/1/0521/0305/3481/files/napolitano-80-2.png?v=1784211346',
                    'https://cdn.shopify.com/s/files/1/0521/0305/3481/files/napolitano-80-1.png?v=1784211346',
                    'https://cdn.shopify.com/s/files/1/0521/0305/3481/files/napolitano-80-3.png?v=1784211346',
                    'https://cdn.shopify.com/s/files/1/0521/0305/3481/files/napolitano-80-4.png?v=1784211346'
                ])
            },
            {
                nombreBoton: 'Napolitano – 100 cm',
                nombreCompleto: 'Horno Artesanal – Modelo Napolitano – 100 cm',
                precioStr: 'S/ 4,420.00',
                descripcion: 'El Modelo Napolitano está inspirado en la tradición italiana, diseñado para alcanzar temperaturas extremas en tiempo récord y ofrecer resultados auténticos. Su distintivo techo plano maximiza la acumulación y distribución del calor, logrando cocciones rápidas y uniformes. Fabricado con materiales de alto rendimiento térmico y acabados de nivel profesional, es ideal tanto para uso residencial premium como para negocios gastronómicos exigentes.',
                imagenes: asegurar4Imagenes([
                    'https://cdn.shopify.com/s/files/1/0521/0305/3481/files/napolitano03.png?v=1784148310',
                    'https://cdn.shopify.com/s/files/1/0521/0305/3481/files/napolitano04.png?v=1784148310',
                    'https://cdn.shopify.com/s/files/1/0521/0305/3481/files/napolitano05.png?v=1784148310',
                    'https://cdn.shopify.com/s/files/1/0521/0305/3481/files/napolitano06.png?v=1784148310'
                ])
            },
            {
                nombreBoton: 'Napolitano – 120 cm',
                nombreCompleto: 'Horno Artesanal – Modelo Napolitano – 120 cm',
                precioStr: 'S/ 5,564.00',
                descripcion: 'El Modelo Napolitano 120 cm amplía la capacidad del modelo original, ideal para producciones más grandes o para quienes desean un horno de gran formato con la misma eficiencia y diseño que caracteriza a la línea Napolitano.',
                imagenes: asegurar4Imagenes([
                    'https://cdn.shopify.com/s/files/1/0521/0305/3481/files/napolitano-120.4.png?v=1784214338',
                    'https://cdn.shopify.com/s/files/1/0521/0305/3481/files/napolitano-120.3.png?v=1784214338',
                    'https://cdn.shopify.com/s/files/1/0521/0305/3481/files/napolitano-120.1.png?v=1784214338',
                    'https://cdn.shopify.com/s/files/1/0521/0305/3481/files/napolitano-120.2.png?v=1784214338'
                ])
            }
        ]
    },

    'di-bronzo': {
        id: 'di-bronzo',
        tipo: 'horno',
        combustible: 'gas',
        origen: 'peruano',
        nombre: 'Horno Premium – Modelo Di Bronzo – 57×57×32 cm',
        categoria: 'Hornos a Gas',
        precio: 3900.00,
        precioStr: 'S/ 3,900.00',
        descripcion: 'El Horno Di Bronzo de Hornos Roca es un equipo profesional de gas LP, diseñado para cocción versátil y eficiente en espacios residenciales o gastronómicos. Su diseño compacto en medidas estándar de 57 × 57 × 32 cm lo convierte en la opción ideal para quienes buscan rendimiento profesional en un formato práctico y elegante. La cúpula metálica pintada en negro mate anticalórico aporta un acabado sobrio y moderno, mientras que su piso de placa refractaria asegura una cocción uniforme y auténtica.',
        imagenes: asegurar4Imagenes([
            'https://lacarboneragrill.pe/cdn/shop/files/diBRONZO1_1066x.png?v=1783366601',
            'https://cdn.shopify.com/s/files/1/0521/0305/3481/files/diBronzo04.png?v=1784038340',
            'https://lacarboneragrill.pe/cdn/shop/files/diBRONZO2_720x.png?v=1783366601',
            'https://cdn.shopify.com/s/files/1/0521/0305/3481/files/diBronzo03.png?v=1784038340'
        ]),
        ventajasTecnicas: [
            'Funcionalidad a gas LP con quemador tipo flauta, eficiente y seguro.',
            'Medida estándar: 57 × 57 × 32 cm, compacto y de gran rendimiento.',
            'Cúpula de acero inoxidable pintada en negro mate anticalórico, resistente y elegante.',
            'Piso de placa refractaria, ideal para retención y distribución de calor.',
            'Cámara térmica contraplacada con fibra cerámica (resistencia hasta 1200 °C).',
            'Chimenea frontal con regulador de tiro para manejo preciso del aire y calor.',
            'Termómetro integrado (0–500 °C) para control de temperatura.'
        ],
        beneficiosGastronomicos: [
            'Ideal para pizzas, lasañas, panes y carnes con cocción pareja y auténtico sabor.',
            'Mantiene calor estable por largos periodos, optimizando consumo de gas.',
            'Diseño compacto y elegante que se adapta fácilmente a cocinas, terrazas o negocios.',
            'Ofrece resultados de nivel profesional con el estilo moderno del acabado negro mate.'
        ],
        fichaTecnica: [
            'Medidas exteriores: 57 × 57 × 32 cm',
            'Material cúpula: Acero inoxidable pintado en negro mate anticalórico',
            'Piso: Placa refractaria',
            'Combustible: Gas LP (quemador tipo flauta)',
            'Aislamiento térmico: Fibra cerámica (hasta 1200 °C)',
            'Termómetro: Analógico 0–500 °C',
            'Chimenea: Frontal con regulador de tiro',
            'Tipo de instalación: Entregado armado',
            'Uso recomendado: Residencial, gourmet y gastronómico'
        ],
        informacionComercial: 'El precio publicado corresponde al modelo estándar en medida 57 × 57 × 32 cm. Entrega del horno completamente armado y listo para instalar. Fabricado en Perú por Hornos Roca, con estándares de calidad profesional.',
        porqueElegir: 'Porque combina diseño compacto, materiales de primera calidad y tecnología a gas para garantizar resultados profesionales en cada preparación. Su piso de placa refractaria y su acabado negro mate lo convierten en una opción robusta, elegante y funcional para quienes buscan un horno moderno y duradero. Fabricado en Perú por Hornos Roca, especialistas en hornos premium.'
    },

    // ========== ACCESORIOS ==========
    'soporte-pizza': {
        id: 'soporte-pizza',
        tipo: 'accesorio',
        combustible: null,
        nombre: 'Soporte para Bandeja de Pizza',
        categoria: 'Accesorios',
        precio: 31.90,
        precioStr: 'S/ 31.90',
        descripcion: 'El Soporte para Bandeja de Pizza de Hornos Roca está pensado para el momento más importante: servir. Te permite llevar la pizza a la mesa con una presentación más ordenada y práctica, manteniendo la bandeja estable y elevándola para un servicio cómodo. Además, incorpora un porta condimentos pequeño para tener a mano lo esencial (ají, orégano, aceite, etc.) y mejorar la experiencia al momento de comer.',
        imagenes: asegurar4Imagenes([
            'https://cdn.shopify.com/s/files/1/0521/0305/3481/files/nuevoPizzaBase01.png?v=1784062592',
            'https://cdn.shopify.com/s/files/1/0521/0305/3481/files/nuevoPizzaBase.png?v=1784062591',
            'https://cdn.shopify.com/s/files/1/0521/0305/3481/files/nuevoBasePizzero3.png?v=1784062592',
            'https://lacarboneragrill.pe/cdn/shop/files/nuevoBasePizzero04_720x.png?v=1784063373'
        ]),
        caracteristicas: [
            'Servicio más limpio y elegante: la bandeja se mantiene estable y elevada.',
            'Más comodidad en la mesa: facilita cortar y servir sin desorden.',
            'Porta condimentos integrado: todo a la mano al momento de servir.',
            'Ideal para casa o negocio: perfecto para terrazas, restaurantes, pizzerías y eventos.'
        ],
        comoElegir: [
            'Para presentar la pizza recién salida del horno de forma ordenada.',
            'Para servir porciones con estabilidad (sin apoyar la bandeja directo en la mesa).',
            'Para mejorar el “ritual” de la pizza con condimentos listos en el mismo punto de servicio.'
        ],
        especificacionesTecnicas: [
            { clave: 'Medidas', valor: '25 cm (largo) × 18 cm (ancho) × 19 cm (alto)' }
        ],
        faqs: [
            { pregunta: '¿Es para hornear dentro del horno?', respuesta: 'No. Este soporte está diseñado para servir y presentar la bandeja de pizza en mesa o estación de servicio.' },
            { pregunta: '¿Qué condimentos puedo colocar?', respuesta: 'Funciona perfecto para porciones pequeñas como orégano, ají, sal, aceite de oliva u otros básicos de mesa (según el tamaño de tus envases).' },
            { pregunta: '¿Sirve para cualquier bandeja?', respuesta: 'Sirve para bandejas que calcen correctamente con la base del soporte. Si usas una bandeja muy grande o muy pequeña, conviene validar compatibilidad.' }
        ],
        porqueElegir: 'Práctico soporte metálico para bandeja de pizza, incluye porta condimentos para mayor comodidad.'
    },

    'pala-pizzera': {
        id: 'pala-pizzera',
        tipo: 'accesorio',
        combustible: null,
        nombre: 'Pala Pizzera AISI 304',
        categoria: 'Accesorios',
        precio: 277.90,
        precioStr: 'S/ 277.90',
        descripcion: 'La Pala Pizzera Hornos Roca en acero inoxidable AISI 304 es el accesorio clave para trabajar pizzas en hornos con seguridad y precisión. Su largo te da alcance y control para cargar, girar y retirar la pizza sin deformarla, manteniendo una distancia cómoda frente al calor. Ideal para uso doméstico exigente y también para producción en pizzería.',
        imagenes: asegurar4Imagenes([
            'https://lacarboneragrill.pe/cdn/shop/files/palaPizzera1_1066x.png?v=1783636099',
            'https://lacarboneragrill.pe/cdn/shop/files/palaPizzera2_720x.png?v=1783717534',
            'https://lacarboneragrill.pe/cdn/shop/files/palaPizzera3_720x.png?v=1783969492',
            'https://lacarboneragrill.pe/cdn/shop/files/palaPizzerafondo_720x.png?v=1783970776'
        ]),
        caracteristicas: [
            'Acero inoxidable AISI 304: alta durabilidad, excelente desempeño en cocina y fácil limpieza.',
            'Más seguridad frente al calor: el largo de 120 cm protege tus manos y te da mayor alcance.',
            'Mejor control en el horneado: facilita ingresar y retirar la pizza con movimientos firmes.',
            'Ideal para pizzas grandes: diámetro amplio para manejar pizzas de buen tamaño y panes.'
        ],
        comoElegir: [
            'Espolvorea ligeramente la pala con harina o sémola para que la pizza deslice mejor.',
            'Ingresa y retira con movimientos rápidos y seguros.',
            'Limpia y seca después de usar para mantener el brillo y el desempeño del inox.'
        ],
        especificacionesTecnicas: [
            { clave: 'Diámetro', valor: '38 cm' },
            { clave: 'Largo total', valor: '120 cm' },
            { clave: 'Material', valor: 'Acero inoxidable AISI 304' }
        ],
        faqs: [
            { pregunta: '¿Sirve para hornos artesanales?', respuesta: 'Sí, es perfecta para hornos de alta temperatura.' },
            { pregunta: '¿Qué tamaño de pizza soporta?', respuesta: 'Su superficie de 38 cm está pensada para pizzas grandes, además de panes o focaccias.' },
            { pregunta: '¿El AISI 304 se oxida?', respuesta: 'El AISI 304 es altamente resistente a la corrosión en uso culinario normal. Para mantenerlo impecable, evita dejarlo húmedo por largos periodos y sécalo tras lavarlo.' }
        ],
        porqueElegir: 'Diseño profesional para manipular pizzas con facilidad y precisión.'
    },

    'bandeja': {
        id: 'bandeja',
        tipo: 'accesorio',
        combustible: null,
        nombre: 'Bandeja para Hornos',
        categoria: 'Accesorios',
        precio: 119.90,
        precioStr: 'S/ 119.90',
        descripcion: 'La Bandeja para Hornos de Hornos Roca está diseñada para ayudarte a cocinar con orden, practicidad y resultados parejos dentro del horno. Su formato es ideal para horneados en bandeja: desde preparaciones saladas hasta postres, permitiéndote manipular y retirar alimentos con mayor control, sin ensuciar de más la base del horno.',
        imagenes: asegurar4Imagenes([
            'https://cdn.shopify.com/s/files/1/0521/0305/3481/files/bandejahorno01_83c6f3fa-d940-4380-8bba-be538763c79e.png?v=1784040027',
            'https://cdn.shopify.com/s/files/1/0521/0305/3481/files/bandejahorno02_528b44e3-5e39-48ac-9d51-864118df0b58.png?v=1784040027',
            'https://lacarboneragrill.pe/cdn/shop/files/bandeja-para-horno_2_06261081-a55f-4bd1-994d-9a68e88ec9b0_720x.jpg?v=1766077877',
            'https://cdn.shopify.com/s/files/1/0521/0305/3481/files/bandejahorno04.png?v=1784040089'
        ]),
        caracteristicas: [
            'Mayor control y comodidad al hornear: cargas y retiras la preparación en una sola pieza.',
            'Cocción más ordenada: evita derrames directos sobre el piso del horno.',
            'Versátil: ideal para carnes al horno, vegetales, pastas, gratinados, panificados y más.',
            'Apta para uso doméstico o comercial (según el ritmo de trabajo del horno).'
        ],
        comoElegir: [
            'Precalienta el horno y coloca la bandeja cuando el calor esté estabilizado.',
            'Evita golpes fuertes al ingresar o retirar para prolongar su vida útil.',
            'Limpia cuando esté tibia y seca bien antes de guardar.'
        ],
        especificacionesTecnicas: [
            { clave: 'Medidas', valor: '31 cm (largo) × 38 cm (ancho) × 5 cm (alto)' },
            { clave: 'Espesor', valor: '0.8 mm' }
        ],
        faqs: [
            { pregunta: '¿Esta bandeja es solo para hornos Hornos Roca?', respuesta: 'No necesariamente. Funciona en hornos similares, siempre que el espacio interno permita el ingreso cómodo.' },
            { pregunta: '¿Qué significa espesor 0.8 mm?', respuesta: 'Es el grosor del material: una bandeja liviana y práctica para manipulación, ideal para horneados en bandeja.' },
            { pregunta: '¿Puedo usarla para pizza?', respuesta: 'Sí, puede usarse para pizzas en bandeja (tipo “a la romana” o focaccia), además de muchas otras preparaciones.' }
        ],
        porqueElegir: 'Resistente y fácil de limpiar, perfecta para todo tipo de cocciones.'
    },

    'puerta-inox': {
        id: 'puerta-inox',
        tipo: 'accesorio',
        combustible: null,
        nombre: 'Puerta de Acero Inoxidable para Horno Artesanal con Termómetro',
        categoria: 'Accesorios',
        precio: 749.00,
        precioStr: 'S/ 749.00',
        descripcion: 'La puerta de acero inoxidable con termómetro integrado de Hornos Roca está diseñada para que tu horno trabaje con más control, mejor rendimiento térmico y mayor seguridad. Incluye marco tipo arco, termómetro analógico frontal para monitorear la temperatura sin abrir, y compuerta inferior regulable que te permite manejar el tiro/entrada de aire (clave para sostener temperatura y cocinar parejo).',
        imagenes: asegurar4Imagenes([
            'https://cdn.shopify.com/s/files/1/0521/0305/3481/files/puertaHorno-04.png?v=1784235657',
            'https://cdn.shopify.com/s/files/1/0521/0305/3481/files/puertaHorno-03.png?v=1784235111',
            'https://cdn.shopify.com/s/files/1/0521/0305/3481/files/puertaHorno-02.png?v=1784235110',
            'https://cdn.shopify.com/s/files/1/0521/0305/3481/files/puertaHorno-01.png?v=1784235110'
        ]),
        caracteristicas: [
            'Control de temperatura en tiempo real: termómetro visible desde afuera, ideal para pizza, pan y asados.',
            'Mejor estabilidad térmica: menos pérdidas de calor por aperturas innecesarias.',
            'Regulador de aire inferior: ajustas combustión y tiro para afinar la cocción.',
            'Estructura robusta y práctica: bisagras firmes, agarre cómodo con mango de madera y formato pensado para uso continuo.'
        ],
        comoElegir: [
            'Esta medida es la útil (luz interior). Si tu boca ya está construida, conviene asegurar que el vano final quede en 40×30 cm útiles antes de instalar.'
        ],
        especificacionesTecnicas: [
            { clave: 'Medida útil (boca de horno)', valor: '40 cm (largo) × 30 cm (alto)' },
            { clave: 'Material', valor: 'Acero inoxidable' },
            { clave: 'Termómetro', valor: 'Analógico frontal' },
            { clave: 'Compuerta inferior', valor: 'Regulable para control de tiro' },
            { clave: 'Mango', valor: 'Madera' }
        ],
        faqs: [
            { pregunta: '¿El termómetro es digital o analógico?', respuesta: 'Es analógico, de lectura rápida y muy confiable para manejo de horno.' },
            { pregunta: '¿Para qué sirve la compuerta inferior?', respuesta: 'Para regular la entrada de aire y controlar mejor el fuego/combustión sin abrir la puerta principal.' },
            { pregunta: '¿Sirve para hornos de ladrillo?', respuesta: 'Sí, es ideal para hornos artesanales siempre que la boca del horno tenga la medida útil compatible (40×30 cm).' },
            { pregunta: '¿Mejorará mis resultados?', respuesta: 'Sí: con termómetro + control de aire tendrás cocciones más constantes y menos variación entre hornadas.' }
        ],
        porqueElegir: 'Mejora el control de temperatura y la seguridad durante la cocción.'
    },

    'cuchilla': {
        id: 'cuchilla',
        tipo: 'accesorio',
        combustible: null,
        nombre: 'Cuchilla Corta Pizza (Tipo Mezzaluna)',
        categoria: 'Accesorios',
        precio: 74.90,
        precioStr: 'S/ 74.90',
        descripcion: 'La Cuchilla Corta Pizza Hornos Roca es el accesorio ideal para lograr cortes rápidos, parejos y limpios sin aplastar la masa ni arrastrar los toppings. Su diseño curvo tipo mezzaluna con doble mango te da mayor control y estabilidad al cortar, haciendo que el servicio sea más ágil y con mejor presentación, tanto en casa como en pizzería.',
        imagenes: asegurar4Imagenes([
            'https://cdn.shopify.com/s/files/1/0521/0305/3481/files/cuchillaMezzaluna01.png?v=1784042136',
            'https://cdn.shopify.com/s/files/1/0521/0305/3481/files/cuchillaMezzaluna02.png?v=1784043688',
            'https://cdn.shopify.com/s/files/1/0521/0305/3481/files/cuchillaMezzaluna03.png?v=1784045008',
            'https://cdn.shopify.com/s/files/1/0521/0305/3481/files/cuchillaMezzaluna04.png?v=1784045478'
        ]),
        caracteristicas: [
            'Corte más limpio y uniforme: ayuda a mantener los ingredientes en su lugar.',
            'Más control al cortar: doble mango para aplicar presión pareja y segura.',
            'Rápida para servicio: ideal para cortar varias pizzas seguidas.',
            'Versátil: además de pizza, sirve para focaccia, panes planos y también para picar hierbas/ingredientes (uso culinario).'
        ],
        comoElegir: [
            'Coloca la pizza sobre una superficie estable (tabla o base adecuada).',
            'Apoya la cuchilla y usa un movimiento de balanceo (rocking) de lado a lado.',
            'Repite el balanceo hasta completar el corte; así evitas aplastar la masa.'
        ],
        especificacionesTecnicas: [
            { clave: 'Medidas', valor: '35 cm de largo × 21 cm de alto' },
            { clave: 'Material', valor: 'Acero inoxidable' }
        ],
        faqs: [],
        porqueElegir: 'Corte limpio y rápido, ideal para pizzas y masas.'
    },

    'termometro': {
        id: 'termometro',
        tipo: 'accesorio',
        combustible: null,
        nombre: 'Termómetro para Horno (Vástago 12 cm)',
        categoria: 'Accesorios',
        precio: 122.90,
        precioStr: 'S/ 122.90',
        descripcion: 'El Termómetro para Horno de Hornos Roca es el accesorio clave para dejar de cocinar “al ojo” y empezar a hornear con control real de temperatura. Se instala en la puerta o pared del horno y, gracias a su vástago de 12 cm, permite una lectura estable del calor para lograr pizzas bien cocidas, panes con buen desarrollo y asados más jugosos, con resultados repetibles en cada hornada.',
        imagenes: asegurar4Imagenes([
            'https://cdn.shopify.com/s/files/1/0521/0305/3481/files/termometroHorno01_800x800.png?v=1783716159',
            'https://lacarboneragrill.pe/cdn/shop/files/termometro01_400x.png?v=1784064855',
            'https://lacarboneragrill.pe/cdn/shop/files/termometro02_720x.png?v=1784064854',
            'https://lacarboneragrill.pe/cdn/shop/files/termometro03_720x.png?v=1784064854'
        ]),
        caracteristicas: [
            'Control de temperatura en tiempo real: mejora la consistencia de tus resultados.',
            'Ideal para pizza, pan y asados: ajustas el fuego según el tipo de cocción.',
            'Lectura rápida y clara: indicador analógico fácil de interpretar.',
            'Mejor eficiencia: evitas exceso de fuego y reduces errores por temperatura.'
        ],
        comoElegir: [
            'Instálalo donde permita leer la temperatura de forma cómoda (puerta o pared, según tu horno).',
            'Deja que el horno estabilice calor y usa la lectura para ajustar la intensidad de la leña.',
            'Para una lectura más precisa, evita abrir la puerta constantemente (cada apertura baja la temperatura).'
        ],
        especificacionesTecnicas: [
            { clave: 'Vástago', valor: '12 cm' },
            { clave: 'Rango de medición', valor: '0-500 °C (aproximado)' }
        ],
        faqs: [
            { pregunta: '¿Sirve para cualquier horno?', respuesta: 'Sí, siempre que el espesor de la pared o puerta permita instalar el vástago de 12 cm de forma segura.' },
            { pregunta: '¿Qué parte mide: el aire o la cúpula/piso?', respuesta: 'Este termómetro mide principalmente la temperatura del entorno interno donde está instalado. Para un control total, se complementa con la observación del piso/cúpula según tu técnica de horneado.' },
            { pregunta: '¿Por qué es mejor tener termómetro?', respuesta: 'Porque te permite repetir recetas: controlas el rango de temperatura ideal para pizza, pan o asados y reduces la variación entre hornadas.' }
        ],
        porqueElegir: 'Precisión y durabilidad para un control exacto de la temperatura.'
    },

    'rejilla': {
        id: 'rejilla',
        tipo: 'accesorio',
        combustible: null,
        nombre: 'Rejilla de Doble Altura de Cocción para Horno',
        categoria: 'Accesorios',
        precio: 850.00,
        precioStr: 'S/ 850.00',
        descripcion: 'La Rejilla de doble altura de Hornos Roca es el accesorio perfecto para aprovechar al máximo tu horno. Eleva tu cocción a un segundo nivel, permitiéndote cocinar dos preparaciones a la vez o manejar mejor los puntos de calor (piso vs cúpula). Ideal para panes, carnes, vegetales, gratinados y todo lo que necesita calor envolvente sin contacto directo con el piso refractario.',
        imagenes: asegurar4Imagenes([
            'https://lacarboneragrill.pe/cdn/shop/files/rejilla_de_Horno_720x.png?v=1784057425',
            'https://lacarboneragrill.pe/cdn/shop/files/rejilla_de_Horno_2_720x.png?v=1784057424',
            'https://lacarboneragrill.pe/cdn/shop/files/rejilla_de_Horno_3_720x.png?v=1784057425',
            'https://lacarboneragrill.pe/cdn/shop/files/ChatGPT_Image_14_jul_2026_02_19_16_p.m._720x.png?v=1784057805'
        ]),
        caracteristicas: [
            'Doble nivel de cocción: cocina más en el mismo espacio, sin saturar el piso del horno.',
            'Mejor control del calor: eleva la preparación para recibir más calor de la cúpula y reducir exceso de base.',
            'Cocción más pareja: ideal para horneados que requieren circulación de aire y calor envolvente.',
            'Orden y flujo de trabajo: facilita tandas en producción (pizzerías, panaderías, restaurantes) y también en casa.'
        ],
        comoElegir: [
            'Pan y focaccia: elevar ayuda a un horneado más uniforme.',
            'Carnes y vegetales al horno: menos contacto con el piso, mejor cocción envolvente.',
            'Gratinados y bandejas: optimizas espacio y controlas mejor el dorado superior.',
            'Cocciones por tandas: mientras una preparación termina arriba, puedes trabajar otra abajo.'
        ],
        especificacionesTecnicas: [
            { clave: 'Medidas', valor: '75 cm (largo) × 38 cm (fondo) × 15 cm (alto)' },
            { clave: 'Material', valor: 'Acero al carbono' }
        ],
        faqs: [
            { pregunta: '¿Qué significa “doble altura” en el horno?', respuesta: 'Que creas un segundo nivel dentro del horno, para cocinar más cantidad o separar preparaciones según el tipo de calor que necesitan.' },
            { pregunta: '¿Se puede usar con pizza?', respuesta: 'Sí, especialmente para mantener piezas calientes, terminar un dorado superior o manejar tandas. Para pizza directa al piso, lo ideal sigue siendo el ladrillo refractario.' },
            { pregunta: '¿El acero al carbono es adecuado para horno?', respuesta: 'Sí. Es un material robusto para uso térmico. Recomendación: secar bien después de limpiar para conservarlo en óptimas condiciones.' }
        ],
        porqueElegir: 'Maximiza la capacidad de cocción y permite preparar varios alimentos a la vez.'
    }
};

// ===== GENERAR LISTA PLANA DE PRODUCTOS (incluyendo variantes con IDs consistentes) =====
function getAllProducts() {
    const resultados = [];
    const productosBase = Object.values(productosDetalle);
    productosBase.forEach(p => {
        if (p.opciones && p.opciones.length > 0) {
            p.opciones.forEach((opcion) => {
                let tamaño = '';
                const match = opcion.nombreBoton.match(/(\d+)\s*cm/);
                if (match) {
                    tamaño = match[1] + 'cm';
                } else {
                    tamaño = 'opcion';
                }
                const idUnico = p.id + '-' + tamaño;
                const variante = {
                    id: idUnico,
                    tipo: p.tipo,
                    combustible: p.combustible,
                    origen: p.origen,
                    nombre: opcion.nombreCompleto,
                    categoria: p.categoria,
                    precio: parseFloat(opcion.precioStr.replace(/[^0-9.]/g, '')),
                    precioStr: opcion.precioStr,
                    descripcion: opcion.descripcion,
                    imagenes: opcion.imagenes,
                    _baseId: p.id,
                    _opcionIndex: p.opciones.indexOf(opcion),
                    opciones: undefined
                };
                resultados.push(variante);
            });
        } else {
            resultados.push({ ...p });
        }
    });
    return resultados;
}

// ===== FUNCIÓN MEJORADA PARA ABRIR WHATSAPP =====
function abrirWhatsApp(nombreProducto, precioStr) {
    const mensaje =
        `Hola, equipo de Hornos Roca. Les escribo desde su página web porque estoy interesado en el producto: ${encodeURIComponent(nombreProducto)} con un precio de ${encodeURIComponent(precioStr)}. Me gustaría recibir una cotización formal con detalles sobre disponibilidad, plazos de entrega y opciones de pago. Si existen variantes o personalizaciones, también me interesaría conocerlas. Agradezco su atención y quedo a la espera de su respuesta.`;
    window.open(`https://wa.me/51952363833?text=${mensaje}`, '_blank');
}

// ===== NAVEGACIÓN =====
const vistaPrincipal = document.getElementById('vistaPrincipal');
const vistaDetalle = document.getElementById('vistaDetalle');
const vistaCatalogo = document.getElementById('vistaCatalogo');
const logoLink = document.getElementById('logoLink');
const btnVolver = document.getElementById('btnVolver');
const btnVolverCatalogo = document.getElementById('btnVolverCatalogo');
const btnVerAccesorios = document.getElementById('btnVerAccesorios');
const btnCatalogoCompleto = document.getElementById('btnCatalogoCompleto');
const btnCotizarDetalle = document.getElementById('btnCotizarDetalle');

let imagenesActuales = [];
let indiceActual = 0;

function ocultarTodas() {
    vistaPrincipal.classList.add('hidden');
    vistaDetalle.classList.add('hidden');
    vistaDetalle.classList.remove('visible');
    vistaCatalogo.classList.add('hidden');
}

function mostrarVistaPrincipal(scrollToTop = true) {
    ocultarTodas();
    vistaPrincipal.classList.remove('hidden');
    if (scrollToTop) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    if (window._heroInterval) clearInterval(window._heroInterval);
    window._heroInterval = setInterval(nextSlide, 4000);
    if (window.location.hash) {
        history.pushState(null, '', window.location.pathname);
    }
}

function mostrarCatalogo() {
    ocultarTodas();
    vistaCatalogo.classList.remove('hidden');
    renderCatalogo();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (window._heroInterval) clearInterval(window._heroInterval);
    if (window.location.hash) {
        history.pushState(null, '', window.location.pathname);
    }
}

function mostrarDetalle(id) {
    const allProducts = getAllProducts();
    let producto = allProducts.find(p => p.id === id);
    if (!producto) {
        const base = productosDetalle[id];
        if (base) {
            producto = base;
        } else {
            return;
        }
    }

    let baseProducto = producto;
    let opcionIndex = -1;
    if (producto._baseId) {
        baseProducto = productosDetalle[producto._baseId];
        opcionIndex = producto._opcionIndex;
    } else {
        baseProducto = producto;
    }

    let selectedOption = null;
    if (baseProducto.opciones && baseProducto.opciones.length > 0) {
        if (opcionIndex >= 0) {
            selectedOption = baseProducto.opciones[opcionIndex];
        } else {
            selectedOption = baseProducto.opciones[1] || baseProducto.opciones[0];
        }
    }

    const datosMostrar = selectedOption || baseProducto;

    let categoriaHtml = baseProducto.categoria || 'Producto';
    if (baseProducto.tipo === 'horno') {
        if (baseProducto.origen === 'peruano') {
            categoriaHtml =
                `<img src="img/bandera-peru.png" class="inline-block w-6 h-6 mr-1" /> <span class="text-sm md:text-base">Horno Peruano</span>`;
        } else if (baseProducto.origen === 'italiano') {
            categoriaHtml =
                `<img src="img/bandera-italiana.png" class="inline-block w-6 h-6 mr-1" /> <span class="text-sm md:text-base">Horno Italiano</span>`;
        }
    }
    document.getElementById('detalle-categoria').innerHTML = categoriaHtml;

    document.getElementById('detalle-nombre').textContent = datosMostrar.nombre || baseProducto.nombre;
    document.getElementById('detalle-precio').textContent = datosMostrar.precioStr || baseProducto.precioStr ||
        'S/ 0.00';
    document.getElementById('detalle-descripcion').textContent = datosMostrar.descripcion || baseProducto
        .descripcion || 'Sin descripción.';

    imagenesActuales = datosMostrar.imagenes && datosMostrar.imagenes.length ? datosMostrar.imagenes :
        asegurar4Imagenes([]);
    indiceActual = 0;
    actualizarImagenPrincipal();

    const miniContainer = document.getElementById('detalle-miniaturas');
    miniContainer.innerHTML = '';
    const thumbnails = imagenesActuales.slice(0, 4);
    thumbnails.forEach((img, idx) => {
        const div = document.createElement('div');
        div.className = 'galeria-thumb bg-surface-container aspect-square flex items-center justify-center p-2 transition-all duration-300';
        div.innerHTML = `<img class="w-full h-full object-cover" src="${img}" alt="Miniatura ${idx + 1}" />`;
        div.addEventListener('click', () => {
            indiceActual = idx;
            actualizarImagenPrincipal();
        });
        miniContainer.appendChild(div);
    });

    const acordeonContainer = document.getElementById('detalle-acordeones');
    acordeonContainer.innerHTML = '';

    const secciones = [];

    if (baseProducto.caracteristicas) {
        secciones.push({
            titulo: 'Características clave',
            contenido: baseProducto.caracteristicas.map(item => `<li>${item}</li>`).join('')
        });
    }

    if (baseProducto.ventajasTecnicas) {
        secciones.push({
            titulo: 'Ventajas técnicas destacadas',
            contenido: baseProducto.ventajasTecnicas.map(item => `<li>${item}</li>`).join('')
        });
    }

    const especs = baseProducto.especificacionesTecnicas || baseProducto.especificaciones || [];
    if (especs.length > 0) {
        secciones.push({
            titulo: 'Especificaciones técnicas',
            contenido: especs.map(esp => `<li><strong>${esp.clave}:</strong> ${esp.valor}</li>`).join('')
        });
    }

    if (baseProducto.capacidadGastronomica) {
        secciones.push({
            titulo: 'Capacidad gastronómica referencial',
            contenido: baseProducto.capacidadGastronomica.map(item => `<li>${item}</li>`).join('')
        });
    }

    if (baseProducto.funcionesVersatilidad) {
        secciones.push({
            titulo: 'Funciones y versatilidad',
            contenido: baseProducto.funcionesVersatilidad.map(item => `<li>${item}</li>`).join('')
        });
    }

    if (baseProducto.beneficiosGastronomicos) {
        secciones.push({
            titulo: 'Beneficios gastronómicos',
            contenido: baseProducto.beneficiosGastronomicos.map(item => `<li>${item}</li>`).join('')
        });
    }

    if (baseProducto.fichaTecnica) {
        secciones.push({
            titulo: 'Ficha técnica',
            contenido: baseProducto.fichaTecnica.map(item => `<li>${item}</li>`).join('')
        });
    }

    if (baseProducto.comoElegir) {
        secciones.push({
            titulo: 'Cómo elegir tu medida ideal',
            contenido: baseProducto.comoElegir.map(item => `<li>${item}</li>`).join('')
        });
    }

    if (baseProducto.faqs) {
        secciones.push({
            titulo: 'Preguntas frecuentes',
            contenido: baseProducto.faqs.map(faq => `<li><strong>${faq.pregunta}</strong><br>${faq.respuesta}</li>`)
                .join('')
        });
    }

    if (baseProducto.informacionComercial) {
        secciones.push({
            titulo: 'Información comercial',
            contenido: `<p>${baseProducto.informacionComercial}</p>`
        });
    }

    if (baseProducto.vidaUtil) {
        secciones.push({
            titulo: 'Vida útil',
            contenido: baseProducto.vidaUtil.map(item => `<li>${item}</li>`).join('')
        });
    }

    if (baseProducto.recomendaciones) {
        secciones.push({
            titulo: 'Recomendaciones',
            contenido: baseProducto.recomendaciones.map(item => `<li>${item}</li>`).join('')
        });
    }

    if (baseProducto.porqueElegir) {
        secciones.push({
            titulo: '¿Por qué elegir este modelo?',
            contenido: `<p>${baseProducto.porqueElegir}</p>`
        });
    }

    secciones.forEach((sec) => {
        const details = document.createElement('details');
        details.className = 'group border-b border-outline-variant/30 hover:bg-surface-container-lowest transition-colors duration-300';

        const summary = document.createElement('summary');
        summary.className = 'flex items-center justify-between py-4 cursor-pointer list-none';
        summary.innerHTML = `
                        <span class="font-display-lg text-body-lg text-primary">${sec.titulo}</span>
                        <span class="material-symbols-outlined text-primary transition-transform duration-300 group-open:rotate-45">add</span>
                    `;
        details.appendChild(summary);

        const contentDiv = document.createElement('div');
        contentDiv.className = 'px-4 pt-2 pb-4 space-y-2 text-body-md text-on-surface-variant';
        if (sec.contenido.includes('<li>')) {
            contentDiv.innerHTML = `<ul class="list-disc pl-5 space-y-1">${sec.contenido}</ul>`;
        } else {
            contentDiv.innerHTML = sec.contenido;
        }
        details.appendChild(contentDiv);

        acordeonContainer.appendChild(details);
    });

    if (baseProducto.tipo === 'horno') {
        btnVerAccesorios.textContent = 'Ver Accesorios';
        btnVerAccesorios.dataset.accion = 'accesorios';
    } else {
        btnVerAccesorios.textContent = 'Ver Hornos';
        btnVerAccesorios.dataset.accion = 'hornos';
    }

    const btnCotizar = document.getElementById('btnCotizarDetalle');
    const nombreActual = document.getElementById('detalle-nombre').textContent;
    const precioActual = document.getElementById('detalle-precio').textContent;
    btnCotizar.onclick = function (e) {
        e.preventDefault();
        abrirWhatsApp(nombreActual, precioActual);
    };

    const opcionesContainer = document.getElementById('opciones-container');
    opcionesContainer.innerHTML = '';
    if (baseProducto.opciones && baseProducto.opciones.length > 0) {
        opcionesContainer.style.display = 'flex';
        let activeIndex = 1;
        if (opcionIndex >= 0) activeIndex = opcionIndex;
        else {
            const idx100 = baseProducto.opciones.findIndex(o => o.nombreBoton.includes('100'));
            if (idx100 !== -1) activeIndex = idx100;
            else activeIndex = 0;
        }

        baseProducto.opciones.forEach((opcion, index) => {
            const btn = document.createElement('button');
            const isActive = (index === activeIndex);
            btn.className =
                `px-5 py-2 text-sm font-semibold uppercase tracking-wider transition-colors duration-200 
                            ${isActive ? 'bg-[#d2af8b] text-black' : 'border border-white/40 text-white bg-transparent'}`;
            btn.textContent = opcion.nombreBoton;

            btn.addEventListener('click', function () {
                const tamaño = opcion.nombreBoton.match(/(\d+)\s*cm/);
                let idVariante = baseProducto.id;
                if (tamaño) {
                    idVariante += '-' + tamaño[1] + 'cm';
                } else {
                    idVariante += '-opcion' + index;
                }
                mostrarDetalle(idVariante);
            });

            opcionesContainer.appendChild(btn);
        });
    } else {
        opcionesContainer.style.display = 'none';
    }

    const tipoActual = baseProducto.tipo;
    const tipoOpuesto = tipoActual === 'horno' ? 'accesorio' : 'horno';
    const opcionesRec = getAllProducts().filter(p => p.tipo === tipoOpuesto && p.id !== id);
    const seleccionados = [];
    const copia = [...opcionesRec];
    while (seleccionados.length < 4 && copia.length > 0) {
        const randIdx = Math.floor(Math.random() * copia.length);
        seleccionados.push(copia.splice(randIdx, 1)[0]);
    }

    const recContainer = document.getElementById('detalle-recomendados');
    recContainer.innerHTML = '';
    if (seleccionados.length === 0) {
        recContainer.innerHTML = '<p class="text-white/50 text-center col-span-4">No hay productos recomendados.</p>';
    } else {
        seleccionados.forEach(rec => {
            const div = document.createElement('div');
            div.className = 'rec-card';
            const imgUrl = rec.imagenes && rec.imagenes.length ? rec.imagenes[0] : '';
            let label = 'Accesorio';
            if (rec.tipo === 'horno') {
                if (rec.origen === 'peruano') {
                    label =
                        `<img src="img/bandera-peru.png" class="inline-block w-4 h-3 mr-1" /> <span class="text-sm md:text-base">Horno Peruano</span>`;
                } else if (rec.origen === 'italiano') {
                    label =
                        `<img src="img/bandera-italiana.png" class="inline-block w-4 h-3 mr-1" /> <span class="text-sm md:text-base">Horno Italiano</span>`;
                }
            }
            div.innerHTML = `
                            <div class="rec-img">
                                <img src="${imgUrl}" alt="${rec.nombre}" />
                            </div>
                            <div class="rec-body">
                                <span class="font-body-md text-sm md:text-base text-secondary uppercase tracking-widest flex items-center gap-1">${label}</span>
                                <h3 class="font-display-lg text-body-lg text-primary mt-1">${rec.nombre}</h3>
                                <p class="font-price-display text-primary mt-1">${rec.precioStr}</p>
                                <div class="btn-group-vertical">
                                    <button class="btn-ver-detalle" data-product-id="${rec.id}">Ver Detalles</button>
                                    <button class="btn-cotizar-card" data-product-name="${rec.nombre}" data-product-price="${rec.precioStr}">Cotizar</button>
                                </div>
                            </div>
                        `;
            recContainer.appendChild(div);
        });

        recContainer.querySelectorAll('.btn-ver-detalle').forEach(btn => {
            btn.addEventListener('click', function (e) {
                e.stopPropagation();
                const id = this.dataset.productId;
                if (id) {
                    mostrarDetalle(id);
                }
            });
        });
        recContainer.querySelectorAll('.btn-cotizar-card').forEach(btn => {
            btn.addEventListener('click', function (e) {
                e.stopPropagation();
                const nombre = this.dataset.productName;
                const precio = this.dataset.productPrice || 'S/ 0.00';
                abrirWhatsApp(nombre, precio);
            });
        });
    }

    if (window.location.hash !== '#producto=' + id) {
        history.pushState(null, '', '#producto=' + id);
    }

    ocultarTodas();
    vistaDetalle.classList.remove('hidden');
    void vistaDetalle.offsetWidth;
    vistaDetalle.classList.add('visible');
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ===== FUNCIONES DEL CARRUSEL =====
function actualizarImagenPrincipal() {
    const img = document.getElementById('detalle-imagen-principal');
    if (imagenesActuales.length > 0 && imagenesActuales[indiceActual]) {
        img.src = imagenesActuales[indiceActual];
        img.alt = 'Producto';
    } else {
        img.src = '';
    }
    const indicadores = document.getElementById('carruselIndicadores');
    indicadores.innerHTML = '';
    imagenesActuales.forEach((_, idx) => {
        const dot = document.createElement('span');
        dot.className =
            `block w-2 h-2 rounded-full transition-colors ${idx === indiceActual ? 'bg-primary' : 'bg-primary/20'}`;
        indicadores.appendChild(dot);
    });
}

function carruselSiguiente() {
    if (imagenesActuales.length === 0) return;
    indiceActual = (indiceActual + 1) % imagenesActuales.length;
    actualizarImagenPrincipal();
}

function carruselAnterior() {
    if (imagenesActuales.length === 0) return;
    indiceActual = (indiceActual - 1 + imagenesActuales.length) % imagenesActuales.length;
    actualizarImagenPrincipal();
}

document.getElementById('carruselDer').addEventListener('click', carruselSiguiente);
document.getElementById('carruselIzq').addEventListener('click', carruselAnterior);

// ===== CATÁLOGO COMPLETO CON FILTROS LATERALES =====
let catalogoPaginaActual = 1;
const catalogoPorPagina = 8;

function getProductosFiltrados() {
    const tipoCheckboxes = document.querySelectorAll('#filtrosLateral .filtro-tipo:checked');
    const tiposSeleccionados = Array.from(tipoCheckboxes).map(el => el.value);
    const orden = document.getElementById('ordenCatalogo')?.value || 'alfabetico-asc';
    const precioMax = parseFloat(document.getElementById('precioMaxInput')?.value) || Infinity;
    const precioMin = parseFloat(document.getElementById('precioMinInput')?.value) || 0;

    let productos = getAllProducts();

    if (tiposSeleccionados.length > 0) {
        productos = productos.filter(p => tiposSeleccionados.includes(p.tipo));
    }

    productos = productos.filter(p => p.precio >= precioMin && p.precio <= precioMax);

    switch (orden) {
        case 'alfabetico-asc':
            productos.sort((a, b) => a.nombre.localeCompare(b.nombre));
            break;
        case 'alfabetico-desc':
            productos.sort((a, b) => b.nombre.localeCompare(a.nombre));
            break;
        case 'precio-asc':
            productos.sort((a, b) => a.precio - b.precio);
            break;
        case 'precio-desc':
            productos.sort((a, b) => b.precio - a.precio);
            break;
        default:
            break;
    }

    return productos;
}

function renderCatalogo() {
    const todos = getProductosFiltrados();
    const totalPaginas = Math.ceil(todos.length / catalogoPorPagina);
    if (catalogoPaginaActual > totalPaginas) catalogoPaginaActual = totalPaginas || 1;
    const inicio = (catalogoPaginaActual - 1) * catalogoPorPagina;
    const pagina = todos.slice(inicio, inicio + catalogoPorPagina);

    const grid = document.getElementById('catalogoGrid');
    if (pagina.length === 0) {
        grid.innerHTML = '<p class="text-white/50 col-span-full text-center py-10">No hay productos que coincidan con los filtros.</p>';
    } else {
        grid.innerHTML = pagina.map(p => {
            const img = p.imagenes && p.imagenes.length ? p.imagenes[0] : '';
            let label = 'Accesorio';
            if (p.tipo === 'horno') {
                if (p.origen === 'peruano') {
                    label =
                        `<img src="img/bandera-peru.png" class="inline-block w-4 h-3 mr-1" /> <span class="text-sm md:text-base">Peruano</span>`;
                } else if (p.origen === 'italiano') {
                    label =
                        `<img src="img/bandera-italiana.png" class="inline-block w-4 h-3 mr-1" /> <span class="text-sm md:text-base">Italiano</span>`;
                }
            }
            return `
                            <div class="catalogo-card cursor-pointer" data-product-id="${p.id}">
                                <div class="card-img">
                                    <img src="${img}" alt="${p.nombre}" onerror="this.style.display='none'" />
                                </div>
                                <div class="card-body">
                                    <span class="categoria-tag flex items-center gap-1 text-sm md:text-base">${label}</span>
                                    <h3>${p.nombre}</h3>
                                    <p class="precio">${p.precioStr}</p>
                                    <div class="btn-group-vertical">
                                        <button class="btn-ver-detalle" data-product-id="${p.id}">Ver Detalles</button>
                                        <button class="btn-cotizar-card" data-product-name="${p.nombre}" data-product-price="${p.precioStr}">Cotizar</button>
                                    </div>
                                </div>
                            </div>
                        `;
        }).join('');

        grid.querySelectorAll('.btn-ver-detalle').forEach(btn => {
            btn.addEventListener('click', function (e) {
                e.stopPropagation();
                const id = this.dataset.productId;
                if (id) {
                    mostrarDetalle(id);
                }
            });
        });
        grid.querySelectorAll('.btn-cotizar-card').forEach(btn => {
            btn.addEventListener('click', function (e) {
                e.stopPropagation();
                const nombre = this.dataset.productName;
                const precio = this.dataset.productPrice || 'S/ 0.00';
                abrirWhatsApp(nombre, precio);
            });
        });
        grid.querySelectorAll('.catalogo-card').forEach(card => {
            card.addEventListener('click', function (e) {
                if (e.target.closest('button')) return;
                const id = this.dataset.productId;
                if (id) {
                    mostrarDetalle(id);
                }
            });
        });
    }

    const paginacion = document.getElementById('catalogoPaginacion');
    if (totalPaginas > 1) {
        let html = '';
        for (let i = 1; i <= totalPaginas; i++) {
            html +=
                `<button class="px-3 py-1 border border-white/10 hover:bg-white/10 transition-colors ${i === catalogoPaginaActual ? 'bg-white/20 text-white' : 'text-white/60'}" data-pagina="${i}">${i}</button>`;
        }
        paginacion.innerHTML = html;
        paginacion.querySelectorAll('[data-pagina]').forEach(btn => {
            btn.addEventListener('click', function () {
                catalogoPaginaActual = parseInt(this.dataset.pagina);
                renderCatalogo();
            });
        });
    } else {
        paginacion.innerHTML = '';
    }
}

function renderFiltrosLateral() {
    const aside = document.getElementById('filtrosLateral');
    const allProducts = getAllProducts();
    const precios = allProducts.map(p => p.precio);
    const minPrecio = Math.min(...precios);
    const maxPrecio = Math.max(...precios);

    aside.innerHTML = `
                    <div class="filtro-categoria">
                        <h4>Categoría</h4>
                        <label><input type="checkbox" class="filtro-tipo" value="horno" /> Hornos</label>
                        <label><input type="checkbox" class="filtro-tipo" value="accesorio" /> Accesorios</label>
                    </div>
                    <div class="filtro-categoria">
                        <h4>Ordenar por</h4>
                        <select id="ordenCatalogo" class="w-full bg-transparent border border-white/10 rounded-none px-2 py-1 text-sm text-white">
                            <option value="alfabetico-asc">Alfabético (A-Z)</option>
                            <option value="alfabetico-desc">Alfabético (Z-A)</option>
                            <option value="precio-asc">Precio (menor a mayor)</option>
                            <option value="precio-desc">Precio (mayor a menor)</option>
                        </select>
                    </div>
                    <div class="filtro-categoria price-filter-wrapper-dark">
                        <h4>Filtrar por precio</h4>
                        <div class="price-display-badge-dark" id="precioDisplayCatalogo">${formatPEN(maxPrecio)}</div>
                        <div class="slider-container">
                            <div class="slider-track-dark">
                                <div class="slider-fill-dark" id="sliderFillCatalogo" style="width: 100%;"></div>
                                <div class="elegant-thumb-dark" id="elegantThumbCatalogo" style="left: 100%;"></div>
                                <input type="range" class="price-slider-native-dark" id="priceSliderCatalogo" min="${minPrecio}" max="${maxPrecio}" value="${maxPrecio}" step="50" />
                            </div>
                        </div>
                        <div class="labels-minmax-dark">
                            <span>${formatPEN(minPrecio)}</span>
                            <span>${formatPEN(maxPrecio)}</span>
                        </div>
                        <input type="hidden" id="precioMinInput" value="${minPrecio}" />
                        <input type="hidden" id="precioMaxInput" value="${maxPrecio}" />
                    </div>
                    <button id="btnLimpiarFiltrosCatalogo" class="w-full mt-2 text-xs text-white/50 hover:text-white transition-colors border border-white/10 py-1.5 rounded-none">Limpiar filtros</button>
                `;

    aside.querySelectorAll('.filtro-tipo').forEach(el => {
        el.addEventListener('change', function () {
            catalogoPaginaActual = 1;
            renderCatalogo();
        });
    });

    document.getElementById('ordenCatalogo').addEventListener('change', function () {
        catalogoPaginaActual = 1;
        renderCatalogo();
    });

    const slider = document.getElementById('priceSliderCatalogo');
    const fill = document.getElementById('sliderFillCatalogo');
    const thumb = document.getElementById('elegantThumbCatalogo');
    const display = document.getElementById('precioDisplayCatalogo');
    const minInput = document.getElementById('precioMinInput');
    const maxInput = document.getElementById('precioMaxInput');

    slider.addEventListener('input', function () {
        const val = Number(this.value);
        const percent = ((val - minPrecio) / (maxPrecio - minPrecio)) * 100;
        fill.style.width = percent + '%';
        thumb.style.left = percent + '%';
        display.textContent = formatPEN(val);
        maxInput.value = val;
        catalogoPaginaActual = 1;
        renderCatalogo();
    });

    document.getElementById('btnLimpiarFiltrosCatalogo').addEventListener('click', function () {
        aside.querySelectorAll('.filtro-tipo').forEach(el => el.checked = false);
        document.getElementById('ordenCatalogo').value = 'alfabetico-asc';
        slider.value = maxPrecio;
        fill.style.width = '100%';
        thumb.style.left = '100%';
        display.textContent = formatPEN(maxPrecio);
        maxInput.value = maxPrecio;
        catalogoPaginaActual = 1;
        renderCatalogo();
    });
}

function formatPEN(amount) {
    return 'S/ ' + amount.toLocaleString('es-PE', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

// ===== RENDERIZADO DE LA COLECCIÓN =====
const productosLista = [
    {
        id: 'colosso', nombre: 'Horno Artesanal Colosso di Forgia 100 cm', precio: 'S/ 5,170.00',
        categoria: 'hornos', imagen: 'https://lacarboneragrill.pe/cdn/shop/files/colosoDiForgia1_1066x.png?v=1783366960',
        origen: 'peruano'
    },
    {
        id: 'nina-pacha', nombre: 'Horno Pachamanquero Multifunción – Modelo Nina Pacha', precio: 'S/ 3,709.00',
        categoria: 'hornos', imagen: 'https://lacarboneragrill.pe/cdn/shop/files/pachamanqueroNina2_1066x.png?v=1783786610',
        origen: 'peruano'
    },
    {
        id: 'nina', nombre: 'Horno Artesanal – Modelo Nina – 100 cm', precio: 'S/ 4,585.00',
        categoria: 'hornos', imagen: 'https://lacarboneragrill.pe/cdn/shop/files/nuevoNina01_1066x.png?v=1784134987',
        origen: 'peruano'
    },
    {
        id: 'ichu', nombre: 'Horno Artesanal – Modelo Ichu – 100 cm', precio: 'S/ 4,330.00',
        categoria: 'hornos', imagen: 'https://lacarboneragrill.pe/cdn/shop/files/modeloIchu5_720x.png?v=1783367134',
        origen: 'peruano'
    },
    {
        id: 'napolitano', nombre: 'Horno Artesanal – Modelo Napolitano – 100 cm', precio: 'S/ 4,420.00',
        categoria: 'hornos', imagen: 'https://cdn.shopify.com/s/files/1/0521/0305/3481/files/napolitano03.png?v=1784148310',
        origen: 'italiano'
    },
    {
        id: 'di-bronzo', nombre: 'Horno Premium – Modelo Di Bronzo – 57×57×32 cm', precio: 'S/ 3,900.00',
        categoria: 'hornos', imagen: 'https://lacarboneragrill.pe/cdn/shop/files/diBRONZO1_1066x.png?v=1783366601',
        origen: 'peruano'
    },
    {
        id: 'soporte-pizza', nombre: 'Soporte para Bandeja de Pizza', precio: 'S/ 31.90',
        categoria: 'accesorios', imagen: 'https://cdn.shopify.com/s/files/1/0521/0305/3481/files/nuevoPizzaBase01.png?v=1784062592'
    },
    {
        id: 'pala-pizzera', nombre: 'Pala Pizzera AISI 304', precio: 'S/ 277.90',
        categoria: 'accesorios', imagen: 'https://lacarboneragrill.pe/cdn/shop/files/palaPizzera1_1066x.png?v=1783636099'
    },
    {
        id: 'bandeja', nombre: 'Bandeja para Hornos', precio: 'S/ 119.90',
        categoria: 'accesorios', imagen: 'https://lacarboneragrill.pe/cdn/shop/files/bandejahorno01_83c6f3fa-d940-4380-8bba-be538763c79e_720x.png?v=1784040027'
    },
    {
        id: 'puerta-inox', nombre: 'Puerta de Acero Inoxidable para Horno Artesanal con Termómetro',
        precio: 'S/ 749.00', categoria: 'accesorios', imagen: 'https://cdn.shopify.com/s/files/1/0521/0305/3481/files/puertaHorno-04.png?v=1784235657'
    },
    {
        id: 'cuchilla', nombre: 'Cuchilla Corta Pizza (Tipo Mezzaluna)', precio: 'S/ 74.90',
        categoria: 'accesorios', imagen: 'https://cdn.shopify.com/s/files/1/0521/0305/3481/files/cuchillaMezzaluna01.png?v=1784042136'
    },
    {
        id: 'termometro', nombre: 'Termómetro para Horno (Vástago 12 cm)', precio: 'S/ 122.90',
        categoria: 'accesorios', imagen: 'https://cdn.shopify.com/s/files/1/0521/0305/3481/files/termometroHorno01_800x800.png?v=1783716159'
    },
    {
        id: 'rejilla', nombre: 'Rejilla de Doble Altura de Cocción para Horno', precio: 'S/ 850.00',
        categoria: 'accesorios', imagen: 'https://lacarboneragrill.pe/cdn/shop/files/rejilla_de_Horno_720x.png?v=1784057425'
    }
];

const container = document.getElementById('productosContainer');
const filtroHornos = document.getElementById('filtroHornos');
const filtroAccesorios = document.getElementById('filtroAccesorios');

function renderProductos(categoria) {
    const filtrados = productosLista.filter(p => p.categoria === categoria);
    container.innerHTML = filtrados.map(p => {
        let label = categoria === 'hornos' ? 'Horno' : 'Accesorio';
        if (categoria === 'hornos') {
            if (p.origen === 'peruano') {
                label =
                    `<img src="img/bandera-peru.png" class="inline-block w-5 h-5 mr-1" /> <span class="text-sm md:text-base">Horno Peruano</span>`;
            } else if (p.origen === 'italiano') {
                label =
                    `<img src="img/bandera-italiana.png" class="inline-block w-5 h-5 mr-1" /> <span class="text-sm md:text-base">Horno Italiano</span>`;
            }
        }
        return `
                        <div class="group relative bg-background border border-outline-variant/10 overflow-hidden cursor-pointer" data-product-id="${p.id}">
                            <div class="aspect-square w-full overflow-hidden bg-surface-container-low">
                                <img class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                                     src="${p.imagen || ''}" 
                                     alt="${p.nombre}" 
                                     onerror="this.style.display='none'" />
                            </div>
                            <div class="p-8">
                                <span class="flex items-center gap-2 text-sm md:text-base font-medium text-primary/80 tracking-wide mb-2 block">
                                    ${label}
                                </span>
                                <h3 class="font-headline-display text-[20px] uppercase text-primary">${p.nombre}</h3>
                                <p class="font-body-lg text-body-lg text-on-surface-variant mt-2 font-semibold">${p.precio}</p>
                                <div class="btn-group-horizontal">
                                    <button class="btn-ver-detalle" data-product-id="${p.id}">Ver Detalles</button>
                                    <button class="btn-cotizar-card" data-product-name="${p.nombre}" data-product-price="${p.precio}">Cotizar</button>
                                </div>
                            </div>
                        </div>
                    `;
    }).join('');
    agregarEventosProductos();
}

function agregarEventosProductos() {
    document.querySelectorAll('#productosContainer .btn-ver-detalle').forEach(btn => {
        btn.addEventListener('click', function (e) {
            e.stopPropagation();
            const id = this.dataset.productId;
            if (id && productosDetalle[id]) {
                mostrarDetalle(id);
            }
        });
    });
    document.querySelectorAll('#productosContainer .btn-cotizar-card').forEach(btn => {
        btn.addEventListener('click', function (e) {
            e.stopPropagation();
            const nombre = this.dataset.productName;
            const precio = this.dataset.productPrice || 'S/ 0.00';
            abrirWhatsApp(nombre, precio);
        });
    });
    document.querySelectorAll('#productosContainer [data-product-id]').forEach(card => {
        card.addEventListener('click', function (e) {
            if (e.target.closest('button')) return;
            const id = this.dataset.productId;
            if (id && productosDetalle[id]) {
                mostrarDetalle(id);
            }
        });
    });
}

renderProductos('hornos');

filtroHornos.addEventListener('click', function () {
    renderProductos('hornos');
    filtroHornos.className = 'text-primary font-headline-section text-[12px] border-b border-primary pb-1';
    filtroAccesorios.className = 'text-on-surface-variant font-headline-section text-[12px] hover:text-primary transition-colors';
});

filtroAccesorios.addEventListener('click', function () {
    renderProductos('accesorios');
    filtroAccesorios.className = 'text-primary font-headline-section text-[12px] border-b border-primary pb-1';
    filtroHornos.className = 'text-on-surface-variant font-headline-section text-[12px] hover:text-primary transition-colors';
});

// ===== BOTONES DE NAVEGACIÓN =====
document.querySelectorAll('[data-product]').forEach(el => {
    el.addEventListener('click', function (e) {
        e.preventDefault();
        const id = this.dataset.product;
        if (id && productosDetalle[id]) {
            mostrarDetalle(id);
            const megaMenu = document.getElementById('megaMenu');
            if (megaMenu) megaMenu.classList.add('hidden');
            cerrarMenuMobile();
        }
    });
});

logoLink.addEventListener('click', function (e) {
    e.preventDefault();
    mostrarVistaPrincipal(true);
});

btnVolver.addEventListener('click', function () {
    if (!vistaCatalogo.classList.contains('hidden')) {
        mostrarCatalogo();
    } else {
        mostrarVistaPrincipal(true);
    }
});

btnVolverCatalogo.addEventListener('click', function () {
    mostrarVistaPrincipal(true);
});

btnVerAccesorios.addEventListener('click', function () {
    const accion = this.dataset.accion;
    mostrarVistaPrincipal(false);
    if (accion === 'accesorios') {
        filtroAccesorios.click();
    } else {
        filtroHornos.click();
    }
    const target = document.getElementById('products');
    if (target) {
        const headerHeight = document.querySelector('header')?.offsetHeight || 80;
        const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;
        window.scrollTo({ top: targetPosition, behavior: 'smooth' });
    }
});

btnCotizarDetalle.addEventListener('click', function (e) { });

btnCatalogoCompleto.addEventListener('click', function () {
    renderFiltrosLateral();
    catalogoPaginaActual = 1;
    mostrarCatalogo();
});

// ===== MEGA MENÚ HOVER =====
const productosLink = document.getElementById('productosLink');
const megaMenu = document.getElementById('megaMenu');
let hoverTimeout;
let isOverMenu = false;

function showMegaMenu() {
    clearTimeout(hoverTimeout);
    megaMenu.classList.remove('hidden');
}

function hideMegaMenu() {
    hoverTimeout = setTimeout(() => { if (!isOverMenu) megaMenu.classList.add('hidden'); }, 150);
}

productosLink.addEventListener('mouseenter', showMegaMenu);
productosLink.addEventListener('mouseleave', hideMegaMenu);
megaMenu.addEventListener('mouseenter', () => {
    isOverMenu = true;
    clearTimeout(hoverTimeout);
});
megaMenu.addEventListener('mouseleave', () => {
    isOverMenu = false;
    hideMegaMenu();
});
productosLink.addEventListener('click', () => { megaMenu.classList.add('hidden'); });

// ===== MENÚ LATERAL MÓVIL =====
const menuHamburguesa = document.getElementById('menuHamburguesa');
const mobilePanel = document.getElementById('mobilePanel');
const mobileOverlay = document.getElementById('mobileOverlay');
const cerrarMenu = document.getElementById('cerrarMenuMobile');
let mobileOpen = false;

function abrirMenuMobile() {
    mobilePanel.classList.add('open');
    mobileOverlay.classList.add('open');
    mobileOpen = true;
    document.body.classList.add('overflow-hidden');
}

function cerrarMenuMobile() {
    mobilePanel.classList.remove('open');
    mobileOverlay.classList.remove('open');
    mobileOpen = false;
    document.body.classList.remove('overflow-hidden');
    document.querySelectorAll('.cat-content.open').forEach(el => el.classList.remove('open'));
    document.querySelectorAll('.cat-icon').forEach(icon => icon.style.transform = 'rotate(0deg)');
    const prodContent = document.getElementById('productosAccordionContent');
    const prodIcon = document.getElementById('productosAccordionIcon');
    if (prodContent.classList.contains('open')) {
        prodContent.classList.remove('open');
        prodIcon.style.transform = 'rotate(0deg)';
        document.getElementById('productosAccordionBtn').setAttribute('aria-expanded', 'false');
    }
}

menuHamburguesa.addEventListener('click', () => { if (mobileOpen) { cerrarMenuMobile(); } else { abrirMenuMobile(); } });
cerrarMenu.addEventListener('click', cerrarMenuMobile);
mobileOverlay.addEventListener('click', cerrarMenuMobile);
document.querySelectorAll('#mobilePanel a').forEach(link => { link.addEventListener('click', () => { cerrarMenuMobile(); }); });

// ===== ACORDEÓN PRINCIPAL PRODUCTOS (móvil) =====
const productosAccordionBtn = document.getElementById('productosAccordionBtn');
const productosAccordionContent = document.getElementById('productosAccordionContent');
const productosAccordionIcon = document.getElementById('productosAccordionIcon');
let accordionOpen = false;
productosAccordionBtn.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    accordionOpen = !accordionOpen;
    if (accordionOpen) {
        productosAccordionContent.classList.add('open');
        productosAccordionIcon.style.transform = 'rotate(180deg)';
        productosAccordionBtn.setAttribute('aria-expanded', 'true');
    } else {
        productosAccordionContent.classList.remove('open');
        productosAccordionIcon.style.transform = 'rotate(0deg)';
        productosAccordionBtn.setAttribute('aria-expanded', 'false');
        document.querySelectorAll('.cat-content.open').forEach(el => el.classList.remove('open'));
        document.querySelectorAll('.cat-icon').forEach(icon => icon.style.transform = 'rotate(0deg)');
    }
});

// ===== ACORDEONES DE CATEGORÍAS (móvil) =====
document.querySelectorAll('.categoria-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        const targetId = btn.getAttribute('data-target');
        const targetContent = document.getElementById(targetId);
        const icon = btn.querySelector('.cat-icon');
        const isOpen = targetContent.classList.contains('open');
        document.querySelectorAll('.cat-content.open').forEach(el => {
            if (el !== targetContent) {
                el.classList.remove('open');
                const otherIcon = el.previousElementSibling?.querySelector('.cat-icon');
                if (otherIcon) otherIcon.style.transform = 'rotate(0deg)';
            }
        });
        document.querySelectorAll('.cat-icon').forEach(ic => {
            if (ic !== icon) ic.style.transform = 'rotate(0deg)';
        });
        if (!isOpen) {
            targetContent.classList.add('open');
            icon.style.transform = 'rotate(180deg)';
        } else {
            targetContent.classList.remove('open');
            icon.style.transform = 'rotate(0deg)';
        }
    });
});

// ===== NAVEGACIÓN DESDE EL MENÚ =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        const target = document.querySelector(targetId);
        if (!target) return;

        if (vistaPrincipal.classList.contains('hidden')) {
            mostrarVistaPrincipal(false);
        }
        if (mobileOpen) cerrarMenuMobile();
        if (!megaMenu.classList.contains('hidden')) {
            megaMenu.classList.add('hidden');
        }
        const header = document.querySelector('header');
        const headerHeight = header ? header.offsetHeight : 80;
        const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;
        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
    });
});

// ===== CARRUSEL AUTOMÁTICO DEL HÉROE =====
const slides = document.querySelectorAll('.hero-slide');
if (slides.length) {
    let current = 0;

    function goTo(index) {
        slides.forEach((el, i) => { el.classList.toggle('active', i === index); });
        current = index;
    }

    function nextSlide() {
        const next = (current + 1) % slides.length;
        goTo(next);
    }
    const interval = setInterval(nextSlide, 4000);
    const heroWrapper = document.querySelector('.hero-wrapper');
    if (heroWrapper) {
        heroWrapper.addEventListener('mouseenter', () => clearInterval(interval));
        heroWrapper.addEventListener('mouseleave', () => {
            clearInterval(window._heroInterval);
            window._heroInterval = setInterval(nextSlide, 4000);
        });
        window._heroInterval = interval;
    }
}

// ===== MANEJO DE URL (HASH) =====
function procesarHash() {
    const hash = window.location.hash;
    if (hash.startsWith('#producto=')) {
        const id = hash.replace('#producto=', '');
        const all = getAllProducts();
        const existe = all.some(p => p.id === id) || productosDetalle[id];
        if (existe) {
            mostrarDetalle(id);
            return true;
        }
    }
    return false;
}

window.addEventListener('load', function () {
    if (!procesarHash()) {
        mostrarVistaPrincipal(true);
    }
});

window.addEventListener('popstate', function () {
    if (!procesarHash()) {
        mostrarVistaPrincipal(true);
    }
});

// ===== LÓGICA DEL OVERLAY DE BÚSQUEDA (MEJORADA) =====
(function () {
    const searchOverlay = document.getElementById('search-overlay');
    const searchInput = document.getElementById('search-input');
    const searchClose = document.getElementById('search-close');
    const searchTriggerDesktop = document.getElementById('searchTriggerDesktop');
    const searchTriggerMobile = document.getElementById('searchTriggerMobile');
    const defaultView = document.getElementById('search-default-view');
    const resultsView = document.getElementById('search-results-view');
    const resultsList = document.getElementById('search-results-list');
    const resultCount = document.getElementById('result-count');

    const bestSellersContainer = document.getElementById('search-best-sellers');
    const featuredContainer = document.getElementById('search-featured-content');
    const featuredLink = document.getElementById('search-featured-link');
    const contadorHornos = document.getElementById('contador-hornos');
    const contadorAccesorios = document.getElementById('contador-accesorios');

    const allProducts = getAllProducts();
    const totalHornos = allProducts.filter(p => p.tipo === 'horno').length;
    const totalAccesorios = allProducts.filter(p => p.tipo === 'accesorio').length;
    if (contadorHornos) contadorHornos.textContent = `(${totalHornos})`;
    if (contadorAccesorios) contadorAccesorios.textContent = `(${totalAccesorios})`;

    let featuredProductId = 'colosso-100cm';

    function abrirBusqueda() {
        const header = document.querySelector('header');
        const headerHeight = header ? header.offsetHeight : 80;
        searchOverlay.style.top = headerHeight + 'px';
        searchOverlay.style.maxHeight = `calc(100vh - ${headerHeight}px)`;
        searchOverlay.classList.add('active');
        setTimeout(() => searchInput.focus(), 300);
        if (!megaMenu.classList.contains('hidden')) megaMenu.classList.add('hidden');
        if (mobileOpen) cerrarMenuMobile();
    }

    function cerrarBusqueda() {
        searchOverlay.classList.remove('active');
        setTimeout(() => {
            searchOverlay.style.top = '0px';
            searchOverlay.style.maxHeight = '0';
        }, 500);
        searchInput.value = '';
        defaultView.classList.remove('hidden');
        resultsView.classList.add('hidden');
        renderBestSellers();
        renderFeatured();
    }

    searchTriggerDesktop.addEventListener('click', abrirBusqueda);
    searchTriggerMobile.addEventListener('click', abrirBusqueda);
    searchClose.addEventListener('click', cerrarBusqueda);

    document.addEventListener('click', function (e) {
        if (!searchOverlay.classList.contains('active')) return;
        const triggers = [searchTriggerDesktop, searchTriggerMobile, searchClose];
        if (triggers.includes(e.target) || triggers.includes(e.target.closest('button'))) {
            return;
        }
        const inner = document.querySelector('.search-inner');
        if (!inner.contains(e.target)) {
            cerrarBusqueda();
        }
    });

    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && searchOverlay.classList.contains('active')) {
            cerrarBusqueda();
        }
    });

    function normalizarTexto(texto) {
        return texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/[^a-z0-9\s]/g, ' ');
    }

    function realizarBusqueda(termino) {
        termino = termino.trim();
        if (termino.length <= 2) {
            defaultView.classList.remove('hidden');
            resultsView.classList.add('hidden');
            return;
        }

        const palabras = normalizarTexto(termino).split(/\s+/).filter(p => p.length > 0);
        const productos = getAllProducts();

        const resultados = productos.filter(p => {
            let nombreCompleto = normalizarTexto(p.nombre);
            const categoria = normalizarTexto(p.categoria || '');
            const precioNum = p.precioStr.replace(/[^0-9]/g, '');
            return palabras.some(pal =>
                nombreCompleto.includes(pal) ||
                categoria.includes(pal) ||
                precioNum.includes(pal)
            );
        });

        resultados.sort((a, b) => {
            const aNombre = normalizarTexto(a.nombre);
            const bNombre = normalizarTexto(b.nombre);
            const aMatch = palabras.some(p => aNombre.includes(p));
            const bMatch = palabras.some(p => bNombre.includes(p));
            return (aMatch && !bMatch) ? -1 : (!aMatch && bMatch) ? 1 : 0;
        });

        defaultView.classList.add('hidden');
        resultsView.classList.remove('hidden');
        resultCount.textContent = resultados.length;

        if (resultados.length === 0) {
            resultsList.innerHTML =
                `<p class="text-white/50 text-center py-4">No se encontraron productos para "${termino}".</p>`;
        } else {
            resultsList.innerHTML = resultados.map(p => {
                const img = p.imagenes && p.imagenes.length ? p.imagenes[0] : '';
                return `
                                <div class="search-product-item" data-product-id="${p.id}">
                                    <div class="item-img">
                                        <img src="${img}" alt="${p.nombre}" />
                                    </div>
                                    <div class="item-info">
                                        <div class="item-name">${p.nombre}</div>
                                        <div class="item-price">${p.precioStr}</div>
                                    </div>
                                    <span class="material-symbols-outlined arrow-icon">arrow_forward</span>
                                </div>
                            `;
            }).join('');

            resultsList.querySelectorAll('[data-product-id]').forEach(el => {
                el.addEventListener('click', function () {
                    const id = this.dataset.productId;
                    if (id) {
                        cerrarBusqueda();
                        mostrarDetalle(id);
                    }
                });
            });
        }
    }

    // ===== PRODUCTO DESTACADO =====
    function renderFeatured() {
        const all = getAllProducts();
        const featured = all.find(p => p.id === 'colosso-100cm') || all.find(p => p.tipo === 'horno') || all[0];
        if (!featured) return;
        featuredProductId = featured.id;
        const img = featured.imagenes && featured.imagenes.length ? featured.imagenes[0] : '';
        featuredContainer.innerHTML = `
                        <div class="featured-bg" style="background-image: url('${img}');"></div>
                        <div class="featured-overlay"></div>
                        <div class="featured-content">
                            <p class="tag">NUEVO</p>
                            <h4>${featured.nombre}</h4>
                            <p>Horno Artesanal</p>
                        </div>
                    `;
        featuredContainer.dataset.productId = featured.id;
        featuredContainer.addEventListener('click', function (e) {
            if (e.target.tagName === 'BUTTON' || e.target.tagName === 'A') e.stopPropagation();
            const id = this.dataset.productId;
            if (id) {
                cerrarBusqueda();
                mostrarDetalle(id);
            }
        });
        featuredLink.dataset.productId = featured.id;
        featuredLink.href = '#';
        featuredLink.textContent = 'Ver detalles →';
        featuredLink.addEventListener('click', function (e) {
            e.preventDefault();
            const id = this.dataset.productId;
            if (id) {
                cerrarBusqueda();
                mostrarDetalle(id);
            }
        });
    }

    // ===== MÁS VENDIDOS =====
    function renderBestSellers() {
        const all = getAllProducts();
        const idsDeseados = ['napolitano-100cm', 'ichu-100cm', 'soporte-pizza'];
        const top = idsDeseados.map(id => all.find(p => p.id === id)).filter(Boolean);

        if (top.length === 0) {
            const hornos = all.filter(p => p.tipo === 'horno');
            if (hornos.length) top.push(hornos[0]);
            if (hornos.length > 1) top.push(hornos[1]);
            if (hornos.length > 2) top.push(hornos[2]);
        }

        bestSellersContainer.innerHTML = top.slice(0, 3).map(p => {
            const img = p.imagenes && p.imagenes.length ? p.imagenes[0] : '';
            return `
                            <div class="search-product-item" data-product-id="${p.id}">
                                <div class="item-img">
                                    <img src="${img}" alt="${p.nombre}" />
                                </div>
                                <div class="item-info">
                                    <div class="item-name">${p.nombre}</div>
                                    <div class="item-price">${p.precioStr}</div>
                                </div>
                                <span class="material-symbols-outlined arrow-icon">arrow_forward</span>
                            </div>
                        `;
        }).join('');

        bestSellersContainer.querySelectorAll('[data-product-id]').forEach(el => {
            el.addEventListener('click', function () {
                const id = this.dataset.productId;
                if (id) {
                    cerrarBusqueda();
                    mostrarDetalle(id);
                }
            });
        });
    }

    searchInput.addEventListener('input', function (e) {
        realizarBusqueda(e.target.value);
    });

    renderBestSellers();
    renderFeatured();

    document.querySelectorAll('[data-filtro]').forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const tipo = this.dataset.filtro;
            cerrarBusqueda();
            mostrarVistaPrincipal(false);
            if (tipo === 'hornos') filtroHornos.click();
            else if (tipo === 'accesorios') filtroAccesorios.click();
            const target = document.getElementById('products');
            if (target) {
                const headerHeight = document.querySelector('header')?.offsetHeight || 80;
                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;
                window.scrollTo({ top: targetPosition, behavior: 'smooth' });
            }
        });
    });
})();