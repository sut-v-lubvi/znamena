export const dataTests: DataTestType = {
  name: "Тесты на знание крюков",
  tests: [
    {
      id: 1,
      questions: [
        {
          id: 1,
          image: "http://",
          znamya: '<span class="red">â</span>[5<span class="red"> ü</span>',
          question: "Как называется это знамя?",
          correctAnswersIds: [2],
          answers: [
            {
              id: 1,
              label: "Крюк с подвёрткой",
            },
            {
              id: 2,
              label: "Параклит c подвёрткой",
            },
            {
              id: 3,
              label: "Голубчик борзый",
            },
            {
              id: 4,
              label: "Кулизма малая",
            },
          ],
        },
        {
          id: 2,
          image: "http://",
          znamya: "<span class='red'>ìó</span>SJ(2",
          question: "Как называется это знамя?",
          correctAnswersIds: [3],
          answers: [
            {
              id: 1,
              label: "Стрела мрачная с ударкой",
            },
            {
              id: 2,
              label: "Стрела трисветлая с подвёрткой",
            },
            {
              id: 3,
              label: "Стрела светлая с ударкой и задержкой",
            },
            {
              id: 4,
              label: "Стапица с очком",
            },
          ],
        },
        {
          id: 3,
          image: "http://",
          znamya: "<span class='red'>Ö</span>v&",
          question: "Как называется это знамя?",
          correctAnswersIds: [3],
          answers: [
            {
              id: 1,
              label: "Стапица",
            },
            {
              id: 2,
              label: "Запятая светлая",
            },
            {
              id: 3,
              label: "Челюстка",
            },
            {
              id: 4,
              label: "Запятая",
            },
          ],
        },
        {
          id: 4,
          image: "http://",
          znamya: "<span class='red'>Ö</span>v",
          question: "Как называется это знамя?",
          correctAnswersIds: [3],
          answers: [
            {
              id: 1,
              label: "Крыж",
            },
            {
              id: 2,
              label: "Рог",
            },
            {
              id: 3,
              label: "Стопица",
            },
            {
              id: 4,
              label: "Кулизма малая",
            },
          ],
        },
        {
          id: 5,
          image: "http://",
          znamya: "<span class='red'>üâ</span><9",
          question: "Как называется это знамя?",
          correctAnswersIds: [1],
          answers: [
            {
              id: 1,
              label: "Скамейца (ре->ми)",
            },
            {
              id: 2,
              label: "Стрела громогласная",
            },
            {
              id: 3,
              label: "Скамейца",
            },
            {
              id: 4,
              label: "Стрела (ре->ми)",
            },
          ],
        },
        {
          id: 6,
          image: "http://",
          znamya: "<span class='red'>í</span>z'",
          question: "Как называется это знамя?",
          correctAnswersIds: [1],
          answers: [
            {
              id: 1,
              label: "Запятая с крыжом",
            },
            {
              id: 2,
              label: "Запятая с задержкой",
            },
            {
              id: 3,
              label: "Голубчик борзый",
            },
            {
              id: 4,
              label: "Запятая",
            },
          ],
        },
        {
          id: 7,
          image: "http://",
          znamya: "<span class='red'>ï</span>Wa",
          question: "Как называется это знамя?",
          correctAnswersIds: [4],
          answers: [
            {
              id: 1,
              label: "Статья светлая",
            },
            {
              id: 2,
              label: "Стрела светлая",
            },
            {
              id: 3,
              label: "Стрела трисветлая",
            },
            {
              id: 4,
              label: "Статья мрачная",
            },
          ],
        },
        {
          id: 8,
          image: "http://",
          znamya: "<span class='red'>áï</span>q<span class='red'>+</span>DJ",
          question: "Как называется это знамя?",
          correctAnswersIds: [2],
          answers: [
            {
              id: 1,
              label: "Палка",
            },
            {
              id: 2,
              label: "Труба",
            },
            {
              id: 3,
              label: "Статья светлая",
            },
            {
              id: 4,
              label: "Кулизма большая",
            },
          ],
        },
        {
          id: 9,
          image: "http://",
          znamya: "<<span class='red'>+Ð</span>Saô",
          question: "Как называется это знамя?",
          correctAnswersIds: [1],
          answers: [
            {
              id: 1,
              label: "Фотиза",
            },
            {
              id: 2,
              label: "Труба",
            },
            {
              id: 3,
              label: "Статья мрачная",
            },
            {
              id: 4,
              label: "Статья светлая",
            },
          ],
        },
        {
          id: 10,
          image: "http://",
          znamya: "<span class='red'>í</span>h",
          question: "Как называется это знамя?",
          correctAnswersIds: [4],
          answers: [
            {
              id: 1,
              label: "Запятая с запятой",
            },
            {
              id: 2,
              label: "Скамейца",
            },
            {
              id: 3,
              label: "Запятая с задержкой",
            },
            {
              id: 4,
              label: "Хамило",
            },
          ],
        },
      ],
    },
  ],
};

export type AnswerType = {
  id: number;
  label: string;
};

export type QuestionType = {
  id: number;
  image: string;
  znamya: string;
  question: string;
  correctAnswersIds: Array<number>;
  answers: Array<AnswerType>;
};

export type DataTestType = {
  name: string;
  tests: Array<TestType>;
};

export type TestType = {
  id: number;
  questions: Array<QuestionType>;
};
