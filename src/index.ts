import { handleRequest } from './handler'

addEventListener('fetch', (event: FetchEvent) => {
  event.respondWith(handleRequest(event.request))
  // const post = { title: 'frick', username: 'bryan', content: 'hello there' }
  // handleRequest(
  //   new Request('/', { method: 'POST', body: JSON.stringify(post) }),
  // )

  // event.respondWith(handleRequest(new Request('/', { method: 'GET' })))
})
