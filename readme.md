# About

My minimal site, still a work in progress.

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/TanvirOnGH/tanvirongh.github.io)

## Note

The site currently serves [snowflake](https://snowflake.torproject.org). It's mechanism is simply described below:

```mermaid
graph TD
    subgraph Internet
        Client[Client] -- WebRTC --> Snowflake(Snowflake Proxy)
    end

    subgraph Snowflake Network
        Snowflake -- offer --> Broker(Broker)
        Broker -- answer --> Snowflake
        Snowflake -- WebRTC --> Bridge(Bridge)
        Bridge -- Tor --> Destination(Destination)
    end

    Client -- domain-fronting offer --> Broker
    Broker -- answer --> Client
```

The diagram provides a simplified overview of the Snowflake architecture. The actual communication involves more complex interactions, but the diagram captures the main components and their connections.
