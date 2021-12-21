export async function handleRequest(request: Request): Promise<Response> {
  switch (request.method) {
    case 'GET':
      return handleGet(request)
    case 'POST':
      return handlePost(request)
    default:
      return new Response('Invalid request', { status: 501 })
  }
}

async function handleGet(request: Request): Promise<Response> {
  const keys_lst = await WP_NSPACE.list()
  const keys = keys_lst.keys
  let posts: string[] = []
  for (const elem of keys) {
    const val: string | null = await WP_NSPACE.get(elem.name)
    if (val === null) {
      return new Response("Key not found", {status: 404})
    }
    posts.push(val)
  }
  return new Response(posts.toString(), {status: 200})
}

async function handlePost(request: Request): Promise<Response> {
  const jsObj: any = await request.json()
  await WP_NSPACE.put(Math.random().toString(16).substring(2, 8), JSON.stringify(jsObj))
  return new Response("success", {status: 200})
}
