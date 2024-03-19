export const url = "https://avcloud.directus.app";
import { createDirectus, rest } from "@directus/sdk";

function getDirectusInstance(fetch: any = null) {
  const options = fetch ? { globals: { fetch } } : {};
  const directus = createDirectus(url, options).with(rest());
  return directus;
}

export default getDirectusInstance;

export const client = getDirectusInstance();
