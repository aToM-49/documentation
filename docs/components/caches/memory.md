---
title: memory
type: cache
status: stable
---

<!--
     THIS FILE IS AUTOGENERATED!

     To make changes please edit the contents of:
     lib/cache/memory.go
-->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


Stores key/value pairs in a map held in memory. This cache is therefore reset
every time the service restarts. Each item in the cache has a TTL set from the
moment it was last edited, after which it will be removed during the next
compaction.


<Tabs defaultValue="common" values={[
  { label: 'Common', value: 'common', },
  { label: 'Advanced', value: 'advanced', },
]}>

<TabItem value="common">

```yaml
# Common config fields, showing default values
memory:
  ttl: 300
  compaction_interval: 60s
  init_values: {}
```

</TabItem>
<TabItem value="advanced">

```yaml
# All config fields, showing default values
memory:
  ttl: 300
  compaction_interval: 60s
  shards: 1
  init_values: {}
```

</TabItem>
</Tabs>

A compaction only occurs during a write where the time since the last compaction
is above the compaction interval. It is therefore possible to obtain values of
keys that have expired between compactions.

The field `init_values` can be used to prepopulate the memory cache
with any number of key/value pairs which are exempt from TTLs:

```yaml
memory:
  ttl: 60
  init_values:
    foo: bar
```

These values can be overridden during execution, at which point the configured
TTL is respected as usual.

## Fields

### `ttl`

The TTL of each item in seconds. After this period an item will be eligible for removal during the next compaction.


Type: `number`  
Default: `300`  

### `compaction_interval`

The period of time to wait before each compaction, at which point expired items are removed.


Type: `string`  
Default: `"60s"`  

### `shards`

A number of logical shards to spread keys across, increasing the shards can have a performance benefit when processing a large number of keys.


Type: `number`  
Default: `1`  

### `init_values`

A table of key/value pairs that should be present in the cache on initialization. This can be used to create static lookup tables.


Type: `object`  
Default: `{}`  

```yaml
# Examples

init_values:
  Nickelback: "1995"
  Spice Girls: "1994"
  The Human League: "1977"
```

