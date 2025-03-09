# My Mastra App

## Description

My Mastra App is a project that integrates AI models using the Mastra framework. It utilizes OpenAI and Google Generative AI SDKs to provide advanced AI functionalities.

## Installation

To install the necessary dependencies, run the following command:

```bash
pnpm install
```

## Usage

```bash
pnpm run dev 
```

## Environment Variables
Ensure you have the following environment variables set in your .env file:

```bash
OPENAI_API_KEY=your-api-key
GOOGLE_GENERATIVE_AI_API_KEY=your-api-key
```

Replace your-api-key with your actual API keys.

## Script

- dev : Starts the development server using Mastra.

## Dependencies

- @ai-sdk/google : Integration with Google Generative AI.
- @ai-sdk/openai : Integration with OpenAI models.
- @mastra/core : Core functionalities of the Mastra framework.
- mastra : Mastra framework.
- zod : Schema validation library.

## DevDependencies

- @types/node : Type definitions for Node.js.
- tsx : TypeScript execution engine.
- typescript : TypeScript language support.
