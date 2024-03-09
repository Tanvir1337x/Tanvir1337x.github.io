## About

(W.I.P) My minimal site.

## Note

The site currently serves [snowflake](https://snowflake.torproject.org). It's mechanism is simply described below:

```mermaid
graph TD
    Client[Client] -- domain-frontend offer --> Broker[Broker] -- answer --> Client -- WebRTC --> Snowflake
    Broker -- answer --> Snowflake(Snowflake Proxy) -- offer --> Broker
    Snowflake --> Bridge(Bridge) --> Destination
```
