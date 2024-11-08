# About

My minimal site, still a work in progress.

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/TanvirOnGH/tanvirongh.github.io)

## Note

The site currently serves [snowflake](https://snowflake.torproject.org). It's mechanism is simply described below:

```mermaid
graph TD
    subgraph Internet
        Client[Client] -- WebRTC (bidirectional) --> Snowflake(Snowflake Proxy)
    end

    subgraph Snowflake Network
        Snowflake -- WebRTC (offer/answer) --> Broker(Broker)
        Broker -- WebRTC (answer/offer) --> Snowflake
        Snowflake -- WebRTC --> Bridge(Tor Bridge)
        Bridge -- Tor --> Destination(Destination)
    end

    Client -- domain-fronted HTTPS --> Broker
```

The diagram provides a simplified overview of the Snowflake architecture. The actual communication involves more complex interactions, but the diagram captures the main components and their connections.
