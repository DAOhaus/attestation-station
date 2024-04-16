type HttpMethod = "GET" | "POST";

export async function request<T>(
  url: string,
  method: HttpMethod = "GET",
  headers: Record<string, string> = {},
  body?: Object,
): Promise<T> {
  const options: RequestInit = {
    method,
    headers: {
      "Content-Type": "application/json",
      ...headers,
    },
    body: body ? JSON.stringify(body) : undefined,
  };

  const response = await fetch(url, options);
  if (!response.ok) {
    throw new Error(`Error fetching data from ${url}: ${response.statusText}`);
  }

  return (await response.json()) as T;
}
