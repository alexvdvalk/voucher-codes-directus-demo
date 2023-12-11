export const url = "https://voucher-codes-alex.directus.app/";
import {
  createDirectus,
  readCollections,
  rest,
  staticToken,
} from "@directus/sdk";

export const client = createDirectus(url).with(rest());
