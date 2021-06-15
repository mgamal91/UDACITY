/* put photos inside the public folder>> users */
import userImg1 from '../media/users/donghae.png'
import userImg2 from '../media/users/hyuk.jpg'
import userImg3 from '../media/users/kyu.png'
import userImg4 from '../media/users/helen.jpg'
let users = {
  hae: {
    id: 'hae',
    name: 'Donghae',
    avatarURL: userImg1,
    /* avatarURL: "users/donghae.png", */
    answers: {
      "8xf0y6ziyjabvozdd253nd": 'optionOne',
      "6ni6ok3ym7mf1p33lnez": 'optionTwo',
      "am8ehyc8byjqgar0jgpub9": 'optionTwo',
      "loxhs1bqm25b708cmbf3g": 'optionTwo'
    },
    questions: ['8xf0y6ziyjabvozdd253nd', 'am8ehyc8byjqgar0jgpub9']
  },
  hyuk: {
    id: 'hyuk',
    name: 'Eunhyuk',
    /* avatarURL: "https://tylermcginnis.com/would-you-rather/tyler.jpg", */
    avatarURL: userImg2,
    answers: {
      "vthrdm985a262al8qx3do": 'optionOne',
      "xj352vofupe1dqz9emx13r": 'optionTwo',
    },
    questions: ['loxhs1bqm25b708cmbf3g', 'vthrdm985a262al8qx3do'],
  },
  kyu: {
    id: 'kyu',
    name: 'Kyuhyun',
    /* avatarURL: "https://tylermcginnis.com/would-you-rather/tyler.jpg", */
    avatarURL: userImg3,
    answers: {
      "xj352vofupe1dqz9emx13r": 'optionOne',
      "vthrdm985a262al8qx3do": 'optionTwo',
      "6ni6ok3ym7mf1p33lnez": 'optionTwo'
    },
    questions: ['6ni6ok3ym7mf1p33lnez', 'xj352vofupe1dqz9emx13r'],
  },
  miada: {
    id: 'miada',
    name: 'Miada',
    /* avatarURL: "https://tylermcginnis.com/would-you-rather/tyler.jpg", */
    avatarURL: userImg4,
    answers: {
     
    },
    questions: [],
  },
}

let questions = {
  "8xf0y6ziyjabvozdd253nd": {
    id: '8xf0y6ziyjabvozdd253nd',
    author: 'hae',
    timestamp: 1467166872634,
    optionOne: {
      votes: ['hae'],
      text: 'have horrible short term memory',
    },
    optionTwo: {
      votes: [],
      text: 'have horrible long term memory'
    }
  },
  "6ni6ok3ym7mf1p33lnez": {
    id: '6ni6ok3ym7mf1p33lnez',
    author: 'kyu',
    timestamp: 1468479767190,
    optionOne: {
      votes: [],
      text: 'become a superhero',
    },
    optionTwo: {
      votes: ['kyu', 'hae'],
      text: 'become a supervillain'
    }
  },
  "am8ehyc8byjqgar0jgpub9": {
    id: 'am8ehyc8byjqgar0jgpub9',
    author: 'hae',
    timestamp: 1488579767190,
    optionOne: {
      votes: [],
      text: 'be telekinetic',
    },
    optionTwo: {
      votes: ['hae'],
      text: 'be telepathic'
    }
  },
  "loxhs1bqm25b708cmbf3g": {
    id: 'loxhs1bqm25b708cmbf3g',
    author: 'hyuk',
    timestamp: 1482579767190,
    optionOne: {
      votes: [],
      text: 'be a front-end developer',
    },
    optionTwo: {
      votes: ['hae'],
      text: 'be a back-end developer'
    }
  },
  "vthrdm985a262al8qx3do": {
    id: 'vthrdm985a262al8qx3do',
    author: 'hyuk',
    timestamp: 1489579767190,
    optionOne: {
      votes: ['hyuk'],
      text: 'find $50 yourself',
    },
    optionTwo: {
      votes: ['kyu'],
      text: 'have your best friend find $500'
    }
  },
  "xj352vofupe1dqz9emx13r": {
    id: 'xj352vofupe1dqz9emx13r',
    author: 'kyu',
    timestamp: 1493579767190,
    optionOne: {
      votes: ['kyu'],
      text: 'write JavaScript',
    },
    optionTwo: {
      votes: ['hyuk'],
      text: 'write Swift'
    }
  },
}

function generateUID () {
  //my add to start with an a 
  const miada=0;
  const myReturn=Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
  //original
  //return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
  return miada+myReturn;
}

export function _getUsers () {
  return new Promise((res, rej) => {
    setTimeout(() => res({...users}), 1000)
  })
}

export function _getQuestions () {
  return new Promise((res, rej) => {
    setTimeout(() => res({...questions}), 1000)
  })
}

function formatQuestion ({ optionOneText, optionTwoText, author }) {
  return {
    id: generateUID(),
    timestamp: Date.now(),
    author,
    optionOne: {
      votes: [],
      text: optionOneText,
    },
    optionTwo: {
      votes: [],
      text: optionTwoText,
    }
  }
}

export function _saveQuestion (question) {
  return new Promise((res, rej) => {
    const authedUser = question.author;
    const formattedQuestion = formatQuestion(question);

    setTimeout(() => {
      questions = {
        ...questions,
        [formattedQuestion.id]: formattedQuestion
      }
      
      users = {
        ...users,
        [authedUser]: {
          ...users[authedUser],
          questions: users[authedUser].questions.concat([formattedQuestion.id])
        }
      }

      res(formattedQuestion)
    }, 1000)
  })
}

export function _saveQuestionAnswer ({ authedUser, qid, answer }) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      users = {
        ...users,
        [authedUser]: {
          ...users[authedUser],
          answers: {
            ...users[authedUser].answers,
            [qid]: answer
          }
        }
      }

      questions = {
        ...questions,
        [qid]: {
          ...questions[qid],
          [answer]: {
            ...questions[qid][answer],
            votes: questions[qid][answer].votes.concat([authedUser])
          }
        }
      }

      res()
    }, 500)
  })
}
/* Old data */
/* sarahedo: {
  id: 'sarahedo',
  name: 'Sarah Edo',
  avatarURL: "https://tylermcginnis.com/would-you-rather/sarah.jpg",
  answers: {
    "8xf0y6ziyjabvozdd253nd": 'optionOne',
    "6ni6ok3ym7mf1p33lnez": 'optionTwo',
    "am8ehyc8byjqgar0jgpub9": 'optionTwo',
    "loxhs1bqm25b708cmbf3g": 'optionTwo'
  },
  questions: ['8xf0y6ziyjabvozdd253nd', 'am8ehyc8byjqgar0jgpub9']
},
tylermcginnis: {
  id: 'tylermcginnis',
  name: 'Tyler McGinnis',
  avatarURL: "https://tylermcginnis.com/would-you-rather/tyler.jpg",
  answers: {
    "vthrdm985a262al8qx3do": 'optionOne',
    "xj352vofupe1dqz9emx13r": 'optionTwo',
  },
  questions: ['loxhs1bqm25b708cmbf3g', 'vthrdm985a262al8qx3do'],
},
johndoe: {
  id: 'johndoe',
  name: 'John Doe',
  avatarURL: "https://tylermcginnis.com/would-you-rather/dan.jpg",
  answers: {
    "xj352vofupe1dqz9emx13r": 'optionOne',
    "vthrdm985a262al8qx3do": 'optionTwo',
    "6ni6ok3ym7mf1p33lnez": 'optionTwo'
  },
  questions: ['6ni6ok3ym7mf1p33lnez', 'xj352vofupe1dqz9emx13r'],
}, */

/* EXTRA from Chirper APP() */
/* export function _saveLikeToggle ({ id, hasLiked, authedUser }) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      tweets = {
        ...tweets,
        [id]: {
          ...tweets[id],
          likes: hasLiked === true
            ? tweets[id].likes.filter((uid) => uid !== authedUser)
            : tweets[id].likes.concat([authedUser])
        }
      }

      res()
    }, 500)
  })
} */