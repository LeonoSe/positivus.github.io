export default defineI18nConfig(() => ({
  legacy: false,
  locale: 'ru',
  messages: {
    en: {
      lessons: "Lessons",
      membership: "Membership",
      try: "Try it",
      welcome: "hey, it’s guide to payment systems!",
      "learn-more": "learn more about systems from the engineers who design them 🔥",
      "open-guide": "Get the guide",
      "guide-description": "The guide allows you to select and explore different topics and products. It will also show how different solutions intersect and are used in many products",
      systems: "20+ system design",
      "how-many-lessons": "50+ lessons, 10+ services design and functional solutions",
      "system-list": [
        {title: 'Design FX Rate service', link: 'lessons'},
        {title: 'Design Limiter for financial operations ', link: 'lessons'},
        {title: 'Design Proximity service for nearby ATM', link: 'lessons'},
      ],
      "slider": [
        {title: 'Design FX Rate service', link: 'lessons'},
        {title: 'Design Limiter for financial operations ', link: 'lessons'},
        {title: 'Design Proximity service for nearby ATM', link: 'lessons'},
        {title: 'Double-entry Accounting service', link: 'lessons'},
        {title: 'Design Fee Calculation service', link: 'lessons'},
        {title: 'Design Stock Exchange service', link: 'lessons'},
        {title: 'Design Notification service', link: 'lessons'}
      ],
      "open-lesson": "Open the lesson",
      "open-lessons": "Open lessons",
      "guide-structure": "What's inside the guide?",
      "products-count": "5+ real products",
      "real-products": "Step-by-step we will create following payment products",
      "soon": "Soon",
      accordion: [
        {title: 'Crypto-exchanger',
          description: [
            '<b>How do rates arise and what is spread?</b> - We will learn how to use the order book correctly',
            '<b>How to manage the spread in the product</b> - what algorithms to use, and what is a fixed and stepped spread',
            "<b>Let's design exchanger via P2P networks</b> - and its variants with a subscription to an exchange rate or with a booking of courses",
            '<b>How to build an arbitration system based on exchange rate differences</b> - and what arbitration models exist'
          ]
        },
        {title: 'E-commerce provider',
          description: [
            '<b>Push и Pull payments</b> - recurrent, refund and other payment scenarios',
            '<b>E-commerce payments</b> - online acquiring, payment forms, links or QR codes',
            'Buy now, Pay later (BNPL)',
            'Save now, Buy later (SNBL)',
            'Pay-as-you-drive (PAYD)',
            'Pay-as-you-use (PAYU)'
          ]
        },
        {title: 'Card Provider (Visa, Mastercard)',
          description: [
            '<b>Cross-border payments VISA and Mastercard</b> - three-corner model and four-corner model of interaction',
            '<b>Apple Pay and GooglePay</b> - how they store card and payment data',
            'How <b>dispute and chargeback</b> work in VISA and Mastercard',
            '<b>How to integrate with VISA and Mastercard</b> - how to implement PCI DSS, token service provider (TSP) requirements',
            '<b>3DS secure</b> checks',
          ]
        },
        {title: 'Payment Providers',
          description: [
            'Payment schemes - two-stage, one-stage, real-time credit transfer payments (RTP)',
            'Wallet Management',
            'Currency Rate Management',
            'Payment Providers Management',
            'Risk & Fraud Management',
            'Settlement & Recalculation Management',
            'Billing & Commission Management'
          ]
        },
        {title: 'Banking',
          "": " \n" +
            " - \n" +
            "OpenAPI - \n" +
            " - ",
          description: [
            '<b>SWIFT and cross-banking</b> payment flow',
            '<b>Fast payment systems</b> - SEPA, Target2, FastPayments and others',
            '<b>OpenAPI</b> - how AISP and PISP providers work',
            '<b>Wallet system</b> - how to properly store money in a database and how to manage its movement',
          ]},
      ],
      "about-me": "About me",
      konstantin: "Konstantin Krashenitsa",
      "founder": "Founder",
      "experience-description": "10+ experience in creating and developing payment systems, stock brokers, banking applications, both from the side of system and technical analysis, and from the side of product analytics. I tried to systematize my knowledge in this guide, so join and learn more!👌",
      subscribe: "Subscribe to news",
      copyright: '© 2023 Positivus. All Rights Reserved.'
    },
    ru: {
      lessons: "Lessons",
      membership: "Membership",
      try: "Try it",
      welcome: "хeй, это гид по платежным системам!",
      "learn-more": "узнай больше о системах от инженеров, которые их проектируют 🔥",
      "open-guide": "Открыть гид",
      "guide-description": "Гид позволяет выбрать и исследовать различные темы и направления. А также покажет как разные решения пересекаются и используются во многих продуктах",
      systems: "20+ дизайн систем",
      "how-many-lessons": "50+ уроков, 10+ спроектированных сервисов и функциональных решений",
      "system-list": [
        {title: 'Дизайн FX Rate сервиса', link: 'lessons'},
        {title: 'Дизайн Limiter для финансовых операций', link: 'lessons'},
        {title: 'Дизайн Proximity сервиса для банкоматов', link: 'lessons'},
      ],
      "slider": [
        {title: 'Дизайн FX Rate сервиса', link: 'lessons'},
        {title: 'Дизайн Limiter для финансовых операций', link: 'lessons'},
        {title: 'Дизайн Proximity сервиса для банкоматов', link: 'lessons'},
        {title: 'Дизайн Account с двойной записью', link: 'lessons'},
        {title: 'Дизайн сервиса комиссий', link: 'lessons'},
        {title: 'Дизайн фондовой биржи', link: 'lessons'},
        {title: 'Дизайн сервиса нотификаций', link: 'lessons'}
      ],
      "open-lesson": "Открыть урок",
      "open-lessons": "Открыть уроки",
      "guide-structure": "Из чего состоит гид?",
      "products-count": "5+ реальных продуктов",
      "real-products": "Шаг за шагом создадим  платежные продукты",
      "soon": "Soon",
      accordion: [
        {title: 'Crypto-exchanger',
          description: [
            '<b>Курсы и spread</b> - узнаем, как интегрироваться через биржевый стакан',
            '<b>Как управлять спредом</b> - какие алгоритмы использовать, фиксированный и ступенчатый спред',
            '<b>Спроектируем exchanger через P2P - сети</b> - с подпиской на обменный курс или с бронированием курсов',
            '<b>Спроектируем систему арбитража</b> - и узнаем разные схемы арбитража'
          ]
        },
        {title: 'E-commerce provider',
          description: [
            '<b>Push и Pull платежи</b> - recurrent, refund и другие платежные сценарии',
            '<b>E-commerce платежи</b> - интернет-acquiring, платежные формы, ссылки и QR коды',
            'Buy now, Pay later (BNPL)',
            'Save now, Buy later (SNBL)',
            'Pay-as-you-drive (PAYD)',
            'Pay-as-you-use (PAYU)'
          ]
        },
        {title: 'Card Provider (Visa, Mastercard)',
          description: [
            '<b>Cross-border платежи VISA и Mastercard</b> - three-corner model и four-corner model взаимодействия',
            '<b>ApplePay и GooglePay</b> - как они хранят данные о картах и платежах',
            'Как устроены <b>dispute и chargeback</b> в VISA и Mastercard',
            '<b>Как интегрироваться с VISA и Mastercard</b> - как реализовать требования PCIDSS, token service provider (TSP)',
            '<b>3DS secure</b> проверки',
          ]
        },
        {title: 'Payment Providers',
          description: [
            'Схемы платежей - двухстадийные, одностадийные, real-time credit transfer payments (RTP)',
            'Wallet Management',
            'Currency Rate Management',
            'Payment Providers Management',
            'Risk & Fraud Management',
            'Settlement & Recalculation Management',
            'Billing & Commission Management'
          ]
        },
        {title: 'Banking',
          description: [
            '<b>Система SWIFT</b> и флоу платежей',
            '<b>Система быстрых платежей</b> - SEPA, Target2, FastPayments и другие',
            '<b>OpenAPI</b> - как работают AISP и PISP-провайдеры',
            '<b>Wallet система кошельков</b> - как правильно хранить деньги в базе данных и как управлять их движением',
          ]},
      ],
      "about-me": "Обо мне",
      konstantin: "Константин Крашеница",
      "founder": "Founder",
      "experience-description": "10+ опыта в создании и развитии платежных систем, биржевых брокеров, банковских приложений как со стороны системного и технического анализа, так и со стороны продуктовой аналитики.",
      subscribe: "Subscribe to news",
      copyright: '© 2023 Positivus. All Rights Reserved.'
    }
  }
}))