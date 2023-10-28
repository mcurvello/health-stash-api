import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PatientsModule } from './patients/patients.module';
import { PractitionersModule } from './practitioners/practitioners.module';
import { ConditionModule } from './condition/condition.module';
import { MedicationModule } from './medication/medication.module';
import { AppointmentsModule } from './appointments/appointments.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    PatientsModule,
    PractitionersModule,
    ConditionModule,
    MedicationModule,
    AppointmentsModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
