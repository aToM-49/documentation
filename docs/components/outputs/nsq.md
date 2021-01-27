---
title: nsq
type: output
status: stable
categories: ["Services"]
---

<!--
     THIS FILE IS AUTOGENERATED!

     To make changes please edit the contents of:
     lib/output/nsq.go
-->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


Publish to an NSQ topic.


<Tabs defaultValue="common" values={[
  { label: 'Common', value: 'common', },
  { label: 'Advanced', value: 'advanced', },
]}>

<TabItem value="common">

```yaml
# Common config fields, showing default values
output:
  nsq:
    nsqd_tcp_address: localhost:4150
    topic: benthos_messages
    user_agent: benthos_producer
    max_in_flight: 1
```

</TabItem>
<TabItem value="advanced">

```yaml
# All config fields, showing default values
output:
  nsq:
    nsqd_tcp_address: localhost:4150
    topic: benthos_messages
    user_agent: benthos_producer
    tls:
      enabled: false
      skip_cert_verify: false
      root_cas_file: ""
      client_certs: []
    max_in_flight: 1
```

</TabItem>
</Tabs>

The `topic` field can be dynamically set using function interpolations
described [here](/docs/configuration/interpolation#bloblang-queries). When sending
batched messages these interpolations are performed per message part.

## Performance

This output benefits from sending multiple messages in flight in parallel for
improved performance. You can tune the max number of in flight messages with the
field `max_in_flight`.

## Fields

### `nsqd_tcp_address`

The address of the target NSQD server.


Type: `string`  
Default: `"localhost:4150"`  

### `topic`

The topic to publish to.
This field supports [interpolation functions](/docs/configuration/interpolation#bloblang-queries).


Type: `string`  
Default: `"benthos_messages"`  

### `user_agent`

A user agent string to connect with.


Type: `string`  
Default: `"benthos_producer"`  

### `tls`

Custom TLS settings can be used to override system defaults.


Type: `object`  

### `tls.enabled`

Whether custom TLS settings are enabled.


Type: `bool`  
Default: `false`  

### `tls.skip_cert_verify`

Whether to skip server side certificate verification.


Type: `bool`  
Default: `false`  

### `tls.root_cas_file`

An optional path of a root certificate authority file to use. This is a file, often with a .pem extension, containing a certificate chain from the parent trusted root certificate, to possible intermediate signing certificates, to the host certificate.


Type: `string`  
Default: `""`  

```yaml
# Examples

root_cas_file: ./root_cas.pem
```

### `tls.client_certs`

A list of client certificates to use. For each certificate either the fields `cert` and `key`, or `cert_file` and `key_file` should be specified, but not both.


Type: `array`  

```yaml
# Examples

client_certs:
  - cert: foo
    key: bar

client_certs:
  - cert_file: ./example.pem
    key_file: ./example.key
```

### `tls.client_certs[].cert`

A plain text certificate to use.


Type: `string`  
Default: `""`  

### `tls.client_certs[].key`

A plain text certificate key to use.


Type: `string`  
Default: `""`  

### `tls.client_certs[].cert_file`

The path to a certificate to use.


Type: `string`  
Default: `""`  

### `tls.client_certs[].key_file`

The path of a certificate key to use.


Type: `string`  
Default: `""`  

### `max_in_flight`

The maximum number of messages to have in flight at a given time. Increase this to improve throughput.


Type: `number`  
Default: `1`  

