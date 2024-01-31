# Dia Oracle Price Indexer Squid

## Overview

This project is an implementation of a Squid indexer for Ethereum Virtual Machine (EVM) networks, specifically designed to index and process price data from the DIA Oracle. Utilizing the Squid SDK, this Squid efficiently extracts, transforms, and stores real-time price data, making it easily accessible for applications requiring reliable and up-to-date pricing information.

## Features

- **Price Indexing:** Fetches and indexes price data from the DIA Oracle on EVM-compatible networks.
- **Efficient Data Processing:** Leverages Squid's EVM Batch Processor to handle data in batches, ensuring efficient transformation and storage.
- **Scalable and Robust:** Designed to handle high volumes of data, ensuring scalability and robustness in data processing.
- **Easy Integration:** Provides a streamlined setup for quick integration and deployment.

## Schema

The indexed price data is structured as follows:

```graphql
type PriceData @entity {
  id: ID!
  block: Int!
  txHash: String!
  key: String!
  value: BigInt!
  timestamp: BigInt!
}
```

This schema represents each price data point with a unique ID, the block number, transaction hash, key, value, and timestamp.

## Quickstart

Follow these steps to set up and run the Dia Oracle Price Indexer Squid:

```bash
# Install @subsquid/cli globally
npm i -g @subsquid/cli

# Initialize the Squid project
sqd init my_dia_oracle_squid -t evm
cd my_dia_oracle_squid

# Install dependencies
npm ci

# Build the squid
sqd build

# Start a Postgres database container
sqd up

# Generate database migration
sqd migration:generate

# Run the squid processor
sqd process

# Run the GraphQL server
sqd serve
```

Access the GraphiQL playground at [http://localhost:4350/graphql](http://localhost:4350/graphql) to query the indexed data.

## Development Flow

1. **Define Database Schema:** Start with `schema.graphql` to define the target database schema.
2. **Generate TypeORM Classes:** Run `sqd codegen` to generate entity classes from the schema.
3. **Generate Database Migrations:** Use `sqd migration:generate` to create and apply database migration files.
4. **Import ABI Contract:** Place JSON ABI in `./abi` and run `sqd typegen` to generate interfaces for decoding EVM logs.

## Project Layout

Adhering to Squid's project conventions:

- TypeScript sources in `src`, compiled JS files in `lib`.
- TypeORM classes exported by `src/model/index.ts`.
- Database schema in `schema.graphql`.
- Database migrations in `db/migrations`.
- `.env` file for environment variables.

## Dependencies

- Node.js v16 or newer
- Git
- Docker
