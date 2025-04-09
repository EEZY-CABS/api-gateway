import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MulterModule } from '@nestjs/platform-express';
import { AccountsModule } from './modules/accounts/accounts.module';
import { RidesModule } from './modules/rides/rides.module';
import { NavigationModule } from './modules/navigation/navigation.module';
import { ReportsModule } from './modules/reports/reports.module';

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: '.env', isGlobal: true }),
    MulterModule.register({
      limits: {
        fileSize: 5 * 1024 * 1024,
      },
      fileFilter: (req, file, cb) => {
        if (!file.originalname.match(/\.(jpg|jpeg|png)$/)) {
          return cb(new Error('Only image files are allowed!'), false);
        }
        cb(null, true);
      },
    }),
    AccountsModule,
    RidesModule,
    NavigationModule,
    ReportsModule,
  ],
  providers: [],
})
export class AppModule {}
