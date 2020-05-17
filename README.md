# lifeson-ipsum
Lorem Ipsum sample Deno Module.

Based on Alex Lifeson's acceptance speech here:

https://www.youtube.com/watch?v=TKuO1FpCWRI

Usage:

```typescript
import { getParagraph } from "https://raw.githubusercontent.com/snerks/lifeson-ipsum/master/mod.ts";

for (let index = 0; index < 5; index++) {
  console.log(getParagraph(index + 1));
}
```
