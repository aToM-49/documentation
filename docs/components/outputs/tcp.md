---
title: tcp
type: output
status: deprecated
---

<!--
     THIS FILE IS AUTOGENERATED!

     To make changes please edit the contents of:
     lib/output/tcp.go
-->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

:::warning DEPRECATED
This component is deprecated and will be removed in the next major version release. Please consider moving onto [alternative components](#alternatives).
:::

```yaml
# Config fields, showing default values
output:
  tcp:
    address: localhost:4194
```

Sends messages as a continuous stream of line delimited data over TCP by
connecting to a server.

If batched messages are sent the final message of the batch will be followed by
two line breaks in order to indicate the end of the batch.

