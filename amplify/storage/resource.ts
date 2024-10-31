import { defineStorage } from "@aws-amplify/backend";

export const storage = defineStorage({
  name: "storage-browser-test",
  access: (allow: any) => ({
    "intraop-images/*": [allow.authenticated.to(["read"])],
  }),
});
