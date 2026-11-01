import { createCn } from "cn/config";

// Teach cn about our custom theme tokens so e.g. `rounded-pill` replaces a
// component's default `rounded-xl` instead of both classes being applied.
// Components in components/ui should import cn from here, not from "cn".
export const cn = createCn({
  extend: { theme: { radius: ["pill"] } },
});
