export async function handleRequest(request: Request): Promise<Response> {
  switch (request.method) {
    case "GET":
      return handleGet(request);
    case "POST":
      return handlePost(request);
  }
  return new Response("Invalid request", {status: 501});
}

declare const WP_NSPACE: KVNamespace;

async function handleGet(request: Request): Promise<Response> {
  const key: string = await request.text();
  const value: string | null = await WP_NSPACE.get(key);
  if (value === null) {
    return new Response("Key not found", {status: 404});
  }
  return new Response(value);
}
