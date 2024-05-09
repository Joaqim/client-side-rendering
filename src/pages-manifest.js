export default [
  {
    chunk: 'home',
    path: '/',
    title: 'Home'
  },
  {
    chunk: 'lorem-ipsum',
    path: '/lorem-ipsum',
    title: 'Lorem Ipsum',
    data: [
      {
        url: 'https://csr.joaqim.com/json/lorem-ipsum.json',
        crossorigin: 'anonymous'
      }
    ]
  }
]
