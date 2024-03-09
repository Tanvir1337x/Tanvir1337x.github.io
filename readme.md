## About

(W.I.P) My minimal site.

## Note

The site currently serves [snowflake](https://snowflake.torproject.org). It's mechanism is simply described below:

```mermaid
graph TD
    Client[Client] -- domain-fronting offer --> Broker[Broker] -- answer --> Client
    Client -- WebRTC --> Snowflake(Snowflake Proxy)
    Broker -- answer --> Snowflake
    Snowflake -- offer --> Broker
    Snowflake --> Bridge(Bridge) --> Destination
```
NB: The diagram provides a simplified overview of the Snowflake architecture. The actual communication involves more complex interactions, but the diagram captures the main components and their connections.
