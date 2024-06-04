/**
 *
 *  type Contact = {
 *    id: number,
 *    avatar?: string,
 *    name: string,
 *    lastMessage: {
 *      content: string,
 *      time: string,
 *      outgoing?: boolean,
 *    },
 *    unread?: number,
 *    current?: boolean,
 *  }
 *
 */

export const contacts = [
  {
    id: 1,
    avatar: '',
    name: 'Design Destroyer',
    lastMessage: {
      content: 'И Human Interface Guidelines и Material Design рекомендуют...',
      time: 'Пн',
    },
    unread: 0,
  },
  {
    id: 2,
    avatar: '',
    name: 'Илья',
    lastMessage: {
      content: 'Друзья, у меня для вас особенный выпуск новостей!...',
      time: '15:12',
    },
    unread: 7,
  },
  {
    id: 3,
    name: 'Стас Рогозин',
    lastMessage: {
      content: 'Так увлёкся работой по курсу, что совсем забыл его анонсир...',
      time: '1 Мая 2020',
      outgoing: true,
    },
  },
  {
    id: 4,
    avatar: '',
    name: 'Design Destroyer',
    lastMessage: {
      content: 'Круто',
      time: 'Пн',
      outgoing: true,
    },
    unread: 0,
    current: true,
  },
  {
    id: 5,
    avatar: '',
    name: 'Илья',
    lastMessage: {
      content: 'Друзья, у меня для вас особенный выпуск новостей!...',
      time: '15:12',
    },
    unread: 4,
  },
  {
    id: 6,
    name: 'Стас Рогозин',
    lastMessage: {
      content: 'Так увлёкся работой по курсу, что совсем забыл его анонсир...',
      time: '1 Мая 2020',
      outgoing: true,
    },
  },
  {
    id: 7,
    avatar: '',
    name: 'Design Destroyer',
    lastMessage: {
      content: 'И Human Interface Guidelines и Material Design рекомендуют...',
      time: 'Пн',
    },
    unread: 0,
  },
  {
    id: 8,
    avatar: '',
    name: 'Илья',
    lastMessage: {
      content: 'Друзья, у меня для вас особенный выпуск новостей!...',
      time: '15:12',
    },
    unread: 1,
  },
  {
    id: 9,
    name: 'Стас Рогозин',
    lastMessage: {
      content: 'Так увлёкся работой по курсу, что совсем забыл его анонсир...',
      time: '1 Мая 2020',
      outgoing: true,
    },
  },
  {
    id: 10,
    avatar: '',
    name: 'Design Destroyer',
    lastMessage: {
      content: 'И Human Interface Guidelines и Material Design рекомендуют...',
      time: 'Пн',
      outgoing: true,
    },
    unread: 0,
  },
  {
    id: 11,
    avatar: '',
    name: 'Илья',
    lastMessage: {
      content: 'Друзья, у меня для вас особенный выпуск новостей!...',
      time: '15:12',
    },
    unread: 40,
  },
  {
    id: 12,
    name: 'Стас Рогозин',
    lastMessage: {
      content: 'Так увлёкся работой по курсу, что совсем забыл его анонсир...',
      time: '1 Мая 2020',
    },
  },
];
