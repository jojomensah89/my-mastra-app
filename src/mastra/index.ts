
import { Mastra } from '@mastra/core/mastra';
import { createLogger } from '@mastra/core/logger';
import { weatherWorkflow } from './workflows';
import { weatherAgent } from './agents';
import { blogWorkflow } from './workflows/blog';
import { editorAgent } from './agents/editor';
import { copywriterAgent } from './agents/copy-writer';
import { codeGeneratorAgent } from './agents/dev/code-generator';
import { codeReviewerAgent } from './agents/dev/code-reviewer';

export const mastra = new Mastra({
  workflows: { weatherWorkflow ,blogWorkflow},
  agents: { weatherAgent,copywriterAgent ,editorAgent,codeGeneratorAgent,codeReviewerAgent},
  logger: createLogger({
    name: 'Mastra',
    level: 'info',
  }),
});
