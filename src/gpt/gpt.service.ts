import { Injectable } from '@nestjs/common';
import { orthographyCheckUseCase } from './use-cases';
import { OrthographyDto } from './dtos';
import OpenAI from 'openai';

@Injectable()
export class GptService {

   private openai = new OpenAI({
    apiKey: process.env.OPEN_API_KEY,
   })


  // Casos de Uso
 async orthographyCheck(orthographyDto: OrthographyDto){
    return await orthographyCheckUseCase( this.openai, {
      prompt: orthographyDto.prompt
    
    });
 }


}
