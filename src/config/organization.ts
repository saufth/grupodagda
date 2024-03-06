import { Article, Section, type SiteConfig } from '@/types'
import { siteConfig } from './site'

export const slogan = siteConfig.description

export const services: Omit<SiteConfig, 'mainNav'>[] = [
  {
    name: 'Rehsok',
    description: 'Creamos posibilidades para empresas orientadas a desarrollar un legado de progreso generacional',
    url: 'https://rehsok.com',
    author: siteConfig.author
  },
  {
    name: 'Emah',
    description: 'Impulsamos empresas a desarrollar propuestas de alto valor agregado para sus clientes a fin de crear una diferenciación real en el mercado',
    url: 'https://emah.mx',
    author: siteConfig.author
  },
  {
    name: 'Keyperspot',
    description: 'Potenciamos el factor humano a través de soluciones tecnológicas, con el principal objetivo de transformarlo en un verdadero activo empresarial',
    url: 'https://keyperspot.com',
    author: siteConfig.author
  },
  {
    name: 'Taxo Contable',
    description: 'Ordenamos la información de las empresas, generando valor en las áreas contables, fiscales y estrategias de modelos de negocios',
    url: 'https://taxocontable.com',
    author: siteConfig.author
  },
  {
    name: 'Sercius',
    description: 'Ayudamos a las empresas a cumplir con las leyes y regulaciones, mitigar riesgos y resolver asuntos legales que puedan surgir en el curso de sus operaciones comerciales',
    url: 'https://sercius.mx',
    author: siteConfig.author
  },
  {
    name: 'TechGeeks',
    description: 'Desarrollamos soluciones de seguridad tecnológica que impulsen el crecimiento, mejoren la eficiencia operativa y aumenten la rentabilidad de las empresas',
    url: 'https://techgeeks.mx',
    author: siteConfig.author
  }
]

export const culture: Section = {
  title: 'Corporativo de servicios empresariales',
  description: ['El éxito a corto, mediano y largo plazo de cualquier empresa, no depende de un solo aspecto, sino de la sincronización de muchos.',
    'Aquí te presentamos los más importantes para nosotros, mismos que forman parte de nuestro ADN y que son la clave en la generación de soluciones de valor para nuestros clientes'
  ],
  items: [
    {
      title: 'Trabajamos en equipo',
      description: [
        'Los negocios son opuestos a las matemáticas. Mientras las matemáticas plantean que la mejor forma de sumar es multiplicar, en los negocios la mejor forma de sumar es dividir. Dividir el esfuerzo, el trabajo, las tareas y hasta los ingresos.',
        'Más allá de querer ser un experto en todas las áreas de una empresa o negocio, busca rodearte de un equipo de expertos que complemente correctamente las habilidades y conocimientos que no tienes.'
      ],
      image: {
        src: '/images/culture1.webp',
        alt: 'Equipo de jóvenes adultos profecionales trabajando en grupo en la mesa de una oficina moderna con a una laptop y revisando documentos',
        width: 1920,
        height: 1080
      }
    },
    {
      title: 'Transformamos problemas en oportunidades',
      description: [
        'Problemas = áreas de oportunidad.',
        'Mientras más grande y frecuente sea el problema, mayor será la posibilidad de generar valor.'
      ],
      image: {
        src: '/images/culture2.webp',
        alt: 'Joven adulto sentado con un estilo fresco y elegante en el lobby de una oficina estrechando la mano de alguien que se encuentra de espaldas cerrando un trato en una reunión de negocios',
        width: 1920,
        height: 1080
      }
    },
    {
      title: 'No asumimos',
      description: [
        'Se debe tener certeza en cada tarea u objetivo a realizar. Nunca asumir, en caso de no tener plena certeza.',
        'Evitar el retrabajo dando indicaciones claras asegura que las cosas se hagan bien a la primera.',
        'Cualquier duda, pregunta o sugerencia de nuestros clientes y colaboradores es siempre bienvenida.'
      ],
      image: {
        src: '/images/culture3.webp',
        alt: 'Tres ejecutivos profesionales trabajan en equipo que miran una computadora portátil analizando datos de banca financiera digital y gestión corporativa trabajando en la oficina en una reunión de grupo',
        width: 1920,
        height: 1080
      }
    },
    {
      title: 'Planeamos y ejecutamos con estrategia',
      description: [
        'Se debe analizar y elegir con mucho cuidado la mejor forma de llegar del punto A (en donde estamos) al punto B (a donde se quiere llegar).',
        'Administramos con eficiencia los recursos disponibles.',
        'Siempre hay una forma óptima o mejor de hacer las cosas.'
      ],
      image: {
        src: '/images/culture4.webp',
        alt: 'Equipo de jóvenes adultos profesionales trabajando en grupo desarrollando una estrategia en la mesa de una oficina moderna y discutiendo de posibles soluciones',
        width: 1920,
        height: 1080
      }
    },
    {
      title: 'Prevemos futuras tendencias',
      description: [
        'Saber prever o anticipar cuándo entrar y salir de cualquier oportunidad de negocio. Nada es eterno; todo tiene un ciclo, un punto alto y un punto bajo.',
        'Lo único constante es el cambio.'
      ],
      image: {
        src: '/images/culture5.webp',
        alt: 'Equipo de jóvenes adultos profesionales frente a una mesa en una oficina moderna analizando estudios de mercado',
        width: 1920,
        height: 1080
      }
    },
    {
      title: 'Innovamos constantemente',
      description: [
        'Lo importante es generar innovación alrededor de lo que el cliente considera valioso.',
        'Para lograr generar innovaciones de valor, es imperativo conocer al cliente, a la competencia, al mercado y a ti mismo como organización.'
      ],
      image: {
        src: '/images/culture6.webp',
        alt: 'Equipo de jóvenes adultos profesionales parados frente a una mesa en una oficina moderna desarrolando nuevas soluciones de negocios',
        width: 1920,
        height: 1080
      }
    },
    {
      title: 'Buscamos progreso, no perfección',
      description: [
        'El mundo de los negocios es un juego infinito en el que no se tiene una certeza plena de todos los elementos que participan en el mercado, ni de la variabilidad de estos. A lo máximo que se puede aspirar es a tener estimaciones.',
        '¿Qué sí está en nuestro control?',
        'El generar una cultura de progreso constante dentro de nuestra organización; aspirar a ser mejores cada día con relación a nuestras propias métricas e inspirar el cambio en esta cultura de progreso en cada rincón de la organización.'
      ],
      image: {
        src: '/images/culture7.webp',
        alt: 'Hombres confiados dándose la mano y sonriendo mientras están sentados en el escritorio de la oficina moderna',
        width: 1920,
        height: 1080
      }
    }
  ]
}

export const history: Article = {
  title: 'Nuestra razón de ser',
  items: [
    'En el año 2020, un equipo de visionarios empresariales se reunió con una misión ambiciosa en mente: transformar el panorama empresarial ofreciendo servicios integrales y de alta calidad que abarcaran todos los aspectos esenciales para el éxito empresarial. Así nació Grupo Dagda, un corporativo de servicios diseñado para satisfacer las necesidades de las empresas en todas las etapas de su crecimiento.',
    'Desde sus primeros días, Grupo Dagda se destacó por su enfoque innovador y su compromiso inquebrantable con la excelencia en cada aspecto de su operación. Los fundadores comprendieron que, para construir un negocio sólido y duradero, era necesario contar con pilares fundamentales sólidos que sustentaran todas las facetas de la empresa. Estos pilares se convirtieron en los cimientos de Grupo Dagda: Contabilidad y Finanzas, Marketing y Ventas, Derecho Legal, Sistemas y Tecnología, y Recursos Humanos.',
    'En el corazón de Grupo Dagda se encuentra el pilar de Contabilidad y Finanzas, donde expertos en números y estrategas financieros trabajan incansablemente para garantizar la estabilidad y el crecimiento financiero de cada cliente. Ya sea mediante la optimización de presupuestos, la gestión de activos o el asesoramiento en inversiones, este equipo está comprometido con el éxito económico de sus clientes.',
    'El segundo pilar, Marketing y Ventas, es el motor que impulsa el crecimiento y la expansión de las empresas asociadas con Grupo Dagda. Aquí, estrategas creativos y profesionales de ventas innovadores colaboran para desarrollar campañas efectivas, construir marcas sólidas y conectar con audiencias clave en el mercado.',
    'El departamento de Derecho Legal se erige como el guardián de la integridad y la conformidad legal de cada cliente. Abogados expertos ofrecen orientación y asesoramiento jurídico en una amplia gama de áreas, desde contratos comerciales hasta propiedad intelectual, garantizando que cada paso que den las empresas esté respaldado por una base legal sólida.',
    'El equipo de Sistemas y Tecnología proporciona soluciones tecnológicas innovadoras y personalizadas que mejoran la eficiencia operativa y la productividad de los clientes. Desde sistemas de gestión empresarial hasta soluciones de seguridad cibernética, este pilar asegura que las empresas estén equipadas con las herramientas necesarias para competir en la era digital.',
    'Finalmente, el pilar de Recursos Humanos se dedica a cultivar talento y fomentar un ambiente laboral positivo y productivo. Desde la contratación y capacitación hasta el desarrollo del liderazgo y la gestión del desempeño, este equipo se compromete a impulsar el crecimiento personal y profesional de cada individuo dentro de las organizaciones asociadas.',
    'Con una combinación única de experiencia, visión y compromiso, Grupo Dagda se ha convertido en un líder reconocido en  los servicios empresariales. A medida que avanza hacia el futuro, sigue comprometido con su misión de proporcionar soluciones integrales y personalizadas que impulsen el éxito y el crecimiento sostenible de cada cliente.'
  ]
}
