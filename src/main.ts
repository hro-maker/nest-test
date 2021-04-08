import { NestFactory } from '@nestjs/core';
import * as dotenv from 'dotenv'
import { AppModule } from './app.module';
dotenv.config()
async function bootstrap() {
  try {
    const PORT=process.env.PORT || 7000
    const app = await NestFactory.create(AppModule);
    await app.listen(PORT,()=>console.log(`app startet on port ${PORT}`));
  } catch (error) {
        console.log(error.message)
  }
 
}
bootstrap();
