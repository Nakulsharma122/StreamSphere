import OpenAI from 'openai';
import { OPENAI_KEY } from './constants';

const openai = new OpenAI({
  baseURL: 'https://models.inference.ai.azure.com',
  apiKey: OPENAI_KEY, 
  dangerouslyAllowBrowser: true
});



export default openai;
