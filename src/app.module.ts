import { Module } from '@nestjs/common';
import { BookModule } from './book/book.module';
import { ConfigModule } from '@nestjs/config';


@Module({
  imports: [BookModule,
  ConfigModule.forRoot({
    isGlobal : true,
    envFilePath : [".env"]

  })
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
// 
