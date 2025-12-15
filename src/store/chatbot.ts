import { create } from 'zustand';

interface Message {
  id: string;
  type: 'bot' | 'user';
  text: string;
  buttons?: ChatButton[];
  timestamp: Date;
}

interface ChatButton {
  id: string;
  label: string;
  action: string;
}

interface ChatbotState {
  isOpen: boolean;
  messages: Message[];
  isTyping: boolean;
  toggleChat: () => void;
  openChat: () => void;
  closeChat: () => void;
  addMessage: (message: Omit<Message, 'id' | 'timestamp'>) => void;
  clearMessages: () => void;
  setTyping: (isTyping: boolean) => void;
  handleButtonClick: (action: string) => void;
}

const welcomeMessage: Omit<Message, 'id' | 'timestamp'> = {
  type: 'bot',
  text: 'Здравствуйте! 👋 Я помощник Центра «Ариель». Чем могу помочь?',
  buttons: [
    { id: '1', label: '📅 Записаться на приём', action: 'book' },
    { id: '2', label: '💰 Узнать цены', action: 'prices' },
    { id: '3', label: '📍 Как добраться', action: 'location' },
    { id: '4', label: '❓ Задать вопрос', action: 'question' },
  ],
};

const responses: Record<string, Omit<Message, 'id' | 'timestamp'>> = {
  book: {
    type: 'bot',
    text: 'Для записи на приём позвоните по телефону +7 (383) 319-59-55 или напишите на WhatsApp +7 (903) 936-59-55. Что именно вас интересует?',
    buttons: [
      { id: '1', label: 'Диагностика', action: 'book_diagnostic' },
      { id: '2', label: 'Интенсив', action: 'book_intensive' },
      { id: '3', label: 'Консультация', action: 'book_consultation' },
      { id: '4', label: '← Назад', action: 'start' },
    ],
  },
  prices: {
    type: 'bot',
    text: 'Основные цены:\n\n• Диагностический блок — 12 000 ₽\n• Интенсив 4 недели — 210 000 ₽\n• Приём психиатра — 7 000 ₽\n• АВА-терапия (час) — 1 500 ₽\n\nПолный прайс-лист на сайте в разделе "Цены".',
    buttons: [
      { id: '1', label: '📋 Все цены', action: 'all_prices' },
      { id: '2', label: '📅 Записаться', action: 'book' },
      { id: '3', label: '← Назад', action: 'start' },
    ],
  },
  location: {
    type: 'bot',
    text: '📍 Наш адрес:\n\nг. Новосибирск, ул. Первомайская 144/2\n\nФилиал: пр. Карла Маркса 24а\n\nМы работаем:\nПн-Пт: 9:00-17:00\nВс: 10:00-13:00\nСб: выходной',
    buttons: [
      { id: '1', label: '🗺️ Открыть карту', action: 'open_map' },
      { id: '2', label: '📞 Позвонить', action: 'call' },
      { id: '3', label: '← Назад', action: 'start' },
    ],
  },
  question: {
    type: 'bot',
    text: 'Вы можете задать вопрос:\n\n📧 Email: 829892@gmail.com\n📱 WhatsApp: +7 (903) 936-59-55\n\nИли посмотрите раздел FAQ — там ответы на частые вопросы.',
    buttons: [
      { id: '1', label: '❓ Открыть FAQ', action: 'open_faq' },
      { id: '2', label: '📧 Написать email', action: 'email' },
      { id: '3', label: '← Назад', action: 'start' },
    ],
  },
  book_diagnostic: {
    type: 'bot',
    text: 'Диагностический блок включает:\n\n• Консультацию психиатра\n• Консультацию поведенческого аналитика\n• Тестирование VB-MAPP\n• Выдачу заключения\n\nСтоимость: 12 000 ₽\nДлительность: 3 дня\n\nДля записи позвоните: +7 (383) 319-59-55',
    buttons: [
      { id: '1', label: '📞 Позвонить', action: 'call' },
      { id: '2', label: '← Назад', action: 'book' },
    ],
  },
  book_intensive: {
    type: 'bot',
    text: 'Программа Интенсив включает:\n\n• До 100 часов АВА-терапии\n• Консультации психиатра\n• VB-MAPP тестирование\n• АРТ-терапия, АФК\n• Обучение родителей\n\nСтоимость: 210 000 ₽\nДлительность: 4 недели\n\n⚠️ Запись за несколько месяцев!',
    buttons: [
      { id: '1', label: '📞 Позвонить', action: 'call' },
      { id: '2', label: '🏠 О проживании', action: 'housing' },
      { id: '3', label: '← Назад', action: 'book' },
    ],
  },
  book_consultation: {
    type: 'bot',
    text: 'Доступные консультации:\n\n• Психиатр (первичная) — 7 000 ₽\n• Психиатр (повторная) — 5 000 ₽\n• Невролог — 5 000 ₽\n• Психолог — 2 500 ₽\n\nЗапись: +7 (383) 319-59-55',
    buttons: [
      { id: '1', label: '📞 Позвонить', action: 'call' },
      { id: '2', label: '← Назад', action: 'book' },
    ],
  },
  housing: {
    type: 'bot',
    text: 'Для иногородних у нас есть отдел логистики!\n\n🏠 Комфортные квартиры в шаговой доступности\n💰 От 1 500 ₽/сутки\n🕐 Заселение 24/7\n\nЛогист свяжется с вами за месяц до начала программы.',
    buttons: [
      { id: '1', label: '📅 Записаться на интенсив', action: 'book_intensive' },
      { id: '2', label: '← Назад', action: 'book' },
    ],
  },
  start: welcomeMessage,
  all_prices: {
    type: 'bot',
    text: 'Перехожу на страницу цен...',
    buttons: [{ id: '1', label: '← Назад', action: 'start' }],
  },
  open_map: {
    type: 'bot',
    text: 'Открываю карту...',
    buttons: [{ id: '1', label: '← Назад', action: 'start' }],
  },
  open_faq: {
    type: 'bot',
    text: 'Перехожу на страницу FAQ...',
    buttons: [{ id: '1', label: '← Назад', action: 'start' }],
  },
  call: {
    type: 'bot',
    text: 'Звоните: +7 (383) 319-59-55\n\nИли нажмите кнопку ниже.',
    buttons: [
      { id: '1', label: '📞 Позвонить сейчас', action: 'phone_call' },
      { id: '2', label: '← Назад', action: 'start' },
    ],
  },
  email: {
    type: 'bot',
    text: 'Напишите нам: 829892@gmail.com',
    buttons: [
      { id: '1', label: '📧 Открыть почту', action: 'open_email' },
      { id: '2', label: '← Назад', action: 'start' },
    ],
  },
  phone_call: {
    type: 'bot',
    text: 'Набираю номер...',
    buttons: [{ id: '1', label: '← Назад', action: 'start' }],
  },
  open_email: {
    type: 'bot',
    text: 'Открываю почтовый клиент...',
    buttons: [{ id: '1', label: '← Назад', action: 'start' }],
  },
};

export const useChatbotStore = create<ChatbotState>((set, get) => ({
  isOpen: false,
  messages: [],
  isTyping: false,

  toggleChat: () => {
    const { isOpen, messages } = get();
    if (!isOpen && messages.length === 0) {
      // Добавляем приветственное сообщение при первом открытии
      get().addMessage(welcomeMessage);
    }
    set({ isOpen: !isOpen });
  },

  openChat: () => {
    const { messages } = get();
    if (messages.length === 0) {
      get().addMessage(welcomeMessage);
    }
    set({ isOpen: true });
  },

  closeChat: () => set({ isOpen: false }),

  addMessage: (message) => {
    const newMessage: Message = {
      ...message,
      id: Math.random().toString(36).substr(2, 9),
      timestamp: new Date(),
    };
    set((state) => ({
      messages: [...state.messages, newMessage],
    }));
  },

  clearMessages: () => set({ messages: [] }),

  setTyping: (isTyping) => set({ isTyping }),

  handleButtonClick: (action) => {
    const { addMessage, setTyping } = get();

    // Добавляем сообщение пользователя
    const buttonLabel = responses[action]?.buttons?.find(b => b.action === action)?.label || action;
    
    // Специальные действия
    if (action === 'phone_call') {
      window.location.href = 'tel:+73833195955';
      return;
    }
    if (action === 'open_email') {
      window.location.href = 'mailto:829892@gmail.com';
      return;
    }
    if (action === 'all_prices') {
      window.location.href = '/prices';
      return;
    }
    if (action === 'open_map') {
      window.open('https://yandex.ru/maps/-/CDa9qY6L', '_blank');
      return;
    }
    if (action === 'open_faq') {
      window.location.href = '/faq';
      return;
    }

    // Показываем "печатает..."
    setTyping(true);

    // Задержка для реалистичности
    setTimeout(() => {
      setTyping(false);
      const response = responses[action] || responses.start;
      addMessage(response);
    }, 500 + Math.random() * 500);
  },
}));

